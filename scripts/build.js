// Static site generator: renders src/pages/*.js into dist/<path>/index.html
// plus sitemap.xml, robots.txt, llms.txt, manifest and server config.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const site = require('../src/site');
const { sprite, icon, logoMark } = require('../src/icons');
const C = require('../src/components');

const TODAY = new Date().toISOString().slice(0, 10);
const JS_VERSION = require('crypto').createHash('sha1').update(fs.readFileSync(path.join(ROOT, 'src/js/main.js'))).digest('hex').slice(0, 10);
const UMAMI = `<script defer src="${site.umami.src}" data-website-id="${site.umami.websiteId}" data-domains="${new URL(site.url).hostname}" data-do-not-track="true"></script>`;
if (site.umami.websiteId.startsWith('REPLACE')) console.warn('⚠  Umami websiteId is still a placeholder (src/site.js → umami.websiteId)');
if (!site.address.street) console.warn('⚠  Street address missing (src/site.js → address.street) – required for the Impressum');
const abs = (p) => site.url + p;
const DEFAULT_OG = '/assets/img/og-niktos-webdesign-ludwigsburg.jpg';

const minifyCss = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').replace(/;}/g, '}').trim();
const CSS = minifyCss(fs.readFileSync(path.join(ROOT, 'src/css/style.css'), 'utf8').replace(/^﻿/, ''));

/* ---------- Structured data ---------- */
const BUSINESS_ID = site.url + '/#business';
const PERSON_ID = site.url + '/#nikola-planinic';
const address = { '@type': 'PostalAddress', ...(site.address.street ? { streetAddress: site.address.street } : {}), postalCode: site.address.zip, addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country };
const person = {
  '@type': 'Person', '@id': PERSON_ID, name: site.owner, alternateName: 'Nikola Planinic', jobTitle: 'Webdesigner & SEO-Berater, Inhaber von Niktos',
  worksFor: { '@id': BUSINESS_ID }, url: abs('/ueber-mich/'), sameAs: [site.instagram],
  knowsAbout: ['Webdesign', 'Webentwicklung', 'Suchmaschinenoptimierung', 'Lokales SEO', 'Generative Engine Optimization', 'KI-Suche', 'Conversion-Optimierung', 'WordPress', 'Core Web Vitals'],
  address: { '@type': 'PostalAddress', addressLocality: site.address.city, addressCountry: 'DE' },
};
const business = {
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': BUSINESS_ID,
  name: site.name,
  legalName: site.legalName,
  alternateName: ['Niktos Webdesign', 'Niktos Webdesign & SEO Ludwigsburg', 'Niktos Nikola Planinic'],
  slogan: site.slogan,
  description: 'Niktos ist eine Webdesign- und SEO-Agentur aus Ludwigsburg (Inhaber Nikola Planinić). Individuelle, schnelle Websites mit lokalem SEO und KI-Sichtbarkeit für Selbstständige, Handwerker, Dienstleister und kleine und mittlere Unternehmen im Landkreis Ludwigsburg, in Stuttgart und deutschlandweit.',
  url: site.url + '/',
  logo: { '@type': 'ImageObject', url: abs('/assets/img/niktos-logo.png'), width: 512, height: 512 },
  image: [abs(DEFAULT_OG)],
  telephone: site.phoneSchema,
  email: site.email,
  priceRange: `${C.euro(site.packages[0].price)} – ${C.euro(site.packages[site.packages.length - 1].price)}+`,
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Überweisung',
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  foundingDate: String(site.since),
  address,
  hasMap: site.googleMapsUrl,
  areaServed: site.towns.map((t) => ({ '@type': 'City', name: t })).concat([{ '@type': 'AdministrativeArea', name: 'Landkreis Ludwigsburg' }, { '@type': 'AdministrativeArea', name: 'Region Stuttgart' }, { '@type': 'Country', name: 'Deutschland' }]),
  sameAs: [site.instagram],
  contactPoint: { '@type': 'ContactPoint', telephone: site.phoneSchema, email: site.email, contactType: 'customer service', availableLanguage: ['German', 'Croatian', 'English'], areaServed: 'DE' },
  knowsAbout: ['Webdesign', 'Website-Erstellung', 'Website-Relaunch', 'Suchmaschinenoptimierung (SEO)', 'Lokales SEO', 'Google-Unternehmensprofil', 'KI-Sichtbarkeit (GEO)', 'ChatGPT-Optimierung', 'Core Web Vitals', 'Conversion-Optimierung', 'Website-Wartung', 'Hosting', 'WordPress'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Webdesign-Pakete',
    itemListElement: site.packages.map((p) => ({
      '@type': 'Offer', name: `Website-Paket ${p.name}`, description: p.claim, url: abs('/preise/#paket-' + p.id),
      priceSpecification: { '@type': 'PriceSpecification', minPrice: p.price, priceCurrency: 'EUR', valueAddedTaxIncluded: true },
      itemOffered: { '@type': 'Service', name: `Website ${p.name}`, serviceType: 'Webdesign', provider: { '@id': BUSINESS_ID } },
    })).concat(site.services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.short, url: abs(s.href) } }))),
  },
};
const website = { '@type': 'WebSite', '@id': site.url + '/#website', url: site.url + '/', name: site.name, alternateName: 'Niktos Webdesign & SEO', inLanguage: 'de-DE', publisher: { '@id': BUSINESS_ID } };

