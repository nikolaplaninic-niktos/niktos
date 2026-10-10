# CLAUDE.md – Niktos (niktos.com)

Website of Nikola Planinić's web design & SEO business **Niktos** in 71642 Ludwigsburg (Kleinunternehmer, § 19 UStG).
Custom Node generator → plain HTML/CSS/JS in `dist/` → Hostinger shared hosting (Apache/LiteSpeed + PHP).
Site language: **German** (Sie-Form). Communication with Nikola: **Croatian** (casual, "brate").
Goal: the strongest web-design site in the Ludwigsburg region – looks, speed, conversion, SEO + AI search.

## Status (handoff, October 2026)
- Built and approved through several feedback rounds. **Not deployed yet** – the live niktos.com is still the old WordPress site.
- GitHub: `https://github.com/nikolaplaninic-niktos/niktos` (private), branch `main`, pushed and clean.
- Mobile preview for Nikola: private Claude Artifact `https://claude.ai/artifact/6REmYSZLDZQC1b1miy8cfh`.
  Update it: `npm run build && node scripts/artifact-build.js`, then publish `artifact/index.html` with `root: artifact/`,
  all files from `artifact/files.json` and **`url` = the artifact link above** (keeps the link; a new chat must pass `url`).
- **Never touch the Kabic project** (`../../Kabic Hausmeister und Gartenpflege/`) – separate client, separate repo.
- **No Hostinger deploy without Nikola's explicit OK.** Planned flow when he says go: staging `novi.niktos.com`
  (`npm run deploy` → `deploy` branch → Hostinger Git deploy into `public_html/novi`), then go-live like Kabic.

## Commands
```bash
npm run all      # images (sharp) + build → dist/
npm run build    # HTML only
npm run serve    # http://localhost:8080 (PORT env supported; mocks kontakt.php → /danke/)
npm run check    # static SEO/link/secret audit – must pass before deploy
npm run test     # puppeteer smoke test incl. funnel (BASE=http://localhost:PORT)
npm run shots    # screenshots → qa/ (pass paths; in Git Bash prefix MSYS_NO_PATHCONV=1)
npm run mail     # e-mail preview → mail-preview/
npm run lint:php
npm run deploy   # lint + build + check + publish dist/ to `deploy` branch
npm run verify -- <url>
node scripts/artifact-build.js   # preview copy for the Claude Artifact → artifact/
```
Tip (Windows/Git Bash): long heredocs with `'` or `${}` break – write helper scripts to a file and run them with node.

## Layout
| Path | Purpose |
|---|---|
| `src/site.js` | Single source of truth: NAP, packages/prices, services, projects (only Kabic), towns |
| `src/pages/NN-*.js` | One module per page (`path`, `title`, `description`, `schema`, `body`, `noindex`) |
| `src/components.js` | Blocks: hero `builder()` animation, `rotator()` typing headline, pricing, `compareTable`, FAQ (→ FAQPage), funnel + dialog, contact form, `portrait()` polaroid, `avatar()`, `allInOne`/`aioCard`, `illuChat`/`illuStatus`/`illuQuote`, `factsCard`, `serp`, `mapCard`/`area`, `projects` |
| `scripts/build.js` | Layout (desktop sidebar with blue icon "stickers" / mobile drawer + bottom bar), JSON-LD graph, sitemap, robots, llms.txt |
| `src/js/main.js` | Nav, scroll-to-top on new page, typing headline, reveal, funnel logic + dialog, forms, map consent, Umami events |
| `src/css/style.css` | Design system, inlined + minified into every page |
| `src/static/kontakt.php` + `_lib/mail.php` | Handles both forms (`form=kontakt|projekt`), whitelisted fields `NK_FIELDS` |
| `media/originals/` | Source images (Kabic screenshots, `nikola-planinic.jpg` + `nikola-avatar.jpg` cropped from his waterfall photo, `ablauf-1..6.jpg` old-site process icons, logos) |

## Nikola's rules (from his feedback – keep them)
- Clean, readable, light "Sticker Studio" look: white background, ink `#0b0d14` 2px borders, small hard shadows (3/5px), blue `#0a66ff`, yellow marker `#ffd23f`. League Spartan 700 headings, Inter body; **Caveat handwriting only as small accents** (signature, arrow notes, polaroid caption). Eyebrows = small blue uppercase labels.
- Keep the old-site DNA: blue icon tiles in the sidebar menu, black sidebar line, blue band with outlined words + `*`, typing headline.
- **No dot patterns, no dark/glow/gradient "AI look", no emoji.**
- **Never mention WordPress, handcoding, HTML/JS or AI as a building tool.** "KI" only as a service (being found in AI search).
- **No "X Jahre Erfahrung"** (not provable). No invented reviews, rankings or stats; illustrations with fake content are labelled "Beispielhafte Darstellung" / "Beispiel".
- **No cliché lines** ("Mit ♥ gemacht", "mit Herz", "Made in …", sign-offs like "Ich freue mich auf Ihre Nachricht"). No competitor brand names (Wix, Jimdo …) – say "Baukasten".
- Emphasise **"Alles aus einer Hand"** (one contact for design, texts, domain, hosting, SEO, Google profile, maintenance).
- WhatsApp everywhere (main contact channel). Instagram: `@niktos.webdesign`.
- Hero headline: "Webdesign in Ludwigsburg, das [richtig gut aussieht. | schnell online ist. | zu Ihnen passt. | Kunden bringt.]" – must never cause layout jumps (ghost copies reserve space; headline scales via container query to fit one line).
- Every page needs a visual next to the first text section; mobile must be tidy (tables become cards).

## Technical rules
- Never edit `dist/`. Never commit secrets (`niktos-config.php` lives on the server above `public_html`).
- Business data only in `src/site.js`. Title ≤ 60, description ≤ 160, exactly one `<h1>`; run `npm run check` + `npm run test` after changes; check mobile at 390 px (no horizontal overflow).
- `mail.php` and `scripts/mail-preview.js` duplicate the e-mail logic – change both.
- Portrait: `portrait`/`avatar` keys in `src/images.config.js` – swap the source file for the pro photo later, then `npm run all`.

## Open items (need Nikola)
- Street + house number for the Impressum (`site.address.street`) – legally required before go-live.
- Confirm prices (990 / 1.990 / 3.490 €, Care 39 €/Monat, Check 49 €, extras, 50/50 payment) and "Deutsch, Kroatisch".
- Google Business Profile link (map + Maps buttons currently search "Niktos Webdesign & SEO, 71642 Ludwigsburg").
- Permission from Kabic to show the screenshots; professional photo to replace the current one.
- Before go-live: SMTP mailbox `website@niktos.com` + `niktos-config.php`, Umami websiteId, Search Console.
