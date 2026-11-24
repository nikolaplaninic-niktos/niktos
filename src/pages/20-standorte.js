// Standortseiten: hub /einsatzgebiet/ + one page per town (/webdesign-<ort>/). Data: src/standorte.js.
// Exports an array of pages (scripts/build.js flattens it).
const site = require('../site');
const C = require('../components');
const TOWNS = require('../standorte');
const { icon } = C;

const ORIGIN = { lat: 48.9030, lon: 9.2080 }; // Marbacher Str. 98 (OpenStreetMap)
const HUB = '/einsatzgebiet/';
const de = (n) => String(n).replace('.', ',');
const short = (t) => t.short || t.name;
const href = (t) => `/webdesign-${t.slug}/`;
const routeUrl = (t) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${site.address.street}, ${site.address.zip} ${site.address.city}`)}&destination=${encodeURIComponent(`${t.dest}, ${t.zip} ${t.name}`)}&travelmode=driving`;
const vec = (a, b) => ({ x: (b.lon - a.lon) * 111.32 * Math.cos((a.lat * Math.PI) / 180), y: (b.lat - a.lat) * 110.57 });
const airKm = (a, b) => { const v = vec(a, b); return Math.hypot(v.x, v.y); };
const DIRS = ['nördlich', 'nordöstlich', 'östlich', 'südöstlich', 'südlich', 'südwestlich', 'westlich', 'nordwestlich'];
const direction = (t) => { const v = vec(ORIGIN, t); const deg = (Math.atan2(v.x, v.y) * 180 / Math.PI + 360) % 360; return DIRS[Math.round(deg / 45) % 8]; };

/* ---------- Schematic route map (real direction, real route data) ---------- */
function routeMap(t) {
  const v = vec(ORIGIN, t); const len = Math.hypot(v.x, v.y) || 1;
  const ux = v.x / len, uy = -v.y / len; // SVG y points down
  const L = 150 * Math.abs(uy) + 110 * Math.abs(ux), cx = 200, cy = 145;
  const off = Math.abs(ux) * 70 + Math.abs(uy) * 32; // labels sit on the far side of each pin, never on the line
  const a = { x: cx - ux * L / 2, y: cy - uy * L / 2 }, b = { x: cx + ux * L / 2, y: cy + uy * L / 2 };
  const mx = (a.x + b.x) / 2 + uy * 34, my = (a.y + b.y) / 2 - ux * 34; // label offset perpendicular to the line
  const label = (p, s, text, sub, cls) => `<g class="rmap__lbl ${cls}" transform="translate(${Math.min(330, Math.max(70, p.x + s * ux * off)).toFixed(1)} ${Math.min(258, Math.max(20, p.y + s * uy * off - 6)).toFixed(1)})"><rect x="-${(Math.max(text.length, sub.length) * 4.6 + 16).toFixed(0)}" y="-13" width="${(Math.max(text.length, sub.length) * 9.2 + 32).toFixed(0)}" height="38" rx="8"/><text y="2">${C.esc(text)}</text><text class="s" y="17">${C.esc(sub)}</text></g>`;
  return `
<figure class="rmap">
  <svg viewBox="0 0 400 290" role="img" aria-label="Schematische Karte: Anfahrt von Niktos in Ludwigsburg nach ${C.esc(t.name)}, ${de(t.km)} km, rund ${t.min} Minuten">
    <rect width="400" height="290" fill="#eef3fb"/>
    <path d="M0 52h400M0 128h400M0 214h400M70 0v290M168 0v290M262 0v290M350 0v290" stroke="#dde4f1" stroke-width="9"/>
    <g fill="#d6ecd2"><ellipse cx="320" cy="62" rx="44" ry="24"/><ellipse cx="78" cy="238" rx="36" ry="20"/></g>
    <path d="M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}" stroke="#0b0d14" stroke-width="7" stroke-linecap="round"/>
    <path d="M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}" stroke="#ffd23f" stroke-width="3.5" stroke-dasharray="9 7" stroke-linecap="round"/>
    <circle cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="11" fill="#0a66ff" stroke="#0b0d14" stroke-width="2.5"/>
    <circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="11" fill="#ea4335" stroke="#0b0d14" stroke-width="2.5"/><circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="4" fill="#fff"/>
    ${label(a, -1, 'Niktos', 'Ludwigsburg', 'is-a')}
    ${label(b, 1, short(t), 'Rathaus', 'is-b')}
    <g transform="translate(${mx.toFixed(1)} ${my.toFixed(1)}) rotate(-6)"><rect x="-50" y="-17" width="100" height="34" rx="17" fill="#ffd23f" stroke="#0b0d14" stroke-width="2"/><text class="rmap__km" y="6">${de(t.km)} km · ${t.min} Min.</text></g>
  </svg>
  <figcaption>Schematische Darstellung, Norden oben, Richtung maßstäblich. Route über ${t.roads.join(', ')} · Daten © OpenStreetMap-Mitwirkende, Fahrzeit ohne Stau.</figcaption>
</figure>`;
}

