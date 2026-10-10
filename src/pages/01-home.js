const site = require('../site');
const C = require('../components');
const { icon, logoMark } = C;

const kabic = site.projects[0];
const post = require('./11-blog-professionelle-website');

const FAQ = C.faq([
  ['Was kostet eine Website bei Niktos?', `Sie bekommen einen klaren Festpreis. Das Paket <strong>Launch</strong> startet bei ${C.euro(site.packages[0].price)}, <strong>Boost</strong> bei ${C.euro(site.packages[1].price)} und <strong>Dominate</strong> bei ${C.euro(site.packages[2].price)}. Als Kleinunternehmer (§ 19 UStG) weise ich keine Mehrwertsteuer aus, die Preise sind also Endpreise. Nach dem kostenlosen Erstgespräch bekommen Sie ein verbindliches Angebot ohne versteckte Kosten. Alle Details stehen unter <a href="/preise/">Preise</a>.`],
  ['Wie schnell ist meine neue Website online?', 'Je nach Umfang in 2 bis 6 Wochen. Eine kompakte Website (Launch) ist meist nach rund 2 Wochen fertig, eine größere SEO-Website (Boost) nach 3 bis 4 Wochen. Am längsten dauern erfahrungsgemäß die Inhalte. Deshalb schreibe ich die Texte auf Wunsch gleich mit.'],
  ['Muss ich mich um Texte und Bilder selbst kümmern?', 'Nein. Ab dem Paket Boost schreibe ich verkaufsstarke, SEO-optimierte Texte für Sie, Sie geben mir nur kurz Input. Bei Bildern gilt: Echte Fotos von Ihnen, Ihrem Team und Ihrer Arbeit wirken am besten. Bis die da sind, nehme ich passende lizenzfreie Bilder oder Grafiken.'],
  ['Werde ich mit der Website bei Google gefunden?', 'Jede Niktos-Website ist technisch sauber für Google gebaut: schnelle Ladezeit, klare Struktur, strukturierte Daten, lokale Suchbegriffe und ab Boost ein optimiertes Google-Unternehmensprofil. Platz 1 kann Ihnen ehrlicherweise niemand garantieren. Aber ich lege das Fundament, mit dem Sie in Ihrer Region vorne mitspielen.'],
  ['Was bedeutet „KI-Sichtbarkeit“?', 'Immer mehr Menschen fragen ChatGPT, Gemini oder die KI-Übersicht bei Google nach Empfehlungen, zum Beispiel „Welcher Elektriker in Ludwigsburg ist gut?“. Diese Systeme empfehlen Unternehmen, deren Website sie klar verstehen. Dafür optimiere ich Ihre Seite: mit strukturierten Daten, klaren Antworten, FAQ, einer llms.txt-Datei und einheitlichen Firmendaten.'],
  ['Gehört mir die Website am Ende?', 'Ja, komplett. Keine Abo-Falle und kein Baukasten, an den Sie gebunden sind. Sie bekommen alle Dateien und Zugänge. Wenn Sie möchten, kümmere ich mich mit dem Care-Paket um Hosting, Updates und Änderungen, monatlich kündbar.'],
  ['Kann ich später selbst etwas ändern?', 'Klar. Die meisten Kunden schicken mir Änderungen einfach per WhatsApp, im Care-Paket sind kleinere Anpassungen inklusive. Wenn Sie Inhalte regelmäßig selbst pflegen möchten, baue ich Ihre Website mit einem einfachen Redaktionssystem.'],
  ['Arbeiten Sie nur für Kunden in Ludwigsburg?', 'Mein Sitz ist Ludwigsburg und ich betreue viele Unternehmen im Landkreis und in der Region Stuttgart, gern auch persönlich vor Ort. Genauso arbeite ich mit Kunden in ganz Deutschland zusammen: per Video-Call, Telefon und WhatsApp.'],
]);