function graph(page) {
  const url = abs(page.path);
  const items = [business, person, website, {
    '@type': page.pageType || 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description,
    inLanguage: 'de-DE', isPartOf: { '@id': site.url + '/#website' }, about: { '@id': BUSINESS_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(page.ogImage || DEFAULT_OG) },
    dateModified: TODAY,
    ...(page.crumbs ? { breadcrumb: { '@id': url + '#breadcrumb' } } : {}),
  }];
  if (page.crumbs) items.push({
    '@type': 'BreadcrumbList', '@id': url + '#breadcrumb',
    itemListElement: page.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.url) })),
  });
  (page.schema || []).forEach((s) => items.push(s));
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': items }).replace(/</g, '\\u003c');
}

/* ---------- Sidebar header / mobile header ---------- */
// Blue icon "stickers" next to every menu item – like the old niktos.com
const NAV = [
  ['home', '/', 'Home', 'home'],
  ['leistungen', '/leistungen/', 'Leistungen', 'briefcase'],
  ['preise', '/preise/', 'Preise', 'euro'],
  ['referenzen', '/referenzen/', 'Referenzen', 'starline'],
  ['ueber', '/ueber-mich/', 'Über mich', 'smile'],
  ['blog', '/blog/', 'Blog', 'book'],
  ['kontakt', '/kontakt/', 'Kontakt', 'chat'],
];
function header(active, page) {
  const svcActive = ['leistungen', 'webdesign', 'seo', 'wartung', 'check'];
  const items = NAV.map(([key, href, label, ic]) => {
    const cur = active === key || (key === 'leistungen' && svcActive.includes(active));
    const link = `<a href="${href}"${cur ? ' aria-current="page"' : ''}><span class="nav-ico">${icon(ic)}</span>${label}</a>`;
    if (key !== 'leistungen') return `<li>${link}</li>`;
    return `<li${cur ? ' class="is-open"' : ''}>${link}<div class="side__sub">${site.services.map((s) => `<a href="${s.href}"${active === s.id ? ' aria-current="page"' : ''}>${s.title.replace(' & Website-Erstellung', '').replace(', Hosting & Support', ' & Hosting')}</a>`).join('')}</div></li>`;
  }).join('');
  return `
<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
<header class="mhead">
  <a class="brand" href="/" aria-label="${site.name} – Startseite">${logoMark(36)}<span class="brand__word">NIKTOS</span></a>
  <button class="burger" type="button" aria-label="Menü öffnen" aria-controls="navigation" aria-expanded="false"><span></span></button>
</header>
<aside class="side" id="navigation" aria-label="Hauptnavigation">
  <a class="brand" href="/" aria-label="${site.name} – Startseite">${logoMark(42)}<span class="brand__word">NIKTOS</span></a>
  <p class="side__tag">Webdesign & SEO aus ${site.address.city}</p>
  <nav class="side__nav" aria-label="Hauptmenü"><ul>${items}</ul></nav>
  <div class="side__cta">
    ${page.path === '/projekt-anfrage/' ? '' : C.startBtn('Projekt starten', { cls: 'btn--block' })}
    <a class="btn btn--wa btn--block" href="${site.whatsapp}" target="_blank" rel="noopener">${icon('wa')} WhatsApp</a>
    <a class="side__phone" href="tel:${site.phoneIntl}">Direkt anrufen<strong>${site.phone}</strong></a>
    <div class="side__contact">
      <a href="${site.instagram}" target="_blank" rel="noopener" aria-label="Niktos auf Instagram">${icon('insta')}</a>
      <a href="mailto:${site.email}" aria-label="E-Mail an Niktos">${icon('mail')}</a>
      <a href="${site.googleMapsUrl}" target="_blank" rel="noopener" aria-label="Niktos auf Google Maps">${icon('pin')}</a>
      <a href="tel:${site.phoneIntl}" aria-label="Niktos anrufen">${icon('phone')}</a>
    </div>
  </div>
</aside>`;
}

