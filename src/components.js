// Reusable HTML building blocks.
const site = require('./site');
const { icon, logoMark } = require('./icons');
const M = require('./images.manifest.json');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const euro = (n) => n.toLocaleString('de-DE') + ' €';
const years = () => new Date().getFullYear() - site.since;

/** Responsive <img> from the manifest. */
function img(key, { sizes = '100vw', cls = '', eager = false, alt, style = '' } = {}) {
  const p = M.photos[key];
  if (!p) throw new Error('Unknown image ' + key);
  const w = p.widths[p.widths.length - 1];
  const def = p.widths.find((x) => x >= 800) || w;
  return `<img src="/assets/img/${p.name}-${def}.webp" srcset="${p.widths.map((x) => `/assets/img/${p.name}-${x}.webp ${x}w`).join(', ')}" sizes="${sizes}" width="${w}" height="${Math.round(w * p.ratio)}" alt="${esc(alt ?? p.alt)}"${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''} ${eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'}>`;
}
const hasImg = (key) => !!M.photos[key];

/* ---------- Buttons ---------- */
const startBtn = (label = 'Projekt starten', { cls = '', paket = '' } = {}) =>
  `<a class="btn ${cls}" href="/projekt-anfrage/${paket ? `?paket=${paket}` : ''}" data-open-funnel${paket ? ` data-paket="${paket}"` : ''}>${label} ${icon('arrow')}</a>`;
const waBtn = (label = 'WhatsApp', { text, cls = '' } = {}) =>
  `<a class="btn btn--wa ${cls}" href="${text ? site.wa(text) : site.whatsapp}" target="_blank" rel="noopener">${icon('wa')} ${label}</a>`;
const telBtn = (cls = 'btn--ghost') => `<a class="btn ${cls}" href="tel:${site.phoneIntl}">${icon('phone')} ${site.phone}</a>`;

const ticks = (items, cls = '') => `<ul class="ticks ${cls}">${items.map((i) => `<li>${icon(cls.includes('--x') ? 'x' : 'check')}<span>${i}</span></li>`).join('')}</ul>`;

const breadcrumb = (items) => `
<nav class="crumbs" aria-label="Brotkrumen"><ol>${items.map((it, i) => i === items.length - 1
  ? `<li aria-current="page">${esc(it.name)}</li>`
  : `<li><a href="${it.url}">${esc(it.name)}</a></li>`).join('')}</ol></nav>`;

const head = ({ eyebrow, title, lead, center = false, split = '', h = 'h2' }) => `
<div class="section__head${center ? ' section__head--center' : ''}${split ? ' section__head--split' : ''} reveal">
  <div>
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <${h}>${title}</${h}>
    ${lead ? `<p class="lead mb-0">${lead}</p>` : ''}
  </div>
  ${split}
</div>`;

/** Sub-page hero */
function pageHero({ crumbs, eyebrow, h1, lead, actions = true, aside = '' }) {
  return `
<section class="phero">
  <div class="bg-grid"></div><div class="glow glow--a"></div>
  <div class="container${aside ? ' phero__grid' : ''}">
    <div>
      ${breadcrumb(crumbs)}
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1>${h1}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
      ${actions ? `<div class="actions">${typeof actions === 'string' ? actions : startBtn('Kostenloses Erstgespräch', { cls: 'btn--lg' }) + waBtn('Per WhatsApp fragen', { cls: 'btn--lg' })}</div>` : ''}
    </div>
    ${aside ? `<div class="phero__aside reveal">${aside}</div>` : ''}
  </div>
</section>`;
}

const marquee = (items, grad = false) => {
  const row = items.map((t) => `<span>${t}</span>`).join('');
  return `<div class="marquee${grad ? ' marquee--grad' : ''}" aria-hidden="true"><div class="marquee__track">${row}${row}</div></div>`;
};

