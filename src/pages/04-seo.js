const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/seo-ludwigsburg/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Leistungen', url: '/leistungen/' }, { name: 'SEO & KI-Sichtbarkeit', url: path }];

const FAQ = C.faq([
  ['Was ist lokales SEO?', 'Lokales SEO sorgt dafür, dass Ihr Unternehmen bei Suchanfragen mit Ortsbezug erscheint – etwa „Friseur Ludwigsburg“ oder „Elektriker in der Nähe“. Dazu gehören eine optimierte Website mit Stadt- und Leistungsseiten, ein gepflegtes Google-Unternehmensprofil, konsistente Firmendaten (Name, Adresse, Telefon) und echte Kundenbewertungen.'],
  ['Was ist GEO bzw. KI-Optimierung?', 'GEO (Generative Engine Optimization) ist die Optimierung für KI-Suchsysteme wie ChatGPT, Google Gemini, die KI-Übersichten in der Google-Suche, Perplexity oder Microsoft Copilot. Diese Systeme fassen Informationen aus dem Web zusammen und empfehlen Anbieter. Wer klar strukturierte, vertrauenswürdige und zitierfähige Inhalte hat, wird eher genannt.'],
  ['Wie lange dauert es, bis SEO wirkt?', 'Technische Verbesserungen wirken oft schon nach wenigen Wochen. Für stabile Top-Platzierungen bei umkämpften Begriffen sollten Sie mit 3 bis 6 Monaten rechnen. Lokale Suchanfragen in kleineren Orten gehen meist deutlich schneller.'],
  ['Können Sie Platz 1 bei Google garantieren?', 'Nein – und seien Sie vorsichtig bei allen, die das tun. Google entscheidet über Rankings, nicht die Agentur. Was ich garantieren kann: eine technisch einwandfreie, inhaltlich starke Website und eine klare Strategie, mit der Sie in Ihrer Region beste Chancen auf die vorderen Plätze haben.'],
  ['Brauche ich ein Google-Unternehmensprofil?', 'Unbedingt. Das kostenlose Google-Unternehmensprofil entscheidet, ob Sie in Google Maps und im lokalen Kartenbereich der Suche erscheinen. Im Paket Dominate richte ich es für Sie ein bzw. optimiere es, zu jedem anderen Paket können Sie es als Extra dazubuchen – inklusive Kategorien, Leistungen, Fotos und Verknüpfung mit Ihrer Website.'],
  ['Kann ich SEO auch für meine bestehende Website buchen?', `Ja. Am besten starten Sie mit dem <a href="/website-check/">Website-Check</a> für ${site.checkPrice} €: Sie erhalten eine klare Liste, was verbessert werden muss. Danach setze ich die Maßnahmen um – oder Sie entscheiden sich für einen Relaunch.`],
]);

