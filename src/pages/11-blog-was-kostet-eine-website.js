const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/blog/was-kostet-eine-website/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Blog', url: '/blog/' }, { name: 'Was kostet eine Website?', url: path }];
const PUBLISHED = '2026-11-13';
const H1 = 'Was kostet eine Website? Preise, laufende Kosten und worauf es ankommt';
const [L, B, D] = site.packages;
const eur = C.euro;
const care = `ab ${site.care.price} € ${site.care.unit}`;

const toc = [
  ['kurz', 'Das Wichtigste in Kürze'],
  ['preisfaktoren', 'Was bestimmt den Preis?'],
  ['laufende-kosten', 'Einmalige und laufende Kosten'],
  ['pakete', 'Die drei Pakete im Überblick'],
  ['vergleich', 'Baukasten, Einzelanbieter oder Agentur?'],
  ['angebote', 'Worauf Sie bei Angeboten achten sollten'],
  ['naechste-schritte', 'So geht es weiter'],
];

const FAQ = C.faq([
  ['Was kostet eine einfache Website für einen Handwerker oder Selbstständigen?', `Bei Niktos startet eine professionelle Website mit bis zu drei Seiten ab ${eur(L.price)} (Paket ${L.name}). Wer zusätzlich bei Google gefunden werden will, braucht mehr Seiten und SEO-Texte. Das ist im Paket ${B.name} ab ${eur(B.price)} enthalten.`],
  ['Gibt es versteckte Kosten?', `Nein. Der Festpreis im Angebot ist der Preis, den Sie für die Erstellung zahlen. Nach dem Launch kümmert sich Niktos um Hosting, Domain, SSL, Updates, Backups und kleine Änderungen, im Care-Paket ${care}.`],
  ['Warum ist eine individuelle Website teurer als ein Baukasten?', 'Beim Baukasten bezahlen Sie mit Ihrer eigenen Zeit und bekommen eine Standardvorlage. Bei einer individuellen Website entstehen Konzept, Design, Texte und Technik passend zu Ihrem Unternehmen, und nach dem Start kümmert sich jemand um Betrieb und Änderungen.'],
  ['Muss ich die Website auf einmal bezahlen?', 'Nein. Üblich sind 50 % zum Projektstart und 50 % zum Launch. Bei größeren Projekten ist auch eine Aufteilung in drei Raten möglich.'],
  ['Wie lange dauert es, bis meine Website online ist?', `Je nach Paket zwischen ca. 1 und 6 Wochen: ${L.name} ${L.time}, ${B.name} ${B.time}, ${D.name} ${D.time}. Einen verbindlichen Zeitplan bekommen Sie mit dem Angebot.`],
], { title: 'Häufige Fragen zu Website-Kosten', panel: false, id: 'faq' });

