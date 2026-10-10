// Reusable HTML building blocks ("Sticker Studio" design).
const site = require('./site');
const { icon, logoMark } = require('./icons');
const M = require('./images.manifest.json');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const euro = (n) => n.toLocaleString('de-DE') + ' €';

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

/* ---------- Stickers & handwritten bits ---------- */
const sticker = (big, small = '', cls = '', style = '') => `<span class="sticker ${cls}"${style ? ` style="${style}"` : ''} aria-hidden="true"><span>${small && cls.includes('top') ? `<small>${small}</small>` : ''}<b>${big}</b>${small && !cls.includes('top') ? `<small>${small}</small>` : ''}</span></span>`;
// hand-drawn arrow (points down-left by default)
const scribbleArrow = (d = 'M50 4C38 10 24 20 14 36m0 0 1-12m-1 12 11-4') => `<svg viewBox="0 0 56 46" aria-hidden="true"><path d="${d}" fill="none" stroke="#0b0d14" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const arrowNote = (text, style = '') => `<span class="arrow-note"${style ? ` style="${style}"` : ''} aria-hidden="true">${scribbleArrow()}${text}</span>`;

/** Typing headline part. Invisible "ghost" copies of every phrase reserve the space of the
 *  largest one, so the headline never grows or shrinks while the words change. */
const rotator = (words) => `<span class="rot">${words.map((w) => `<span class="rot__g" data-t="${esc(w)}" aria-hidden="true"></span>`).join('')}<span class="grad type" data-type="${words.map(esc).join('|')}">${esc(words[0])}</span></span>`;

/** "Alles aus einer Hand" – one contact for everything */
const allInOne = ({ panel = false } = {}) => `
<section class="section${panel ? ' section--panel' : ''}" id="alles-aus-einer-hand">
  <div class="container split split--top">
    <div class="reveal">
      <p class="eyebrow">Alles aus einer Hand</p>
      <h2>Ein Ansprechpartner. <span class="hl">Null Stress.</span></h2>
      <p class="lead">Webdesigner, Texter, Hosting-Firma, SEO-Agentur und jemand für Updates – das sind schnell fünf Dienstleister, fünf Rechnungen und fünf Telefonnummern. Bei Niktos kümmere ich mich um alles. Sie haben eine Nummer, einen Festpreis und eine Person, die Ihr Projekt kennt.</p>
      <div class="aio__vs">
        <div class="aio__col aio__col--no"><p class="aio__label">Ohne Niktos</p>${ticks(['5 Dienstleister koordinieren', 'Jeder schiebt es auf den anderen', 'Viele Rechnungen, viele Verträge'], 'ticks--x')}</div>
        <div class="aio__col aio__col--yes"><p class="aio__label">Mit Niktos</p>${ticks(['Ein Ansprechpartner: ich', 'Ein Festpreis, alles drin', 'Änderung? Eine WhatsApp genügt'])}</div>
      </div>
    </div>
    <div class="reveal reveal-d1">${aioCard()}</div>
  </div>
</section>`;

const aioCard = () => `
      <div class="aio">
        <div class="aio__hub">${logoMark(54)}<span><strong>Niktos</strong>kümmert sich um</span></div>
        <ul class="aio__grid">${[
          ['layout', 'Design & Konzept'], ['pen', 'Texte, die verkaufen'], ['globe', 'Domain & E-Mail'], ['lock', 'Hosting & SSL'],
          ['search', 'SEO & Google'], ['map', 'Google-Profil & Maps'], ['wa', 'WhatsApp & Formulare'], ['shield', 'Sicherheit & Backups'],
          ['refresh', 'Wartung & Updates'], ['chat', 'Änderungen & Support'],
        ].map(([ic, t]) => `<li><span class="aio__ico">${icon(ic)}</span>${t}</li>`).join('')}</ul>
      </div>`;

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
  <div class="dots"></div>
  <div class="container${aside ? ' phero__grid' : ''}" style="position:relative">
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

const marquee = (items, tilt = false) => {
  const row = items.map((t) => `<span>${t.replace('⚡', `<i class="bolt">${icon('bolt')}</i>`)}</span>`).join('');
  return `<div class="marquee${tilt ? ' marquee--grad' : ''}" aria-hidden="true"><div class="marquee__track">${row}${row}</div></div>`;
};

/* ---------- Services ---------- */
const serviceCards = (exclude = []) => `
<div class="grid grid--${4 - exclude.length > 3 ? 4 : 3}">${site.services.filter((s) => !exclude.includes(s.id)).map((s, i) => `
  <a class="card reveal reveal-d${i % 4}" href="${s.href}">
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
  <div class="card reveal reveal-d${i % 3}"><span class="card__ico">${icon(ic)}</span><h3>${t}</h3><p class="mb-0">${d}</p></div>`).join('')}
