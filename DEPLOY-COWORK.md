# Niktos – Deploy auf Hostinger (Übergabe an Co-work)

Repo: `https://github.com/nikolaplaninic-niktos/niktos` (privat). Der Branch **`deploy`** enthält fertig gebautes HTML (Inhalt von `dist/`), `main` ist der Quellcode.
Neue Version veröffentlichen (macht Claude lokal): `npm run deploy` → pusht `deploy`.
**Niemals** die Kabic-Seite oder andere Domains anfassen. **Keine Passwörter in den Chat schreiben** – Nikola trägt sie selbst ein.

## Phase 1 – Staging `novi.niktos.com` (live-Seite bleibt unberührt)

1. hPanel → Websites → niktos.com → **Domains → Subdomains**: `novi.niktos.com` anlegen, Document Root = `public_html/novi`. SSL (Let's Encrypt) aktivieren.
2. hPanel → **Erweitert → Git**: Repository `git@github.com:nikolaplaninic-niktos/niktos.git` (SSH, da privat), Branch `deploy`, Installationspfad `public_html/novi`.
   - Hostinger zeigt einen SSH-Public-Key → bei GitHub: Repo → Settings → Deploy keys → Add (nur lesen). Das macht Nikola selbst im Browser.
   - Danach „Bereitstellen/Deploy". Optional: Webhook-URL von Hostinger bei GitHub → Settings → Webhooks eintragen (Event: push), dann deployt jeder Push automatisch.
3. **E-Mail-Postfächer** (hPanel → E-Mails): `info@niktos.com` muss existieren (Empfänger der Anfragen). Neues Postfach **`website@niktos.com`** anlegen (nur zum Senden).
4. **Server-Config** (Dateimanager), Datei `niktos-config.php` **oberhalb von `public_html`**, z. B. `/home/<konto>/domains/niktos.com/niktos-config.php`, nach Vorlage `config.example.php` im Repo:
   `smtp_user` = `website@niktos.com`, `smtp_pass` = Passwort dieses Postfachs (Nikola trägt es selbst ein), `salt` = beliebiger Zufallstext. Rechte 600.
5. Prüfen:
   - `https://novi.niktos.com` lädt, alle Unterseiten gehen, HTTPS ok.
   - Antwort-Header enthält `X-Robots-Tag: noindex` (nur Staging!).
   - Projekt-Anfrage absenden (Test): Mail kommt bei `info@niktos.com` an **und** Bestätigungsmail beim Absender. Falls nicht: `niktos-mail.log` neben `niktos-config.php` lesen (SMTP_LOGIN_FAILED = Passwort/Benutzer prüfen).
   - Lokal macht Claude: `npm run verify -- https://novi.niktos.com`.

## Phase 2 – Go-live (erst nach Nikolas ausdrücklichem OK)

Vorher erledigt sein muss: Straße + Hausnummer im Impressum (`site.address.street`), Umami-Website-ID, Staging getestet.

1. **Sicherung der alten WordPress-Seite (nicht löschen!)**
   - Dateimanager: gesamten Inhalt von `public_html` (außer `novi/` und `.well-known/`) als ZIP packen und **außerhalb von `public_html`** ablegen, z. B. `/home/<konto>/backup/wordpress-2026-10.zip`.
   - Datenbank per phpMyAdmin exportieren (`.sql`), ebenfalls dort ablegen. Die Datenbank selbst in hPanel **nicht löschen**.
   - Optional: hPanel → Backups → manuelles Backup.
2. Alte WordPress-Dateien aus `public_html` entfernen (nur nach Schritt 1, `novi/` und `.well-known/` bleiben).
3. hPanel → Git: Installationspfad auf `public_html` ändern bzw. zweites Repo-Deployment mit Branch `deploy` → `public_html` anlegen und bereitstellen.
4. `niktos-config.php` liegt schon oberhalb (Phase 1) und wird weiterverwendet.
5. Prüfen: `https://niktos.com` (und `www.` → leitet auf non-www), alte WP-URLs → 301 (`.htaccess` ist im Repo), **kein** noindex-Header, Formular-Test, `sitemap.xml`, `robots.txt`.
6. Danach: Google Search Console → Sitemap `https://niktos.com/sitemap.xml` einreichen; Subdomain `novi` kann bleiben (noindex) oder gelöscht werden.

## Rollback
ZIP + SQL aus Schritt 1 zurückspielen (Dateimanager entpacken; DB per phpMyAdmin importieren) – die alte Seite läuft wieder.