function footer(page) {
  return `
<footer class="footer">
  <div class="container">
    <p class="footer__big" aria-hidden="true">Niktos<span>.</span></p>
    <div class="footer__grid">
      <div>
        <a class="brand" href="/" aria-label="${site.name} – Startseite">${logoMark(40)}<span class="brand__word">NIKTOS</span></a>
        <p style="margin-top:18px">Webdesign & SEO aus ${site.address.city}. Ich baue Websites, die schnell laden, gefunden werden und Ihnen Kunden bringen. Persönlich, ehrlich und mit Herz.</p>
        <div class="footer__social">
          <a href="${site.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('insta')}</a>
          <a href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('wa')}</a>
          <a href="mailto:${site.email}" aria-label="E-Mail">${icon('mail')}</a>
          <a href="${site.googleMapsUrl}" target="_blank" rel="noopener" aria-label="Google Maps">${icon('pin')}</a>
        </div>
      </div>
      <div>
        <h2>Was ich mache</h2>
        <ul>${site.services.map((s) => `<li><a href="${s.href}">${s.title}</a></li>`).join('')}<li><a href="/preise/">Pakete & Preise</a></li></ul>
      </div>
      <div>
        <h2>Mehr entdecken</h2>
        <ul>
          <li><a href="/referenzen/">Referenzen</a></li>
          <li><a href="/ueber-mich/">Über mich</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/kontakt/">Kontakt</a></li>
          <li><a href="/projekt-anfrage/">Projekt-Anfrage</a></li>
          <li><a href="/impressum/">Impressum</a></li>
          <li><a href="/datenschutzerklaerung/">Datenschutz</a></li>
        </ul>
      </div>
      <div>
        <h2>Sag Hallo</h2>
        <address class="footer__nap">
          <span>${icon('pin')}<span>${site.legalName}<br>${site.address.street ? site.address.street + '<br>' : ''}${site.address.zip} ${site.address.city}</span></span>
          <a href="tel:${site.phoneIntl}">${icon('phone')}${site.phone}</a>
          <a href="${site.whatsapp}" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
          <a href="mailto:${site.email}">${icon('mail')}${site.email}</a>
        </address>
      </div>
    </div>
    <p class="footer__towns"><strong style="color:#fff">Webdesign & SEO für:</strong> ${site.towns.join(' · ')} · Landkreis Ludwigsburg · Region Stuttgart · deutschlandweit</p>
    <div class="footer__bottom">
      <span>© <span id="year">${new Date().getFullYear()}</span> ${site.legalName}</span>
      <span class="footer__heart">Mit ${icon('heartfill')} gemacht in Ludwigsburg</span>
      <nav aria-label="Rechtliches"><a href="/impressum/">Impressum</a><a href="/datenschutzerklaerung/">Datenschutz</a></nav>
    </div>
  </div>
</footer>
<nav class="mbar" aria-label="Schnellkontakt">
  <a href="tel:${site.phoneIntl}">${icon('phone')}Anruf</a>
  <a class="is-wa" href="${site.whatsapp}" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
  <a class="is-primary" href="/projekt-anfrage/"${page.path === '/projekt-anfrage/' ? '' : ' data-open-funnel'}>${icon('rocket')}Projekt starten</a>
</nav>
<a class="wa-float" href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="Kontakt per WhatsApp">${icon('wa')}</a>
${page.path === '/projekt-anfrage/' ? '' : `<a class="fab" href="/projekt-anfrage/" data-open-funnel><span class="fab__ico">${icon('rocket')}</span><span><small>in 1 Minute zum Angebot</small>Projekt starten</span></a>
${C.funnelDialog()}`}`;
}

