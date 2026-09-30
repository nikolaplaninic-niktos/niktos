const site = require('../site');
const C = require('../components');
const { icon } = C;

const kabic = site.projects[0];
const post = require('./11-blog-professionelle-website');

const FAQ = C.faq([
  ['Was kostet eine Website bei Niktos?', `Sie bekommen einen transparenten Festpreis: Das Paket <strong>Launch</strong> startet bei ${C.euro(site.packages[0].price)}, <strong>Boost</strong> bei ${C.euro(site.packages[1].price)} und <strong>Dominate</strong> bei ${C.euro(site.packages[2].price)}. Als Kleinunternehmer (§ 19 UStG) weise ich keine Mehrwertsteuer aus – die Preise sind Endpreise. Nach einem kostenlosen Erstgespräch erhalten Sie ein verbindliches Angebot ohne versteckte Kosten. Alle Details finden Sie unter <a href="/preise/">Preise</a>.`],
  ['Wie schnell ist meine neue Website online?', 'Je nach Umfang in 2 bis 6 Wochen. Eine kompakte Website (Launch) ist meist in rund 2 Wochen fertig, eine umfangreiche SEO-Website (Boost) in 3–4 Wochen. Der größte Zeitfaktor sind in der Regel Ihre Inhalte – deshalb übernehme ich auf Wunsch auch die Texte.'],
  ['Muss ich mich um Texte und Bilder selbst kümmern?', 'Nein. Ab dem Paket Boost schreibe ich verkaufsstarke, SEO-optimierte Texte für Sie – Sie geben nur kurz Input. Bilder: Am besten wirken echte Fotos von Ihnen, Ihrem Team und Ihrer Arbeit. Bis dahin setze ich passende lizenzfreie Bilder oder individuelle Grafiken ein.'],
  ['Werde ich mit der Website bei Google gefunden?', 'Jede Niktos-Website ist technisch sauber für Google aufgebaut: schnelle Ladezeit, klare Struktur, strukturierte Daten, lokale Keywords und ein optimiertes Google-Unternehmensprofil (ab Boost). Einen Platz 1 kann seriös niemand garantieren – aber ich lege das Fundament, mit dem Sie in Ihrer Region ganz vorne mitspielen.'],
  ['Was bedeutet „KI-Sichtbarkeit“?', 'Immer mehr Menschen fragen ChatGPT, Gemini, Perplexity oder die Google-KI-Übersicht nach Empfehlungen – z. B. „Welcher Elektriker in Ludwigsburg ist gut?“. Diese Systeme empfehlen Unternehmen, deren Websites sie eindeutig verstehen. Ich optimiere Ihre Website dafür: mit strukturierten Daten, klaren Antworten, FAQ, einer llms.txt-Datei und konsistenten Unternehmensangaben.'],
  ['Gehört mir die Website am Ende?', 'Ja, zu 100 %. Keine Abo-Falle, kein Baukasten, an den Sie gebunden sind. Sie erhalten alle Dateien und Zugänge. Wenn Sie möchten, übernehme ich mit dem Care-Paket Hosting, Updates und Änderungen – monatlich kündbar.'],
  ['Kann ich später selbst Änderungen vornehmen?', 'Gerne. Die meisten Kunden schicken mir Änderungen einfach per WhatsApp – im Care-Paket sind kleinere Anpassungen inklusive. Wenn Sie Inhalte regelmäßig selbst pflegen möchten, setze ich Ihre Website mit einem einfachen Redaktionssystem um.'],
  ['Arbeiten Sie nur für Kunden in Ludwigsburg?', 'Mein Sitz ist Ludwigsburg und ich betreue viele Unternehmen im Landkreis Ludwigsburg und in der Region Stuttgart – gerne auch persönlich vor Ort. Genauso arbeite ich mit Kunden in ganz Deutschland zusammen: per Video-Call, Telefon und WhatsApp.'],
]);

