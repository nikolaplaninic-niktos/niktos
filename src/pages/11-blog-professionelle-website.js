const site = require('../site');
const C = require('../components');
const { icon, logoMark } = C;

const path = '/blog/warum-eine-professionelle-website-wichtig-ist/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Blog', url: '/blog/' }, { name: 'Warum eine professionelle Website wichtig ist', url: path }];
const PUBLISHED = '2026-09-30';
const H1 = 'Warum eine professionelle Website 2026 unverzichtbar ist – und was sie leisten muss';

const toc = [
  ['kurz', 'Die Kurzantwort'],
  ['erster-eindruck', 'Der erste Eindruck entsteht online'],
  ['lokale-suche', 'Kunden suchen lokal – und zwar im Netz'],
  ['ki-suche', 'Die KI-Suche verändert alles'],
  ['social-media', 'Warum Social Media keine Website ersetzt'],
  ['rund-um-die-uhr', 'Ihre Website arbeitet rund um die Uhr'],
  ['vertrauen', 'Vertrauen ist die wichtigste Währung'],
  ['checkliste', 'Checkliste: Das muss eine Website 2026 können'],
  ['kosten', 'Was kostet eine Website – und was bringt sie?'],
  ['fehler', 'Die 7 häufigsten Fehler'],
  ['fazit', 'Fazit'],
];

const FAQ = C.faq([
  ['Braucht ein kleines Unternehmen wirklich eine eigene Website?', 'Ja. Gerade kleine und lokale Unternehmen profitieren besonders, weil Kunden in ihrer Umgebung gezielt online suchen – bei Google, in Google Maps und zunehmend über KI-Assistenten. Die eigene Website ist der einzige Ort, der vollständig Ihnen gehört und den Suchmaschinen und KI-Systeme als verlässliche Quelle über Ihr Unternehmen nutzen.'],
  ['Reicht ein Google-Unternehmensprofil ohne Website?', 'Ein Google-Unternehmensprofil ist wichtig, ersetzt aber keine Website. Das Profil zeigt nur Basisinformationen. Die Website liefert die Details, die Kunden für eine Entscheidung brauchen – Leistungen, Preise, Referenzen, FAQ – und stärkt zugleich die Platzierung des Profils in Google Maps.'],
  ['Wie finde ich heraus, ob meine aktuelle Website gut genug ist?', `Prüfen Sie: Lädt sie auf dem Handy in unter drei Sekunden? Versteht man in fünf Sekunden, was Sie anbieten? Gibt es klare Kontaktwege wie WhatsApp oder einen Anruf-Button? Erscheinen Sie bei Google für „Ihre Leistung + Ihre Stadt“? Wenn Sie mehrfach „nein“ antworten, lohnt sich ein professioneller <a href="/website-check/">Website-Check</a>.`],
  ['Wie wird meine Website von ChatGPT oder Google-KI empfohlen?', 'Garantieren kann das niemand, aber Sie können die Chancen deutlich erhöhen: mit klar strukturierten Inhalten, strukturierten Daten (schema.org), einer FAQ mit konkreten Antworten, einer llms.txt-Datei, einheitlichen Firmendaten auf allen Plattformen und echten Bewertungen. KI-Systeme empfehlen bevorzugt Anbieter, die sie eindeutig verstehen und belegen können.'],
  ['Wie oft sollte man eine Website erneuern?', 'Inhalte sollten laufend aktuell gehalten werden. Einen kompletten Relaunch empfehle ich meist alle vier bis sechs Jahre – oder früher, wenn die Website nicht mobilfreundlich ist, langsam lädt, technisch veraltet ist oder keine Anfragen mehr bringt.'],
], { title: 'Häufige Fragen zum Thema', panel: false, id: 'faq' });