const article = `
<div class="tldr" id="kurz">
  <span class="tape" aria-hidden="true"></span>
  <strong>${icon('bolt')} Das Wichtigste in Kürze</strong>
  <p>Eine professionelle Website für Selbstständige und kleine Unternehmen kostet bei Niktos zwischen <b>${eur(L.price)} und ${eur(D.price)}</b>, je nach Umfang. Nach dem Launch kommen laufende Kosten für Hosting, Domain und Wartung dazu: im Care-Paket <b>${care}</b>. Entscheidend ist nicht der niedrigste Preis, sondern was im Preis steckt: Design, Texte, Technik, SEO und was nach dem Start passiert. Viele Anbieter nennen online gar keinen Preis. Bei Niktos stehen die Festpreise offen auf der <a href="/preise/">Preisseite</a>.</p>
</div>

<p>„Was kostet eigentlich eine Homepage?“ Das ist meist die erste Frage, bevor es um Design oder Inhalte geht. Die ehrliche Antwort lautet: Es kommt darauf an. In diesem Artikel zeige ich, worauf es ankommt, welche Kosten einmalig und welche laufend anfallen und welche Fragen Sie jedem Anbieter stellen sollten, egal ob Sie es Website oder Homepage nennen.</p>

<h2 id="preisfaktoren">Was bestimmt den Preis einer Website?</h2>
<p>Fünf Dinge machen den Unterschied:</p>
<ol>
  <li><strong>Umfang:</strong> Ein One-Pager ist schneller gebaut als eine Website mit zehn Leistungsseiten, Blog und Formularen.</li>
  <li><strong>Design:</strong> Eine individuelle Gestaltung nach Ihrer Marke und Ihrer Zielgruppe kostet mehr Arbeit als eine Standardvorlage, sieht aber nicht aus wie bei allen anderen.</li>
  <li><strong>Texte und Bilder:</strong> Gute Texte, die Besucher zu Kunden machen, sind kein Nebenprodukt. Werden Texte, Fotos oder ein Logo mitgeliefert, spart das Zeit. Fehlen sie, müssen sie entstehen.</li>
  <li><strong>SEO:</strong> Eine saubere technische Basis ist Pflicht. Lokales SEO, eigene Seiten für Leistungen und Orte sowie Inhalte, die auch von KI-Assistenten verstanden werden, sind zusätzliche Arbeit.</li>
  <li><strong>Funktionen:</strong> Kontaktformular und WhatsApp-Button sind schnell eingebaut. Buchungssystem, Onlineshop oder mehrere Sprachen kosten spürbar mehr.</li>
</ol>

<h2 id="laufende-kosten">Einmalige und laufende Kosten</h2>
<p>Beim Preis für die Erstellung bleibt es nicht. Eine Website, die online ist, braucht laufend:</p>
<ul>
  <li><strong>Domain:</strong> Ihre Adresse im Netz, zum Beispiel ihre-firma.de</li>
  <li><strong>Hosting und SSL-Zertifikat:</strong> damit die Seite erreichbar und verschlüsselt ist</li>
  <li><strong>Updates, Backups und Sicherheit:</strong> damit sie schnell bleibt und geschützt ist</li>
  <li><strong>Änderungen:</strong> neue Öffnungszeiten, neue Leistungen, neue Fotos</li>
</ul>
<p>Bei Niktos ist das nach dem Launch geregelt: Im Care-Paket ${care} kümmere ich mich um Hosting, Domain, SSL, Updates, Backups und kleine Änderungen per WhatsApp. Größere Erweiterungen bekommen Sie als kleines Festpreis-Angebot. So haben Sie nach dem Start einen Ansprechpartner statt mehrerer Dienstleister. Mehr dazu auf der Seite <a href="/wartung-hosting/">Wartung & Hosting</a>.</p>

<h2 id="pakete">Die drei Pakete im Überblick</h2>
<p>Die Preise sind Endpreise.${site.kleinunternehmer ? ' Als Kleinunternehmer nach § 19 UStG weise ich keine Umsatzsteuer aus.' : ''}</p>
<table class="ptable">
  <thead><tr><th>Paket</th><th>Preis</th><th>Für wen</th><th>Umfang</th></tr></thead>
  <tbody>
    <tr><th scope="row">${L.name}</th><td data-l="Preis">ab ${eur(L.price)}</td><td data-l="Für wen">Gründer und Kleinbetriebe</td><td data-l="Umfang">One-Pager oder bis zu 3 Seiten, mobil optimiert, Kontaktformular, WhatsApp-Button, SEO-Grundoptimierung</td></tr>
    <tr><th scope="row">${B.name}</th><td data-l="Preis">ab ${eur(B.price)}</td><td data-l="Für wen">Selbstständige, die bei Google gefunden werden wollen</td><td data-l="Umfang">Bis zu 10 Seiten, SEO-Texte, lokales SEO, Blog, Anfrage-Formular mit Bestätigungs-Mail</td></tr>
    <tr><th scope="row">${D.name}</th><td data-l="Preis">ab ${eur(D.price)}</td><td data-l="Für wen">Unternehmen mit Wachstumsplan</td><td data-l="Umfang">Bis zu 30 Seiten inkl. Regionen-Seiten, Keyword- und Wettbewerbsanalyse, Anfrage-Funnel, Optimierung nach dem Start</td></tr>
  </tbody>
</table>
<p>„Ab“ heißt: Nach dem kostenlosen Erstgespräch erhalten Sie einen <strong>verbindlichen Festpreis</strong>, der sich nicht mehr ändert, solange sich der Umfang nicht ändert. Bezahlt wird in der Regel 50 % zum Projektstart und 50 % zum Launch. Alle Leistungen im Detail finden Sie auf der Seite <a href="/preise/">Website-Preise</a>.</p>

<h2 id="vergleich">Baukasten, individuelle Website oder große Agentur?</h2>
<p>Es gibt drei typische Wege. Keiner ist grundsätzlich falsch, sie passen nur zu unterschiedlichen Zielen.</p>
<p><strong>Baukasten (selbst bauen)</strong></p>
<ul>
  <li>Vorteil: niedrige Einstiegskosten, Sie können jederzeit selbst etwas ändern.</li>
  <li>Nachteil: Sie investieren Ihre eigene Zeit, die Gestaltung wirkt schnell wie bei allen anderen, und für gutes SEO und schnelle Ladezeiten fehlt oft das Wissen. Das Monatsabo läuft dauerhaft weiter.</li>
</ul>
<p><strong>Individuelle Website von einem Einzelanbieter</strong></p>
<ul>
  <li>Vorteil: persönlicher Kontakt, klarer Preis, Gestaltung und Texte auf Ihr Unternehmen zugeschnitten, ein Ansprechpartner für alles.</li>
  <li>Worauf achten: Klären Sie vorher, wie Betreuung, Erreichbarkeit im Urlaub und Änderungswünsche geregelt sind.</li>
</ul>
<p><strong>Große Agentur</strong></p>
<ul>
  <li>Vorteil: viele Spezialisten, passend für große, komplexe Projekte.</li>
  <li>Nachteil: Mehr Beteiligte bedeuten meist höhere Preise, und bei kleinen Projekten bleibt der persönliche Kontakt manchmal auf der Strecke.</li>
</ul>

<div class="inline-cta">
  <strong>Was würde Ihre Website kosten?</strong>
  <p>Beantworten Sie 6 kurze Fragen. Innerhalb von 24 Stunden bekommen Sie eine ehrliche Einschätzung und einen Festpreis.</p>
  <div class="actions">${C.startBtn('Projekt-Anfrage starten', { cls: 'btn--white' })}<a class="btn btn--wa" href="${site.wa('Hallo Nikola, ich habe deinen Artikel zu Website-Kosten gelesen. Was würde meine Website kosten?')}" target="_blank" rel="noopener">${icon('wa')} WhatsApp</a></div>
</div>

<h2 id="angebote">Worauf Sie bei Angeboten achten sollten</h2>
<p>Fragen Sie jeden Anbieter:</p>
<ul>
  <li>Ist der Preis ein <strong>Festpreis</strong> oder eine Schätzung nach Stunden?</li>
  <li>Was ist <strong>enthalten</strong>: Texte, Bilder, SEO, Formular, Impressum und Datenschutz-Struktur?</li>
  <li>Wie viele <strong>Korrekturschleifen</strong> gibt es?</li>
  <li>Was kostet der <strong>Betrieb</strong> danach (Hosting, Domain, Wartung, Änderungen) und wie lange läuft der Vertrag?</li>
  <li>Wie schnell lädt die Seite auf dem Smartphone?</li>
  <li>Wer kümmert sich nach dem Start um Fragen und Änderungen?</li>
</ul>
<p>Bleibt eine dieser Fragen unbeantwortet, steckt ein Teil des Preises meist erst später im Kleingedruckten.</p>

<h2 id="naechste-schritte">So geht es weiter</h2>
<ol>
  <li>Sie schreiben mir per <a href="${site.whatsapp}" target="_blank" rel="noopener">WhatsApp</a> oder über das <a href="/projekt-anfrage/" data-open-funnel>Anfrage-Formular</a>.</li>
  <li>Wir sprechen kostenlos über Ihr Unternehmen und Ihr Ziel.</li>
  <li>Sie erhalten innerhalb von 24 Stunden (werktags) einen Festpreis, die Seitenstruktur und einen Zeitplan.</li>
</ol>
<p>Wie eine Website von Niktos aussieht und was drinsteckt, lesen Sie unter <a href="/webdesign-ludwigsburg/">Webdesign in Ludwigsburg</a>. Wenn Sie wissen möchten, wie Ihre Website bei Google sichtbar wird, lesen Sie <a href="/seo-ludwigsburg/">SEO in Ludwigsburg</a>.</p>
`;