module.exports = {
  path: '/',
  nav: 'home',
  priority: 1.0,
  title: 'Webdesign Ludwigsburg – Websites, die Kunden bringen | Niktos',
  description: `Webdesign & SEO aus Ludwigsburg: individuelle, schnelle Websites, die bei Google & KI gefunden werden und Anfragen bringen. Festpreise ab ${C.euro(site.packages[0].price)}.`,
  schema: [FAQ.schema],
  body: `
<section class="hero">
  <div class="dots"></div>
  <div class="container hero__grid">
    <div>
      <div class="hero__badges">
        <span class="badge-s">${icon('pin')} Webdesign & SEO aus Ludwigsburg</span>
      </div>
      <h1>Webdesign in Ludwigsburg, das ${C.rotator(['richtig gut aussieht.', 'schnell online ist.', 'zu Ihnen passt.', 'Kunden bringt.'])}</h1>
      <p class="lead">Hi, ich bin ${site.ownerFirst}. Ich baue Websites für Handwerker, Dienstleister und kleine Unternehmen, die <strong>schnell laden</strong>, <strong>bei Google gefunden werden</strong> und endlich <span class="hl">Anfragen bringen</span>. Persönlich, ehrlich und zum Festpreis.</p>
      <div class="actions">
        ${C.startBtn('Kostenloses Angebot', { cls: 'btn--lg' })}
        ${C.waBtn('WhatsApp', { cls: 'btn--lg' })}
      </div>
      <div class="hero__trust">
        <span>${icon('check')} Festpreise ab ${C.euro(site.packages[0].price)}</span>
        <span>${icon('check')} Antwort in 24 h</span>
        <span>${icon('check')} Alles aus einer Hand</span>
      </div>
    </div>
    <div class="stage">
      <span class="stage__bg" aria-hidden="true"></span>
      ${C.browser(kabic.img, kabic.domain, { sizes: '(max-width: 1280px) 90vw, 40vw', eager: true })}
      <div class="stage__phone">${C.img(kabic.mobile, { sizes: '180px', alt: '' })}</div>
      ${C.sticker(C.euro(site.packages[0].price), 'Festpreis ab', 'sticker--top')}
      ${C.sticker('LB', 'Made in Ludwigsburg', 'sticker--blue')}
      ${C.arrowNote('echtes Kundenprojekt!')}
    </div>
  </div>
</section>

${C.marquee(['Komplette Websites', 'SEO', 'Wartung', 'Sicherheit', 'Bei Google sichtbar', 'Von KI gefunden', 'Blitzschnell ⚡'], true)}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Kennen Sie das?', title: 'Eine Website haben ist leicht. <span class="hl">Eine, die Kunden bringt,</span> nicht.', lead: 'Bevor jemand bei Ihnen anruft, schaut er sich Ihre Website an. In wenigen Sekunden entscheidet er: Wirkt das seriös? Rufe ich an – oder gehe ich zurück zu Google und zur Konkurrenz?' })}
    <div class="pain">
      <div class="card reveal tilt-l"><span class="card__ico">${icon('search')}</span><p class="pain__q">„Bei Google findet mich keiner.“</p><p class="mb-0">Ohne saubere Technik, lokale Suchbegriffe und ein gepflegtes Google-Profil sind Sie für Kunden aus Ihrer Stadt unsichtbar.</p></div>
      <div class="card reveal reveal-d1"><span class="card__ico">${icon('clock')}</span><p class="pain__q">„Meine Seite ist alt und langsam.“</p><p class="mb-0">Veraltetes Design und lange Ladezeiten kosten Vertrauen. Wer auf dem Handy warten muss, ist weg, bevor er Ihr Angebot gesehen hat.</p></div>
      <div class="card reveal reveal-d2 tilt-r"><span class="card__ico">${icon('chat')}</span><p class="pain__q">„Es kommen einfach keine Anfragen.“</p><p class="mb-0">Viele Websites sehen okay aus, führen den Besucher aber nirgendwohin. Kein klarer nächster Schritt, kein WhatsApp, kein einfaches Formular.</p></div>
    </div>
    <div class="split" style="margin-top:clamp(56px,7vw,96px)">
      <div class="reveal">
        <p class="bigquote">Schön allein reicht nicht. Ihre Website soll <span class="ul">das Telefon klingeln lassen.</span></p>
      </div>
      <div class="reveal reveal-d1">
        <p class="lead">Darum geht es mir bei jeder Website: <strong>aus Besuchern Kunden machen.</strong> Dafür verbinde ich gutes Design mit einer klaren Botschaft, sauberer Technik und SEO – von der ersten Zeile an.</p>
        ${C.ticks(['In 5 Sekunden klar: Was bieten Sie, für wen und warum gerade Sie?', 'Vertrauen durch Referenzen, echte Fotos und klare Preise', 'Kontakt auf jedem Bildschirm: WhatsApp, Anruf, Anfrage', 'Sauber gebaut für Google, Google Maps und KI-Assistenten'])}
      </div>
    </div>
    <div class="promise reveal" style="margin-top:clamp(50px,6vw,80px)">
      ${logoMark(64)}
      <p>Mein Versprechen: Sie reden immer direkt mit mir. Kein Callcenter, keine Warteschleife, keine Ausreden. <span class="grad">– ${site.ownerFirst}</span></p>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="stats reveal">
      <div class="stat"><strong>0 €</strong><span>versteckte Kosten – Festpreis</span></div>
      <div class="stat"><strong data-count-to="24" data-suffix=" h">24 h</strong><span>maximale Antwortzeit (werktags)</span></div>
      <div class="stat"><strong data-count-to="100" data-suffix=" %">100 %</strong><span>individuell, keine Vorlagen</span></div>
      <div class="stat"><strong>1</strong><span>fester Ansprechpartner: ich</span></div>
    </div>
  </div>
</section>

<section class="section section--panel" id="leistungen">
  <div class="container">
    ${C.head({ eyebrow: 'Was ich für Sie mache', title: 'Alles, was Ihre Website zum Verkaufen braucht.', lead: 'Design, Texte, Technik, SEO und Betreuung aus einer Hand. Sie haben einen Ansprechpartner statt fünf Dienstleister.', split: `<a class="btn btn--ghost" href="/leistungen/">Alle Leistungen ${icon('arrow')}</a>` })}
    ${C.serviceCards()}
  </div>
</section>

${C.allInOne()}

<section class="section" id="referenzen">
  <div class="container">
    ${C.head({ eyebrow: 'Frisch aus der Werkstatt', title: 'Ergebnisse statt Versprechen.', lead: 'Ein Auszug aus meinen Projekten – vom Handwerksbetrieb bis zum sozialen Träger.', split: `<a class="btn btn--ghost" href="/referenzen/">Alle Referenzen ${icon('arrow')}</a>` })}
    ${C.projects(site.projects.slice(0, 1))}
    <div class="grid grid--2" style="margin-top:28px">
      ${site.projects.slice(1).map((p, i) => `<a class="card reveal reveal-d${i}" href="/referenzen/#projekt-${p.id}" style="padding:18px">${C.browser(p.img, p.domain, { sizes: '(max-width: 980px) 100vw, 40vw' })}<div style="padding:22px 8px 6px"><h3>${p.name}</h3><p class="mb-0">${p.branch} · ${p.place}</p><span class="link-arrow">Projekt ansehen ${icon('arrow')}</span></div></a>`).join('')}
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container split">
    <div class="reveal">
      <p class="eyebrow">Google, Maps & KI</p>
      <h2>Wer in Ludwigsburg sucht, soll <span class="hl">Sie finden.</span></h2>
      <p class="lead">Ihre Kunden suchen bei Google, schauen auf die Karte und fragen immer öfter ChatGPT oder Gemini. Ich sorge dafür, dass Ihr Unternehmen überall dort gut dasteht.</p>
      ${C.ticks(['Lokales SEO: eigene Seiten für Ihre Leistungen und Orte', 'Google-Unternehmensprofil einrichten und optimieren', 'Strukturierte Daten & llms.txt, damit KI-Systeme Sie verstehen', 'Einheitliche Firmendaten auf Website, Google & Social Media'])}
      <a class="link-arrow" href="/seo-ludwigsburg/">Mehr über SEO & KI-Sichtbarkeit ${icon('arrow')}</a>
    </div>
    <div class="reveal reveal-d1">${C.serp()}</div>
  </div>
</section>

<section class="section" id="ablauf">
  <div class="container">
    ${C.head({ eyebrow: 'So läuft es ab', title: 'In 6 Schritten zu Ihrer neuen Website.', lead: 'Ohne Fachchinesisch und ohne Überraschungen. Sie wissen immer, woran wir gerade arbeiten.', center: true })}
    ${C.processSteps()}
  </div>
</section>

<section class="section section--panel" id="preise">
  <div class="container">
    ${C.head({ eyebrow: 'Pakete & Preise', title: 'Festpreise. Keine Überraschungen.', lead: 'Drei Pakete für drei Ziele, jedes individuell für Sie gestaltet. Nicht sicher, welches passt? Das finden wir im kostenlosen Erstgespräch gemeinsam heraus.', center: true })}
    ${C.pricing({ compact: true })}
    <p class="center" style="margin-top:26px"><a class="link-arrow" href="/preise/">Alle Leistungen & Paket-Vergleich ansehen ${icon('arrow')}</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Ehrlicher Vergleich', title: 'Warum nicht einfach Wix – oder eine große Agentur?', lead: 'Baukästen sind günstig, bis man die verlorenen Kunden mitrechnet. Große Agenturen sind gut, aber teuer und oft weit weg. Bei mir bekommen Sie das Beste aus beiden Welten.' })}
    ${C.compareTable()}
  </div>
</section>

<section class="section section--panel" id="ueber-mich">
  <div class="container split">
    <div class="reveal">${C.portrait()}</div>
    <div class="reveal reveal-d1">
      <p class="eyebrow">Wer steckt dahinter?</p>
      <h2>Hi, ich bin ${site.ownerFirst}!</h2>
      <p class="lead">Ich baue Websites für Unternehmen aus der Region. Und ich habe gelernt: Unternehmer wollen keine Technik-Vorträge. Sie wollen eine Website, die funktioniert, gut aussieht und Kunden bringt.</p>
      <p style="color:var(--tx2)">Bei Niktos arbeiten Sie direkt mit mir. Ich beantworte Ihre Nachrichten selbst, auch per WhatsApp, und stehe mit meinem Namen für jedes Projekt ein. Am liebsten lerne ich meine Kunden bei einem Kaffee in Ludwigsburg kennen.</p>
      <span class="signature">${site.ownerFirst}</span>
      <div class="actions" style="margin-top:22px">
        <a class="btn btn--ghost" href="/ueber-mich/">Mehr über mich ${icon('arrow')}</a>
        <a class="btn btn--ghost" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} Instagram</a>
      </div>
    </div>
  </div>
</section>

${FAQ.html}

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Aus dem Blog', title: 'Wissen, das Ihnen Kunden bringt.' })}
    <a class="post-card reveal" href="/blog/warum-eine-professionelle-website-wichtig-ist/">
      <img src="/assets/img/og-blog-professionelle-website.jpg" width="1200" height="630" alt="Blogartikel: Warum eine professionelle Website 2026 unverzichtbar ist" loading="lazy">
      <div class="post-card__body">
        <p class="eyebrow">Ratgeber · ${post.minutes} Min. Lesezeit</p>
        <h3>Warum eine professionelle Website 2026 unverzichtbar ist</h3>
        <p style="color:var(--tx2)">Google, Google Maps, ChatGPT & Co.: Wie Kunden heute Unternehmen finden – und was Ihre Website können muss, damit sie Sie auswählen.</p>
        <span class="link-arrow">Artikel lesen ${icon('arrow')}</span>
      </div>
    </a>
  </div>
</section>

${C.area()}

${C.ctaBand()}
`,
};
