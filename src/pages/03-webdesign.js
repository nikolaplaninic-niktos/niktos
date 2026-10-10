const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/webdesign-ludwigsburg/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Leistungen', url: '/leistungen/' }, { name: 'Webdesign Ludwigsburg', url: path }];

const FAQ = C.faq([
  ['Was kostet Webdesign in Ludwigsburg?', `Bei Niktos starten individuelle Websites bei ${C.euro(site.packages[0].price)} (Paket Launch). Eine umfangreiche SEO-Website mit bis zu 8 Unterseiten und Texten kostet ab ${C.euro(site.packages[1].price)} (Boost), das Rundum-Paket für maximale regionale Sichtbarkeit ab ${C.euro(site.packages[2].price)} (Dominate). Alle Preise sind Festpreise und Endpreise.`],
  ['Was ist der Unterschied zu einer Baukasten-Website?', 'Website-Baukästen nutzen Vorlagen, laden oft langsam und binden Sie per Abo an den Anbieter. Eine individuelle Website von Niktos wird exakt auf Ihr Unternehmen und Ihre Kunden zugeschnitten, ist technisch deutlich schneller, besser für Google optimiert und gehört vollständig Ihnen.'],
  ['Brauche ich wirklich eine eigene Website, wenn ich Instagram habe?', 'Social Media ist super für Reichweite – aber das Profil gehört Ihnen nicht, Ihre Beiträge verschwinden im Feed und Google zeigt sie kaum an. Ihre Website ist Ihr eigenes Zuhause im Netz: dauerhaft auffindbar, vollständig unter Ihrer Kontrolle und die Basis für Google, Google Maps und KI-Suche.'],
  ['Wie viele Korrekturschleifen sind inklusive?', 'Je nach Paket 1 bis 3 vollständige Korrekturschleifen. In der Praxis reicht das fast immer, weil wir vorab im Erstgespräch Ziele, Stil und Inhalte klar abstimmen.'],
  ['Übernehmen Sie auch Domain, E-Mail und Hosting?', 'Ja. Ich kümmere mich auf Wunsch um Domain, Hosting, SSL-Zertifikat und E-Mail-Postfächer. Mit dem Care-Paket bleibt Ihre Website danach dauerhaft schnell, sicher und aktuell.'],
  ['Wird meine alte Website beim Relaunch ihre Google-Rankings verlieren?', 'Nicht, wenn man es richtig macht. Ich übernehme wertvolle Inhalte, richte 301-Weiterleitungen von alten auf neue Adressen ein und reiche die neue Sitemap bei Google ein. So nehmen Sie Ihre Rankings mit – und bauen sie aus.'],
]);