/* ---------- Services ---------- */
const serviceCards = (exclude = []) => `
<div class="grid grid--${4 - exclude.length > 3 ? 4 : 3}">${site.services.filter((s) => !exclude.includes(s.id)).map((s, i) => `
  <a class="card reveal reveal-d${i % 4}" href="${s.href}" data-spot>
    <span class="card__num">0${i + 1}</span>
    <span class="card__ico">${icon(s.icon)}</span>
    <h3>${s.title}</h3>
    <p>${s.short}</p>
    ${ticks(s.bullets)}
    <span class="link-arrow">Mehr erfahren ${icon('arrow')}</span>
  </a>`).join('')}
</div>`;

const features = (items, cols = 3) => `
<div class="grid grid--${cols}">${items.map(([ic, t, d], i) => `
  <div class="card reveal reveal-d${i % 3}" data-spot><span class="card__ico">${icon(ic)}</span><h3>${t}</h3><p class="mb-0">${d}</p></div>`).join('')}
</div>`;

const steps = (items) => `
<ol class="steps">${items.map(([t, d, time], i) => `
  <li class="step reveal reveal-d${i % 3}"><span class="step__n">${i + 1}</span>${time ? `<span class="step__time">${time}</span>` : ''}<h3>${t}</h3><p>${d}</p></li>`).join('')}
</ol>`;
const processSteps = () => steps([
  ['Kontakt', 'Sie schreiben mir per WhatsApp, Formular oder rufen an. Ich melde mich innerhalb von 24 Stunden.', 'Tag 1'],
  ['Kostenloses Erstgespräch', 'Wir sprechen über Ziele, Zielgruppe und Budget – persönlich in Ludwigsburg oder online. Ehrlich und ohne Verkaufsdruck.', '30 Min.'],
  ['Festpreis-Angebot & Plan', 'Sie erhalten ein klares Angebot mit Festpreis, Seitenstruktur und Zeitplan. Keine versteckten Kosten.', '48 h'],
  ['Design & Umsetzung', 'Ich gestalte, schreibe und entwickle Ihre Website. Sie sehen den Fortschritt live und geben Feedback.', '2–6 Wochen'],
  ['Launch & Google', 'Go-live mit SSL, Search Console, Google-Unternehmensprofil und sauberer Indexierung – Ihre Website ist sofort auffindbar.', 'Launch-Tag'],
  ['Betreuung & Wachstum', 'Ich bleibe Ihr Ansprechpartner: Änderungen, Updates, SEO-Ausbau. Ihre Website wächst mit Ihrem Unternehmen.', 'laufend'],
]);

/* ---------- Pricing ---------- */
function pricing({ compact = false } = {}) {
  const cards = site.packages.map((p, i) => `
  <article class="price${p.featured ? ' price--featured' : ''} reveal reveal-d${i}" id="paket-${p.id}">
    ${p.featured ? `<span class="price__badge">★ ${p.tag}</span>` : ''}
    <p class="price__tag">${p.featured ? 'Für wachsende Unternehmen' : p.tag}</p>
    <h3 class="price__name">${p.name}</h3>
    <p class="price__claim">${p.claim}</p>
    <p class="price__amount">${p.from ? '<small>ab</small>' : ''}<strong>${euro(p.price)}</strong></p>
    <p class="price__note">einmalig · ${site.kleinunternehmer ? 'Endpreis, keine MwSt. (§ 19 UStG)' : 'zzgl. MwSt.'}</p>
    <p class="price__time">${icon('clock')} Online in ${p.time}</p>
    ${ticks(compact ? p.features.slice(0, 6) : p.features)}
    <div class="actions">
      ${startBtn(p.featured ? `${p.name} starten` : `${p.name} anfragen`, { cls: `btn--block${p.featured ? '' : ' btn--ghost'}`, paket: p.id })}
      <a class="link-arrow" style="justify-content:center" href="${site.wa(`Hallo Nikola, ich interessiere mich für das Paket „${p.name}“ (ab ${euro(p.price)}). Können wir kurz sprechen?`)}" target="_blank" rel="noopener">${icon('wa')} Per WhatsApp fragen</a>
    </div>
  </article>`).join('');
  return `<div class="prices">${cards}</div>
  <div class="care reveal">
    <span class="card__ico mb-0" style="margin:0">${icon('shield')}</span>
    <div><h3>${site.care.name} – Wartung & Hosting</h3><p>${site.care.features.join(' · ')}. Optional, monatlich kündbar.</p></div>
    <p class="care__price mb-0">ab ${site.care.price} € <small>${site.care.unit}</small></p>
  </div>
  <div class="guarantee">
    <span>${icon('check')} Festpreis – keine versteckten Kosten</span>
    <span>${icon('check')} Kostenloses Erstgespräch</span>
    <span>${icon('check')} Die Website gehört zu 100 % Ihnen</span>
    <span>${icon('check')} Persönlicher Ansprechpartner</span>
  </div>`;
}

