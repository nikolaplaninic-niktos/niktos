<?php
// Form handler – Niktos (classic contact form + step-by-step project funnel)
// SMTP via PHPMailer (Hostinger), honeypot + timing check + per-IP rate limit.
// Success → /danke/ · Error → friendly German page / JSON with WhatsApp + phone (never fails silently).
// Works unchanged from public_html/novi (staging) and public_html (live).
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/_lib/PHPMailer/Exception.php';
require __DIR__ . '/_lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/_lib/PHPMailer/SMTP.php';
require __DIR__ . '/_lib/mail.php';

date_default_timezone_set('Europe/Berlin');

/** niktos-config.php: climb from this folder upwards (max 4 levels); fallback ./config.php. */
function nk_find_config(): ?string {
    $dir = __DIR__;
    for ($i = 0; $i <= 4; $i++) {
        if (is_file($dir . '/niktos-config.php')) return $dir . '/niktos-config.php';
        $parent = dirname($dir);
        if ($parent === $dir) break;
        $dir = $parent;
    }
    return is_file(__DIR__ . '/config.php') ? __DIR__ . '/config.php' : null;
}

/** Private folder outside the web root: the parent of the nearest "public_html" (= next to niktos-config.php). */
function nk_private_dir(?string $configFile): string {
    $dir = __DIR__;
    for ($i = 0; $i <= 4; $i++) {
        if (basename($dir) === 'public_html') return dirname($dir);
        $parent = dirname($dir);
        if ($parent === $dir) break;
        $dir = $parent;
    }
    if ($configFile !== null && basename($configFile) === 'niktos-config.php' && dirname($configFile) !== __DIR__) return dirname($configFile);
    return sys_get_temp_dir();
}

$configFile = nk_find_config();
$privateDir = nk_private_dir($configFile);

/** Error log without secrets or personal data: time | type | technical detail (e-mail addresses redacted). */
function nk_log(string $type, string $detail = ''): void {
    global $privateDir;
    $detail = (string)preg_replace('/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i', '[e-mail]', $detail);
    $detail = trim(str_replace(["\r", "\n", '|'], ' ', mb_substr($detail, 0, 400)));
    $line = date('Y-m-d H:i:s') . ' | ' . $type . ($detail !== '' ? ' | ' . $detail : '') . "\n";
    if (@file_put_contents($privateDir . '/niktos-mail.log', $line, FILE_APPEND | LOCK_EX) === false) error_log('niktos-mail: ' . trim($line));
}

function nk_smtp_error_type(string $info): string {
    $i = strtolower($info);
    if (strpos($i, 'authenticate') !== false || strpos($i, 'auth') !== false && strpos($i, 'fail') !== false) return 'SMTP_LOGIN_FAILED';
    if (strpos($i, 'connect') !== false || strpos($i, 'timed out') !== false) return 'SMTP_CONNECT_FAILED';
    if (strpos($i, 'recipient') !== false) return 'SMTP_RECIPIENT_REJECTED';
    return 'SMTP_SEND_FAILED';
}

$wantsJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function nk_message(string $code): string {
    switch ($code) {
        case 'rate':       return 'Sie haben in kurzer Zeit mehrere Anfragen gesendet. Bitte versuchen Sie es in einigen Minuten erneut – oder schreiben Sie mir direkt per WhatsApp.';
        case 'validation': return 'Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie den Datenschutzhinweis.';
        default:           return 'Ihre Anfrage konnte leider gerade nicht übermittelt werden. Das tut mir leid! Bitte schreiben Sie mir kurz per WhatsApp oder rufen Sie an – ich kümmere mich sofort darum.';
    }
}

