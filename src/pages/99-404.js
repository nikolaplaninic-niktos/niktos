const C = require('../components');
const { icon } = C;

module.exports = {
  path: '/404',
  noindex: true,
  title: 'Seite nicht gefunden (404) | Niktos',
  description: 'Diese Seite gibt es leider nicht (mehr). Zur Startseite von Niktos – Webdesign & SEO aus Ludwigsburg.',
  body: `
<section class="section notfound">
  <div class="dots"></div>
  <div class="container container--narrow">
    <h1 class="grad">404</h1>
    <p class="lead" style="margin:10px auto 30px">Diese Seite gibt es leider nicht (mehr). Aber keine Sorge – hier geht es weiter:</p>
    <div class="actions" style="justify-content:center">
      <a class="btn btn--lg" href="/">Zur Startseite ${icon('arrow')}</a>
      <a class="btn btn--ghost btn--lg" href="/leistungen/">Leistungen</a>
      <a class="btn btn--ghost btn--lg" href="/preise/">Preise</a>
    </div>
  </div>
</section>
`,
};