const compareTable = () => {
  const Y = `<span class="yes">${icon('check')}</span>`, N = `<span class="no">${icon('x')}</span>`, Mh = (t) => `<span class="meh">${t}</span>`;
  const rows = [
    ['Individuelles Design', Y, Mh('Vorlage'), Y],
    ['Ladezeit & PageSpeed', Y + ' blitzschnell', Mh('oft langsam'), Mh('unterschiedlich')],
    ['SEO & KI-Sichtbarkeit inklusive', Y, N, Mh('Aufpreis')],
    ['Texte, die verkaufen', Y, N, Mh('Aufpreis')],
    ['Fester, persönlicher Ansprechpartner', Y + ' Nikola direkt', N, Mh('wechselnd')],
    ['Erreichbar per WhatsApp', Y, N, N],
    ['Transparenter Festpreis', Y, Mh('Abo-Falle'), Mh('Stundensätze')],
    ['Typische Kosten', 'ab 990 €', '15–40 € / Monat, für immer', '5.000 – 15.000 €'],
  ];
  return `<div class="compare-wrap reveal"><table class="compare">
  <thead><tr><th scope="col">Vergleich</th><th scope="col" class="is-us">Niktos</th><th scope="col">Baukasten (Wix & Co.)</th><th scope="col">Große Agentur</th></tr></thead>
  <tbody>${rows.map(([a, b, c, d]) => `<tr><td>${a}</td><td class="is-us">${b}</td><td>${c}</td><td>${d}</td></tr>`).join('')}</tbody>
</table></div>`;
};

/* ---------- FAQ → FAQPage schema ---------- */
function faq(items, { title = 'Häufige Fragen', eyebrow = 'FAQ', lead = '', panel = false, id = 'faq' } = {}) {
  const html = `
<section class="section${panel ? ' section--panel' : ''}" id="${id}">
  <div class="container container--narrow">
    ${head({ eyebrow, title, lead, center: true })}
    <div class="faq">
      ${items.map(([q, a], i) => `<details class="reveal"${i === 0 ? ' open' : ''}><summary>${q}</summary><div class="faq__a"><p>${a}</p></div></details>`).join('')}
    </div>
    <p class="center muted" style="margin-top:28px">Ihre Frage ist nicht dabei? <a href="${site.whatsapp}" target="_blank" rel="noopener">Schreiben Sie mir einfach per WhatsApp</a>.</p>
  </div>
</section>`;
  const schema = {
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q.replace(/<[^>]+>/g, ''), acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
  };
  return { html, schema };
}

/* ---------- CTA band ---------- */
const ctaBand = ({ title = 'Bereit für eine Website, die <span style="color:#0a0c14">verkauft?</span>', text = 'Erzählen Sie mir in 60 Sekunden von Ihrem Projekt – Sie erhalten innerhalb von 24 Stunden eine ehrliche Einschätzung und ein Festpreis-Angebot. Kostenlos und unverbindlich.', waText } = {}) => `
<section class="section section--tight">
  <div class="container">
    <div class="cta reveal">
      <p class="eyebrow" style="color:#fff">Jetzt starten</p>
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="actions">
        ${startBtn('Projekt starten', { cls: 'btn--white btn--lg' })}
        ${waBtn('WhatsApp schreiben', { cls: 'btn--lg', text: waText })}
        ${telBtn('btn--ghost btn--lg')}
      </div>
      <p class="cta__note">${icon('clock')} ${site.replyPromise} · persönlich von ${site.owner}</p>
    </div>
  </div>
</section>`;

