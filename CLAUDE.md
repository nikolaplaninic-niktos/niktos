# CLAUDE.md – Niktos (niktos.com)

Website of Nikola Planinić's web design & SEO business **Niktos** in 71642 Ludwigsburg (Kleinunternehmer, § 19 UStG).
Custom Node generator → plain HTML/CSS/JS in `dist/` → Hostinger shared hosting (Apache/LiteSpeed + PHP).
Site language: **German** (Sie-Form). Communication with Nikola: **Croatian** (casual, "brate").
Goal: the strongest web-design site in the Ludwigsburg region – looks, speed, conversion, SEO + AI search.

## Status (handoff, October 2026)
- **LIVE on https://niktos.com since 13.10.2026.** Old WordPress archived in public_html/_wordpress-arhiva/ ("Require all denied", DB untouched, SQL export on Nikola's PC). **Auto-sync:** a Hostinger cron job (every 5 min, hPanel > Cron Jobs for niktos.com) copies public_html/novi → public_html (tar, no deletions, excludes .git). So `npm run deploy` → Git deploy into novi → live on niktos.com within ~5 min. Deleted/renamed files must be removed from the root by hand. Never touch deutsch-richtig/, .private/, _wordpress-arhiva/. Staging novi.niktos.com stays noindex.
- GitHub: `https://github.com/nikolaplaninic-niktos/niktos` (private), branch `main`, pushed and clean.
- Mobile preview for Nikola: private Claude Artifact `https://claude.ai/artifact/6REmYSZLDZQC1b1miy8cfh`.
  Update it: `npm run build && node scripts/artifact-build.js`, then publish `artifact/index.html` with `root: artifact/`,
  all files from `artifact/files.json` and **`url` = the artifact link above** (keeps the link; a new chat must pass `url`).