/* ---------- Page shell ---------- */
function layout(page) {
  const url = abs(page.path);
  const og = abs(page.ogImage || DEFAULT_OG);
  return `<!doctype html>
<html lang="de" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${page.title}</title>
<meta name="description" content="${C.esc(page.description)}">
${page.noindex ? '' : `<link rel="canonical" href="${url}">`}
<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
<meta name="author" content="${site.owner}">
<meta name="geo.region" content="DE-BW">
<meta name="geo.placename" content="${site.address.city}">
<meta name="theme-color" content="#0a66ff">
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${C.esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${C.esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${C.esc(page.ogTitle || page.title)}">
<meta name="twitter:card" content="summary_large_image">
${page.head || ''}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-Zusammenfassung">
<link rel="preload" href="/assets/fonts/league-spartan-latin-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/caveat-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<style>${CSS}</style>
<script>document.documentElement.classList.replace('no-js','js')</script>
<script type="application/ld+json">${graph(page)}</script>
</head>
<body>
${sprite()}
${header(page.nav, page)}
<div class="page">
<main id="inhalt">
${page.body}
</main>
${footer(page)}
</div>
<script src="/assets/js/main.js?v=${JS_VERSION}" defer></script>
${UMAMI}
</body>
</html>
`;
}

/* ---------- Build ---------- */
const pageFiles = fs.readdirSync(path.join(ROOT, 'src/pages')).filter((f) => f.endsWith('.js'));
const pages = pageFiles.map((f) => require(path.join(ROOT, 'src/pages', f)));
for (const p of pages) {
  const out = p.path === '/404' ? path.join(DIST, '404.html') : path.join(DIST, p.path, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, layout(p));
  console.log('✓', p.path.padEnd(52), `${p.title.length}c title · ${p.description.length}c desc`);
}

// Static assets
fs.mkdirSync(path.join(DIST, 'assets/js'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'src/js/main.js'), path.join(DIST, 'assets/js/main.js'));
fs.cpSync(path.join(ROOT, 'src/static'), DIST, { recursive: true, filter: (src) => !/(^|[\\/])(niktos-)?config\.php$/.test(src) });

