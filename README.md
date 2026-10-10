# Niktos – nova web stranica (niktos.com)

Statička web stranica (čisti HTML/CSS/JS, bez WordPressa), generirana iz `src/` u `dist/`. Ista tehnika kao Kabic.
**Za upload na server koristi se samo mapa `dist/`.**

## Stranice

| URL | Stranica |
|---|---|
| `/` | Početna (hero, problem→rješenje, usluge, referenca, KI, proces, paketi, usporedba, FAQ, blog, mapa) |
| `/leistungen/` | Pregled usluga |
| `/webdesign-ludwigsburg/` | Webdesign & Relaunch |
| `/seo-ludwigsburg/` | SEO, Google Maps & KI-Sichtbarkeit (GEO) |
| `/wartung-hosting/` | Care paket (održavanje) |
| `/website-check/` | Website-Check (49 €) – lead magnet |
| `/preise/` | 3 paketa + usporedna tablica + extras + primjer izračuna |
| `/referenzen/` | Kabic, Spatzennest, KomLab |
| `/ueber-mich/` | O tebi (s placeholderom za sliku) |
| `/blog/` + `/blog/warum-eine-professionelle-website-wichtig-ist/` | Blog + prvi članak |
| `/kontakt/` | Klasični formular + kontakt kartice + mapa |
| `/projekt-anfrage/` | Step-by-step formular (isti se otvara kao popup s gumba „Projekt starten“ na svakoj stranici) |
| `/impressum/`, `/datenschutzerklaerung/`, `/danke/`, `404` | |

Stari URL-ovi (`/cookie-richtlinie-eu/`, WordPress sitemape, `/wp-*`) imaju 301 u `src/static/.htaccess`.

## Naredbe

```bash
npm install
npm run all      # slike + build
npm run build    # samo HTML (nakon promjene teksta/cijena)
npm run serve    # lokalni pregled http://localhost:8080
npm run check    # SEO/link audit – mora proći prije deploya
npm run test     # funkcionalni test (dok serve radi)
npm run mail     # pregled e-mailova → mail-preview/index.html
```

## Dizajn („Sticker Studio“)

Svijetla stranica, crna „tinta“ + Niktos plava `#0a66ff`, žuti marker. Kartice i gumbi s crnim rubom i tvrdom sjenom (naljepnice), okrugli stickeri, polaroid s trakom, rukom pisane bilješke (font Caveat).
Iz stare stranice preuzeto: plavi kvadrati uz meni, crna linija sidebara, plava traka s *zvjezdicama*, naslov koji se „tipka“, plave ikone procesa (`media/originals/ablauf-*.jpg`).

## Gdje se što mijenja

- **Cijene, paketi, telefon, Instagram, usluge, referencije, gradovi:** `src/site.js` (jedno mjesto → sve stranice, schema, llms.txt)
- **Tekstovi:** `src/pages/*.js` · **Dizajn:** `src/css/style.css` · **JS (formular, meni):** `src/js/main.js`
- **Tvoja slika:** `media/originals/nikola-planinic.jpg` (polaroid) i `nikola-avatar.jpg` (avatar) – zamijeni datoteke i pokreni `npm run all`.
- **Novi blog članak:** kopiraj `src/pages/11-blog-professionelle-website.js` (novi broj, novi `path`), dodaj ga u `posts` u `src/pages/10-blog.js`.

## Potvrditi prije objave (TODO)

- [ ] **Ulica i kućni broj** – `src/site.js → address.street` (Impressum je bez toga pravno nepotpun)
- [ ] **Cijene paketa** (990 / 1.990 / 3.490 €), Care 39 €/mj., Website-Check 49 €, Extras na `/preise/`, plaćanje 50/50 – sve po mojoj procjeni
- [ ] **Jezici** „Deutsch & Kroatisch“ na Über mich
- [ ] **Dopuštenje Kabica** za screenshot (jedina referenca)
- [ ] **Profi fotka** – zamijeniti `media/originals/nikola-planinic.jpg` i `nikola-avatar.jpg`, pa `npm run all`
- [ ] **Google-Unternehmensprofil** – pošalji link profila → `googleMapsUrl`/`mapEmbed` u `site.js` pokazuju točno na Niktos (sad: pretraga „Niktos Webdesign & SEO, 71642 Ludwigsburg“)
- [ ] **Umami** websiteId (`site.js`) i server regija u Datenschutz
- [ ] **SMTP**: mailbox `website@niktos.com` + `niktos-config.php` na serveru (predložak `config.example.php`)

## SEO & KI – što je napravljeno

- Jedinstveni title/description, canonical, OG slike (JPG za WhatsApp), jedan H1, breadcrumbs
- JSON-LD: `ProfessionalService` + `Person` (Nikola), `OfferCatalog` s cijenama paketa, `Service` po usluzi, `FAQPage` na 7 stranica, `BlogPosting` s autorom i izvorom, `BreadcrumbList`
- `llms.txt` (sažetak za ChatGPT/Claude/Perplexity) + `robots.txt` koji izričito pušta KI crawlere
- Brzina: bez frameworka, CSS inline, lokalni fontovi, WebP, lazy-loading
- DSGVO: bez Google Fontsa, bez cookieja, Maps tek na klik

Napomena: prvo mjesto na Googleu ne može garantirati nitko – presudni su i Google profil (recenzije!), backlinkovi, redovni blog članci i vrijeme.