</div>`;

/** Generic numbered steps. items: [title, text, time?] */
const steps = (items) => `
<ol class="steps">${items.map(([t, d, time], i) => `
  <li class="step reveal reveal-d${i % 3}"><span class="step__n" aria-hidden="true">0${i + 1}</span><span class="step__badge" aria-hidden="true">${i + 1}</span>${time ? `<span class="step__time">${time}</span>` : ''}<h3>${t}</h3><p>${d}</p></li>`).join('')}
</ol>`;

/** The Niktos process – with the blue icon stickers from the old niktos.com */
const processSteps = () => `
<ol class="steps">${[
  ['Kontakt', 'Sie schreiben mir per WhatsApp, rufen an oder nutzen das Formular. Ich melde mich innerhalb von 24 Stunden.', 'Tag 1'],
  ['Kennenlernen', 'Wir reden über Ihr Unternehmen, Ihre Kunden und Ihr Ziel. Gern bei einem Kaffee in Ludwigsburg, sonst per Video.', 'ca. 30 Minuten'],
  ['Angebot & Plan', 'Sie bekommen einen Festpreis, die Seitenstruktur und einen klaren Zeitplan. Ohne Kleingedrucktes.', 'innerhalb von 48 h'],
  ['Design & Umsetzung', 'Ich gestalte, schreibe und baue Ihre Website. Sie sehen jeden Zwischenstand und sagen mir ehrlich Ihre Meinung.', '2 bis 6 Wochen'],
  ['Launch', 'Ihre Website geht online, mit Google Search Console, Unternehmensprofil und allem, was dazugehört.', 'der große Tag'],
  ['Betreuung', 'Ich bleibe Ihr Ansprechpartner. Änderungen, Updates und neue Ideen – kurze WhatsApp genügt.', 'solange Sie möchten'],
].map(([t, d, time], i) => `
  <li class="step reveal reveal-d${i % 3}">
    <span class="step__n" aria-hidden="true">0${i + 1}</span>
    <img class="step__img" src="/assets/img/ablauf-${i + 1}.webp" width="76" height="76" alt="" loading="lazy">
    <span class="step__time">${time}</span>
    <h3>${i + 1}. ${t}</h3><p>${d}</p>
  </li>`).join('')}