- **Never touch the Kabic project** (`../../Kabic Hausmeister und Gartenpflege/`) – separate client, separate repo.

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
| `src/js/main.js` | Nav, scroll-to-top on new page, typing headline, reveal, funnel logic + dialog, forms, map consent + cookie banner |
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
- **Everything stays with Nikola**: never say "the website belongs to you", "you get all files/access", "edit it yourself / CMS", "host it elsewhere". Message instead: after launch Nikola handles hosting, updates and changes – small changes included (Care), bigger ones as a small fixed-price offer.
- Name is always written **"Planinic"** (no "ć") on the site, in mails and images. Languages: Deutsch, Kroatisch, Englisch.
- Preise hero has no illustration (Nikola's wish); Webdesign hero uses the `illuDesign()` draft→finished SVG.
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
- Street is set (Marbacher Str. 98, Impressum done).
- Package prices set by Nikola (Oct 2026): Launch 390 / Boost 990 / Dominate 3.490 €. Still confirm Care 39 €/Monat, Check 49 €, extras, 50/50 payment and "Deutsch, Kroatisch".
- Google Business Profile: exists and is verified ("Niktos - Webdesign Ludwigsburg", Marbacher Str. 98); map/route links in `src/site.js` point to it (cid 9343046975854003937).
- Kabic permission for the screenshots is granted. Still open: professional photo to replace the current one.
- Before go-live: SMTP mailbox `website@niktos.com` + `niktos-config.php`, Search Console. (No analytics: Umami was removed on Nikola's request, Oct 2026.)

## SEO campaign – next chat (analysis from 14.10.2026)
- Done: Search Console (domain property sc-domain:niktos.com) has sitemap.xml; Bing Webmaster has sitemap + 14 URLs submitted; Google Business Profile exists + verified (links in `src/site.js`, cid 9343046975854003937).
- Google "Request indexing" done 15.10.2026 for `/`, `/preise/`, `/webdesign-ludwigsburg/`, `/seo-ludwigsburg/`, `/kontakt/` (all "Indeksiranje zatraženo"). Daily quota is small – further URLs (e.g. blog, leistungen) can follow on later days; the Chrome extension must be connected and the browser window wide (mobile layout shifts coordinates).
- SERP "webdesign ludwigsburg": map pack = ip2C (5.0, 40 reviews), klein.multimediadesign (14), Himbeerrot (15); organic also Ludwigsburg Werbung, Seven Bytes, Highscore, Hochkonzept, werbeagentur.de, Ranking Köche, Meinwerbung.de (Handwerker niche), Feedbax listicle (AI overview cites such lists). Ads: Ostend Digital, Hochkonzept.
- Our edge: **fixed prices** (competitors show none), transparent work. Gaps: 0 reviews, only one reference (Kabic), no directory/listicle presence, no backlinks, thin blog.
- **Update 10.11.2026:** audit done (`Web Stranice/Izvjestaji/Niktos/seo/2026-11-10_seo-audit.md` + GSC baseline JSONs: 28 days = 28 brand clicks, 0 non-brand clicks, 1 529 non-brand impressions at positions ~30–80; /blog/ ranks 17 for "seo ludwigsburg", /seo-ludwigsburg/ 47). Live since 10.11.: keyworded H1 on SEO + Leistungen, "Website erstellen lassen" in Webdesign intro, footer titles no longer H2, blog→Webdesign/SEO links, Dominate without Google profile + no "Nr. 1" claims, Google profile in LocalBusiness `sameAs`. Deploy works again (webhook + cron, ~5 min); `npm run deploy` refuses with uncommitted changes (stash them, e.g. `email-signature/` WIP).
- Tools: claude-seo v2.5.0 installed globally (config `~/.config/claude-seo/google-api.json`, GSC via service account, no PageSpeed key yet) and Nikola's own skill `/seo-launch` (`~/.claude/skills/seo-launch/SKILL.md`: launch / audit / monitor, site registry, rules filter). Needs a new session to load. Next measurement: monthly snapshot (`/seo-launch monitor`), compare non-brand clicks/positions for seo/webdesign ludwigsburg. Do not use `/seo google index`.
- Decisions: Google profile name = "Niktos" only (legal name "Niktos - Nikola Planinic", written without ć everywhere), address stays visible. All add-on prices on `/preise/` (extra page, blog article, languages, logo, Google profile setup) are "auf Anfrage" since 10.11.2026 (they were invisible white-on-white before; Nikola decided not to publish prices for extras). Google profile setup for clients: owner stays the client, Nikola as manager. Open: Google profile texts/reviews; directories (drafts ready, see update below).
- **Decisions 12.11.2026:** legal name = "Niktos - Nikola Planinic" (it is the full name of his Kleinunternehmen; `legalName` in `site.js`, Impressum, footer, mail templates updated). Care is always "ab 39 € / Monat" (never a fixed 39 €, schema uses AggregateOffer lowPrice); Check stays 49 €. SEO session 2 changes (titles, Launch step) deployed 12.11.2026.
- **Kabic has already written a Google review (10.11.2026)**; more reviews only from real clients, no incentives, no review gating.
- **Update 10.11.2026 (evening, SEO session 2):** `/seo-launch audit` run on live URL (report `Izvjestaji/Niktos/seo/2026-11-10_seo-audit-2.md`; skill works, claude-seo parse/fetch scripts + GSC sitemap/inspect OK). Fixed in source (commit `07ff8fc`, **not deployed yet unless noted below**): four titles ≤ 60 chars (home, kontakt, ueber-mich, blog article), `check-seo.js` title limit now 60, Launch process step no longer promises the Unternehmensprofil (it is an on-request service), `googlePlaceId` = `ChIJBf7e4WnRmUcR4caQE7krqYE` (derived from the Maps feature id, verified: the writereview link opens the Niktos profile). Request indexing sent via Search Console UI for `/seo-ludwigsburg/`, `/leistungen/`, `/webdesign-ludwigsburg/`, `/preise/`, `/blog/` (all "Indeksiranje zatraženo"; GSC sometimes shows a transient error on the first click, a second click works). Delivered drafts in `Izvjestaji/Niktos/seo/`: `2026-11-10_google-profil-texte.md` (profile texts, services, Q&A, first post, review-request messages), `2026-11-10_verzeichnisse-daten.md` (NAP + texts + per-directory notes; Das Örtliche/11880/werbeagentur.de conditions unverified, read before registering; Yelp: never ask for reviews), `2026-11-10_artikel-was-kostet-eine-website.md` (article draft, awaiting Nikola's OK, not in `src/`), `2026-11-10_content-plan.md` (articles, niches, towns; no doorway pages). Open: Nikola enters the profile texts himself and renames the profile to "Niktos";  next snapshot ~10.12.2026 (`/seo-launch monitor`).
- Plan: (1) Google profile text + review request message, get 5–10 honest reviews; (2) directory/listicle entries (Das Örtliche, Gelbe Seiten, 11880, Yelp, Apple Business Connect, Bing Places, Feedbax, werbeagentur.de) with identical NAP; (3) articles/landing pages on prices ("Was kostet eine Website"), niches (Handwerker, Friseur, Praxis) and neighbouring towns – real content only, no doorway pages. Nobody can guarantee #1; realistic 3–6 months.