/* ---------- Portrait (placeholder until the pro photo exists) ---------- */
function portrait({ eager = false } = {}) {
  if (hasImg('portrait')) {
    return `<figure class="portrait mb-0" style="margin:0">${img('portrait', { sizes: '(max-width: 980px) 100vw, 520px', eager })}
      <figcaption class="portrait__cap"><strong>${site.owner}</strong><span>Inhaber · Webdesigner & SEO</span></figcaption></figure>`;
  }
  return `<div class="portrait" role="img" aria-label="${site.owner} – Inhaber von Niktos, Webdesigner und SEO-Experte aus Ludwigsburg">
    <div class="portrait__code" aria-hidden="true"><b>const</b> niktos = {<br>&nbsp;&nbsp;design: <i>'individuell'</i>,<br>&nbsp;&nbsp;speed: <i>'100'</i>,<br>&nbsp;&nbsp;seo: <i>'lokal + KI'</i>,<br>&nbsp;&nbsp;ziel: <i>'mehr Kunden'</i><br>};</div>
    <span class="portrait__chip"><span class="dot"></span> ${years()} Jahre Erfahrung</span>
    <div class="portrait__mono">${logoMark(200)}</div>
    <div class="portrait__cap"><strong>${site.owner}</strong><span>Inhaber · Webdesigner & SEO · ${site.address.city}</span></div>
  </div>`;
}

/* ---------- Browser frame + projects ---------- */
const browser = (key, domain, { sizes = '(max-width: 980px) 100vw, 60vw', eager = false } = {}) => `
<div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${icon('lock')} ${domain}</span></div>${img(key, { sizes, eager })}</div>`;

const projects = (list = site.projects, { h = 'h3' } = {}) => list.map((p, i) => `
<article class="project${i % 2 ? ' project--rev' : ''} reveal" id="projekt-${p.id}">
  <div class="project__media">
    ${browser(p.img, p.domain)}
    ${p.mobile ? `<div class="project__phone">${img(p.mobile, { sizes: '180px', alt: '' })}</div>` : ''}
  </div>
  <div>
    <div class="project__meta">${p.tags.map((t, k) => `<span class="tag${k === 0 ? ' tag--b' : ''}">${t}</span>`).join('')}</div>
    <${h}>${p.name}</${h}>
    <p class="project__place">${icon('pin')} ${p.place} · ${p.branch}</p>
    <p style="color:var(--tx2)">${p.text}</p>
    <a class="link-arrow" href="${p.url}" target="_blank" rel="noopener">Website ansehen ${icon('arrowUpRight')}</a>
  </div>
</article>`).join('');

/* ---------- Area + map (Google Maps only after click) ---------- */
const area = ({ panel = false, title = 'Webdesign für Ludwigsburg, Stuttgart & die ganze Region' } = {}) => `
<section class="section${panel ? ' section--panel' : ''}" id="einsatzgebiet">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Regional verwurzelt · deutschlandweit tätig</p>
      <h2>${title}</h2>
      <p class="lead">Niktos sitzt in <strong>Ludwigsburg</strong>. Kunden aus dem Landkreis Ludwigsburg und der Region Stuttgart treffe ich gerne persönlich – alle anderen betreue ich genauso persönlich per Video-Call, Telefon und WhatsApp.</p>
      <ul class="towns">${site.towns.map((t, i) => `<li class="${i < 2 ? 'is-main' : ''}">${icon('pin')}${t}</li>`).join('')}</ul>
      <div class="actions">
        <a class="btn btn--ghost btn--sm" href="${site.googleMapsUrl}" target="_blank" rel="noopener">${icon('map')} Auf Google Maps ansehen</a>
        <a class="btn btn--ghost btn--sm" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} ${site.instagramHandle}</a>
      </div>
    </div>
    <div class="reveal reveal-d1">
      <div class="map" data-src="${site.mapEmbed}">
        <div class="map__consent">
          <div>
            <div class="map__pin">${icon('pin')}</div>
            <p><strong>${site.name} · Webdesign & SEO</strong><br>${site.address.zip} ${site.address.city}</p>
            <p class="small">Mit Klick auf „Karte laden“ wird Google Maps geladen und Daten an Google übertragen – siehe <a href="/datenschutzerklaerung/">Datenschutz</a>.</p>
            <div class="actions"><button class="btn btn--sm" type="button" data-map-load>Karte laden</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

/* ---------- Funnel (step-by-step enquiry) ---------- */
function funnel(px = 'f') {
  const opt = (name, value, label, ic, sub = '') => `<label class="opt"><input type="radio" name="${name}" value="${esc(value)}" data-label="${esc(label)}"><span>${ic ? icon(ic) : ''}<span>${label}${sub ? `<small>${sub}</small>` : ''}</span></span></label>`;
  const step = (n, q, hint, body) => `
  <div class="fstep${n === 1 ? ' is-active' : ''}" data-step="${n}" role="group" aria-labelledby="${px}-q${n}">
    <span class="fstep__n" aria-hidden="true">${n}</span>
    <p class="fstep__q" id="${px}-q${n}">${q}</p>
    <div class="fstep__sum"><b data-sum></b><button type="button" class="fstep__edit" data-edit>ändern</button></div>
    ${hint ? `<p class="fstep__hint">${hint}</p>` : ''}
    <div class="fstep__body">${body}</div>
  </div>`;
  return `
