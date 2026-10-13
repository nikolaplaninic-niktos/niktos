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

## Phase 2 – Go-live auf niktos.com (Nikola hat am 13.10.2026 freigegeben)

Ausgangslage: niktos.com = altes WordPress in `public_html` (Root). Dort liegen auch `deutsch-richtig/` (eigenes Projekt), `novi/` (Staging) und `.well-known/` – **diese bleiben unberührt**. Der Git-Slot von niktos.com gehört dem Projekt Deutsch-richtig (nicht trennen).

Vorgehen (kein Git für den Root nötig):
1. hPanel → Backups: manuelles Backup (Dateien + Datenbank) und warten, bis es fertig ist.
2. Neuen Ordner `public_html/_wordpress-arhiva/` anlegen. Alle WordPress-Dateien aus dem Root **dorthin verschieben (nicht löschen)** – alles außer `deutsch-richtig/`, `novi/`, `.well-known/`, `_wordpress-arhiva/`. Das alte `.htaccess` und `index.php` gehören ebenfalls ins Archiv. In `_wordpress-arhiva/.htaccess` nur `Require all denied`. Liste der verschobenen Einträge notieren. Datenbank nicht anfassen.
3. Den **kompletten Inhalt** von `public_html/novi/` (inkl. versteckter `.htaccess`, ohne `.git`) in `public_html/` kopieren. Die Unterordner `novi/` und `deutsch-richtig/` nicht überschreiben.
4. Prüfen: `https://niktos.com`, `www` → non-www, `/preise/`, `/kontakt/`, `/datenschutzerklaerung/`, alte WP-URLs → 301, **kein** `X-Robots-Tag: noindex` auf niktos.com (auf novi.* bleibt er), `deutsch-richtig-demo.niktos.com` lädt weiterhin, Testanfrage über das Formular, `niktos-mail.log`.
5. Danach: Google Search Console → Sitemap `https://niktos.com/sitemap.xml` neu einreichen.

**Config-Suche:** `kontakt.php` sucht `niktos-config.php` ab dem eigenen Ordner bis zu 4 Ebenen nach oben. Aus `public_html/` wird sie also bereits in `domains/niktos.com/` gefunden – keine Änderung nötig.

**Updates danach:** `npm run deploy` aktualisiert Staging (novi) automatisch. Live wird mit Schritt 3 nachgezogen (novi → Root kopieren; `_wordpress-arhiva/`, `deutsch-richtig/`, `novi/`, `.well-known/` nicht anfassen).

## Rollback
Die neu kopierten Dateien im Root entfernen (nur die aus Schritt 3) und den Inhalt von `_wordpress-arhiva/` zurück in den Root verschieben. Notfalls das hPanel-Backup einspielen. Die WordPress-Datenbank wird nie verändert.
