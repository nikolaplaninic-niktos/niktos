const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/preise/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Preise', url: path }];
const [L, B, D] = site.packages;

const Y = `<span class="yes">${icon('check')}</span>`, N = `<span class="muted">–</span>`;
const matrix = [
  ['Individuelles Design', Y, Y, Y],
  ['Anzahl Seiten', 'bis 3', 'bis 8', 'bis 15'],
  ['Mobil optimiert & blitzschnell', Y, Y, Y],
  ['WhatsApp-Button & Klick-zum-Anrufen', Y, Y, Y],
  ['Kontaktformular', Y, Y + ' + Bestätigungs-Mail', Y + ' + Step-by-Step-Funnel'],
  ['Google-Maps-Einbindung', Y, Y, Y],
  ['SEO-Grundoptimierung & Schema', Y, Y, Y],
  ['SEO-Texte, für Sie geschrieben', N, Y, Y],
  ['Lokales SEO & Google-Unternehmensprofil', N, Y, Y],
  ['KI-Sichtbarkeit (llms.txt, FAQ, Schema)', 'Basis', Y, Y + ' + Monitoring'],
  ['Blog / News-Bereich', N, Y, Y + ' + 2 Artikel'],
  ['Keyword- & Wettbewerbsanalyse', N, N, Y],
  ['Regionen-Landingpages', N, N, Y],
  ['Premium-Animationen', N, N, Y],
  ['Cookielose Besucherstatistik', N, Y, Y],
  ['Korrekturschleifen', '1', '2', '3'],
  ['Support nach Launch', '4 Wochen', '3 Monate', '6 Monate Priority'],
  ['Online in', L.time, B.time, D.time],
];

const addons = [
  ['doc', 'Zusätzliche Unterseite', 'ab 90 €'],
  ['pen', 'SEO-Blogartikel (inkl. Recherche)', 'ab 149 €'],
  ['globe', 'Mehrsprachigkeit (je Sprache)', 'ab 290 €'],
  ['sparkle', 'Logo & Branding-Basics', 'ab 249 €'],
  ['map', 'Google-Unternehmensprofil einzeln', 'ab 149 €'],
  ['euro', 'Onlineshop / Buchungssystem', 'auf Anfrage'],
];

const FAQ = C.faq([
  ['Sind die Preise Endpreise?', site.kleinunternehmer ? 'Ja. Als Kleinunternehmer gemäß § 19 UStG weise ich keine Umsatzsteuer aus. Der Preis im Angebot ist der Preis, den Sie zahlen.' : 'Alle Preise verstehen sich zzgl. gesetzlicher MwSt.'],
  ['Warum „ab“-Preise?', 'Jede Website ist individuell. Die Pakete zeigen den typischen Umfang – nach dem kostenlosen Erstgespräch erhalten Sie einen verbindlichen Festpreis, der sich nicht mehr ändert, solange sich der Umfang nicht ändert.'],
  ['Wie läuft die Bezahlung?', '50 % bei Projektstart, 50 % beim Launch der Website. Bei größeren Projekten ist auch eine Aufteilung in drei Raten möglich.'],
  ['Kommen laufende Kosten dazu?', `Für den Betrieb einer Website fallen Kosten für Domain und Hosting an. Die können Sie selbst tragen – oder Sie nutzen das Care-Paket ab ${site.care.price} € im Monat, in dem Hosting, Domain, SSL, Backups, Updates und kleine Änderungen enthalten sind.`],
  ['Kann ich später auf ein größeres Paket upgraden?', 'Jederzeit. Ihre Website ist so gebaut, dass sie mit Ihrem Unternehmen wachsen kann – neue Seiten, Blog, Regionen-Seiten oder ein Funnel lassen sich jederzeit ergänzen. Bereits bezahlte Leistungen werden natürlich angerechnet.'],
  ['Was ist, wenn mir das Design nicht gefällt?', 'Dafür gibt es die Korrekturschleifen. Außerdem stimmen wir Stil, Farben und Beispiele schon vor dem ersten Entwurf gemeinsam ab – so gibt es keine bösen Überraschungen.'],
]);