</ol>`;

/* ---------- Pricing ---------- */
function pricing({ compact = false } = {}) {
  const cards = site.packages.map((p, i) => `
  <article class="price${p.featured ? ' price--featured' : ''} reveal reveal-d${i}" id="paket-${p.id}">
    ${p.featured ? `<span class="price__badge">Die meisten nehmen dieses!</span>` : ''}
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
    <span class="card__ico" style="margin:0">${icon('shield')}</span>
    <div><h3>${site.care.name} – Wartung & Hosting</h3><p>${site.care.features.join(' · ')}. Optional und monatlich kündbar.</p></div>
    <p class="care__price mb-0">ab ${site.care.price} € <small>${site.care.unit}</small></p>
  </div>
  <div class="guarantee">
    <span>${icon('check')} Festpreis, keine versteckten Kosten</span>
    <span>${icon('check')} Kostenloses Erstgespräch</span>
    <span>${icon('check')} Die Website gehört Ihnen</span>
    <span>${icon('check')} Alles aus einer Hand</span>
  </div>`;
}

const compareTable = () => {
  const Y = `<span class="yes">${icon('check')}</span>`, N = `<span class="no">${icon('x')}</span>`, Mh = (t) => `<span class="meh">${t}</span>`;
  const rows = [
    ['Individuelles Design', Y, Mh('Vorlage'), Y],
    ['Ladezeit & PageSpeed', Y + ' sehr schnell', Mh('oft langsam'), Mh('unterschiedlich')],
    ['SEO & KI-Sichtbarkeit inklusive', Y, N, Mh('Aufpreis')],
    ['Texte, die verkaufen', Y, N, Mh('Aufpreis')],
    ['Fester, persönlicher Ansprechpartner', Y + ' Nikola direkt', N, Mh('wechselnd')],
    ['Erreichbar per WhatsApp', Y, N, N],
    ['Transparenter Festpreis', Y, Mh('laufende Abos'), Mh('Stundensätze')],
    ['Typische Kosten', 'ab 990 € Festpreis', 'mehrere Abos, dauerhaft', '5.000 – 15.000 €'],
  ];
  return `<div class="compare-wrap reveal"><table class="compare">
  <thead><tr><th scope="col">Vergleich</th><th scope="col" class="is-us">Niktos</th><th scope="col">Baukasten</th><th scope="col">Große Agentur</th></tr></thead>
  <tbody>${rows.map(([a, b, c, d]) => `<tr><th scope="row">${a}</th><td class="is-us" data-l="Niktos">${b}</td><td data-l="Baukasten">${c}</td><td data-l="Agentur">${d}</td></tr>`).join('')}</tbody>
</table></div>`;
};

/* ---------- FAQ → FAQPage schema ---------- */
function faq(items, { title = 'Häufige Fragen', eyebrow = 'Gut zu wissen', lead = '', panel = false, id = 'faq' } = {}) {
  const html = `
<section class="section${panel ? ' section--panel' : ''}" id="${id}">
  <div class="container container--narrow">
    ${head({ eyebrow, title, lead, center: true })}
    <div class="faq">
      ${items.map(([q, a], i) => `<details class="reveal"${i === 0 ? ' open' : ''}><summary>${q}</summary><div class="faq__a"><p>${a}</p></div></details>`).join('')}
    </div>
    <p class="center" style="margin-top:30px"><span class="note note--blue">Ihre Frage fehlt?</span> <a href="${site.whatsapp}" target="_blank" rel="noopener">Schreiben Sie mir einfach per WhatsApp.</a></p>
  </div>
</section>`;
  const schema = {
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q.replace(/<[^>]+>/g, ''), acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
  };
  return { html, schema };
}

/* ---------- CTA band ---------- */
const ctaBand = ({ title = 'Lassen Sie uns <span class="hl">gemeinsam starten.</span>', text = 'Erzählen Sie mir in einer Minute von Ihrem Projekt. Innerhalb von 24 Stunden bekommen Sie eine ehrliche Einschätzung und ein Festpreis-Angebot – alles aus einer Hand. Kostenlos und unverbindlich.', waText } = {}) => `
<section class="section section--tight">
  <div class="container">
    <div class="cta reveal">
      ${sticker('24 h', 'Antwort', 'sticker--top')}
      <p class="eyebrow">Bereit?</p>
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="actions">
        ${startBtn('Projekt starten', { cls: 'btn--white btn--lg' })}
        ${waBtn('WhatsApp schreiben', { cls: 'btn--lg', text: waText })}
        ${telBtn('btn--ghost btn--lg')}
      </div>
      <p class="cta__note">${icon('clock')} Antwort innerhalb von 24 Stunden (werktags)</p>
    </div>
  </div>