<form class="funnel" action="/kontakt.php" method="post" data-funnel novalidate>
  <input type="hidden" name="form" value="projekt">
  <input type="hidden" name="paket" value="">
  <input type="hidden" name="t" value="">
  <div class="hp" aria-hidden="true"><label for="${px}-hp">Firma-Website (leer lassen)</label><input id="${px}-hp" name="_gotcha" tabindex="-1" autocomplete="off"></div>
  <div class="funnel__top"><span data-count>Schritt 1 von 6</span><span>${icon('clock')} dauert ca. 60 Sekunden</span></div>
  <div class="funnel__bar" aria-hidden="true"><i></i></div>
  ${step(1, 'Worum geht es bei Ihrem Projekt?', 'Wählen Sie, was am besten passt.', `<div class="opts">
    ${opt('anliegen', 'Neue Website', 'Neue Website', 'rocket')}
    ${opt('anliegen', 'Website-Relaunch', 'Relaunch meiner Website', 'refresh')}
    ${opt('anliegen', 'SEO & Google-Sichtbarkeit', 'SEO & Google-Sichtbarkeit', 'search')}
    ${opt('anliegen', 'Wartung & Betreuung', 'Wartung & Betreuung', 'shield')}
    ${opt('anliegen', 'Website-Check', 'Website-Check (' + site.checkPrice + ' €)', 'gauge')}
    ${opt('anliegen', 'Etwas anderes', 'Etwas anderes', 'chat')}
  </div>`)}
  ${step(2, 'Haben Sie bereits eine Website?', '', `<div class="opts">
    ${opt('hat_website', 'Ja', 'Ja, habe ich', 'globe')}
    ${opt('hat_website', 'Nein', 'Nein, noch nicht', 'sparkle')}
  </div>
  <div class="field" data-if="hat_website=Ja" hidden><label for="${px}-url">Ihre aktuelle Website-Adresse</label><input id="${px}-url" name="website_url" inputmode="url" placeholder="z. B. www.ihre-firma.de" autocomplete="url"></div>
  <button type="button" class="btn btn--sm fnext" data-next hidden>Weiter ${icon('arrow')}</button>`)}
  ${step(3, 'In welcher Branche sind Sie tätig?', 'So kann ich Ihnen passende Beispiele zeigen.', `<div class="opts">
    ${opt('branche', 'Handwerk & Bau', 'Handwerk & Bau', 'layers')}
    ${opt('branche', 'Dienstleistung & Beratung', 'Dienstleistung & Beratung', 'handshake')}
    ${opt('branche', 'Gastronomie & Hotel', 'Gastronomie & Hotel', 'heart')}
    ${opt('branche', 'Gesundheit, Beauty & Fitness', 'Gesundheit, Beauty & Fitness', 'sparkle')}
    ${opt('branche', 'Handel & Onlineshop', 'Handel & Onlineshop', 'euro')}
    ${opt('branche', 'Immobilien & Hausverwaltung', 'Immobilien & Hausverwaltung', 'map')}
    ${opt('branche', 'Verein, Soziales & Bildung', 'Verein, Soziales & Bildung', 'users')}
    ${opt('branche', 'Sonstiges', 'Sonstiges', 'plus')}
  </div>`)}
  ${step(4, 'Welches Budget haben Sie eingeplant?', 'Eine grobe Richtung genügt – so passt das Angebot von Anfang an.', `<div class="opts">
    ${opt('budget', 'bis 1.000 €', 'bis 1.000 €', '', 'passt zu Launch')}
    ${opt('budget', '1.000 – 2.000 €', '1.000 – 2.000 €', '', 'passt zu Boost')}
    ${opt('budget', '2.000 – 3.500 €', '2.000 – 3.500 €', '', 'Boost + Extras')}
    ${opt('budget', 'über 3.500 €', 'über 3.500 €', '', 'passt zu Dominate')}
    ${opt('budget', 'Noch unklar', 'Noch unklar – beraten Sie mich', '')}
  </div>`)}
  ${step(5, 'Wann soll Ihre Website online gehen?', '', `<div class="opts">
    ${opt('zeitrahmen', 'So schnell wie möglich', 'So schnell wie möglich', 'bolt')}
    ${opt('zeitrahmen', 'In 1–3 Monaten', 'In 1–3 Monaten', 'calendar')}
    ${opt('zeitrahmen', 'In 3–6 Monaten', 'In 3–6 Monaten', 'clock')}
    ${opt('zeitrahmen', 'Ich informiere mich erst', 'Ich informiere mich erst', 'eye')}
  </div>`)}
  ${step(6, 'Fast geschafft – wie erreiche ich Sie?', 'Sie erhalten innerhalb von 24 Stunden eine persönliche Antwort. Kein Spam, versprochen.', `
  <div class="form__grid">
    <div class="field"><label for="${px}-name">Name *</label><input id="${px}-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="${px}-firma">Unternehmen</label><input id="${px}-firma" name="firma" autocomplete="organization"></div>
    <div class="field"><label for="${px}-mail">E-Mail *</label><input id="${px}-mail" name="email" type="email" autocomplete="email" required></div>
    <div class="field"><label for="${px}-tel">Telefon / WhatsApp</label><input id="${px}-tel" name="telefon" type="tel" autocomplete="tel"></div>
    <div class="field form__full"><fieldset><legend>Wie darf ich mich melden?</legend><div class="opts opts--3">
      ${opt('kontaktweg', 'WhatsApp', 'WhatsApp', 'wa')}
      ${opt('kontaktweg', 'Anruf', 'Anruf', 'phone')}
      ${opt('kontaktweg', 'E-Mail', 'E-Mail', 'mail')}
    </div></fieldset></div>
    <div class="field form__full"><label for="${px}-msg">Möchten Sie noch etwas ergänzen? (optional)</label><textarea id="${px}-msg" name="nachricht" rows="3" placeholder="z. B. Wünsche, Beispiele, die Ihnen gefallen, Anzahl Seiten …" style="min-height:100px"></textarea></div>
    <label class="consent form__full"><input type="checkbox" name="datenschutz" value="ja" required><span>Ich habe die <a href="/datenschutzerklaerung/" target="_blank">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *</span></label>
    <div class="form__full"><button class="btn btn--lg btn--block" type="submit">Kostenloses Angebot anfordern ${icon('arrow')}</button></div>
  </div>
  <div class="form__trust"><span>${icon('check')} Kostenlos & unverbindlich</span><span>${icon('check')} Antwort in 24 h</span><span>${icon('lock')} SSL-verschlüsselt</span></div>`)}
  <div class="form__status" role="status" aria-live="polite"></div>