module.exports = {
  path,
  nav: 'webdesign',
  priority: 0.9,
  crumbs,
  title: 'Webdesign Ludwigsburg – individuelle Websites | Niktos',
  description: `Professionelles Webdesign in Ludwigsburg: individuelle, schnelle Websites mit SEO, WhatsApp-Anbindung und Texten, die verkaufen. Festpreis ab ${C.euro(site.packages[0].price)}.`,
  schema: [FAQ.schema, {
    '@type': 'Service', '@id': site.url + path + '#service', name: 'Webdesign & Website-Erstellung', serviceType: 'Webdesign',
    description: 'Individuelle, schnelle und SEO-optimierte Websites für Unternehmen in Ludwigsburg, der Region Stuttgart und deutschlandweit.',
    provider: { '@id': site.url + '/#business' }, areaServed: [{ '@type': 'City', name: 'Ludwigsburg' }, { '@type': 'City', name: 'Stuttgart' }, { '@type': 'Country', name: 'Deutschland' }],
    offers: { '@type': 'AggregateOffer', lowPrice: site.packages[0].price, highPrice: site.packages[2].price, priceCurrency: 'EUR', offerCount: site.packages.length, url: site.url + '/preise/' },
  }],
  body: `
${C.pageHero({
  crumbs,
  eyebrow: 'Webdesign & Website-Erstellung',
  h1: 'Webdesign in Ludwigsburg, das <span class="grad">verkauft.</span>',
  lead: 'Eine Website ist kein digitales Prospekt. Sie ist Ihr bester Mitarbeiter: 24/7 im Einsatz, nie krank, immer freundlich. Ich gestalte und entwickle Websites, die genau so arbeiten – individuell, blitzschnell und mit klarem Ziel: mehr Anfragen.',
  aside: C.browser(site.projects[0].img, site.projects[0].domain, { sizes: '(max-width: 980px) 100vw, 35vw', eager: true }),
})}

<section class="section">
  <div class="container split split--top">
    <div class="reveal">
      <p class="eyebrow">Was Sie bekommen</p>
      <h2>Keine Vorlage. Ihre Website.</h2>
      <div class="prose">
        <p>Jedes Unternehmen ist anders – deshalb beginnt jedes Projekt bei Niktos mit Ihren Kunden: <strong>Wer sucht Sie? Was wollen diese Menschen wissen? Was bringt sie dazu, anzurufen?</strong> Erst dann entstehen Struktur, Texte und Design.</p>
        <p>Das Ergebnis ist eine Website, die zu Ihrem Unternehmen passt wie ein Maßanzug: modern, übersichtlich, auf jedem Gerät perfekt – und so aufgebaut, dass Besucher in wenigen Sekunden verstehen, warum sie genau Sie beauftragen sollten.</p>
        <p>Technisch setze ich auf <strong>schlanken, modernen Code</strong> statt überladener Baukästen. Das bedeutet: extrem kurze Ladezeiten, beste Voraussetzungen für Google und weniger Angriffsfläche für Hacker.</p>
      </div>
    </div>
    <div class="reveal reveal-d1">
      ${C.ticks(['Individuelles Design in Ihrem Branding', 'Mobil optimiert für Smartphone & Tablet', 'Verkaufspsychologie: klare Botschaft & Call-to-Actions', 'WhatsApp-Button, Klick-zum-Anrufen & Anfrage-Formular', 'Google-Maps-Einbindung (DSGVO-konform nach Klick)', 'SEO-Grundoptimierung & strukturierte Daten', 'SSL, schnelle Ladezeit, Top-PageSpeed-Werte', 'Rechtssichere Struktur für Impressum & Datenschutz', 'Einweisung und persönliche Betreuung nach dem Launch'])}
      <div class="actions" style="margin-top:10px">${C.startBtn('Website anfragen', { cls: 'btn--lg' })}<a class="btn btn--ghost btn--lg" href="/preise/">Preise ansehen</a></div>
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Psychologie trifft Design', title: 'Warum Niktos-Websites mehr Anfragen bringen.', center: true, lead: 'Schönes Design allein verkauft nicht. Diese Prinzipien stecken in jeder Website, die ich baue:' })}
    ${C.features([
      ['eye', 'Die 5-Sekunden-Regel', 'Besucher entscheiden blitzschnell. Ihre wichtigste Botschaft – was, für wen, wo – steht sofort sichtbar ganz oben.'],
      ['heart', 'Vertrauen aufbauen', 'Echte Fotos, Referenzen, Bewertungen und ein Gesicht hinter dem Unternehmen senken die Hemmschwelle, Kontakt aufzunehmen.'],
      ['cursor', 'Ein klarer nächster Schritt', 'Jede Seite führt zu einer Handlung: anrufen, WhatsApp schreiben oder in 60 Sekunden eine Anfrage senden.'],
      ['users', 'Sprache Ihrer Kunden', 'Keine Floskeln, kein Fachchinesisch. Texte, die die Fragen und Sorgen Ihrer Kunden beantworten – und Einwände ausräumen.'],
      ['target', 'Weniger Reibung', 'Kurze Formulare, große Buttons, schnelle Ladezeiten. Jede Hürde weniger bedeutet mehr Anfragen.'],
      ['trend', 'Messbar besser', 'Cookielose Statistik zeigt, woher Anfragen kommen – so optimieren wir Ihre Website kontinuierlich.'],
    ])}
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Website-Relaunch</p>
      <h2>Ihre Website ist in die Jahre gekommen?</h2>
      <p class="lead">Veraltetes Design, lange Ladezeiten, nicht mobilfreundlich – das kostet jeden Tag Kunden. Beim Relaunch mache ich aus Ihrer alten Website eine moderne Anfrage-Maschine, <strong>ohne Ihre bestehenden Google-Rankings zu verlieren</strong>.</p>
      ${C.ticks(['Analyse der bestehenden Website & Rankings', 'Übernahme wertvoller Inhalte, neue Struktur', '301-Weiterleitungen für alle alten Adressen', 'Neue Sitemap & Indexierung in der Google Search Console'])}
    </div>
    <div class="card reveal reveal-d1" style="padding:clamp(28px,4vw,48px)">
      <span class="badge">${icon('check')} Echtes Beispiel</span>
      <h3 style="margin-top:18px">${site.projects[0].name}</h3>
      <p>${site.projects[0].text}</p>
      <a class="link-arrow" href="/referenzen/">Zu den Referenzen ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Pakete', title: 'Das passende Paket für Ihr Ziel.', center: true })}
    ${C.pricing({ compact: true })}
  </div>
</section>

${FAQ.html}
${C.ctaBand({ title: 'Lassen Sie uns Ihre neue Website bauen.', waText: 'Hallo Nikola, ich brauche eine neue Website. Können wir kurz sprechen?' })}
`,
};
