const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/wartung-hosting/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Leistungen', url: '/leistungen/' }, { name: 'Wartung & Hosting', url: path }];

const FAQ = C.faq([
  ['Was ist im Care-Paket enthalten?', `Hosting auf schnellen Servern, Domain, SSL-Zertifikat, regelmäßige Backups, Sicherheits-Updates, Uptime-Monitoring, kleine inhaltliche Änderungen (z. B. Texte, Bilder, Öffnungszeiten) per WhatsApp und ein kurzer monatlicher Bericht. Ab ${site.care.price} € im Monat.`],
  ['Ist das Care-Paket Pflicht?', 'Nein. Die Website gehört Ihnen – Sie können sie auch selbst hosten oder von jemand anderem betreuen lassen. Die meisten Kunden entscheiden sich trotzdem dafür, weil sie sich dann um nichts kümmern müssen.'],
  ['Wie schnell werden Änderungen umgesetzt?', 'Kleinere Änderungen erledige ich in der Regel innerhalb von 1–2 Werktagen. Schicken Sie mir einfach eine WhatsApp-Nachricht mit dem, was geändert werden soll – gern mit Foto oder Screenshot.'],
  ['Betreuen Sie auch Websites, die Sie nicht selbst gebaut haben?', 'Gerne nach einer kurzen Prüfung. Je nach Zustand der Website starte ich mit dem Website-Check, damit wir wissen, woran wir sind.'],
  ['Wie lange läuft der Vertrag?', 'Das Care-Paket ist monatlich kündbar. Keine langen Laufzeiten, keine Knebelverträge.'],
]);

module.exports = {
  path,
  nav: 'wartung',
  priority: 0.8,
  crumbs,
  title: 'Website-Wartung & Hosting Ludwigsburg | Niktos Care',
  description: `Website-Wartung, Hosting, Backups, Updates & Änderungen per WhatsApp – Ihre Website bleibt schnell, sicher und aktuell. Niktos Care ab ${site.care.price} €/Monat.`,
  schema: [FAQ.schema, {
    '@type': 'Service', '@id': site.url + path + '#service', name: 'Website-Wartung & Hosting (Niktos Care)', serviceType: 'Website-Wartung',
    description: 'Hosting, SSL, Backups, Updates, Monitoring und Änderungen per WhatsApp für Unternehmens-Websites.',
    provider: { '@id': site.url + '/#business' },
    offers: { '@type': 'Offer', price: site.care.price, priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', price: site.care.price, priceCurrency: 'EUR', unitText: 'Monat' } },
  }],
  body: `
${C.pageHero({
  crumbs,
  aside: C.illuStatus(),
  eyebrow: 'Wartung, Hosting & Support',
  h1: 'Ihre Website. <span class="grad">Immer schnell, sicher, aktuell.</span>',
  lead: 'Eine Website ist nie „fertig“. Updates, Sicherheit, neue Inhalte, neue Angebote – mit Niktos Care kümmere ich mich darum, damit Sie es nicht müssen. Änderungen schicken Sie einfach per WhatsApp.',
  actions: C.startBtn('Care anfragen', { cls: 'btn--lg' }) + C.waBtn('Änderung per WhatsApp', { cls: 'btn--lg', text: 'Hallo Nikola, ich interessiere mich für Wartung & Hosting (Care).' }),
})}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: `${site.care.name} – ab ${site.care.price} € / Monat`, title: 'Rundum-sorglos für Ihre Website.', center: true })}
    ${C.features([
      ['globe', 'Hosting & Domain', 'Schnelle Server in Europa, Domain und SSL-Zertifikat – alles eingerichtet und überwacht.'],
      ['refresh', 'Updates & Backups', 'Regelmäßige Sicherungen und Updates. Wenn etwas passiert, ist Ihre Website in kürzester Zeit wiederhergestellt.'],
      ['shield', 'Sicherheit & Monitoring', 'Ich überwache Erreichbarkeit und Sicherheit Ihrer Website und reagiere, bevor Ihre Kunden etwas merken.'],
      ['wa', 'Änderungen per WhatsApp', 'Neues Foto, neue Öffnungszeiten, neues Angebot? Nachricht schicken – erledigt.'],
      ['trend', 'Monatlicher Kurz-Report', 'Wie viele Besucher, woher, wie viele Klicks auf WhatsApp und Telefon – verständlich auf einen Blick.'],
      ['handshake', 'Fester Ansprechpartner', 'Kein Ticketsystem, keine Warteschleife. Sie schreiben direkt mir.'],
    ])}
  </div>
</section>

<section class="section section--panel">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Warum Wartung wichtig ist</p>
      <h2>Eine ungepflegte Website kostet Sie Kunden.</h2>
      <div class="prose">
        <p>Veraltete Software ist eines der häufigsten Einfallstore für Hacker. Abgelaufene SSL-Zertifikate lösen im Browser Warnungen aus. Und veraltete Inhalte – falsche Öffnungszeiten, alte Preise – zerstören Vertrauen in Sekunden.</p>
        <p>Mit regelmäßiger Wartung bleibt Ihre Website nicht nur sicher, sondern auch <strong>für Google und KI-Systeme aktuell und relevant</strong>. Frische, gepflegte Inhalte sind ein klares Qualitätssignal.</p>
      </div>
    </div>
    <div class="reveal reveal-d1">
      ${C.ticks(['Veraltete Plugins & Software', 'Abgelaufene SSL-Zertifikate', 'Falsche Öffnungszeiten & Preise', 'Langsame Ladezeiten durch Datenmüll', 'Keine Backups nach einem Ausfall'], 'ticks--x')}
      <p class="muted small">Typische Probleme, die ich bei Website-Checks immer wieder sehe.</p>
    </div>
  </div>
</section>

${FAQ.html}
${C.ctaBand({ title: 'Nie wieder Stress mit Ihrer Website.', waText: 'Hallo Nikola, ich interessiere mich für Wartung & Hosting (Care).' })}
`,
};