</section>`;

/* ---------- Portrait → polaroid (placeholder until the pro photo exists) ---------- */
function portrait({ eager = false } = {}) {
  const inner = hasImg('portrait')
    ? img('portrait', { sizes: '(max-width: 980px) 90vw, 440px', eager })
    : `<div class="portrait__mono">${logoMark(200)}</div>`;
  return `<figure class="portrait"${hasImg('portrait') ? '' : ` role="img" aria-label="${site.owner} – Inhaber von Niktos, Webdesigner aus Ludwigsburg"`}>
    <span class="tape" aria-hidden="true"></span>
    <div class="portrait__img">${inner}</div>
    <figcaption class="portrait__cap">${site.ownerFirst} · ${site.address.city}</figcaption>
  </figure>`;
}

/* ---------- Browser frame + projects ---------- */
const browser = (key, domain, { sizes = '(max-width: 980px) 100vw, 60vw', eager = false } = {}) => `
<div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${icon('lock')} ${domain}</span></div><div class="browser__body">${img(key, { sizes, eager })}</div></div>`;

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

/* ---------- Avatar (real photo of Nikola) ---------- */
const avatar = (size = 48, cls = '') => {
  if (!hasImg('avatar')) return `<span class="avatar avatar--mono ${cls}" style="width:${size}px;height:${size}px">${logoMark(size)}</span>`;
  const a = M.photos.avatar;
  return `<img class="avatar ${cls}" src="/assets/img/${a.name}-${a.widths[a.widths.length - 1]}.webp" width="${size}" height="${size}" alt="${esc(site.owner)}" loading="lazy" decoding="async">`;
};

/* ---------- Hero visual: a website assembles itself (CSS only, complete at rest) ---------- */
const builder = () => `
<div class="build" aria-label="Illustration: Nikola gestaltet eine neue Website">
  <span class="stage__bg" aria-hidden="true"></span>
  <div class="browser build__browser" aria-hidden="true">
    <div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${icon('lock')} ihre-firma.de</span></div>
    <div class="bs">
      <div class="bs-nav b1"><span class="bs-logo"><i></i>Ihre Firma</span><span class="bs-links"><i></i><i></i><i></i></span><span class="bs-cta">Anfrage</span></div>
      <div class="bs-hero">
        <div class="b2">
          <p class="bs-kicker">Meisterbetrieb · Ludwigsburg</p>
          <p class="bs-h">Ihr Betrieb.<br>Endlich online.</p>
          <p class="bs-line"></p><p class="bs-line bs-line--s"></p>
          <div class="bs-btns"><span class="bs-btn">Angebot anfragen</span><span class="bs-btn bs-btn--wa">${icon('wa')} WhatsApp</span></div>
        </div>
        <div class="bs-img b3"><svg viewBox="0 0 120 90"><rect width="120" height="90" fill="#cfe0ff"/><circle cx="90" cy="24" r="10" fill="#ffd23f"/><path d="M0 90 38 46l24 26 18-18 40 36z" fill="#0a66ff"/><path d="M0 90 38 46l24 26 18-18 40 36" fill="none" stroke="#0b0d14" stroke-width="2"/></svg></div>
      </div>
      <div class="bs-cards b4"><div><i></i><b></b><s></s></div><div><i></i><b></b><s></s></div><div><i></i><b></b><s></s></div></div>
    </div>
  </div>
  <div class="build__phone b5" aria-hidden="true"><span class="bp-notch"></span><span class="bp-logo"></span><span class="bp-h"></span><span class="bp-l"></span><span class="bp-l bp-l--s"></span><span class="bp-btn"></span><span class="bp-card"></span><span class="bp-card"></span></div>
  <div class="build__toast b6" aria-hidden="true"><span class="build__toast-ico">${icon('wa')}</span><span><strong>Neue Anfrage</strong>über Ihre Website · gerade eben</span></div>
  <div class="build__me b7">${avatar(46)}<span><strong>${site.ownerFirst}</strong>baut Ihre Website</span></div>
  ${sticker(euro(site.packages[0].price), 'Festpreis ab', 'sticker--top')}
  <svg class="build__cursor b8" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.5 19 12l-6.6 1.3L16 20.6l-2.7 1.2-3.5-7.4L4 18.6z" fill="#0b0d14" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>