const words = article.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
const minutes = Math.max(1, Math.round(words / 200));

module.exports = {
  path,
  nav: 'blog',
  priority: 0.8,
  crumbs,
  modified: PUBLISHED,
  ogType: 'article',
  ogImage: '/assets/img/og-blog-was-kostet-eine-website.jpg',
  minutes,
  title: 'Was kostet eine Website? Preise 2026 im Überblick | Niktos',
  description: `Was kostet eine Website für Selbstständige und kleine Unternehmen? Festpreise von ${eur(L.price)} bis ${eur(D.price)}, laufende Kosten und worauf Sie achten sollten.`,
  head: `<meta property="article:published_time" content="${PUBLISHED}T09:00:00+01:00">
<meta property="article:modified_time" content="${PUBLISHED}T09:00:00+01:00">
<meta property="article:author" content="${site.owner}">
<meta property="article:section" content="Webdesign">`,
  schema: [FAQ.schema, {
    '@type': 'BlogPosting', '@id': site.url + path + '#article',
    headline: H1, description: 'Was eine Website für Selbstständige und kleine Unternehmen kostet: Preisfaktoren, einmalige und laufende Kosten, Paketpreise und worauf Sie bei Angeboten achten sollten.',
    image: { '@type': 'ImageObject', url: site.url + '/assets/img/og-blog-was-kostet-eine-website.jpg', width: 1200, height: 630 },
    datePublished: PUBLISHED + 'T09:00:00+01:00', dateModified: PUBLISHED + 'T09:00:00+01:00',
    author: { '@id': site.url + '/#nikola-planinic' }, publisher: { '@id': site.url + '/#business' },
    mainEntityOfPage: { '@id': site.url + path + '#webpage' }, isPartOf: { '@id': site.url + '/blog/#blog' },
    inLanguage: 'de-DE', wordCount: words, timeRequired: `PT${minutes}M`,
    articleSection: 'Webdesign', keywords: ['Was kostet eine Website', 'Website Kosten', 'Homepage Kosten', 'Website erstellen lassen Kosten', 'Webdesign Preise', 'Festpreis Website', 'Webdesign Ludwigsburg'],
    about: [{ '@type': 'Thing', name: 'Webdesign' }, { '@type': 'Thing', name: 'Website-Kosten' }],
  }],
  body: `
<div aria-hidden="true" style="position:fixed;top:0;left:0;right:0;height:3px;z-index:80;background:var(--blue);transform-origin:left;transform:scaleX(0)" data-read-progress></div>
<section class="phero">
  <div class="dots"></div>
  <div class="container">
    ${C.breadcrumb(crumbs)}
    <p class="eyebrow">Ratgeber · Preise & Kosten</p>
    <h1 style="max-width:22ch">${H1}</h1>
    <div class="article__meta">
      <span>${C.avatar(30)} Von <a href="/ueber-mich/" rel="author">${site.owner}</a></span>
      <span>${icon('calendar')} <time datetime="${PUBLISHED}">${new Date(PUBLISHED).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</time></span>
      <span>${icon('clock')} ${minutes} Min. Lesezeit</span>
    </div>
  </div>
</section>

<section class="section" style="padding-top:clamp(50px,6vw,80px)">
  <div class="container article">
    <article class="prose" data-article>
      ${article}
      <div class="author">
        ${C.avatar(64)}
        <div><strong>${site.owner}</strong><p>Inhaber von Niktos · <a href="/webdesign-ludwigsburg/">Webdesigner</a> & <a href="/seo-ludwigsburg/">SEO</a> aus Ludwigsburg. Ich baue Websites aus einer Hand, die schnell laden, gefunden werden und Kunden bringen. <a href="/ueber-mich/">Mehr über mich</a> · <a href="${site.instagram}" target="_blank" rel="noopener">Instagram</a></p></div>
      </div>
    </article>
    <aside class="toc" aria-label="Inhaltsverzeichnis">
      <p>Inhalt</p>
      <ol>${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol>
      <hr class="divider" style="margin:20px 0">
      ${C.startBtn('Projekt starten', { cls: 'btn--block btn--sm' })}
      <a class="btn btn--wa btn--block btn--sm" style="margin-top:8px" href="${site.whatsapp}" target="_blank" rel="noopener">${icon('wa')} WhatsApp</a>
    </aside>
  </div>
</section>

${FAQ.html.replace('class="section"', 'class="section section--panel"')}
${C.ctaBand()}
`,
};
