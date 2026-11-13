/* Shared first-party forms and analytics. No contact values are sent to Umami. */
(() => {
  if (window.SiteServices) return;
  const websites = {
    'earnatlas.site': 'a71e7151-7dd9-4bdd-9341-bf78cc165ea4',
    'localmindstudio.site': 'dce3b212-7bf8-47a2-ac09-789e0f925e76'
  };
  const website = websites[location.hostname];
  const utmKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const cleanUrl = value => { if(!value)return '';try { const u=new URL(value,location.origin);return /^https?:$/.test(u.protocol)?u.origin+u.pathname:''; }catch{return '';} };
  let attribution = {};
  try { attribution=JSON.parse(sessionStorage.getItem('sites-attribution-v1')||'{}'); } catch { /* Optional attribution never blocks forms. */ }
  attribution.landingPage ||= cleanUrl(location.href);
  attribution.referrer ||= cleanUrl(document.referrer);
  const params=new URLSearchParams(location.search);
  for (const key of utmKeys) if(params.get(key))attribution[key]=params.get(key).slice(0,150);
  try { sessionStorage.setItem('sites-attribution-v1',JSON.stringify(attribution)); } catch { /* Continue without persistence. */ }
  window.siteAnalyticsFilter = (type,payload) => {
    if(type!=='event')return false;
    const next={...payload};
    if(next.url){const u=new URL(next.url,location.origin);const query=new URLSearchParams();for(const key of utmKeys){const value=u.searchParams.get(key);if(value && !/[\s@]|\d{7,}/.test(value))query.set(key,value.slice(0,150));}next.url=u.pathname+(query.size?'?'+query:'');}
    if(next.referrer)next.referrer=cleanUrl(next.referrer);
    delete next.id;
    return next;
  };
  const track=(name,data)=>{try{const result=window.umami?.track(name,data);result?.catch?.(()=>{});}catch{/* Analytics cannot break a user action. */}};
  if(website){
    const script=document.createElement('script');script.defer=true;script.src='https://stats.localmindstudio.site/script.js';
    script.dataset.websiteId=website;script.dataset.domains=location.hostname;script.dataset.excludeHash='true';script.dataset.beforeSend='siteAnalyticsFilter';script.dataset.doNotTrack='true';
    document.head.append(script);
  }
  const requests=new WeakMap();
  document.addEventListener('submit',async event=>{
    const form=event.target;
    if(!(form instanceof HTMLFormElement)||!form.matches('[data-contact-form],[data-site-contact]'))return;
    event.preventDefault();
    if(!form.reportValidity())return;
    const button=form.querySelector('[type="submit"]'),status=form.querySelector('[data-form-status]');
    if(!button||!status||button.disabled)return;
    const ru=document.documentElement.lang!=='en';
    const data=new FormData(form);
    const content={name:String(data.get('name')||'').trim(),email:String(data.get('email')||'').trim(),phone:String(data.get('phone')||'').trim(),message:String(data.get('message')||'').trim(),kind:String(data.get('kind')||(location.hostname==='earnatlas.site'?'suggestion':'project')),language:ru?'ru':'en',website:String(data.get('_gotcha')||'')};
    const signature=JSON.stringify(content);
    let pending=requests.get(form);
    if(!pending||pending.signature!==signature){pending={signature,payload:{...content,requestId:crypto.randomUUID(),page:cleanUrl(location.href),landingPage:attribution.landingPage||'',referrer:attribution.referrer||'',...Object.fromEntries(utmKeys.map(key=>[key,attribution[key]||'']))}};requests.set(form,pending);}
    button.disabled=true;status.textContent=ru?'Отправляем…':'Sending…';
    try{
      const response=await fetch('/api/v1/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(pending.payload),signal:AbortSignal.timeout(15000)});
      const result=await response.json();
      if(!response.ok||!result.accepted)throw new Error(String(response.status));
      status.textContent=ru?'Спасибо! Обращение сохранено. Мы свяжемся с вами по указанному контакту.':'Thank you! Your request was saved. We will contact you using the details provided.';
      if(response.status===201&&!content.website)track('lead_submitted',{kind:content.kind});
      form.reset();requests.delete(form);
    }catch(error){status.textContent=error.message==='429'?(ru?'Слишком много попыток. Повторите через 15 минут.':'Too many attempts. Please retry in 15 minutes.'):(ru?'Не удалось подтвердить отправку. Данные остались в форме — попробуйте ещё раз.':'Could not confirm submission. Your details remain in the form; please retry.');track('lead_submission_error');}
    finally{button.disabled=false;}
  });
  document.addEventListener('click',event=>{
    const link=event.target instanceof Element?event.target.closest('a[href]'):null;if(!link)return;
    const raw=link.getAttribute('href')||'';
    if(raw.startsWith('mailto:'))track('email_click');
    else if(raw.startsWith('tel:'))track('phone_click');
    else if(raw.includes('#contact')||link.hasAttribute('data-open-contact'))track('contact_open');
    else {try{const u=new URL(link.href);if(u.hostname==='t.me')track('telegram_click');else if(u.origin!==location.origin&&u.protocol==='https:')track('outbound_click',{domain:u.hostname});}catch{/* Ignore invalid links. */}}
  });
  window.SiteServices={track};
})();