</div>`;

/* ---------- Small illustrations for sub-page heroes (decorative, labelled) ---------- */
const illuChat = () => `
<div class="chatc" aria-label="Beispielhafte Darstellung eines WhatsApp-Chats mit Nikola">
  <div class="chatc__head">${avatar(40)}<span><strong>${site.ownerFirst} · Niktos</strong><small>Antwort meist am selben Tag</small></span><span class="chatc__wa">${icon('wa')}</span></div>
  <div class="chatc__body">
    <p class="cb cb--in">Hallo Nikola, ich brauche eine neue Website für meinen Betrieb. Geht das bis Frühjahr?</p>
    <p class="cb cb--out">Hallo! Sehr gern, das klappt gut. Passt Ihnen morgen früh ein kurzes Telefonat?</p>
    <p class="cb cb--in">Morgen um 9 Uhr wäre perfekt.</p>
    <p class="cb cb--out">Super, dann rufe ich Sie um 9 Uhr an. Bis morgen!</p>
  </div>
  <div class="chatc__foot"><span>Nachricht schreiben …</span>${icon('arrow')}</div>
  <p class="illu-cap">Beispielhafte Darstellung</p>
</div>`;

const illuStatus = () => `
<div class="statusc" aria-label="Beispielhafte Darstellung eines Website-Status">
  <div class="statusc__head"><span class="statusc__dot"></span><span><strong>Alles im grünen Bereich</strong><small>ihre-firma.de</small></span></div>
  <ul>${[['lock', 'SSL-Zertifikat', 'aktiv'], ['refresh', 'Backup', 'heute, 03:00'], ['shield', 'Sicherheits-Updates', 'installiert'], ['bolt', 'Ladezeit', 'schnell'], ['wa', 'Änderung per WhatsApp', 'erledigt']].map(([ic, t, v]) => `<li><span class="statusc__ico">${icon(ic)}</span><span>${t}</span><b>${icon('check')} ${v}</b></li>`).join('')}</ul>
  <p class="illu-cap">Beispielhafte Darstellung</p>
</div>`;

const illuQuote = () => {
  const p = site.packages.find((x) => x.featured) || site.packages[0];
  return `
<div class="quotec" aria-label="Beispiel eines Festpreis-Angebots">
  <div class="quotec__head">${logoMark(34)}<span><strong>Angebot</strong><small>Website-Paket ${p.name}</small></span></div>
  <ul>${[['Individuelles Design', 'inklusive'], ['Bis zu 8 Unterseiten', 'inklusive'], ['SEO-Texte', 'inklusive'], ['Google-Unternehmensprofil', 'inklusive'], ['3 Monate Support', 'inklusive']].map(([t, v]) => `<li><span>${t}</span><b>${v}</b></li>`).join('')}</ul>
  <div class="quotec__total"><span>Festpreis</span><strong>${euro(p.price)}</strong></div>
  <span class="quotec__stamp">Keine versteckten Kosten</span>
  <p class="illu-cap">Beispiel</p>
</div>`;
};

const factsCard = () => `
<div class="facts">
  <div class="facts__head">${avatar(64)}<span><strong>${site.owner}</strong><small>Inhaber · Webdesigner & SEO</small></span></div>
  <dl>
    <div><dt>Sitz</dt><dd>${site.address.city}</dd></div>
    <div><dt>Unterwegs in</dt><dd>Landkreis Ludwigsburg & Region Stuttgart</dd></div>
    <div><dt>Sprachen</dt><dd>Deutsch, Kroatisch</dd></div>
    <div><dt>Mache ich</dt><dd>Websites, SEO, Google-Profil, Wartung</dd></div>
    <div><dt>Erreichbar</dt><dd>WhatsApp, Telefon, E-Mail</dd></div>
  </dl>
  <a class="btn btn--wa btn--block" href="${site.whatsapp}" target="_blank" rel="noopener">${icon('wa')} Direkt schreiben</a>