// sitemap.xml
const indexable = pages.filter((p) => !p.noindex && p.path !== '/404');
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${indexable.sort((a, b) => (b.priority || .5) - (a.priority || .5)).map((p) => `  <url><loc>${abs(p.path)}</loc><lastmod>${p.modified || TODAY}</lastmod><priority>${(p.priority || .5).toFixed(1)}</priority>${p.ogImage ? `<image:image><image:loc>${abs(p.ogImage)}</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);

// robots.txt – search engines and AI assistants explicitly welcome
fs.writeFileSync(path.join(DIST, 'robots.txt'), `# ${site.name} – Webdesign & SEO Ludwigsburg
User-agent: *
Allow: /
Disallow: /danke/

# KI-Suchmaschinen & Assistenten ausdrücklich willkommen
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /
User-agent: meta-externalagent
Allow: /
User-agent: MistralAI-User
Allow: /

Sitemap: ${site.url}/sitemap.xml
`);

// llms.txt – concise, factual summary for LLM-based search (llmstxt.org)
fs.writeFileSync(path.join(DIST, 'llms.txt'), `# ${site.name} – Webdesign & SEO in ${site.address.city}

> ${site.name} (${site.legalName}) ist eine Webdesign- und SEO-Agentur aus ${site.address.zip} ${site.address.city} (Baden-Württemberg), geführt vom Inhaber ${site.owner}. Niktos erstellt individuelle, sehr schnelle Websites mit lokalem SEO und KI-Sichtbarkeit (Optimierung für Google, Google Maps, ChatGPT, Gemini, Perplexity und Copilot) für Selbstständige, Handwerker, Dienstleister, soziale Träger sowie kleine und mittlere Unternehmen – im Landkreis Ludwigsburg, in der Region Stuttgart und deutschlandweit. Slogan: „${site.slogan}“

## Kontakt
- Inhaber: ${site.owner} (persönlicher Ansprechpartner für alle Projekte)
- Standort: ${site.address.street ? site.address.street + ', ' : ''}${site.address.zip} ${site.address.city}, Deutschland
- Telefon: ${site.phone} (international ${site.phoneSchema})
- WhatsApp: https://wa.me/${site.waNumber}
- E-Mail: ${site.email}
- Instagram: ${site.instagram}
- Website: ${site.url}/
- Projekt-Anfrage (60 Sekunden): ${site.url}/projekt-anfrage/
- Sprachen: Deutsch, Kroatisch, Englisch

## Leistungen
${site.services.map((s) => `- [${s.title}](${abs(s.href)}): ${s.short}`).join('\n')}

## Pakete & Preise (Festpreise, einmalig${site.kleinunternehmer ? ', Endpreise ohne MwSt. gemäß § 19 UStG' : ''})
${site.packages.map((p) => `- ${p.name} – ab ${C.euro(p.price)} (${p.tag}; Umsetzung ${p.time}): ${p.claim} Enthält u. a.: ${p.features.map((f) => f.replace(/<[^>]+>/g, '')).join('; ')}.`).join('\n')}
- ${site.care.name} (Wartung & Hosting) – ab ${site.care.price} € pro Monat: ${site.care.features.join('; ')}.
- Website-Check – ${site.checkPrice} € (PDF-Report zu Technik, SEO, Geschwindigkeit und Nutzerführung; wird bei Auftrag verrechnet).
- Details: ${site.url}/preise/

## Referenzen
${site.projects.map((p) => `- ${p.name} (${p.branch}, ${p.place}): ${p.url} – ${p.text}`).join('\n')}

## Einsatzgebiet
${site.towns.join(', ')}, Landkreis Ludwigsburg, Region Stuttgart sowie deutschlandweit (Remote).

## Was Niktos auszeichnet
- Ein fester, persönlicher Ansprechpartner (${site.owner}) statt wechselnder Agentur-Mitarbeiter
- Individuelles Design statt Baukasten-Vorlage; die Website gehört vollständig dem Kunden
- Technisch schlanke Websites mit sehr guten Core Web Vitals (Ziel: PageSpeed 90+)
- SEO und KI-Sichtbarkeit von Anfang an inklusive: strukturierte Daten (schema.org), FAQ, llms.txt, lokale Landingpages
- DSGVO-bewusst: keine Tracking-Cookies, lokal gehostete Schriften, Google Maps erst nach Klick
- Kommunikation auch per WhatsApp; Antwort auf Anfragen in der Regel innerhalb von 24 Stunden (werktags)
- Kostenloses Erstgespräch, transparente Festpreise, keine versteckten Kosten
- ${C.years()} Jahre Erfahrung im Webdesign (seit ${site.since})

## Seiten
${indexable.map((p) => `- [${p.title.split(' | ')[0]}](${abs(p.path)}): ${p.description}`).join('\n')}
`);

// Web app manifest
fs.writeFileSync(path.join(DIST, 'site.webmanifest'), JSON.stringify({
  name: `${site.name} – Webdesign & SEO`, short_name: 'Niktos', start_url: '/', display: 'standalone', background_color: '#ffffff', theme_color: '#0a66ff', lang: 'de',
  icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
}, null, 2));

console.log(`\nBuilt ${pages.length} pages → dist/`);