function respond(bool $ok, string $code = ''): void {
    global $wantsJson;
    header('Cache-Control: no-store');
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($ok ? 200 : ($code === 'rate' ? 429 : ($code === 'validation' ? 400 : 503)));
        echo json_encode(['ok' => $ok, 'error' => $code, 'message' => $ok ? null : nk_message($code),
                          'phone' => NK_PHONE, 'whatsapp' => NK_WHATSAPP, 'redirect' => $ok ? '/danke/' : null],
                         JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }
    if ($ok) { header('Location: /danke/', true, 303); exit; }
    // No JavaScript: show a small, friendly error page instead of losing the enquiry silently.
    http_response_code($code === 'rate' ? 429 : ($code === 'validation' ? 400 : 503));
    header('Content-Type: text/html; charset=utf-8');
    $msg = htmlspecialchars(nk_message($code), ENT_QUOTES, 'UTF-8');
    echo '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">'
       . '<title>Anfrage nicht gesendet – Niktos</title></head>'
       . '<body style="margin:0;font-family:Arial,Helvetica,sans-serif;background:#05060a;color:#f3f5f9">'
       . '<div style="max-width:560px;margin:40px auto;padding:32px 24px;background:#0e1119;border:1px solid #232838;border-radius:18px">'
       . '<h1 style="margin:0 0 12px;font-size:26px">Das hat leider nicht geklappt</h1>'
       . '<p style="font-size:17px;line-height:1.6;color:#b9c1d0">' . $msg . '</p>'
       . '<p><a href="' . NK_WHATSAPP . '" style="display:block;margin:0 0 10px;padding:15px;border-radius:999px;background:#25d366;color:#03220f;text-align:center;font-weight:bold;text-decoration:none">Per WhatsApp schreiben</a>'
       . '<a href="tel:' . NK_PHONE_TEL . '" style="display:block;margin:0 0 10px;padding:15px;border-radius:999px;background:#0a6cff;color:#fff;text-align:center;font-weight:bold;text-decoration:none">Anrufen: ' . NK_PHONE . '</a>'
       . '<a href="/kontakt/" style="display:block;padding:12px;text-align:center;color:#5b95ff">Zurück zum Formular</a></p>'
       . '</div></body></html>';
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Location: /kontakt/', true, 303); exit; }

// 0) Config
if ($configFile === null) { nk_log('CONFIG_MISSING', 'niktos-config.php not found (searched 4 levels above ' . basename(__DIR__) . ')'); respond(false, 'config'); }
$cfg = require $configFile;
if (!is_array($cfg) || empty($cfg['smtp_user']) || empty($cfg['smtp_pass']) || strpos((string)$cfg['smtp_pass'], 'HIER') !== false || $cfg['smtp_pass'] === 'CHANGE-ME') {
    nk_log('CONFIG_INVALID', 'smtp_user or smtp_pass missing/placeholder in ' . basename($configFile));
    respond(false, 'config');
}

// 1) Honeypot – bots fill hidden fields; pretend success so they learn nothing.
if (!empty($_POST['_gotcha'])) respond(true);

// 2) Timing – humans need more than a few seconds (field set by main.js; absent without JS).
$started = (int)($_POST['t'] ?? 0);
if ($started > 0 && (time() - intdiv($started, 1000)) < 3) respond(true);

// 3) Rate limit – max N submissions per IP per window (hashed IP, stored outside the web root).
$limit  = (int)($cfg['rate_limit'] ?? 3);
$window = (int)($cfg['rate_window'] ?? 600);
$dataDir = $privateDir . '/niktos-data';
if (!is_dir($dataDir) && !@mkdir($dataDir, 0700, true)) $dataDir = sys_get_temp_dir();
$ipHash = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . ($cfg['salt'] ?? 'niktos'));
$rlFile = $dataDir . '/rl_' . substr($ipHash, 0, 32) . '.json';
$now = time();
$hits = is_file($rlFile) ? (json_decode((string)file_get_contents($rlFile), true) ?: []) : [];
$hits = array_values(array_filter($hits, fn($ts) => is_int($ts) && $ts > $now - $window));
if (count($hits) >= $limit) { nk_log('RATE_LIMITED'); respond(false, 'rate'); }