</div>`;

/* ---------- Google Maps card: illustrated map + Niktos pin, real map after click ---------- */
const gmark = `<svg class="gmark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z" fill="#ea4335"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>`;
const mapArt = `<svg class="map__art" viewBox="0 0 400 310" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="400" height="310" fill="#eef3fb"/>
  <path d="M0 40h400M0 120h400M0 205h400M0 270h400M60 0v310M150 0v310M250 0v310M340 0v310" stroke="#dde4f1" stroke-width="10"/>
  <path d="M40 0c20 60-10 110 30 160s110 40 120 100 10 50 10 50" fill="none" stroke="#b8d3ff" stroke-width="22" stroke-linecap="round"/>
  <ellipse cx="300" cy="80" rx="58" ry="34" fill="#d6ecd2"/><ellipse cx="110" cy="250" rx="40" ry="26" fill="#d6ecd2"/><rect x="262" y="210" width="80" height="50" rx="12" fill="#d6ecd2"/>
  <path d="M0 150C90 140 150 170 210 150s120-60 190-50" fill="none" stroke="#fff" stroke-width="12"/><path d="M0 150C90 140 150 170 210 150s120-60 190-50" fill="none" stroke="#ffd23f" stroke-width="5"/>
  <path d="M200 0c10 80-20 140 0 200s40 110 40 110" fill="none" stroke="#fff" stroke-width="9"/>
  <text x="292" y="86" font-family="Caveat, cursive" font-size="20" font-weight="700" fill="#3f7a3a" text-anchor="middle">Schlosspark</text>
  <text x="74" y="118" font-family="Caveat, cursive" font-size="20" font-weight="700" fill="#2d6de0" transform="rotate(-60 74 118)">Neckar</text>
  <text x="330" y="292" font-family="Caveat, cursive" font-size="19" font-weight="700" fill="#656c80" text-anchor="middle">↓ Stuttgart 15 km</text>
</svg>`;
const mapCard = () => `
<div class="mapcard">
  <div class="map" data-src="${site.mapEmbed}">
    ${mapArt}
    <span class="map__pulse" aria-hidden="true"></span>
    <span class="map__pin" aria-hidden="true">${logoMark(46)}</span>
    <span class="map__label">Niktos · Webdesign & SEO<small>${site.address.zip} ${site.address.city}</small></span>
    <button class="btn btn--sm btn--ghost map__load" type="button" data-map-load>${icon('map')} Interaktive Karte laden</button>
  </div>
  <div class="mapcard__bar">
    <a class="btn btn--sm" href="${site.googleMapsUrl}" target="_blank" rel="noopener">${gmark} Niktos auf Google Maps</a>
    <a class="btn btn--sm btn--ghost" href="${site.googleRouteUrl}" target="_blank" rel="noopener">${icon('route')} Route planen</a>
    <p>Die interaktive Karte wird erst nach Klick geladen. Dabei werden Daten an Google übertragen – siehe <a href="/datenschutzerklaerung/">Datenschutz</a>.</p>
  </div>
</div>`;

const area = ({ panel = false, title = 'Zuhause in Ludwigsburg. <span class="hl">Unterwegs in der ganzen Region.</span>' } = {}) => `
<section class="section${panel ? ' section--panel' : ''}" id="einsatzgebiet">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Hier finden Sie mich</p>
      <h2>${title}</h2>
      <p class="lead">Niktos sitzt in <strong>Ludwigsburg</strong>. Kunden aus dem Landkreis und der Region Stuttgart treffe ich gern persönlich. Alle anderen betreue ich genauso persönlich per Video-Call, Telefon und WhatsApp.</p>
      <ul class="towns">${site.towns.map((t, i) => `<li class="${i < 2 ? 'is-main' : ''}">${icon('pin')}${t}</li>`).join('')}</ul>
      <div class="actions">
        <a class="badge-s" href="${site.googleMapsUrl}" target="_blank" rel="noopener">${gmark} Google Maps</a>
        <a class="badge-s" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} ${site.instagramHandle}</a>
      </div>
    </div>
    <div class="reveal reveal-d1">${mapCard()}</div>
  </div>
