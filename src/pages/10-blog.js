const site = require('../site');
const C = require('../components');
const { icon } = C;
const post = require('./11-blog-professionelle-website');

const path = '/blog/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Blog', url: path }];
const posts = [post];

module.exports = {
  path,
  nav: 'blog',
  priority: 0.7,
  crumbs,
  pageType: 'CollectionPage',
  title: 'Blog – Webdesign, SEO & KI-Sichtbarkeit | Niktos Ludwigsburg',
  description: 'Praxiswissen zu Webdesign, SEO, Google Maps und KI-Suche für Unternehmer aus Ludwigsburg und der Region Stuttgart – verständlich erklärt von Nikola Planinić.',
  schema: [{
    '@type': 'Blog', '@id': site.url + '/blog/#blog', name: 'Niktos Blog', url: site.url + path, inLanguage: 'de-DE',
    publisher: { '@id': site.url + '/#business' },
    blogPost: posts.map((p) => ({ '@id': site.url + p.path + '#article' })),
  }],
  body: `
${C.pageHero({
  crumbs,
  aside: `<div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${icon('lock')} niktos.com/blog</span></div><img src="/assets/img/og-blog-professionelle-website.jpg" width="1200" height="630" alt="" loading="lazy"></div>`,
  eyebrow: 'Blog',
  h1: 'Wissen, das Ihnen <span class="grad">Kunden bringt.</span>',
  lead: 'Webdesign, SEO und KI-Sichtbarkeit – verständlich erklärt, ohne Fachchinesisch. Für Unternehmer, die online wachsen wollen.',
  actions: false,
})}

<section class="section">
  <div class="container">
    ${posts.map((p) => `
    <a class="post-card reveal" href="${p.path}">
      <img src="${p.ogImage}" width="1200" height="630" alt="Blogartikel: ${C.esc(p.title.split(' | ')[0])}" fetchpriority="high">
      <div class="post-card__body">
        <p class="eyebrow">Ratgeber · ${p.minutes} Min. Lesezeit</p>
        <h2>${p.title.split(' | ')[0]}</h2>
        <p style="color:var(--tx2)">${p.description}</p>
        <span class="link-arrow">Artikel lesen ${icon('arrow')}</span>
      </div>
    </a>`).join('')}
    <div class="card reveal" style="margin-top:24px;display:flex;align-items:center;gap:22px;flex-wrap:wrap">
      <span class="card__ico" style="margin:0">${icon('pen')}</span>
      <div style="flex:1;min-width:240px"><h3 style="margin:0 0 6px">Weitere Artikel folgen</h3><p class="mb-0">Themen wie lokales SEO, Google-Unternehmensprofil, KI-Suche und Website-Kosten sind in Arbeit. Folgen Sie mir auf Instagram, um nichts zu verpassen.</p></div>
      <a class="btn btn--ghost" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} ${site.instagramHandle}</a>
    </div>
  </div>
</section>

${C.ctaBand()}
`,
};