const CSS = `<style>
.rmap{margin:0;border:2px solid var(--ink);border-radius:var(--r-lg);background:#fff;box-shadow:var(--sh-lg);overflow:hidden}
.rmap svg{display:block;width:100%;height:auto}
.rmap text{font:700 15px/1 var(--fb);fill:#0b0d14;text-anchor:middle}
.rmap text.s{font-weight:500;font-size:11px;fill:#656c80}
.rmap__lbl rect{fill:#fff;stroke:#0b0d14;stroke-width:2}
.rmap .rmap__km{font:800 14px/1 var(--fh)}
.rmap figcaption{padding:12px 16px;border-top:2px solid var(--ink);background:var(--paper);font-size:.78rem;line-height:1.45;color:var(--mut)}
.trip dl{display:grid;grid-template-columns:auto 1fr;gap:10px 18px;margin:0 0 18px}
.trip dt{font-weight:600;color:var(--mut);font-size:.9rem}
.trip dd{margin:0;font-weight:600;color:var(--ink)}
.tlinks{display:flex;flex-wrap:wrap;gap:10px;list-style:none;margin:0;padding:0}
.tgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:18px}
.tgrid .card h3{font-size:1.3rem;margin-bottom:.35em}
.tgrid .card p{font-size:.95rem;margin-bottom:14px}
.tmeta{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.tmeta span{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;border:1.5px solid var(--line2);font-size:.82rem;font-weight:600;color:var(--tx2)}
.tmeta .icon{width:13px;height:13px;color:var(--blue)}
.kabic-shot{transform:rotate(-1deg)}
@media (max-width:980px){.trip dl{grid-template-columns:1fr;gap:2px}.trip dd{margin-bottom:10px}}
</style>`;

const nearest = (t, n = 3) => TOWNS.filter((o) => o !== t).sort((x, y) => airKm(t, x) - airKm(t, y)).slice(0, n);
const linkRow = (items) => `<ul class="tlinks">${items.map(([h, l, ic]) => `<li><a class="badge-s" href="${h}">${icon(ic)} ${l}</a></li>`).join('')}</ul>`;
const BRANCH_ICONS = ['briefcase', 'users', 'heart'];

