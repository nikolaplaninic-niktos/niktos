# CLAUDE.md – Niktos (niktos.com)

Website of Nikola Planinić's web design & SEO business in Ludwigsburg. Same architecture as the Kabic project:
custom Node generator → plain HTML/CSS/JS in `dist/` → Hostinger shared hosting (Apache/LiteSpeed + PHP).
Site language: **German**. Communication with Nikola: **Croatian**.

## Commands
```bash
npm run all      # images (sharp) + build → dist/
npm run build    # HTML only
npm run serve    # http://localhost:8080 (PORT env supported; mocks kontakt.php → /danke/)
npm run check    # static SEO/link/secret audit – must pass before deploy
npm run test     # puppeteer smoke test incl. funnel (BASE=http://localhost:PORT)
npm run shots    # screenshots → qa/
npm run mail     # e-mail preview → mail-preview/
npm run lint:php
npm run deploy   # lint + build + check + publish dist/ to `deploy` branch
npm run verify -- <url>
```

## Layout
| Path | Purpose |
|---|---|
| `src/site.js` | Single source of truth: NAP, packages/prices, services, projects, towns |
| `src/pages/NN-*.js` | One module per page (`path`, `title`, `description`, `schema`, `body`, `noindex`) |
| `src/components.js` | Blocks: pricing, FAQ (→ FAQPage), funnel, contact form, portrait placeholder, map, projects |
| `scripts/build.js` | Layout (desktop sidebar header / mobile drawer), JSON-LD graph, sitemap, robots, llms.txt |
| `src/js/main.js` | Nav, reveal, funnel logic + dialog, forms, map consent, Umami events |
| `src/static/kontakt.php` + `_lib/mail.php` | Handles both forms (`form=kontakt|projekt`), whitelisted fields `NK_FIELDS` |

## Rules
- Never edit `dist/`. Never commit secrets (`niktos-config.php` lives on the server above `public_html`).
- Business data only in `src/site.js`. Title ≤ 60, description ≤ 160, exactly one `<h1>`.
- `mail.php` and `scripts/mail-preview.js` duplicate the e-mail logic – change both.
- No invented facts (reviews, rankings, stats). AI chat mockups are labelled "Beispielhafte Darstellung".
- Design: light "Sticker Studio" – ink `#0b0d14` 2px borders + hard shadows, blue `#0a66ff`, yellow `#ffd23f`; fonts League Spartan + Inter + Caveat (handwriting), self-hosted. Keep it human: handwritten notes, no dark/glow/gradient AI look.
- Portrait: add `portrait` in `src/images.config.js` → replaces the placeholder automatically.

## Open items
See README.md → "Potvrditi prije objave".