module.exports = {
  path,
  nav: 'preise',
  priority: 0.9,
  crumbs,
  ogImage: '/assets/img/og-preise-webdesign.jpg',
  title: `Website Kosten & Preise – Pakete ab ${C.euro(L.price)} | Niktos`,
  description: `Was kostet eine Website? Transparente Festpreise: Launch ab ${C.euro(L.price)}, Boost ab ${C.euro(B.price)}, Dominate ab ${C.euro(D.price)}. Endpreise ohne versteckte Kosten.`,
  schema: [FAQ.schema, {
    '@type': 'OfferCatalog', '@id': site.url + path + '#pakete', name: 'Website-Pakete von Niktos',
    itemListElement: site.packages.map((p) => ({
      '@type': 'Offer', name: `Website-Paket ${p.name}`, description: p.claim + ' ' + p.features.map((f) => f.replace(/<[^>]+>/g, '')).join('; '),
      price: p.price, priceCurrency: 'EUR', url: site.url + path + '#paket-' + p.id, seller: { '@id': site.url + '/#business' },
      priceSpecification: { '@type': 'PriceSpecification', minPrice: p.price, priceCurrency: 'EUR', valueAddedTaxIncluded: true },
    })),
  }],
  body: `
${C.pageHero({
  crumbs,
  aside: C.illuQuote(),
  eyebrow: 'Pakete & Preise',
  h1: 'Festpreise. <span class="grad">Keine Überraschungen.</span>',
  lead: 'Was kostet eine professionelle Website? Hier steht es – transparent und ehrlich. Drei Pakete für drei Ziele, jedes individuell für Ihr Unternehmen gestaltet.',
  actions: false,
})}

<section class="section" style="padding-top:clamp(60px,7vw,90px)">
  <div class="container">
    ${C.pricing()}
  </div>
</section>

<section class="section section--panel" id="vergleich">
  <div class="container">
    ${C.head({ eyebrow: 'Paket-Vergleich', title: 'Alle Leistungen im Überblick.', center: true })}
    <div class="compare-wrap reveal"><table class="compare">
      <thead><tr><th scope="col">Leistung</th>${site.packages.map((p) => `<th scope="col"${p.featured ? ' class="is-us"' : ''}>${p.name}<br><small class="muted" style="font:500 .85rem var(--fb)">ab ${C.euro(p.price)}</small></th>`).join('')}</tr></thead>
      <tbody>${matrix.map(([a, ...v]) => `<tr><td>${a}</td>${v.map((x, i) => `<td${site.packages[i].featured ? ' class="is-us"' : ''}>${x}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Extras', title: 'Individuell erweiterbar.', lead: 'Jedes Paket lässt sich flexibel ergänzen – Sie zahlen nur, was Sie wirklich brauchen.' })}
    <div class="grid grid--3">${addons.map(([ic, t, p], i) => `<div class="card reveal reveal-d${i % 3}" style="display:flex;align-items:center;gap:18px"><span class="card__ico" style="margin:0;flex:none">${icon(ic)}</span><div><h3 style="font-size:1.15rem;margin:0 0 4px">${t}</h3><p class="mb-0" style="color:#fff;font-weight:600">${p}</p></div></div>`).join('')}</div>
  </div>
</section>

<section class="section section--panel">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Rechnen Sie mit</p>
      <h2>Eine Website ist keine Ausgabe. <span class="grad">Sie ist eine Investition.</span></h2>
      <p class="lead">Beispielrechnung: Bringt Ihnen die neue Website nur <strong>einen zusätzlichen Kunden im Monat</strong> mit einem Auftragswert von 500 €, sind das 6.000 € Umsatz im Jahr. Das Paket Boost hat sich damit nach rund vier Monaten bezahlt gemacht – und arbeitet danach jahrelang weiter.</p>
      <p class="muted small">Vereinfachtes Beispiel ohne Gewähr – Ihr tatsächliches Ergebnis hängt von Branche, Region und Angebot ab.</p>
    </div>
    <div class="stats reveal reveal-d1" style="grid-template-columns:1fr 1fr">
      <div class="stat" style="border-bottom:1px solid var(--line)"><strong class="grad">1</strong><span>Neukunde pro Monat</span></div>
      <div class="stat" style="border-right:0;border-bottom:1px solid var(--line)"><strong class="grad">500 €</strong><span>Auftragswert</span></div>
      <div class="stat"><strong class="grad">6.000 €</strong><span>Umsatz pro Jahr</span></div>
      <div class="stat" style="border-right:0"><strong class="grad">≈ 4</strong><span>Monate bis Boost bezahlt ist</span></div>
    </div>
  </div>
</section>

${FAQ.html.replace('Häufige Fragen', 'Fragen zu Preisen & Bezahlung')}
${C.ctaBand({ title: 'Welches Paket passt zu Ihnen?', text: 'Beantworten Sie 6 kurze Fragen – ich empfehle Ihnen das passende Paket und schicke Ihnen innerhalb von 24 Stunden ein Festpreis-Angebot.' })}
`,
};
