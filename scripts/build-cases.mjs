import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const check = process.argv.includes('--check');
const source = await readFile(new URL('studio.js', root), 'utf8');
const boundary = source.indexOf('\nlet currentLanguage =');
assert(boundary > 0, 'Could not locate the end of the shared case data.');

// Reuse the browser's copy and gallery data without running any DOM code.
const { caseStudySlugs, caseStudies, galleries, translations } = vm.runInNewContext(
  source.slice(0, boundary) + '\n({ caseStudySlugs, caseStudies, galleries, translations });',
  {},
  { timeout: 1000 },
);
const template = await readFile(new URL('scripts/case-template.html', root), 'utf8');
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]));
const assetPath = (path) => /^(https?:|\.\.\/)/.test(path) ? path : `../${path.replace(/^\.\//, '')}`;
let changed = 0;

for (const slug of caseStudySlugs) {
  assert.match(slug, /^[a-z0-9-]+$/);
  const study = caseStudies[slug];
  const copy = study.en;
  const ui = translations.en.caseStudyUi;
  const gallery = galleries[study.galleryKey];
  let html = template.replaceAll('{{SLUG}}', slug);

  // The template contains empty slots; generated files are never used as input.
  function fill(attribute, content) {
    const pattern = new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\s${attribute}(?=[\\s>])[^>]*>)[\\s\\S]*?(<\\/\\2>)`, 'g');
    let matches = 0;
    html = html.replace(pattern, (_, start, tag, end) => {
      matches += 1;
      return start + content + end;
    });
    assert(matches > 0, `Missing ${attribute} slot in ${slug}`);
  }

  const title = `${copy.pageTitle} – LocalMind Studio`;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*("\s*\/>)/g,
    (_, start, end) => start + escapeHtml(copy.lead) + end);
  html = html.replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/,
    (_, start, end) => start + escapeHtml(title) + end);

  const slots = {
    'data-case-home': ui.home,
    'data-case-list': ui.cases,
    'data-case-breadcrumb-current': copy.pageTitle,
    'data-case-title': copy.pageTitle,
    'data-case-lead': copy.lead,
    'data-case-task': copy.task,
    'data-case-solution': copy.solution,
    'data-case-niche': copy.niche,
    'data-case-duration': copy.duration,
    'data-case-showcase-tag': copy.showcase.tag,
    'data-case-showcase-title': copy.showcase.title,
    'data-case-result-title': copy.result.title,
    'data-case-result-body': copy.result.body,
    'data-case-studio': ui.studio,
    'data-case-year': study.year,
    'data-case-slider-counter': `1 / ${gallery.screens.length}`,
  };
  for (const key of ['task', 'solution', 'niche', 'duration', 'decisions', 'result']) {
    slots[`data-case-label-${key}`] = ui[key];
  }
  for (const [attribute, content] of Object.entries(slots)) {
    assert(content, `Empty ${attribute} in ${slug}`);
    fill(attribute, escapeHtml(content));
  }

  fill('data-case-tags', study.studioTags.map((tag) =>
    `<span class="case-hero-card__tag">[ ${escapeHtml(tag)} ]</span>`).join(''));
  html = html.replace(/<img data-case-hero-img[^>]*\/>/,
    `<img data-case-hero-img src="${escapeHtml(assetPath(study.preview))}" alt="${escapeHtml(copy.pageTitle)}" loading="eager" decoding="async" />`);
  fill('data-case-decisions', copy.decisions.map(([heading, body]) => `
            <article class="case-decision-card">
              <h3>${escapeHtml(heading)}</h3>
              <p>${escapeHtml(body)}</p>
            </article>`).join('') + '\n          ');

  const hasFullSlides = gallery.screens.some(([, , variant]) => variant === 'full');
  if (hasFullSlides) {
    html = html.replace('class="case-slider__viewport"', 'class="case-slider__viewport case-slider__viewport--full"');
    html = html.replace('class="case-slider__track"', 'class="case-slider__track case-slider__track--full"');
  }
  fill('data-case-slider-track', gallery.screens.map(([src, label, variant], index) => {
    const suffix = variant === 'full' || variant === 'wide' ? ` case-slider__slide--${variant}` : '';
    const alt = translations.en.galleryScreens?.[study.galleryKey]?.[index] || label;
    return `
                <figure class="case-slider__slide${suffix}">
                  <img src="${escapeHtml(assetPath(src))}" alt="${escapeHtml(alt)}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async" draggable="false" />
                </figure>`;
  }).join('') + '\n              ');
  html = html.replace('data-case-slider-prev aria-label=', 'data-case-slider-prev disabled aria-label=');

  assert(!html.includes('{{'), `Unresolved template placeholder in ${slug}`);
  const path = new URL(`cases/${slug}.html`, root);
  const previous = await readFile(path, 'utf8').catch((error) => {
    if (error.code !== 'ENOENT') throw error;
    return '';
  });
  if (previous !== html) {
    changed += 1;
    if (check) console.error(`Out of date: ${fileURLToPath(path)}`);
    else await writeFile(path, html);
  }
}

console.log(`${caseStudySlugs.length} case pages checked; ${changed} ${check ? 'out of date' : 'updated'}.`);
if (check && changed) process.exitCode = 1;
