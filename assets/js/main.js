/* Niktos – progressive enhancement, no dependencies */
(() => {
  const d = document;
  const WA = 'https://wa.me/491622403682';
  const PHONE = '0162 2403682', PHONE_TEL = '+491622403682', MAIL = 'info@niktos.com';
  const mq = (q) => window.matchMedia(q).matches;
  const reduce = mq('(prefers-reduced-motion: reduce)');
  const track = (name, data) => { try { if (window.umami) window.umami.track(name, data); } catch (_) { /* never break a click */ } };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Cookie consent: optional statistics (Umami) + external content (Google Maps) ---------- */
  const CKEY = 'nk-consent', CDAYS = 180;
  const cget = () => { try { const c = JSON.parse(localStorage.getItem(CKEY) || 'null'); return c && c.v === 1 && Date.now() - c.ts < CDAYS * 864e5 ? c : null; } catch (_) { return null; } };
  const cset = (c) => { try { localStorage.setItem(CKEY, JSON.stringify({ v: 1, ts: Date.now(), stats: !!c.stats, media: !!c.media })); } catch (_) { /* storage blocked: choice only lasts for this page */ } };
  let consent = cget() || { stats: false, media: false };
  let statsOn = false;
  const loadStats = () => {
    const tpl = d.querySelector('script[data-nk-stats]');
    if (!tpl || statsOn || /^REPLACE/.test(tpl.getAttribute('data-website-id') || '')) return; // no Umami ID yet → never call umami
    statsOn = true;
    const sc = d.createElement('script');
    sc.defer = true; sc.src = tpl.getAttribute('src');
    ['data-website-id', 'data-domains', 'data-do-not-track'].forEach((a) => tpl.hasAttribute(a) && sc.setAttribute(a, tpl.getAttribute(a)));
    d.head.appendChild(sc);
  };
  const loadMap = (box) => {
    if (!box || box.classList.contains('is-loaded')) return;
    const ifr = d.createElement('iframe');
    ifr.src = box.dataset.src;
    ifr.title = 'Google Maps – Standort Niktos Webdesign Ludwigsburg';
    ifr.loading = 'lazy';
    ifr.referrerPolicy = 'no-referrer-when-downgrade';
    ifr.allowFullscreen = true;
    box.innerHTML = '';
    box.classList.add('is-loaded');
    box.appendChild(ifr);
  };
  const applyConsent = () => {
    if (consent.stats) loadStats();
    if (consent.media) d.querySelectorAll('.map').forEach(loadMap);
  };
  const banner = d.getElementById('cookie-banner');
  if (banner) {
    const panel = banner.querySelector('#cb-settings');
    const toggle = banner.querySelector('[data-consent-toggle]');
    const boxes = [...banner.querySelectorAll('[data-consent]')];
    const showBanner = (openSettings) => {
      boxes.forEach((b) => { b.checked = !!consent[b.dataset.consent]; });
      banner.hidden = false;
      panel.hidden = !openSettings;
      toggle.setAttribute('aria-expanded', String(!!openSettings));
    };
    const decide = (next) => {
      const revoked = (statsOn && !next.stats) || (!next.media && d.querySelector('.map.is-loaded'));
      consent = next; cset(next); banner.hidden = true;
      if (revoked) { location.reload(); return; }
      applyConsent();
    };
    banner.querySelector('[data-consent-all]').addEventListener('click', () => decide({ stats: true, media: true }));
    banner.querySelector('[data-consent-none]').addEventListener('click', () => decide({ stats: false, media: false }));
    banner.querySelector('[data-consent-save]').addEventListener('click', () => decide(Object.fromEntries(boxes.map((b) => [b.dataset.consent, b.checked]))));
    toggle.addEventListener('click', () => { const open = panel.hidden; panel.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); });
    d.addEventListener('click', (e) => { if (e.target.closest && e.target.closest('[data-consent-open]')) { e.preventDefault(); showBanner(true); } });
    if (!cget()) setTimeout(() => showBanner(false), 700);
  }
  applyConsent();

  /* ---------- Every newly opened page starts at the top ---------- */
  // Browsers (and embedded previews/in-app browsers) sometimes keep the old scroll position.
  // Back/forward keeps its position, links with #anchor still jump to the anchor.
  const navEntry = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  if (!location.hash && !(navEntry && navEntry.type === 'back_forward')) {
    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      try { d.documentElement.scrollIntoView({ block: 'start', behavior: 'instant' }); } catch (_) { /* old browsers */ }
    };
    let touched = false;
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((ev) => window.addEventListener(ev, () => { touched = true; }, { once: true, passive: true }));
    toTop();
    window.addEventListener('load', () => { if (!touched) toTop(); }, { once: true });
  }

  /* ---------- Mobile navigation (sidebar becomes a drawer) ---------- */
  const burger = d.querySelector('.burger');
  const setNav = (open) => { d.body.classList.toggle('nav-open', open); burger && burger.setAttribute('aria-expanded', String(open)); burger && burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen'); };
  if (burger) {
    burger.addEventListener('click', () => setNav(!d.body.classList.contains('nav-open')));
    d.querySelectorAll('.side a').forEach((a) => a.addEventListener('click', () => setNav(false)));
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape' && d.body.classList.contains('nav-open')) { setNav(false); burger.focus(); } });
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add('is-in'));

  /* ---------- Typing headline (like the old niktos.com) ---------- */
  // The first word is in the HTML (SEO + no-JS); the others are typed in and out.
  d.querySelectorAll('[data-type]').forEach((el) => {
    const words = el.dataset.type.split('|');
    if (reduce || words.length < 2) return;
    let w = 0, i = words[0].length, del = true;
    const tick = () => {
      const word = words[w];
      if (del) { i--; el.textContent = word.slice(0, i); if (i === 0) { del = false; w = (w + 1) % words.length; } setTimeout(tick, 45); return; }
      i++; el.textContent = words[w].slice(0, i);
      if (i === words[w].length) { del = true; setTimeout(tick, 2600); return; }
      setTimeout(tick, 85);
    };
    setTimeout(tick, 3200);
  });

  /* ---------- Count-up numbers ---------- */
  const counters = d.querySelectorAll('[data-count-to]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, to = +el.dataset.countTo, suf = el.dataset.suffix || '';
      co.unobserve(el);
      if (reduce) { el.textContent = to + suf; return; }
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: 0.5 });
    counters.forEach((c) => co.observe(c));
  }

  /* ---------- Floating "Projekt starten" hides over the footer ---------- */
  const fab = d.querySelector('.fab');
  const foot = d.querySelector('.footer');
  if (fab && foot && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => fab.classList.toggle('is-hidden', en.isIntersecting), { threshold: 0.05 }).observe(foot);
  }

  /* ---------- Google Maps – only after explicit consent ---------- */
  d.querySelectorAll('[data-map-load]').forEach((btn) => btn.addEventListener('click', () => loadMap(btn.closest('.map'))));

  /* ---------- Analytics: calls, e-mails, WhatsApp, Instagram ---------- */
  d.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    const where = a.closest('.side') ? 'sidebar' : a.closest('.mbar') ? 'mobile-bar' : a.closest('.wa-float') || a.classList.contains('wa-float') ? 'floating'
      : a.closest('.footer') ? 'footer' : a.closest('.hero, .phero') ? 'hero' : a.closest('.cta') ? 'cta' : a.closest('.price') ? 'preise' : 'content';
    const data = { seite: location.pathname, position: where };
    if (href.startsWith('tel:')) track('Anruf', data);
    else if (href.startsWith('mailto:')) track('E-Mail', data);
    else if (/wa\.me|whatsapp/i.test(href)) track('WhatsApp', data);
    else if (/instagram\.com/i.test(href)) track('Instagram', data);
  }, { capture: true });

  /* ---------- Shared form submit (kontakt.php → /danke/) ---------- */
  const messages = {
    rate: 'Sie haben in kurzer Zeit mehrere Anfragen gesendet. Bitte versuchen Sie es in einigen Minuten erneut – oder schreiben Sie mir direkt per WhatsApp.',
    validation: 'Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie den Datenschutzhinweis.',
    fallback: 'Ihre Anfrage konnte leider gerade nicht übermittelt werden. Das tut mir leid! Bitte schreiben Sie mir kurz per WhatsApp oder rufen Sie an – ich kümmere mich sofort darum.',
  };
  const summary = (data) => {
    const skip = ['t', '_gotcha', 'datenschutz', 'form'];
    const lines = []; const seen = new Set();
    for (const [k, v] of data.entries()) { if (skip.includes(k) || !String(v).trim() || seen.has(k)) continue; seen.add(k); lines.push(`${k.replace('[]', '').replace('_', ' ')}: ${data.getAll(k).join(', ')}`); }
    return lines.join('\n');
  };
  const showError = (form, code, data, serverMsg) => {
    const status = form.querySelector('.form__status');
    const body = data ? summary(data) : '';
    const wa = WA + (body ? '?text=' + encodeURIComponent('Hallo Nikola, meine Anfrage über die Website:\n\n' + body) : '');
    status.className = 'form__status is-err';
    status.innerHTML = `<p style="margin:0 0 10px">${esc(serverMsg || messages[code] || messages.fallback)}</p>` + (code === 'validation' ? '' :
      `<span class="actions"><a class="btn btn--wa btn--sm" href="${wa}" target="_blank" rel="noopener">Per WhatsApp senden</a><a class="btn btn--ghost btn--sm" href="tel:${PHONE_TEL}">Anrufen: ${PHONE}</a></span>` +
      `<p style="margin:10px 0 0;font-size:.9rem">Oder <a href="mailto:${MAIL}?subject=${encodeURIComponent('Anfrage über die Website')}&body=${encodeURIComponent(body)}">per E-Mail senden</a> – Ihre Angaben sind bereits eingetragen.</p>`);
    status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  let sent = false;
  const submit = async (form, e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw Object.assign(new Error('send failed'), { code: json.error, serverMsg: json.message });
      track('Anfrage gesendet', { formular: data.get('form'), anliegen: data.get('anliegen') || '-', budget: data.get('budget') || '-' });
      sent = true;
      try { Object.keys(sessionStorage).filter((k) => k.startsWith('nk-funnel:')).forEach((k) => sessionStorage.removeItem(k)); } catch (e2) { /* storage blocked */ }
      location.href = json.redirect || '/danke/';
    } catch (err) {
      showError(form, err.code, data, err.serverMsg);
      track('Anfrage fehlgeschlagen', { grund: err.code || 'netzwerk' });
      btn.disabled = false;
    }
  };
  const stamp = (form) => { const t = form.querySelector('input[name="t"]'); if (t) t.value = String(Date.now()); };

  /* ---------- Classic contact form ---------- */
  d.querySelectorAll('[data-contact-form]').forEach((form) => {
    stamp(form);
    const pre = new URLSearchParams(location.search).get('anliegen');
    if (pre) { const s = form.querySelector('select[name=anliegen]'); if (s && [...s.options].some((o) => o.value === pre)) s.value = pre; }
    form.addEventListener('submit', (e) => { if (!form.reportValidity()) { e.preventDefault(); return; } submit(form, e); });
  });

  /* ---------- Funnel: one question at a time, line grows to the next ---------- */
  const funnels = [];
  d.querySelectorAll('[data-funnel]').forEach((form) => {
    stamp(form);
    form.classList.add('is-live');
    const steps = [...form.querySelectorAll('.fstep')];
    const bar = form.querySelector('.funnel__bar i');
    const count = form.querySelector('[data-count]');
    let cur = 0;
    const setProgress = () => {
      bar.style.width = ((cur) / steps.length * 100 + 100 / steps.length / 2) + '%';
      count.textContent = `Schritt ${cur + 1} von ${steps.length}`;
    };
    const labelOf = (step) => {
      const checked = step.querySelector('input[type=radio]:checked');
      let txt = checked ? checked.dataset.label : '';
      const url = step.querySelector('input[name=website_url]');
      if (url && checked && checked.value === 'Ja' && url.value.trim()) txt += ' – ' + url.value.trim();
      return txt;
    };
    const go = (to, focus = true) => {
      steps.forEach((s, i) => {
        s.classList.toggle('is-active', i === to);
        s.classList.toggle('is-done', i < to);
        if (i < to) s.querySelector('[data-sum]').textContent = labelOf(s);
      });
      cur = to;
      setProgress();
      const active = steps[to];
      if (focus) setTimeout(() => {
        const first = active.querySelector('input:not([type=hidden]):not([hidden]), textarea');
        const inDialog = form.closest('dialog');
        if (!inDialog) active.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        else active.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
        if (first && to === steps.length - 1) first.focus({ preventScroll: true });
      }, 120);
      if (to > 0) track('Funnel Schritt', { schritt: to + 1 });
    };
    // "click" (not "change"): re-selecting the same answer after "ändern" must advance too
    form.addEventListener('click', (e) => {
      const input = e.target;
      if (input.tagName !== 'INPUT' || input.type !== 'radio') return;
      const step = input.closest('.fstep');
      const idx = steps.indexOf(step);
      if (idx === steps.length - 1) return; // contact step: no auto-advance
      // conditional field (e.g. website URL)
      const cond = step.querySelectorAll('[data-if]');
      let needsNext = false;
      cond.forEach((el) => { const [k, v] = el.dataset.if.split('='); const show = input.name === k && input.value === v; el.hidden = !show; if (show) needsNext = true; });
      const next = step.querySelector('[data-next]');
      if (next) next.hidden = !needsNext;
      if (needsNext) { const f = step.querySelector('[data-if]:not([hidden]) input'); if (f) setTimeout(() => f.focus(), 50); return; }
      setTimeout(() => go(firstOpen(idx + 1)), reduce ? 0 : 280);
    });
    // after "ändern": jump straight to the first question that is still unanswered
    const firstOpen = (from) => { for (let i = from; i < steps.length - 1; i++) if (!steps[i].querySelector('input[type=radio]:checked')) return i; return steps.length - 1; };
    form.querySelectorAll('[data-next]').forEach((b) => b.addEventListener('click', () => go(firstOpen(steps.indexOf(b.closest('.fstep')) + 1))));
    form.querySelectorAll('input[name=website_url]').forEach((i) => i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); go(firstOpen(steps.indexOf(i.closest('.fstep')) + 1)); } }));
    form.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => go(steps.indexOf(b.closest('.fstep')))));
    form.addEventListener('submit', (e) => {
      const last = steps[steps.length - 1];
      const tel = form.querySelector('input[name=telefon]');
      if (!form.querySelector('input[name=anliegen]:checked')) { e.preventDefault(); go(0); return; }
      if (![...last.querySelectorAll('input[required], textarea[required]')].every((i) => i.reportValidity())) { e.preventDefault(); return; }
      if (tel) tel.setCustomValidity('');
      submit(form, e);
    });
    const setPaket = (p) => {
      const inp = form.querySelector('input[name=paket]');
      if (inp) inp.value = p || '';
      const map = { launch: 'bis 500 €', boost: '500 – 1.500 €', dominate: 'über 3.500 €' };
      if (p && map[p]) { const r = form.querySelector(`input[name=budget][value="${map[p]}"]`); if (r) r.checked = true; }
    };
    /* keep answers when the visitor leaves (e.g. to the Datenschutz page) and comes back with "Zurück" */
    const KEY = 'nk-funnel:' + location.pathname + (form.closest('dialog') ? ':d' : ':p');
    const store = { get: () => { try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { return null; } },
                    set: (v) => { try { v ? sessionStorage.setItem(KEY, JSON.stringify(v)) : sessionStorage.removeItem(KEY); } catch (e) { /* storage blocked */ } } };
    const save = () => {
      if (sent) return;
      const vals = {};
      form.querySelectorAll('input, textarea').forEach((el) => {
        if (!el.name || ['t', '_gotcha', 'datenschutz', 'form'].includes(el.name)) return;
        if (el.type === 'radio' || el.type === 'checkbox') { if (el.checked) (vals[el.name] = vals[el.name] || []).push(el.value); }
        else if (el.value) vals[el.name] = [el.value];
      });
      const dlgEl = form.closest('dialog');
      store.set({ vals, step: cur, open: !!(dlgEl && dlgEl.open) });
    };
    const restore = () => {
      const st = store.get();
      if (!st || !st.vals) return false;
      form.querySelectorAll('input, textarea').forEach((el) => {
        const v = st.vals[el.name];
        if (!v) return;
        if (el.type === 'radio' || el.type === 'checkbox') el.checked = v.includes(el.value); else el.value = v[0];
      });
      form.querySelectorAll('[data-if]').forEach((el) => { const [k, v] = el.dataset.if.split('='); el.hidden = !(st.vals[k] && st.vals[k][0] === v); });
      steps.forEach((s2) => { const n = s2.querySelector('[data-next]'); if (n) n.hidden = !s2.querySelector('[data-if]:not([hidden])'); });
      go(Math.min(st.step || 0, steps.length - 1), false);
      return st;
    };
    const dialogRef = form.closest('dialog');
    form.addEventListener('input', save); form.addEventListener('click', () => setTimeout(save, 400));
    d.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a[href]'); if (a && form.contains(a)) save(); }, true);
    addEventListener('pagehide', save);
    const saved = restore();
    if (saved && saved.open && dialogRef && typeof dialogRef.showModal === 'function' && !dialogRef.open) { dialogRef.showModal(); d.documentElement.style.overflow = 'hidden'; }
    funnels.push({ form, reset: () => go(0, false), setPaket, save });
    setProgress();
    const qp = new URLSearchParams(location.search).get('paket');
    if (qp && !form.closest('dialog')) setPaket(qp);
  });

  /* ---------- Funnel dialog: opens from every "Projekt starten" ---------- */
  const dlg = d.getElementById('funnel');
  if (dlg && typeof dlg.showModal === 'function') {
    const f = funnels.find((x) => dlg.contains(x.form));
    d.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('[data-open-funnel]');
      if (!a) return;
      e.preventDefault();
      setNav(false);
      if (f) f.setPaket(a.dataset.paket || '');
      dlg.showModal();
      d.documentElement.style.overflow = 'hidden';
      track('Funnel geöffnet', { seite: location.pathname, paket: a.dataset.paket || '-' });
    });
    const close = () => dlg.close();
    dlg.querySelector('[data-close]').addEventListener('click', close);
    dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
    dlg.addEventListener('close', () => { d.documentElement.style.overflow = ''; if (f) f.save(); });
  }

  /* ---------- Blog: reading progress ---------- */
  const prog = d.querySelector('[data-read-progress]');
  const art = d.querySelector('[data-article]');
  if (prog && art) {
    const upd = () => { const r = art.getBoundingClientRect(); const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight))); prog.style.transform = `scaleX(${p})`; };
    addEventListener('scroll', upd, { passive: true }); upd();
  }

  const y = d.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
