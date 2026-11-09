# Static case pages

Case copy and gallery data live in `studio.js`. The HTML shell lives in
`scripts/case-template.html`. After editing either, regenerate the published pages:

```sh
node scripts/build-cases.mjs
node scripts/build-cases.mjs --check
```

Commit the generated `cases/*.html` files with the source changes. GitHub Pages
serves them directly; no dependencies or server renderer are needed. The English
content, metadata, hero and gallery are present before JavaScript runs. The
existing script still provides the RU/EN switch, navigation and slider behavior.

When a case changes, update its `lastmod` in `sitemap.xml` to the actual change
date. Keep the sitemap limited to public pages intended for search results;
`llms.txt` remains available separately.