module.exports = {
  path: '/',
  nav: 'home',
  priority: 1.0,
  title: 'Webdesign Ludwigsburg – Websites, die Kunden bringen | Niktos',
  description: `Webdesign & SEO aus Ludwigsburg: individuelle, blitzschnelle Websites, die bei Google & KI gefunden werden und Anfragen bringen. Festpreise ab ${C.euro(site.packages[0].price)}.`,
  schema: [FAQ.schema],
  body: `
<section class="hero">
  <div class="bg-grid"></div><div class="glow glow--a"></div><div class="glow glow--b"></div>
  <div class="container hero__grid">
    <div>
      <a class="pill" href="/seo-ludwigsburg/"><b>Neu</b> Sichtbar in ChatGPT, Gemini & Google-KI ${icon('arrow')}</a>
      <p class="eyebrow">Webdesign & SEO · ${site.address.city}</p>
      <h1 data-split>Webdesign in Ludwigsburg, das <span class="grad">Kunden bringt.</span></h1>
      <p class="lead">Ich bin ${site.ownerFirst} – und ich baue Websites für Unternehmen in Ludwigsburg und der Region Stuttgart, die <strong>blitzschnell laden</strong>, <strong>bei Google & KI gefunden werden</strong> und aus Besuchern <strong>echte Anfragen</strong> machen. Persönlich, zum Festpreis, ohne Agentur-Blabla.</p>
      <div class="actions">
        ${C.startBtn('Kostenloses Angebot in 60 Sek.', { cls: 'btn--lg' })}
        ${C.waBtn('WhatsApp', { cls: 'btn--lg' })}
      </div>
      <div class="hero__trust">
        <span>${icon('check')} Festpreise ab ${C.euro(site.packages[0].price)}</span>
        <span>${icon('check')} Antwort in 24 h</span>
        <span>${icon('check')} ${C.years()} Jahre Erfahrung</span>
      </div>
    </div>
    <div class="stage" aria-label="Beispielprojekt: Website von ${kabic.name}">
      <div class="browser">
        <div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${icon('lock')} ${kabic.domain}</span></div>
        <div class="browser__body">${C.img(kabic.img, { sizes: '(max-width: 1280px) 90vw, 40vw', eager: true })}</div>
      </div>
      <div class="float float--b"><div class="scores">${['Speed', 'SEO', 'A11y', 'Best'].map((l) => `<div><div class="score"><svg viewBox="0 0 50 50"><circle class="bg" cx="25" cy="25" r="22"/><circle class="fg" cx="25" cy="25" r="22"/></svg>90+</div><small>${l}</small></div>`).join('')}</div></div>
      <div class="float float--a"><span class="float__ico float__ico--w">${icon('wa')}</span><span><strong>Neue Anfrage</strong>über Ihre Website – gerade eben</span></div>
      <div class="float float--c"><span class="float__ico">${icon('bot')}</span><span><strong>Google + KI</strong>verstehen Ihr Angebot</span></div>
    </div>
  </div>
</section>

${C.marquee(['Webdesign', 'SEO', 'KI-Sichtbarkeit', 'Google Maps', 'WhatsApp-Anbindung', 'PageSpeed', 'Conversion', 'Ludwigsburg'], true)}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Die ehrliche Wahrheit', title: 'Ihre Website ist Ihr bester Verkäufer. <span class="outline">Oder Ihr teuerstes Problem.</span>', lead: 'Bevor jemand anruft, schaut er sich Ihre Website an. In wenigen Sekunden entscheidet er: seriös oder nicht? Anrufen oder zurück zu Google – und zur Konkurrenz?' })}
    <div class="pain">
      <div class="card reveal" data-spot><span class="card__ico">${icon('search')}</span><p class="pain__q">„Mich findet bei Google niemand.“</p><p class="mb-0">Ohne saubere Technik, lokale Keywords und ein gepflegtes Google-Profil sind Sie für Kunden in Ihrer Stadt schlicht unsichtbar – und jetzt kommt auch noch die KI-Suche dazu.</p></div>
      <div class="card reveal reveal-d1" data-spot><span class="card__ico">${icon('clock')}</span><p class="pain__q">„Die Seite ist alt und langsam.“</p><p class="mb-0">Veraltetes Design und lange Ladezeiten kosten Vertrauen. Mobile Besucher warten nicht – sie klicken weg, bevor sie Ihr Angebot überhaupt gesehen haben.</p></div>
      <div class="card reveal reveal-d2" data-spot><span class="card__ico">${icon('chat')}</span><p class="pain__q">„Es kommen keine Anfragen.“</p><p class="mb-0">Viele Websites sehen okay aus, führen den Besucher aber nirgendwohin. Kein klarer nächster Schritt, kein WhatsApp, kein einfaches Formular – keine Anfrage.</p></div>
    </div>
    <div class="split" style="margin-top:clamp(50px,7vw,90px)">
      <p class="bigquote reveal">Ich baue keine Visitenkarten. Ich baue <span class="grad">Anfrage-Maschinen.</span></p>
      <div class="reveal reveal-d1">
        <p class="lead">Jede Niktos-Website folgt einem Ziel: <strong>aus Besuchern Kunden machen.</strong> Dafür verbinde ich modernes Design mit Verkaufspsychologie, technischer Perfektion und SEO – von der ersten Zeile an.</p>
        ${C.ticks(['Klare Botschaft in 5 Sekunden: Was bieten Sie, für wen, warum Sie?', 'Vertrauen durch Referenzen, echte Fotos und transparente Preise', 'Kontakt auf jedem Bildschirm: WhatsApp, Anruf, Anfrage-Funnel', 'Technisch sauber für Google, Google Maps & KI-Assistenten'])}
      </div>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="stats reveal">
      <div class="stat"><strong class="grad" data-count-to="${C.years()}">${C.years()}</strong><span>Jahre Erfahrung im Webdesign</span></div>
      <div class="stat"><strong class="grad" data-count-to="24" data-suffix=" h">24 h</strong><span>maximale Antwortzeit (werktags)</span></div>
      <div class="stat"><strong class="grad" data-count-to="100" data-suffix=" %">100 %</strong><span>individuell – keine Vorlagen</span></div>
      <div class="stat"><strong class="grad">1</strong><span>fester Ansprechpartner: ich</span></div>
    </div>
  </div>
</section>

<section class="section" id="leistungen">
  <div class="container">
    ${C.head({ eyebrow: 'Leistungen', title: 'Alles, was Ihre Website zum Verkaufen braucht.', lead: 'Von der ersten Idee bis zur Nr. 1 in Ihrer Region – Design, Technik, Texte, SEO und Betreuung aus einer Hand.', split: `<a class="btn btn--ghost" href="/leistungen/">Alle Leistungen ${icon('arrow')}</a>` })}
    ${C.serviceCards()}
  </div>
</section>

<section class="section section--panel" id="referenzen">
  <div class="container">
    ${C.head({ eyebrow: 'Referenzen', title: 'Ergebnisse statt Versprechen.', lead: 'Ein Auszug aus aktuellen Projekten – vom Handwerksbetrieb bis zum sozialen Träger.', split: `<a class="btn btn--ghost" href="/referenzen/">Alle Referenzen ${icon('arrow')}</a>` })}
    ${C.projects(site.projects.slice(0, 1))}
    <div class="grid grid--2" style="margin-top:24px">
      ${site.projects.slice(1).map((p, i) => `<a class="card reveal reveal-d${i}" href="/referenzen/#projekt-${p.id}" data-spot style="padding:18px">${C.browser(p.img, p.domain, { sizes: '(max-width: 980px) 100vw, 40vw' })}<div style="padding:22px 8px 6px"><h3>${p.name}</h3><p class="mb-0">${p.branch} · ${p.place}</p><span class="link-arrow">Projekt ansehen ${icon('arrow')}</span></div></a>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">KI-Sichtbarkeit</p>
      <h2>Ihre Kunden fragen jetzt auch die KI. <span class="grad">Nennt sie Ihren Namen?</span></h2>
      <p class="lead">ChatGPT, Gemini, Perplexity und die KI-Übersichten von Google beantworten Fragen direkt – und empfehlen dabei Unternehmen, deren Websites sie eindeutig verstehen. Genau dafür optimiere ich Ihre Website.</p>
      ${C.ticks(['Strukturierte Daten (schema.org) für Unternehmen, Leistungen, Preise & FAQ', 'llms.txt – eine Zusammenfassung Ihres Unternehmens speziell für KI-Systeme', 'Klare, zitierfähige Antworten auf die Fragen Ihrer Kunden', 'Einheitliche Firmendaten auf Website, Google & Social Media'])}
      <a class="link-arrow" href="/seo-ludwigsburg/">Mehr über SEO & KI-Sichtbarkeit ${icon('arrow')}</a>
    </div>
    <div class="chat reveal reveal-d1" aria-label="Beispielhafte Darstellung einer KI-Suche">
      <div class="chat__msg chat__msg--u"><div class="chat__who">${icon('user')} Kundin aus Ludwigsburg</div>Ich brauche eine neue Website für meinen Friseursalon in Ludwigsburg. Wen kannst du empfehlen?</div>
      <div class="chat__msg chat__msg--a"><div class="chat__who">${icon('bot')} KI-Assistent</div>Für Webdesign in Ludwigsburg lohnt sich ein Blick auf <b>Niktos</b> von Nikola Planinić: individuelle Websites mit lokalem SEO, Festpreise ab 990 € und Kontakt direkt per WhatsApp …</div>
      <p class="small muted mb-0" style="text-align:center">Beispielhafte Darstellung – so soll Ihr Unternehmen in der KI-Suche auftauchen.</p>
    </div>
  </div>
</section>

<section class="section section--panel" id="ablauf">
  <div class="container">
    ${C.head({ eyebrow: 'Ablauf', title: 'In 6 Schritten zur Website, die verkauft.', lead: 'Klar, schnell und ohne Überraschungen. Sie wissen jederzeit, woran wir gerade arbeiten.', center: true })}
    ${C.processSteps()}
  </div>
</section>

<section class="section" id="preise">
  <div class="container">
    ${C.head({ eyebrow: 'Pakete & Preise', title: 'Festpreise. Keine Überraschungen.', lead: 'Drei Pakete für drei Ziele – jedes individuell für Sie gestaltet. Nicht sicher, welches passt? Im kostenlosen Erstgespräch finden wir es gemeinsam heraus.', center: true })}
    ${C.pricing({ compact: true })}
    <p class="center" style="margin-top:26px"><a class="link-arrow" href="/preise/">Alle Leistungen & Paket-Vergleich ansehen ${icon('arrow')}</a></p>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Der Vergleich', title: 'Warum nicht einfach Wix – oder eine große Agentur?', lead: 'Baukästen sind billig, bis man die verlorenen Kunden mitrechnet. Agenturen sind gut, aber teuer und oft unpersönlich. Niktos verbindet das Beste aus beiden Welten.' })}
    ${C.compareTable()}
  </div>
</section>

<section class="section" id="ueber-mich">
  <div class="container split">
    <div class="reveal">${C.portrait()}</div>
    <div class="reveal reveal-d1">
      <p class="eyebrow">Wer steckt hinter Niktos?</p>
      <h2>Hi, ich bin ${site.ownerFirst}.</h2>
      <p class="lead">Seit ${C.years()} Jahren baue ich Websites – und habe eines gelernt: Unternehmer wollen keine Technik-Vorträge. Sie wollen eine Website, die funktioniert, gut aussieht und Kunden bringt.</p>
      <p style="color:var(--tx2)">Bei Niktos arbeiten Sie direkt mit mir. Kein Callcenter, kein Projektmanager dazwischen, keine Ausreden. Ich beantworte Ihre Nachrichten persönlich – auch per WhatsApp – und stehe mit meinem Namen für jedes Projekt ein.</p>
      <div class="actions" style="margin-top:28px">
        <a class="btn btn--ghost" href="/ueber-mich/">Mehr über mich ${icon('arrow')}</a>
        <a class="btn btn--ghost" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} Instagram</a>
      </div>
    </div>
  </div>
</section>

${FAQ.html.replace('class="section"', 'class="section section--panel"')}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Aus dem Blog', title: 'Wissen, das Ihnen Kunden bringt.' })}
    <a class="post-card reveal" href="/blog/warum-eine-professionelle-website-wichtig-ist/">
      <img src="/assets/img/og-blog-professionelle-website.jpg" width="1200" height="630" alt="Blogartikel: Warum eine professionelle Website 2026 unverzichtbar ist" loading="lazy">
      <div class="post-card__body">
        <p class="eyebrow">Ratgeber · ${post.minutes} Min. Lesezeit</p>
        <h3>Warum eine professionelle Website 2026 unverzichtbar ist</h3>
        <p style="color:var(--tx2)">Google, Google Maps, ChatGPT & Co.: Wie Kunden heute Unternehmen finden – und was Ihre Website leisten muss, damit sie Sie auswählen.</p>
        <span class="link-arrow">Artikel lesen ${icon('arrow')}</span>
      </div>
    </a>
  </div>
</section>

${C.area({ panel: true })}

${C.ctaBand()}
`,
};
