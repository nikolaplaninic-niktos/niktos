<?php
// Template for the server-only config. Never commit the real file (niktos-config.php / config.php are gitignored).
// Location on Hostinger (outside the web root; kontakt.php searches up to 4 folders above itself):
//   /home/<account>/domains/niktos.com/niktos-config.php
// Error log is written next to it: niktos-mail.log (no passwords, no personal data).
return [
    'smtp_host'   => 'smtp.hostinger.com',
    'smtp_port'   => 465,
    'smtp_secure' => 'ssl',                          // 465 = SSL (SMTPS); use 'tls' only with port 587
    'smtp_user'   => 'website@niktos.com',           // mailbox used only for sending
    'smtp_pass'   => '',                             // ← password of website@ (hPanel → E-Mails)
    'from_email'  => 'website@niktos.com',
    'from_name'   => 'Website Niktos',               // sender name of the notification to info@
    'confirmation_from_name' => 'Nikola Planinić · Niktos', // sender name of the customer confirmation
    'to'          => 'info@niktos.com',              // receives the enquiries
    'send_confirmation' => true,                     // German auto-confirmation to the customer
    'rate_limit'  => 3,                              // max enquiries per IP …
    'rate_window' => 600,                            // … per 10 minutes
    'salt'        => 'CHANGE-ME-random-string',      // any random text (hashes IPs for the rate limit)
];