function townPage(t) {
  const path = href(t);
  const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Einsatzgebiet', url: HUB }, { name: `Webdesign ${t.name}`, url: path }];
  const p = site.projects[0];
  const FAQ = C.faq([
    [`Kommen Sie für ein Erstgespräch nach ${t.name}?`, `Ja, gern. Bis zum ${t.dest} sind es ${de(t.km)} km, ohne Stau rund ${t.min} Minuten. Alternativ treffen wir uns in Ludwigsburg oder per Video-Call.`],
    ...t.faq,
  ], { title: `Fragen aus ${short(t)}`, eyebrow: `Webdesign ${t.name}` });
  const near = nearest(t);
  return {
    path,
    nav: 'standorte',
    priority: 0.7,
    crumbs,
    title: t.title,
    description: t.description,
    head: CSS,
    schema: [FAQ.schema, {
      '@type': 'Service', '@id': site.url + path + '#service', name: `Webdesign in ${t.name}`, serviceType: 'Webdesign',
      description: `Individuelle Websites mit lokalem SEO für Unternehmen in ${t.name}, erstellt und betreut von ${site.name} aus Ludwigsburg.`,
      provider: { '@id': site.url + '/#business' },
      areaServed: { '@type': 'City', name: t.name, address: { '@type': 'PostalAddress', postalCode: t.zip, addressLocality: t.name, addressRegion: 'Baden-Württemberg', addressCountry: 'DE' }, geo: { '@type': 'GeoCoordinates', latitude: t.lat, longitude: t.lon } },
      offers: { '@type': 'AggregateOffer', lowPrice: site.packages[0].price, highPrice: site.packages[2].price, priceCurrency: 'EUR', offerCount: site.packages.length, url: site.url + '/preise/' },
    }],
    body: `
${C.pageHero({
  crumbs,
  eyebrow: `Webdesign & SEO · ${t.name}`,
  h1: `Webdesign in <span class="grad">${t.name}</span>`,
  lead: t.lead,
  aside: routeMap(t),
})}

<section class="section">
  <div class="container split split--top">
    <div class="reveal">
      <p class="eyebrow">${short(t)} & Ihre Kunden</p>
      <h2>Was ${short(t)} ausmacht und was das für Ihre Website heißt.</h2>
      <div class="prose">${t.intro.map((x) => `<p>${x}</p>`).join('')}</div>
    </div>
    <div class="facts trip reveal reveal-d1">
      <div class="facts__head"><span class="card__ico" style="margin:0">${icon('route')}</span><span><strong>Von Niktos nach ${short(t)}</strong><small>${direction(t)} von Ludwigsburg</small></span></div>
      <dl>
        <div><dt>Start</dt><dd>${site.address.street}, ${site.address.city}</dd></div>
        <div><dt>Ziel</dt><dd>${t.dest}, ${t.zip}</dd></div>
        <div><dt>Strecke</dt><dd>${de(t.km)} km über ${t.roads.join(', ')}</dd></div>
        <div><dt>Fahrzeit</dt><dd>ca. ${t.min} Minuten ohne Stau</dd></div>
        <div><dt>Termine</dt><dd>bei Ihnen vor Ort, in Ludwigsburg oder per Video-Call</dd></div>
      </dl>
      <a class="btn btn--ghost btn--block" href="${routeUrl(t)}" target="_blank" rel="noopener">${icon('map')} Route in Google Maps</a>
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: `Branchen in ${short(t)}`, title: `Was Betriebe in ${short(t)} von ihrer Website brauchen.`, center: true })}
    ${C.features(t.branchen.map(([h, d], i) => [BRANCH_ICONS[i % 3], h, d]))}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Lokales SEO', title: `Drei Tipps für mehr Sichtbarkeit in ${short(t)}.` })}
    ${C.steps(t.tips)}
  </div>
</section>

<section class="section section--panel">
  <div class="container split">
    ${t.kabic ? `
    <div class="reveal">
      <p class="eyebrow">Referenz aus ${t.name}</p>
      <h2>${p.name}</h2>
      <p class="lead">${p.text}</p>
      ${C.ticks(p.tags)}
      <div class="actions"><a class="btn btn--ghost" href="/referenzen/">Projekt ansehen ${icon('arrow')}</a><a class="btn btn--ghost" href="${p.url}" target="_blank" rel="noopener">${p.domain}</a></div>
    </div>
    <div class="reveal reveal-d1 kabic-shot"><div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${icon('lock')} ${p.domain}</span></div><div class="browser__body">${C.img(p.img, { sizes: '(max-width: 980px) 100vw, 50vw', alt: `Website von ${p.name} aus ${t.name}, Relaunch durch Niktos` })}</div></div></div>`
    : `
    <div class="reveal">
      <p class="eyebrow">Echtes Projekt aus dem Landkreis</p>
      <h2>Lieber ansehen als lesen.</h2>
      <p class="lead">Mein Referenzprojekt liegt in ${p.place}, rund ${Math.round(airKm(t, TOWNS.find((x) => x.kabic)))} km Luftlinie von ${short(t)}: der Relaunch für ${p.name}.</p>
      <a class="link-arrow" href="/referenzen/">Zur Referenz ${icon('arrow')}</a>
    </div>
    <div class="card reveal reveal-d1">
      <p class="eyebrow">Passende Leistungen</p>
      <h3>Alles aus einer Hand für ${short(t)}</h3>
      <p>Design, Texte, Hosting, SEO und Wartung von einem Ansprechpartner.</p>
      ${linkRow([['/webdesign-ludwigsburg/', 'Webdesign', 'layout'], ['/seo-ludwigsburg/', 'SEO & KI-Sichtbarkeit', 'search'], ['/wartung-hosting/', 'Wartung & Hosting', 'shield'], ['/website-check/', 'Website-Check', 'gauge'], ['/preise/', 'Preise', 'euro']])}
    </div>`}
  </div>
</section>
${t.kabic ? `
<section class="section section--tight">
  <div class="container">
    ${C.head({ eyebrow: 'Passende Leistungen', title: `Alles aus einer Hand für ${short(t)}.`, lead: 'Design, Texte, Domain, Hosting, SEO, Google-Profil und Wartung: ein Ansprechpartner statt vieler Dienstleister.' })}
    ${linkRow([['/webdesign-ludwigsburg/', 'Webdesign', 'layout'], ['/seo-ludwigsburg/', 'SEO & KI-Sichtbarkeit', 'search'], ['/wartung-hosting/', 'Wartung & Hosting', 'shield'], ['/website-check/', 'Website-Check', 'gauge'], ['/preise/', 'Preise', 'euro']])}
  </div>
</section>` : ''}
${FAQ.html}

<section class="section section--tight">
  <div class="container">
    <p class="eyebrow">In der Nähe von ${short(t)}</p>
    ${linkRow([...near.map((o) => [href(o), `Webdesign ${o.name}`, 'pin']), ['/webdesign-ludwigsburg/', 'Webdesign Ludwigsburg', 'pin'], [HUB, 'Alle Orte', 'map']])}
  </div>
</section>
${C.ctaBand({ title: `Ihre neue Website <span class="hl">für ${short(t)}.</span>`, text: `Kurz erzählen, was Ihr Betrieb in ${t.name} macht. Innerhalb von 24 Stunden bekommen Sie eine ehrliche Einschätzung und einen Festpreis.`, waText: `Hallo Nikola, ich habe einen Betrieb in ${t.name} und interessiere mich für eine neue Website.` })}
`,
  };
}

