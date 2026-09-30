const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/website-check/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Leistungen', url: '/leistungen/' }, { name: 'Website-Check', url: path }];

const FAQ = C.faq([
  ['Was kostet der Website-Check?', `Der Website-Check kostet einmalig ${site.checkPrice} € (Endpreis). Wenn Sie mich danach mit einem Relaunch oder einer neuen Website beauftragen, verrechne ich den Betrag vollständig.`],
  ['Wie lange dauert der Check?', 'Sie erhalten Ihren PDF-Report in der Regel innerhalb von 3 Werktagen nach Auftrag. Auf Wunsch besprechen wir die Ergebnisse in einem kurzen Video-Call.'],
  ['Was brauche ich dafür?', 'Nur die Adresse Ihrer Website und zwei, drei Sätze zu Ihrem Unternehmen und Ihren wichtigsten Leistungen. Zugangsdaten sind nicht nötig.'],
  ['Bin ich danach zu etwas verpflichtet?', 'Nein. Der Report gehört Ihnen – Sie können die Empfehlungen selbst umsetzen, von jemand anderem umsetzen lassen oder mich beauftragen.'],
]);

const checks = [
  ['gauge', 'Ladezeit & Core Web Vitals', 'Wie schnell lädt Ihre Website auf dem Handy? Wo sind die Bremsen?'],
  ['smartphone', 'Mobile Darstellung', 'Funktioniert alles auf dem Smartphone – Buttons, Texte, Formulare?'],
  ['search', 'SEO-Technik', 'Titel, Beschreibungen, Überschriften, Indexierung, Sitemap, Weiterleitungen.'],
  ['map', 'Lokale Sichtbarkeit', 'Google-Unternehmensprofil, Firmendaten, lokale Keywords.'],
  ['bot', 'KI-Sichtbarkeit', 'Strukturierte Daten, llms.txt, KI-Crawler, zitierfähige Inhalte.'],
  ['cursor', 'Nutzerführung & Conversion', 'Versteht man in 5 Sekunden, was Sie anbieten? Gibt es klare Kontaktwege?'],
  ['lock', 'Sicherheit & Datenschutz', 'SSL, Formulare, Tracking, Cookie-Banner, eingebundene Drittanbieter.'],
  ['doc', 'Inhalte & Vertrauen', 'Texte, Referenzen, Bewertungen, Impressum und Datenschutz auf einen Blick.'],
];

module.exports = {
  path,
  nav: 'check',
  priority: 0.7,
  crumbs,
  title: `Website-Check für ${site.checkPrice} € – Analyse mit PDF-Report | Niktos`,
  description: `Professioneller Website-Check: Ladezeit, SEO, KI-Sichtbarkeit, Mobile & Conversion – mit PDF-Report und To-do-Liste. ${site.checkPrice} €, bei Auftrag verrechnet.`,
  schema: [FAQ.schema, {
    '@type': 'Service', '@id': site.url + path + '#service', name: 'Website-Check', serviceType: 'Website-Analyse',
    description: 'Analyse von Ladezeit, SEO, KI-Sichtbarkeit, mobiler Darstellung, Sicherheit und Conversion mit PDF-Report und Maßnahmenplan.',
    provider: { '@id': site.url + '/#business' },
    offers: { '@type': 'Offer', price: site.checkPrice, priceCurrency: 'EUR', url: site.url + path },
  }],
  body: `
${C.pageHero({
  crumbs,
  eyebrow: 'Website-Check · ' + site.checkPrice + ' €',
  h1: 'Wie gut ist Ihre Website <span class="grad">wirklich?</span>',
  lead: 'Der ehrliche Profi-Check Ihrer aktuellen Website: Ich prüfe Technik, Geschwindigkeit, SEO, KI-Sichtbarkeit und Nutzerführung – und Sie erhalten einen verständlichen PDF-Report mit klarer To-do-Liste.',
  actions: `<a class="btn btn--lg" href="/kontakt/?anliegen=Website-Check#formular">Check für ${site.checkPrice} € anfragen ${icon('arrow')}</a>` + C.waBtn('Per WhatsApp', { cls: 'btn--lg', text: 'Hallo Nikola, ich möchte einen Website-Check für meine Website: ' }),
  aside: `<div class="card" style="text-align:center"><p class="price__tag">Einmalig</p><p class="price__amount" style="justify-content:center"><strong>${site.checkPrice} €</strong></p><p class="price__note">Endpreis · bei Auftrag voll verrechnet</p>${C.ticks(['PDF-Report in 3 Werktagen', 'Priorisierte Maßnahmenliste', 'Optional: Besprechung per Video'])}</div>`,
})}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Was ich prüfe', title: '8 Bereiche. Ein klares Ergebnis.', center: true })}
    <div class="grid grid--4">${checks.map(([ic, t, d], i) => `<div class="card reveal reveal-d${i % 4}"><span class="card__ico">${icon(ic)}</span><h3 style="font-size:1.25rem">${t}</h3><p class="mb-0">${d}</p></div>`).join('')}</div>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'So funktioniert es', title: 'In 3 Schritten zu Klarheit.', center: true })}
    ${C.steps([
      ['Anfragen', 'Schicken Sie mir Ihre Website-Adresse per Formular oder WhatsApp.', 'Tag 1'],
      ['Analyse', 'Ich prüfe Ihre Website manuell und mit Profi-Tools – kein automatischer 08/15-Bericht.', 'Tag 1–3'],
      ['Report & Plan', 'Sie erhalten den PDF-Report mit Ampel-Bewertung und priorisierten Maßnahmen.', 'Tag 3'],
    ])}
  </div>
</section>

${FAQ.html}
${C.ctaBand({ title: 'Finden Sie heraus, was Ihre Website Sie kostet.', text: `Für ${site.checkPrice} € wissen Sie genau, wo Ihre Website steht – und was zu tun ist. Bei Auftrag voll verrechnet.`, waText: 'Hallo Nikola, ich möchte einen Website-Check für meine Website: ' })}
`,
};