module.exports = {
  path,
  nav: 'seo',
  priority: 0.9,
  crumbs,
  ogImage: '/assets/img/og-seo-ki-sichtbarkeit.jpg',
  title: 'SEO Ludwigsburg & KI-Sichtbarkeit (ChatGPT, Google) | Niktos',
  description: 'Lokales SEO in Ludwigsburg: bei Google, Google Maps und KI wie ChatGPT & Gemini gefunden werden. Strukturierte Daten, Google-Profil, Inhalte, die ranken.',
  schema: [FAQ.schema, {
    '@type': 'Service', '@id': site.url + path + '#service', name: 'SEO & KI-Sichtbarkeit', serviceType: 'Suchmaschinenoptimierung',
    description: 'Lokales SEO, Google-Unternehmensprofil und Optimierung für KI-Suchsysteme (GEO) für Unternehmen in Ludwigsburg und der Region Stuttgart.',
    provider: { '@id': site.url + '/#business' }, areaServed: [{ '@type': 'City', name: 'Ludwigsburg' }, { '@type': 'AdministrativeArea', name: 'Region Stuttgart' }],
  }],
  body: `
${C.pageHero({
  crumbs,
  aside: C.serp(),
  eyebrow: 'SEO · Lokales SEO · KI-Sichtbarkeit',
  h1: 'Gefunden werden. <span class="grad">Bei Google & KI.</span>',
  lead: 'Die beste Website bringt nichts, wenn sie niemand findet. Ich sorge dafür, dass Kunden aus Ludwigsburg und Umgebung Sie finden – in der Google-Suche, in Google Maps und in KI-Assistenten wie ChatGPT, Gemini und Perplexity.',
})}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Drei Wege zu Ihnen', title: 'So suchen Ihre Kunden heute.', lead: 'Früher gab es zehn blaue Links. Heute entscheiden drei Kanäle darüber, ob Sie gefunden werden – ich optimiere Ihre Website für alle drei.' })}
    <div class="grid grid--3">
      <div class="card reveal"><span class="card__num">01</span><span class="card__ico">${icon('search')}</span><h3>Google-Suche</h3><p>Klassisches SEO: Technik, Seitenstruktur, Keywords und Inhalte, die Ihre Kunden wirklich suchen.</p>${C.ticks(['Keyword- & Wettbewerbsanalyse', 'Eigene Seite pro Leistung & Ort', 'Core Web Vitals & PageSpeed'])}</div>
      <div class="card reveal reveal-d1"><span class="card__num">02</span><span class="card__ico">${icon('map')}</span><h3>Google Maps</h3><p>Lokales SEO: Wer „in der Nähe“ sucht, sieht zuerst die Karte. Dort müssen Sie ganz oben stehen.</p>${C.ticks(['Google-Unternehmensprofil', 'Einheitliche Firmendaten (NAP)', 'Bewertungs-Strategie'])}</div>
      <div class="card reveal reveal-d2"><span class="card__num">03</span><span class="card__ico">${icon('bot')}</span><h3>KI-Assistenten</h3><p>GEO: ChatGPT, Gemini & Co. empfehlen Unternehmen, deren Website sie eindeutig verstehen und zitieren können.</p>${C.ticks(['Strukturierte Daten (schema.org)', 'llms.txt & KI-Crawler-Freigabe', 'Zitierfähige FAQ & Fakten'])}</div>
    </div>
    <div class="aibox reveal">
      <div>${icon('bot')}ChatGPT</div><div>${icon('sparkle')}Google Gemini & KI-Übersicht</div><div>${icon('search')}Perplexity</div><div>${icon('globe')}Microsoft Copilot</div>
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container split split--top">
    <div class="reveal">
      <p class="eyebrow">KI-Sichtbarkeit (GEO)</p>
      <h2>Wie KI entscheidet, wen sie empfiehlt.</h2>
      <div class="prose">
        <p>KI-Assistenten „googeln“ im Hintergrund, lesen Websites und fassen die Ergebnisse zusammen. Empfohlen wird, wer <strong>eindeutige, gut strukturierte und vertrauenswürdige Informationen</strong> liefert.</p>
        <p>Genau hier setze ich an:</p>
        <ul>
          <li><strong>Strukturierte Daten:</strong> Ihr Unternehmen, Ihre Leistungen, Preise, Einsatzorte und FAQ werden maschinenlesbar beschrieben.</li>
          <li><strong>llms.txt:</strong> eine kompakte Zusammenfassung Ihres Unternehmens speziell für Sprachmodelle.</li>
          <li><strong>KI-Crawler willkommen:</strong> robots.txt so eingestellt, dass seriöse KI-Suchsysteme Ihre Inhalte lesen dürfen.</li>
          <li><strong>Antwort-first-Inhalte:</strong> klare Antworten auf echte Kundenfragen – kurz, konkret, zitierfähig.</li>
          <li><strong>Konsistenz:</strong> gleiche Firmendaten auf Website, Google-Profil, Social Media und Verzeichnissen.</li>
        </ul>
      </div>
    </div>
    <div class="chat reveal reveal-d1" aria-label="Beispielhafte Darstellung einer KI-Suche">
      <div class="chat__msg chat__msg--u"><div class="chat__who">${icon('user')} Suchanfrage</div>Welcher Handwerker in Ludwigsburg kann kurzfristig ein Bad sanieren?</div>
      <div class="chat__msg chat__msg--a"><div class="chat__who">${icon('bot')} KI-Assistent</div>In Ludwigsburg bietet <b>[Ihr Unternehmen]</b> Badsanierungen aus einer Hand an – laut Website mit kostenloser Vor-Ort-Beratung, Festpreis-Angebot und Kontakt per WhatsApp …</div>
      <p class="small muted mb-0" style="text-align:center">Beispielhafte Darstellung. Ziel: Ihr Unternehmen wird mit den richtigen Fakten genannt.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Mein SEO-Fahrplan', title: 'Was ich konkret für Ihre Sichtbarkeit tue.', center: true })}
    ${C.steps([
      ['Analyse', 'Wo stehen Sie heute? Technik-Check, Rankings, Wettbewerber in Ihrer Stadt und die Suchbegriffe Ihrer Kunden.'],
      ['Technik', 'Ladezeit, Mobilfreundlichkeit, Indexierung, Sitemap, strukturierte Daten – das unsichtbare Fundament für gute Rankings.'],
      ['Struktur', 'Eine eigene, starke Seite pro Leistung und Region. So verstehen Google und KI exakt, was Sie wo anbieten.'],
      ['Inhalte', 'Texte, die Fragen beantworten und verkaufen – plus FAQ und Ratgeber-Artikel, die Vertrauen und Reichweite aufbauen.'],
      ['Google-Profil', 'Einrichtung und Optimierung Ihres Google-Unternehmensprofils, inklusive Strategie für mehr echte Bewertungen.'],
      ['Messen & Ausbauen', 'Search Console, cookielose Statistik und regelmäßige Anpassungen – SEO ist ein Marathon, kein Sprint.'],
    ])}
  </div>
</section>

<section class="section section--panel">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Transparenz</p>
      <h2>Keine SEO-Magie. Nur saubere Arbeit.</h2>
      <p class="lead">Ich verspreche Ihnen keine Fantasie-Rankings und keine „10.000 Backlinks“. Ich baue Ihnen ein ehrliches, solides Fundament und zeige Ihnen, was wirkt.</p>
      <div class="actions">${C.startBtn('SEO-Beratung anfragen', { cls: 'btn--lg' })}<a class="btn btn--ghost btn--lg" href="/website-check/">Website-Check ${site.checkPrice} €</a></div>
    </div>
    <div class="reveal reveal-d1">
      ${C.ticks(['SEO-Grundoptimierung ist in jedem Paket enthalten', 'Lokales SEO ab dem Paket Boost', 'Google-Profil, Keyword-Analyse & Regionen-Seiten im Paket Dominate', 'SEO-Betreuung für bestehende Websites auf Anfrage'])}
    </div>
  </div>
</section>

${FAQ.html}
${C.ctaBand({ title: 'Werden Sie die Nr. 1 in Ihrer Region.', waText: 'Hallo Nikola, ich möchte bei Google und in der KI-Suche besser gefunden werden. Können wir sprechen?' })}
`,
};