</form>`;
}

const funnelDialog = () => `
<dialog class="fdialog" id="funnel" aria-labelledby="funnel-title">
  <div class="fdialog__head"><strong id="funnel-title">${require('./icons').logoMark(28)} Projekt starten</strong><button class="fdialog__close" type="button" data-close aria-label="Schließen">${icon('close')}</button></div>
  <div class="fdialog__body">${funnel('d')}</div>
</dialog>`;

/* ---------- Classic contact form ---------- */
const contactForm = () => `
<form class="form reveal reveal-d1" action="/kontakt.php" method="post" data-contact-form novalidate id="formular">
  <h2>Schreiben Sie mir</h2>
  <p class="muted">Klassisch per Formular – ich antworte innerhalb von 24 Stunden.</p>
  <div class="form__grid">
    <input type="hidden" name="form" value="kontakt">
    <div class="field"><label for="c-name">Name *</label><input id="c-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="c-firma">Unternehmen</label><input id="c-firma" name="firma" autocomplete="organization"></div>
    <div class="field"><label for="c-mail">E-Mail *</label><input id="c-mail" name="email" type="email" autocomplete="email" required></div>
    <div class="field"><label for="c-tel">Telefon / WhatsApp</label><input id="c-tel" name="telefon" type="tel" autocomplete="tel"></div>
    <div class="field form__full"><label for="c-anliegen">Worum geht es?</label>
      <select id="c-anliegen" name="anliegen">${['Neue Website', 'Website-Relaunch', 'SEO & Google-Sichtbarkeit', 'Wartung & Betreuung', 'Website-Check', ...site.packages.map((p) => `Paket ${p.name}`), 'Sonstiges'].map((o) => `<option>${o}</option>`).join('')}</select></div>
    <div class="field form__full"><label for="c-msg">Ihre Nachricht *</label><textarea id="c-msg" name="nachricht" required placeholder="Erzählen Sie kurz von Ihrem Unternehmen und Ihrem Vorhaben …"></textarea></div>
    <input type="hidden" name="t" value="">
    <div class="hp" aria-hidden="true"><label for="c-hp">Firma-Website (leer lassen)</label><input id="c-hp" name="_gotcha" tabindex="-1" autocomplete="off"></div>
    <label class="consent form__full"><input type="checkbox" name="datenschutz" value="ja" required><span>Ich habe die <a href="/datenschutzerklaerung/">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *</span></label>
    <div class="form__full"><button class="btn btn--lg btn--block" type="submit">Nachricht senden ${icon('arrow')}</button></div>
  </div>
  <div class="form__status" role="status" aria-live="polite"></div>