</section>`;

/* ---------- Google search mock (illustration, clearly labelled) ---------- */
const serp = () => `
<div class="serp" aria-label="Beispielhafte Darstellung einer Google-Suche">
  <div class="serp__bar">${icon('search')} Elektriker Ludwigsburg</div>
  <div class="serp__map"><svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="150" fill="#e8f0e4"/><path d="M0 50h400M0 110h400M90 0v150M230 0v150M330 0v150" stroke="#fff" stroke-width="9"/><path d="M0 90c80-20 160 30 240 0s110-40 160-20" fill="none" stroke="#b8d3ff" stroke-width="14"/><g font-family="Arial" font-size="11" font-weight="700" fill="#fff"><circle cx="150" cy="60" r="12" fill="#0a66ff" stroke="#0b0d14" stroke-width="2"/><text x="150" y="64" text-anchor="middle">1</text><circle cx="280" cy="95" r="11" fill="#ea4335"/><text x="280" y="99" text-anchor="middle">2</text><circle cx="60" cy="120" r="11" fill="#ea4335"/><text x="60" y="124" text-anchor="middle">3</text></g></svg></div>
  <div class="serp__item is-you"><span class="serp__dot">1</span><span><b>Ihr Betrieb</b><span class="stars">★★★★★</span> 4,9 · Elektriker in Ludwigsburg<br>Geöffnet · Website · Route · Anrufen</span></div>
  <div class="serp__item"><span class="serp__dot">2</span><span><b>Mitbewerber A</b><span class="stars">★★★★</span>☆ 4,1 · Elektriker</span></div>
  <div class="serp__item" style="border-bottom:0"><span class="serp__dot">3</span><span><b>Mitbewerber B</b>Keine Website</span></div>
  <p class="serp__cap">Beispielhafte Darstellung</p>
  <span class="arrow-note" aria-hidden="true">da wollen<br>wir hin!${scribbleArrow()}</span>
</div>`;

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
  <div class="funnel__top"><span data-count>Schritt 1 von 6</span><span>${icon('clock')} dauert ca. 1 Minute</span></div>
  <div class="funnel__bar" aria-hidden="true"><i></i></div>
  ${step(1, 'Worum geht es bei Ihrem Projekt?', 'Einfach anklicken, was am besten passt.', `<div class="opts">
    ${opt('anliegen', 'Neue Website', 'Neue Website', 'rocket')}
    ${opt('anliegen', 'Website-Relaunch', 'Relaunch meiner Website', 'refresh')}
    ${opt('anliegen', 'SEO & Google-Sichtbarkeit', 'SEO & Google-Sichtbarkeit', 'search')}
    ${opt('anliegen', 'Wartung & Betreuung', 'Wartung & Betreuung', 'shield')}
    ${opt('anliegen', 'Website-Check', 'Website-Check (' + site.checkPrice + ' €)', 'gauge')}
    ${opt('anliegen', 'Etwas anderes', 'Etwas anderes', 'chat')}
  </div>`)}
  ${step(2, 'Haben Sie schon eine Website?', '', `<div class="opts">
    ${opt('hat_website', 'Ja', 'Ja, habe ich', 'globe')}
    ${opt('hat_website', 'Nein', 'Nein, noch nicht', 'sparkle')}
  </div>
  <div class="field" data-if="hat_website=Ja" hidden><label for="${px}-url">Wie lautet die Adresse?</label><input id="${px}-url" name="website_url" inputmode="url" placeholder="z. B. www.ihre-firma.de" autocomplete="url"></div>
  <button type="button" class="btn btn--sm fnext" data-next hidden>Weiter ${icon('arrow')}</button>`)}
  ${step(3, 'In welcher Branche sind Sie unterwegs?', 'Dann kann ich Ihnen passende Beispiele zeigen.', `<div class="opts">
    ${opt('branche', 'Handwerk & Bau', 'Handwerk & Bau', 'layers')}
    ${opt('branche', 'Dienstleistung & Beratung', 'Dienstleistung & Beratung', 'handshake')}
    ${opt('branche', 'Gastronomie & Hotel', 'Gastronomie & Hotel', 'coffee')}
    ${opt('branche', 'Gesundheit, Beauty & Fitness', 'Gesundheit, Beauty & Fitness', 'heart')}
    ${opt('branche', 'Handel & Onlineshop', 'Handel & Onlineshop', 'euro')}
    ${opt('branche', 'Immobilien & Hausverwaltung', 'Immobilien & Hausverwaltung', 'home')}
    ${opt('branche', 'Verein, Soziales & Bildung', 'Verein, Soziales & Bildung', 'users')}
    ${opt('branche', 'Sonstiges', 'Sonstiges', 'plus')}
  </div>`)}
  ${step(4, 'Welches Budget haben Sie ungefähr eingeplant?', 'Eine grobe Richtung reicht völlig.', `<div class="opts">
    ${opt('budget', 'bis 1.000 €', 'bis 1.000 €', '', 'passt zu Launch')}
    ${opt('budget', '1.000 – 2.000 €', '1.000 – 2.000 €', '', 'passt zu Boost')}
    ${opt('budget', '2.000 – 3.500 €', '2.000 – 3.500 €', '', 'Boost + Extras')}
    ${opt('budget', 'über 3.500 €', 'über 3.500 €', '', 'passt zu Dominate')}
    ${opt('budget', 'Noch unklar', 'Noch unklar – beraten Sie mich', '')}
  </div>`)}
  ${step(5, 'Wann soll die Website online gehen?', '', `<div class="opts">
    ${opt('zeitrahmen', 'So schnell wie möglich', 'So schnell wie möglich', 'bolt')}
    ${opt('zeitrahmen', 'In 1–3 Monaten', 'In 1–3 Monaten', 'calendar')}
    ${opt('zeitrahmen', 'In 3–6 Monaten', 'In 3–6 Monaten', 'clock')}
    ${opt('zeitrahmen', 'Ich informiere mich erst', 'Ich schaue mich erst um', 'eye')}
  </div>`)}
  ${step(6, 'Fast geschafft! Wie erreiche ich Sie?', 'Sie hören innerhalb von 24 Stunden von mir. Versprochen.', `
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
    <div class="field form__full"><label for="${px}-msg">Noch etwas, das ich wissen sollte? (optional)</label><textarea id="${px}-msg" name="nachricht" rows="3" placeholder="z. B. Wünsche, Websites, die Ihnen gefallen, Anzahl Seiten …" style="min-height:100px"></textarea></div>
    <label class="consent form__full"><input type="checkbox" name="datenschutz" value="ja" required><span>Ich habe die <a href="/datenschutzerklaerung/" target="_blank">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *</span></label>
    <div class="form__full"><button class="btn btn--lg btn--block" type="submit">Kostenloses Angebot anfordern ${icon('arrow')}</button></div>
  </div>
  <div class="form__trust"><span>${icon('check')} Kostenlos & unverbindlich</span><span>${icon('check')} Antwort in 24 h</span><span>${icon('lock')} SSL-verschlüsselt</span></div>`)}
  <div class="form__status" role="status" aria-live="polite"></div>
</form>`;
}