/* ---------- Hub ---------- */
const teaser = (t) => { const s = (t.description.split(':')[1] || '').split('.')[0].trim(); return s ? s[0].toUpperCase() + s.slice(1) + '.' : ''; };
function hubPage() {
  const path = HUB;
  const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Einsatzgebiet', url: path }];
  const sorted = [...TOWNS].sort((a, b) => a.km - b.km);
  const withPage = new Set(TOWNS.map((t) => t.name));
  const others = site.towns.filter((t) => t !== 'Ludwigsburg' && !withPage.has(t));
  const FAQ = C.faq([
    ['Arbeiten Sie nur für Betriebe aus diesen Orten?', 'Nein. Die Orte auf dieser Seite liegen in meiner direkten Nähe, dort treffe ich Kunden gern persönlich. Websites baue ich für Unternehmen aus ganz Deutschland; die Abstimmung läuft dann per Video-Call, Telefon und WhatsApp.'],
    ['Warum gibt es nicht für jeden Ort eine eigene Seite?', 'Weil jede Ortsseite etwas Echtes über den Ort erzählen soll: Anfahrt, typische Betriebe, Besonderheiten bei der Suche. Seiten, bei denen nur der Ortsname ausgetauscht wird, helfen weder Ihnen noch Google. Weitere Orte kommen dazu, wenn es etwas Konkretes zu sagen gibt.'],
    ['Wie werden die Entfernungen berechnet?', `Die Strecken und Fahrzeiten stammen aus einem Routenplaner auf Basis von OpenStreetMap, gemessen von der ${site.address.street} in Ludwigsburg bis zum jeweiligen Rathaus, ohne Stau. Im Berufsverkehr kann es länger dauern.`],
  ], { title: 'Fragen zum Einsatzgebiet', eyebrow: 'Gut zu wissen' });
  return {
    path,
    nav: 'standorte',
    priority: 0.7,
    crumbs,
    title: 'Einsatzgebiet: Webdesign im Kreis Ludwigsburg | Niktos',
    description: 'Webdesign & SEO von Niktos aus Ludwigsburg für Kornwestheim, Bietigheim-Bissingen, Asperg, Remseck, Marbach, Ditzingen und weitere Orte, mit Anfahrt und Tipps.',
    head: CSS,
    schema: [FAQ.schema, {
      '@type': 'ItemList', '@id': site.url + path + '#orte', name: 'Webdesign-Seiten nach Ort',
      itemListElement: sorted.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: `Webdesign ${t.name}`, url: site.url + href(t) })),
    }],
    body: `
${C.pageHero({
  crumbs,
  eyebrow: 'Einsatzgebiet · Landkreis Ludwigsburg',
  h1: 'Webdesign im <span class="grad">Landkreis Ludwigsburg</span>',
  lead: `Niktos sitzt in der ${site.address.street} in Ludwigsburg. Von hier aus betreue ich Betriebe in den Orten ringsum, persönlich vor Ort oder per WhatsApp. Für jeden Ort unten finden Sie Anfahrt, typische Branchen und konkrete Tipps, wie Betriebe dort bei Google gefunden werden.`,
  aside: C.factsCard(),
})}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: `${TOWNS.length + 1} Orte mit eigener Seite`, title: 'Orte rund um Ludwigsburg.', lead: 'Sortiert nach Fahrzeit ab Niktos. Entfernungen bis zum jeweiligen Rathaus, laut Routenplaner ohne Stau.' })}
    <div class="tgrid">
      <a class="card reveal" href="/webdesign-ludwigsburg/"><div class="tmeta"><span>${icon('home')} Sitz von Niktos</span></div><h3>Ludwigsburg</h3><p>Hier sitzt Niktos. Webdesign, SEO und Betreuung direkt vor Ort.</p><span class="link-arrow">Webdesign Ludwigsburg ${icon('arrow')}</span></a>
      ${sorted.map((t, i) => `<a class="card reveal reveal-d${(i + 1) % 3}" href="${href(t)}"><div class="tmeta"><span>${icon('route')} ${de(t.km)} km</span><span>${icon('clock')} ${t.min} Min.</span></div><h3>${t.name}</h3><p>${teaser(t)}</p><span class="link-arrow">Webdesign ${short(t)} ${icon('arrow')}</span></a>`).join('')}
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Weitere Orte</p>
      <h2>Auch dort bin ich für Sie da.</h2>
      <p class="lead">Für diese Orte gibt es noch keine eigene Seite, betreut werden sie genauso: ${others.join(', ')}, dazu die Stuttgarter Stadtteile im Norden und der ganze Landkreis.</p>
      ${linkRow([['/webdesign-ludwigsburg/', 'Webdesign', 'layout'], ['/seo-ludwigsburg/', 'SEO & KI-Sichtbarkeit', 'search'], ['/preise/', 'Preise', 'euro']])}
    </div>
    <div class="reveal reveal-d1">${C.mapCard()}</div>
  </div>
</section>

${FAQ.html}
${C.ctaBand({ waText: 'Hallo Nikola, ich interessiere mich für eine neue Website für meinen Betrieb im Landkreis Ludwigsburg.' })}
`,
  };
}

module.exports = [hubPage(), ...TOWNS.map(townPage)];
module.exports.TOWNS = TOWNS;