const article = `
<div class="tldr" id="kurz">
  <span class="tape" aria-hidden="true"></span>
  <strong>${icon('bolt')} Die Kurzantwort</strong>
  <p>Eine professionelle Website ist 2026 der zentrale Ort, an dem <b>Kunden, Google und KI-Assistenten wie ChatGPT</b> entscheiden, ob sie Ihrem Unternehmen vertrauen. Sie ist das einzige digitale Schaufenster, das Ihnen vollständig gehört, sie arbeitet rund um die Uhr – und sie ist die Grundlage dafür, bei Google, in Google Maps und in KI-Antworten empfohlen zu werden. Entscheidend ist nicht, <i>dass</i> Sie eine Website haben, sondern dass sie <b>schnell, mobil, vertrauenswürdig und klar auf Anfragen ausgerichtet</b> ist.</p>
</div>

<p>„Brauchen wir das wirklich? Die Kunden kommen doch über Empfehlungen.“ Diesen Satz höre ich von Unternehmern in Ludwigsburg und Umgebung regelmäßig. Und er stimmt – zur Hälfte. Denn auch wer Sie empfohlen bekommt, schaut sich Ihr Unternehmen fast immer zuerst online an. Was er dort findet, entscheidet darüber, ob aus der Empfehlung ein Auftrag wird.</p>
<p>In diesem Artikel zeige ich Ihnen, warum eine professionelle Website heute wichtiger ist als je zuvor, wie sich die Suche durch künstliche Intelligenz gerade verändert und woran Sie erkennen, ob Ihre Website für Sie arbeitet – oder gegen Sie.</p>

<h2 id="erster-eindruck">1. Der erste Eindruck entsteht online – in Sekundenbruchteilen</h2>
<p>Bevor ein potenzieller Kunde zum Telefon greift, macht er sich ein Bild. Er googelt Ihren Namen, klickt auf Ihre Website oder Ihr Google-Profil und entscheidet in wenigen Augenblicken: <strong>seriös oder nicht?</strong></p>
<p>Wie schnell das geht, zeigt eine oft zitierte Studie der Carleton University in Kanada (Lindgaard u. a., 2006): Nutzer bildeten sich schon nach rund <strong>50 Millisekunden</strong> einen ersten Eindruck von der visuellen Gestaltung einer Website – und dieser Eindruck blieb erstaunlich stabil. Mit anderen Worten: Bevor jemand den ersten Satz über Ihr Unternehmen gelesen hat, ist das Urteil über das Design bereits gefallen.</p>
<p>Eine veraltete, langsame oder unübersichtliche Website sendet dabei unbewusst eine Botschaft: „Hier wird nicht so genau hingeschaut.“ Das ist bitter, wenn Ihre eigentliche Arbeit hervorragend ist. Eine professionelle Website sorgt dafür, dass Ihr Online-Auftritt genauso gut ist wie das, was Sie tatsächlich leisten.</p>

<h2 id="lokale-suche">2. Kunden suchen lokal – und zwar im Netz</h2>
<p>„Friseur Ludwigsburg“, „Elektriker in der Nähe“, „Steuerberater Bietigheim“: Wer eine lokale Dienstleistung sucht, fängt heute fast immer mit einer Suche auf dem Smartphone an. Google zeigt dann zuerst eine Karte mit Unternehmen aus der Umgebung und darunter die klassischen Suchergebnisse.</p>
<p>Um in diesen Ergebnissen aufzutauchen, braucht es zwei Dinge, die eng zusammenspielen:</p>
<ul>
  <li><strong>Ein gepflegtes Google-Unternehmensprofil</strong> – mit korrekten Daten, Kategorien, Fotos und Bewertungen.</li>
  <li><strong>Eine starke Website</strong>, auf die das Profil verweist und die Google genau erklärt, was Sie wo anbieten.</li>
</ul>
<p>Die Website ist dabei der Hebel, den viele unterschätzen: Sie liefert Google die Signale, die ein Profil allein nicht liefern kann – eigene Seiten für jede Leistung, lokale Bezüge, Antworten auf Kundenfragen und strukturierte Daten. Ein Unternehmen ohne überzeugende Website verschenkt hier Sichtbarkeit an die Konkurrenz, die ein paar Straßen weiter sitzt.</p>
<p>Mehr dazu, wie lokales SEO konkret funktioniert, lesen Sie auf meiner Seite zu <a href="/seo-ludwigsburg/">SEO & KI-Sichtbarkeit</a>.</p>

<h2 id="ki-suche">3. Die KI-Suche verändert alles</h2>
<p>Die größte Veränderung der letzten Jahre: Menschen „googeln“ nicht mehr nur, sie <strong>fragen</strong>. ChatGPT, Google Gemini, Perplexity oder Microsoft Copilot beantworten Fragen direkt – und auch in der normalen Google-Suche erscheinen immer häufiger KI-generierte Übersichten oberhalb der klassischen Ergebnisse.</p>
<p>Stellt jemand eine Frage wie <em>„Welcher Webdesigner in Ludwigsburg ist empfehlenswert?“</em> oder <em>„Wer macht in Kornwestheim Badsanierungen zum Festpreis?“</em>, durchsucht die KI das Web, liest Websites und fasst zusammen, welche Anbieter sie für passend hält.</p>
<blockquote>Die KI kann nur empfehlen, was sie findet und versteht. Ohne eine klare, gut strukturierte Website existieren Sie für diese neue Art der Suche kaum.</blockquote>
<p>Was KI-Systeme bevorzugen, deckt sich weitgehend mit dem, was auch für Menschen gut ist – mit ein paar technischen Extras:</p>
<ul>
  <li><strong>Klare Fakten:</strong> Wer sind Sie, was bieten Sie an, wo, für wen, zu welchen Konditionen?</li>
  <li><strong>Direkte Antworten:</strong> FAQ-Bereiche und Texte, die echte Kundenfragen konkret beantworten.</li>
  <li><strong>Strukturierte Daten:</strong> maschinenlesbare Angaben nach schema.org zu Unternehmen, Leistungen, Preisen und Bewertungen.</li>
  <li><strong>Eine llms.txt-Datei:</strong> eine kompakte Zusammenfassung Ihres Unternehmens speziell für Sprachmodelle.</li>
  <li><strong>Konsistenz:</strong> identische Firmendaten auf Website, Google-Profil, Social Media und Branchenverzeichnissen.</li>
</ul>
<p>Diese Optimierung für KI-Suchsysteme wird oft <strong>GEO</strong> (Generative Engine Optimization) genannt. Sie ist kein Ersatz für klassisches SEO, sondern die logische Erweiterung – und aktuell noch ein echter Wettbewerbsvorteil, weil die meisten lokalen Unternehmen sich damit noch nicht beschäftigt haben.</p>

<h2 id="social-media">4. Warum Social Media keine Website ersetzt</h2>
<p>„Ich habe doch Instagram.“ Das ist gut – Social Media ist ein starkes Werkzeug für Reichweite und Nähe zu Ihren Kunden. Aber es ist kein Ersatz für eine Website. Der Vergleich zeigt, warum:</p>
<table>
  <thead><tr><th>Kriterium</th><th>Instagram / Facebook</th><th>Eigene Website</th></tr></thead>
  <tbody>
    <tr><td>Gehört Ihnen</td><td>Nein – die Plattform bestimmt die Regeln</td><td>Ja, zu 100 %</td></tr>
    <tr><td>Bei Google auffindbar</td><td>Kaum, meist nur das Profil</td><td>Jede Seite, jede Leistung</td></tr>
    <tr><td>Von KI-Assistenten nutzbar</td><td>Eingeschränkt</td><td>Ja, mit strukturierten Daten</td></tr>
    <tr><td>Lebensdauer von Inhalten</td><td>Stunden bis Tage im Feed</td><td>Dauerhaft</td></tr>
    <tr><td>Anfragen & Formulare</td><td>Nur Direktnachrichten</td><td>Formular, Funnel, WhatsApp, Anruf</td></tr>
    <tr><td>Seriosität bei Geschäftskunden</td><td>Ergänzend</td><td>Erwartet</td></tr>
  </tbody>
</table>
<p>Die beste Strategie ist deshalb nicht „entweder – oder“, sondern: <strong>Social Media bringt Aufmerksamkeit, die Website macht daraus Kunden.</strong> Verlinken Sie Ihre Beiträge auf Ihre Website – dort, wo Sie alle Informationen und alle Kontaktwege selbst in der Hand haben.</p>

<h2 id="rund-um-die-uhr">5. Ihre Website arbeitet rund um die Uhr</h2>
<p>Ihre Website ist der einzige Mitarbeiter, der nie Feierabend macht. Sonntagabends, wenn ein Hausbesitzer endlich Zeit hat, sich um die neue Heizung zu kümmern, ist Ihr Büro geschlossen – Ihre Website nicht.</p>
<p>Eine gut gebaute Website übernimmt dabei gleich mehrere Aufgaben:</p>
<ul>
  <li><strong>Informieren:</strong> Sie beantwortet die Fragen, die Ihnen sonst jeden Tag am Telefon gestellt werden.</li>
  <li><strong>Überzeugen:</strong> Referenzen, Bewertungen und Fotos bauen Vertrauen auf, bevor das erste Gespräch stattfindet.</li>
  <li><strong>Vorqualifizieren:</strong> Ein Anfrage-Formular Schritt für Schritt – wie auf dieser Website – erfasst Budget, Zeitrahmen und Anliegen. So wissen Sie vor dem ersten Rückruf, worum es geht.</li>
  <li><strong>Den Kontakt leicht machen:</strong> WhatsApp-Button, Klick-zum-Anrufen, kurzes Formular. Jede Hürde weniger bedeutet mehr Anfragen.</li>
</ul>

<div class="inline-cta">
  <strong>Wie gut ist Ihre aktuelle Website?</strong>
  <p>Im Website-Check prüfe ich Geschwindigkeit, SEO, KI-Sichtbarkeit und Nutzerführung – mit klarer To-do-Liste als PDF.</p>
  <div class="actions"><a class="btn btn--white" href="/website-check/">Zum Website-Check ${icon('arrow')}</a><a class="btn btn--wa" href="${site.wa('Hallo Nikola, ich habe deinen Blogartikel gelesen und möchte meine Website prüfen lassen.')}" target="_blank" rel="noopener">${icon('wa')} WhatsApp</a></div>
</div>

<h2 id="vertrauen">6. Vertrauen ist die wichtigste Währung</h2>
<p>Online können Kunden Ihnen nicht in die Augen sehen. Deshalb muss Ihre Website das übernehmen, was im persönlichen Gespräch ganz natürlich passiert: Vertrauen aufbauen. Die stärksten Vertrauenssignale sind:</p>
<ul>
  <li><strong>Echte Fotos</strong> von Ihnen, Ihrem Team und Ihrer Arbeit statt austauschbarer Stockbilder.</li>
  <li><strong>Referenzen und Bewertungen</strong> – am besten echte Google-Bewertungen mit Namen.</li>
  <li><strong>Transparenz</strong> bei Ablauf und, wo möglich, bei Preisen.</li>
  <li><strong>Ein vollständiges Impressum</strong>, eine Datenschutzerklärung und eine sichere HTTPS-Verbindung.</li>
  <li><strong>Ein Gesicht:</strong> Menschen kaufen von Menschen. Zeigen Sie, wer hinter Ihrem Unternehmen steht.</li>
</ul>
<p>Auch für Google spielen diese Signale eine Rolle: Die Suchmaschine achtet darauf, ob Inhalte Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit erkennen lassen – im SEO-Jargon oft mit <em>E-E-A-T</em> abgekürzt.</p>

<h2 id="checkliste">7. Checkliste: Das muss eine professionelle Website 2026 können</h2>
<p>Nutzen Sie diese Liste, um Ihre eigene Website ehrlich zu bewerten:</p>
<ol>
  <li><strong>Mobil perfekt:</strong> Die Website ist zuerst für das Smartphone gestaltet.</li>
  <li><strong>Schnell:</strong> Die Seite lädt auch im Mobilfunknetz spürbar schnell – gute Core Web Vitals.</li>
  <li><strong>Klare Botschaft:</strong> In fünf Sekunden ist klar, was Sie anbieten, für wen und wo.</li>
  <li><strong>Eine Seite pro Leistung:</strong> Jede wichtige Leistung hat eine eigene, ausführliche Unterseite.</li>
  <li><strong>Kontakt auf jedem Bildschirm:</strong> WhatsApp, Anruf und Anfrage sind immer nur einen Klick entfernt.</li>
  <li><strong>Vertrauenssignale:</strong> Referenzen, Bewertungen, echte Fotos, vollständiges Impressum.</li>
  <li><strong>Lokales SEO:</strong> Ort und Einzugsgebiet sind klar benannt, das Google-Profil ist verknüpft.</li>
  <li><strong>KI-Sichtbarkeit:</strong> strukturierte Daten, FAQ, llms.txt und KI-Crawler sind freigegeben.</li>
  <li><strong>Datenschutzfreundlich:</strong> keine unnötigen Tracking-Cookies, Schriften lokal, Karten erst nach Klick.</li>
  <li><strong>Aktuell und gepflegt:</strong> korrekte Öffnungszeiten, Preise und Leistungen, regelmäßige Updates.</li>
</ol>
<p>Wenn Sie bei mehr als zwei Punkten zögern, verschenkt Ihre Website mit hoher Wahrscheinlichkeit Anfragen.</p>

<h2 id="kosten">8. Was kostet eine Website – und was bringt sie?</h2>
<p>Die Spanne ist groß, und das verunsichert viele Unternehmer. Grob lassen sich drei Wege unterscheiden:</p>
<ul>
  <li><strong>Baukasten (Wix, Jimdo & Co.):</strong> typischerweise ein monatliches Abo. Günstig im Einstieg, aber begrenzt bei Design, Geschwindigkeit und SEO – und Sie bleiben dauerhaft an den Anbieter gebunden.</li>
  <li><strong>Freelancer / kleine Agentur:</strong> individuelle Websites, bei kleinen Unternehmen häufig im Bereich von etwa tausend bis einigen tausend Euro – je nach Umfang, Texten und SEO.</li>
  <li><strong>Große Agentur:</strong> umfangreiche Projekte mit Team, entsprechend meist deutlich höhere Budgets.</li>
</ul>
<p>Die wichtigere Frage ist aber nicht, was eine Website kostet, sondern <strong>was sie einbringt</strong>. Eine einfache Beispielrechnung: Bringt Ihnen die neue Website nur einen zusätzlichen Kunden pro Monat mit einem Auftragswert von 500 €, sind das 6.000 € zusätzlicher Umsatz im Jahr. Eine Website ist damit keine Ausgabe, sondern eine Investition mit messbarer Rendite.</p>
<p>Bei Niktos gibt es dafür transparente Festpreise – von <strong>Launch</strong> ab ${C.euro(site.packages[0].price)} bis <strong>Dominate</strong> ab ${C.euro(site.packages[2].price)}. Alle Details finden Sie auf der Seite <a href="/preise/">Preise</a>.</p>

<h2 id="fehler">9. Die 7 häufigsten Fehler auf Unternehmens-Websites</h2>
<ol>
  <li><strong>Die Startseite spricht über das Unternehmen statt über den Kunden.</strong> „Seit 1998 …“ interessiert weniger als „Wir lösen Ihr Problem – schnell und zum Festpreis“.</li>
  <li><strong>Kein klarer Call-to-Action.</strong> Der Besucher weiß nicht, was er als Nächstes tun soll.</li>
  <li><strong>Alle Leistungen auf einer Seite.</strong> Google kann so kaum erkennen, wofür Sie relevant sind.</li>
  <li><strong>Langsame Ladezeit</strong> durch riesige Bilder, zu viele Plugins und überladene Baukästen.</li>
  <li><strong>Keine Ortsangaben.</strong> Wer nicht sagt, wo er tätig ist, wird lokal nicht gefunden.</li>
  <li><strong>Veraltete Inhalte.</strong> Falsche Öffnungszeiten oder alte Preise zerstören Vertrauen sofort.</li>
  <li><strong>Komplizierte Kontaktwege.</strong> Lange Formulare ohne WhatsApp- oder Anruf-Option kosten Anfragen.</li>
</ol>

<h2 id="fazit">10. Fazit: Ihre Website entscheidet mit, ob Sie gewählt werden</h2>
<p>Eine professionelle Website ist 2026 kein „nice to have“ mehr. Sie ist der Ort, an dem Menschen, Suchmaschinen und KI-Assistenten sich ein Bild von Ihrem Unternehmen machen – und entscheiden, ob sie Sie empfehlen oder kontaktieren. Wer hier überzeugt, gewinnt Kunden. Wer hier schwächelt, verliert sie, oft ohne es je zu merken.</p>
<p>Die gute Nachricht: Mit einer schnellen, klaren, vertrauenswürdigen und für Google und KI optimierten Website können gerade kleine und mittlere Unternehmen in ihrer Region an deutlich größeren Wettbewerbern vorbeiziehen.</p>
<p>Wenn Sie wissen möchten, wie das für Ihr Unternehmen aussehen kann, <a href="/projekt-anfrage/" data-open-funnel>starten Sie in 60 Sekunden eine unverbindliche Projekt-Anfrage</a> oder schreiben Sie mir einfach <a href="${site.whatsapp}" target="_blank" rel="noopener">per WhatsApp</a>. Ich freue mich darauf, von Ihnen zu hören.</p>
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
  ogImage: '/assets/img/og-blog-professionelle-website.jpg',
  minutes,
  title: 'Warum eine professionelle Website 2026 so wichtig ist | Niktos',
  description: 'Warum Unternehmen 2026 eine professionelle Website brauchen: erster Eindruck, lokale Suche, KI-Suche (ChatGPT & Google), Vertrauen, Kosten + Checkliste.',
  head: `<meta property="article:published_time" content="${PUBLISHED}T09:00:00+02:00">