// 4) Validation – only whitelisted fields are used (see NK_FIELDS in _lib/mail.php)
$clean = static fn($v, int $max = 200): string => mb_substr(trim(str_replace(["\r", "\n", "\0"], ' ', (string)$v)), 0, $max);
$form = ($_POST['form'] ?? '') === 'projekt' ? 'projekt' : 'kontakt';
$d = ['form' => $form];
foreach (NK_FIELDS as $key => $label) {
    if ($key === 'nachricht') { $d[$key] = mb_substr(trim(str_replace("\0", '', (string)($_POST[$key] ?? ''))), 0, 5000); continue; }
    if ($key === 'email') { $d[$key] = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL) ?: ''; continue; }
    $d[$key] = $clean($_POST[$key] ?? '', $key === 'website_url' ? 200 : 120);
}
$consent = ($_POST['datenschutz'] ?? '') === 'ja';
if ($d['name'] === '' || $d['email'] === '' || !$consent) respond(false, 'validation');
if ($form === 'kontakt' && $d['nachricht'] === '') respond(false, 'validation');
$d['datum'] = date('d.m.Y') . ', ' . date('H:i') . ' Uhr';

// 5) Send – HTML + plain text; logo embedded (cid) so it shows without "load images"
$logoFile  = __DIR__ . '/assets/img/email-logo.png';
$to        = $cfg['to'] ?? $cfg['recipient'] ?? 'info@niktos.com';
$fromEmail = $cfg['from_email'] ?? $cfg['smtp_user'];

$newMailer = static function () use ($cfg, $logoFile): PHPMailer {
    $m = new PHPMailer(true);
    $m->isSMTP();
    $m->Host       = $cfg['smtp_host'] ?? 'smtp.hostinger.com';
    $m->Port       = (int)($cfg['smtp_port'] ?? 465);
    $m->SMTPSecure = strtolower((string)($cfg['smtp_secure'] ?? 'ssl')) === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : PHPMailer::ENCRYPTION_SMTPS;
    $m->SMTPAuth   = true;
    $m->Username   = $cfg['smtp_user'];
    $m->Password   = $cfg['smtp_pass'];
    $m->SMTPDebug  = 0;
    $m->CharSet    = PHPMailer::CHARSET_UTF8;
    $m->Encoding   = PHPMailer::ENCODING_BASE64;
    $m->Timeout    = 15;
    $m->isHTML(true);
    if (is_file($logoFile)) $m->addEmbeddedImage($logoFile, 'niktoslogo', 'logo.png', PHPMailer::ENCODING_BASE64, 'image/png');
    return $m;
};

// 5a) Notification to Nikola (info@) – Reply-To = customer
$mail = null;
try {
    $mail = $newMailer();
    $n = build_anfrage($d, 'cid:niktoslogo');
    $mail->setFrom($fromEmail, $cfg['from_name'] ?? 'Website Niktos');
    $mail->addAddress($to);
    $mail->addReplyTo($d['email'], $d['name']);
    $mail->Subject = $n['subject'];
    $mail->Body    = $n['html'];
    $mail->AltBody = $n['text'];
    $mail->send();
} catch (\Throwable $e) {
    $info = ($mail instanceof PHPMailer && $mail->ErrorInfo !== '') ? $mail->ErrorInfo : $e->getMessage();
    nk_log(nk_smtp_error_type($info), $info);
    respond(false, 'mail');
}

nk_log('OK', $form . ' enquiry delivered to SMTP');

// 5b) Automatic confirmation to the customer – a failure here never fails the enquiry
if ($cfg['send_confirmation'] ?? true) {
    $conf = null;
    try {
        $conf = $newMailer();
        $c = build_bestaetigung($d, 'cid:niktoslogo');
        $conf->setFrom($fromEmail, $cfg['confirmation_from_name'] ?? 'Nikola Planinić · Niktos');
        $conf->addAddress($d['email'], $d['name']);
        $conf->addReplyTo($to, 'Nikola Planinić · Niktos');
        $conf->Subject = $c['subject'];
        $conf->Body    = $c['html'];
        $conf->AltBody = $c['text'];
        $conf->addCustomHeader('Auto-Submitted', 'auto-replied');
        $conf->send();
        nk_log('OK', 'confirmation delivered to SMTP');
    } catch (\Throwable $e) {
        $info = ($conf instanceof PHPMailer && $conf->ErrorInfo !== '') ? $conf->ErrorInfo : $e->getMessage();
        nk_log('CONFIRMATION_' . nk_smtp_error_type($info), $info);
    }
}

$hits[] = $now;
@file_put_contents($rlFile, json_encode($hits), LOCK_EX);
respond(true);