const funnelDialog = () => `
<dialog class="fdialog" id="funnel" aria-labelledby="funnel-title">
  <div class="fdialog__head"><strong id="funnel-title">${logoMark(28)} Projekt starten</strong><button class="fdialog__close" type="button" data-close aria-label="Schließen">${icon('close')}</button></div>
  <div class="fdialog__body">${funnel('d')}</div>
</dialog>`;

/* ---------- Classic contact form ---------- */
const contactForm = () => `
<form class="form reveal reveal-d1" action="/kontakt.php" method="post" data-contact-form novalidate id="formular">
  ${sticker('24 h', 'Antwortzeit', 'sticker--blue sticker--top')}
  <p class="eyebrow">Schreib mir</p>
  <h2>Lassen Sie uns gemeinsam starten</h2>
  <p class="muted">Haben Sie Fragen oder eine Idee? Schreiben Sie mir – ich antworte schnell und klar.</p>
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
  <a class="ccard" href="${site.googleMapsUrl}" target="_blank" rel="noopener"><span class="ccard__ico">${icon('pin')}</span><span><small>Google Maps</small><strong>Niktos · ${site.address.zip} ${site.address.city}</strong></span>${icon('arrowUpRight')}</a>
</div>`;

module.exports = { avatar, builder, illuChat, illuStatus, illuQuote, factsCard, aioCard, rotator, allInOne, esc, euro, img, hasImg, icon, logoMark, startBtn, waBtn, telBtn, ticks, sticker, arrowNote, scribbleArrow, breadcrumb, head, pageHero, marquee, serviceCards, features, steps, processSteps, pricing, compareTable, faq, ctaBand, portrait, browser, projects, mapCard, area, serp, funnel, funnelDialog, contactForm, contactCards };