<meta property="article:modified_time" content="${PUBLISHED}T09:00:00+02:00">
<meta property="article:author" content="${site.owner}">
<meta property="article:section" content="Webdesign">`,
  schema: [FAQ.schema, {
    '@type': 'BlogPosting', '@id': site.url + path + '#article',
    headline: H1, description: 'Warum Unternehmen 2026 eine professionelle Website brauchen – mit Fokus auf lokale Suche, KI-Suche, Vertrauen, Kosten und einer praktischen Checkliste.',
    image: { '@type': 'ImageObject', url: site.url + '/assets/img/og-blog-professionelle-website.jpg', width: 1200, height: 630 },
    datePublished: PUBLISHED + 'T09:00:00+02:00', dateModified: PUBLISHED + 'T09:00:00+02:00',
    author: { '@id': site.url + '/#nikola-planinic' }, publisher: { '@id': site.url + '/#business' },
    mainEntityOfPage: { '@id': site.url + path + '#webpage' }, isPartOf: { '@id': site.url + '/blog/#blog' },
    inLanguage: 'de-DE', wordCount: words, timeRequired: `PT${minutes}M`,
    articleSection: 'Webdesign', keywords: ['professionelle Website', 'Website für Unternehmen', 'Webdesign Ludwigsburg', 'lokales SEO', 'KI-Suche', 'ChatGPT', 'GEO', 'Google-Unternehmensprofil', 'Website Kosten'],
    about: [{ '@type': 'Thing', name: 'Webdesign' }, { '@type': 'Thing', name: 'Suchmaschinenoptimierung' }, { '@type': 'Thing', name: 'Generative Engine Optimization' }],
    citation: 'Lindgaard, G., Fernandes, G., Dudek, C. & Brown, J. (2006): Attention web designers: You have 50 milliseconds to make a good first impression! Behaviour & Information Technology, 25(2).',
  }],
  body: `
<div aria-hidden="true" style="position:fixed;top:0;left:0;right:0;height:3px;z-index:80;background:var(--blue);transform-origin:left;transform:scaleX(0)" data-read-progress></div>
<section class="phero">
  <div class="dots"></div>
  <div class="container">
    ${C.breadcrumb(crumbs)}
    <p class="eyebrow">Ratgeber · Webdesign & Sichtbarkeit</p>
    <h1 style="max-width:22ch">${H1}</h1>
    <div class="article__meta">
      <span>${logoMark(28)} Von <a href="/ueber-mich/" rel="author">${site.owner}</a></span>
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
        ${logoMark(64)}
        <div><strong>${site.owner}</strong><p>Inhaber von Niktos · Webdesigner & SEO aus Ludwigsburg. Ich baue Websites aus einer Hand, die schnell laden, gefunden werden und Kunden bringen. <a href="/ueber-mich/">Mehr über mich</a> · <a href="${site.instagram}" target="_blank" rel="noopener">Instagram</a></p></div>
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