</form>`;

const contactCards = () => `
<div class="ccards">
  <a class="ccard ccard--wa" href="${site.whatsapp}" target="_blank" rel="noopener"><span class="ccard__ico">${icon('wa')}</span><span><small>WhatsApp – am schnellsten</small><strong>Jetzt Nachricht schreiben</strong></span>${icon('arrowUpRight')}</a>
  <a class="ccard" href="tel:${site.phoneIntl}"><span class="ccard__ico">${icon('phone')}</span><span><small>Telefon</small><strong>${site.phone}</strong></span>${icon('arrowUpRight')}</a>
  <a class="ccard" href="mailto:${site.email}"><span class="ccard__ico">${icon('mail')}</span><span><small>E-Mail</small><strong>${site.email}</strong></span>${icon('arrowUpRight')}</a>
  <a class="ccard" href="${site.instagram}" target="_blank" rel="noopener"><span class="ccard__ico">${icon('insta')}</span><span><small>Instagram</small><strong>${site.instagramHandle}</strong></span>${icon('arrowUpRight')}</a>
  <a class="ccard" href="${site.googleMapsUrl}" target="_blank" rel="noopener"><span class="ccard__ico">${icon('pin')}</span><span><small>Standort</small><strong>${site.address.zip} ${site.address.city} & Region Stuttgart</strong></span>${icon('arrowUpRight')}</a>
</div>`;

module.exports = { esc, euro, years, img, hasImg, icon, logoMark, startBtn, waBtn, telBtn, ticks, breadcrumb, head, pageHero, marquee, serviceCards, features, steps, processSteps, pricing, compareTable, faq, ctaBand, portrait, browser, projects, area, funnel, funnelDialog, contactForm, contactCards };
