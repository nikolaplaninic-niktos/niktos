const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/ueber-mich/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Über mich', url: path }];

module.exports = {
  path,
  nav: 'ueber',
  priority: 0.7,
  crumbs,
  pageType: 'AboutPage',
  title: 'Über mich – Nikola Planinić, Webdesigner Ludwigsburg | Niktos',
  description: `Nikola Planinić, Inhaber von Niktos: Webdesigner & SEO aus Ludwigsburg – alles aus einer Hand. Persönlich, ehrlich, erreichbar – auch per WhatsApp.`,
  schema: [{ '@type': 'ProfilePage', '@id': site.url + path + '#profile', mainEntity: { '@id': site.url + '/#nikola-planinic' }, url: site.url + path }],
  body: `
${C.pageHero({
  crumbs,
  aside: C.portrait({ eager: true }),
  eyebrow: 'Über mich',
  h1: `Hi, ich bin ${site.ownerFirst}. <span class="grad">Ich baue Websites, die wirken.</span>`,
  lead: `Webdesigner und SEO aus Ludwigsburg, Inhaber von Niktos – und fest davon überzeugt, dass eine gute Website das stärkste Verkaufswerkzeug eines Unternehmens ist.`,
  actions: C.waBtn('Schreiben Sie mir', { cls: 'btn--lg' }) + `<a class="btn btn--ghost btn--lg" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} ${site.instagramHandle}</a>`,
})}

<section class="section">
  <div class="container split split--top">
    <div class="reveal" style="position:sticky;top:30px">${C.factsCard()}</div>
    <div class="reveal reveal-d1">
      <p class="eyebrow">Meine Geschichte</p>
      <h2>Warum ich Niktos gegründet habe.</h2>
      <div class="prose">
        <p>Ich habe in den letzten Jahren viele Websites gesehen, die hübsch aussahen – und trotzdem nichts gebracht haben. Keine Anrufe, keine Anfragen, keine Kunden. Oft lag es nicht am Design, sondern daran, dass niemand darüber nachgedacht hat, <strong>wer die Website besucht und was dieser Mensch braucht</strong>.</p>
        <p>Genau das mache ich anders. Bei Niktos verbinde ich <strong>Design, Technik, Verkaufspsychologie und SEO</strong> zu einer Website, die ein klares Ziel hat: Ihr Unternehmen wachsen zu lassen.</p>
        <p>Ich arbeite bewusst persönlich. Sie sprechen immer direkt mit mir – vom ersten Gespräch bis lange nach dem Launch. Kein Verkaufsteam, keine Praktikanten, kein Ticketsystem. Wenn Sie eine Frage haben, schreiben Sie mir einfach eine WhatsApp.</p>
        <p>Mein Anspruch: Jede Website, die ich baue, soll <strong>die beste in ihrer Branche und Region</strong> sein. Schnell, klar, ehrlich – und so gebaut, dass Google und KI-Systeme sie verstehen und empfehlen.</p>
      </div>
      <p class="signature">— ${site.owner}</p>

      <div class="grid grid--fit" style="margin-top:40px">
        <div class="card"><span class="card__ico">${icon('handshake')}</span><h3>Ehrlich</h3><p class="mb-0">Ich sage Ihnen, was Sie brauchen – und was nicht. Auch wenn das bedeutet, dass ich weniger verkaufe.</p></div>
        <div class="card"><span class="card__ico">${icon('bolt')}</span><h3>Schnell</h3><p class="mb-0">Antwort innerhalb von 24 Stunden, klare Zeitpläne, keine monatelangen Warteschleifen.</p></div>
        <div class="card"><span class="card__ico">${icon('target')}</span><h3>Zielorientiert</h3><p class="mb-0">Schön ist gut. Wirksam ist besser. Jede Entscheidung dient Ihrem Ziel: mehr Kunden.</p></div>
        <div class="card"><span class="card__ico">${icon('heart')}</span><h3>Persönlich</h3><p class="mb-0">Ein Ansprechpartner, der Ihr Unternehmen kennt – heute, morgen und in drei Jahren.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="stats reveal">
      <div class="stat"><strong class="grad">1</strong><span>Ansprechpartner für alles</span></div>
      <div class="stat"><strong class="grad">LB</strong><span>Sitz in Ludwigsburg</span></div>
      <div class="stat"><strong class="grad">DE · HR</strong><span>Beratung auf Deutsch & Kroatisch</span></div>
      <div class="stat"><strong class="grad">24 h</strong><span>Antwortzeit (werktags)</span></div>
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Womit ich arbeite', title: 'Moderne Technik. Kein Ballast.', lead: 'Ich wähle die Technik passend zu Ihrem Ziel – nicht umgekehrt.' })}
    ${C.features([
      ['bolt', 'Schnell & schlank', 'Kein Baukasten-Ballast: kurze Ladezeiten, die Google und Ihre Besucher lieben.'],
      ['pen', 'Auf Wunsch selbst pflegbar', 'Sie möchten Texte und Bilder selbst ändern? Dann bekommen Sie ein einfaches, sauberes Redaktionssystem.'],
      ['search', 'SEO- & Analyse-Tools', 'Google Search Console, PageSpeed Insights, Lighthouse, strukturierte Daten und cookielose Statistik.'],
    ])}
  </div>
</section>

${C.ctaBand({ title: 'Lernen wir uns kennen.', text: 'Ein kurzes, kostenloses Gespräch – persönlich in Ludwigsburg, per Video oder Telefon. Ich freue mich auf Ihre Nachricht!' })}
`,
};
