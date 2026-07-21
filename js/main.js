/* Entreprise Felicioni — vanilla JS, sans dépendance */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------- Menu mobile ---------- */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu-mobile');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      menu.dataset.open = String(!open);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        burger.setAttribute('aria-expanded', 'false');
        menu.dataset.open = 'false';
      }
    });
  }

  /* ---------- Révélations au scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Comparateur avant / après ---------- */
  document.querySelectorAll('.compare').forEach(function (comp) {
    var range = comp.querySelector('.compare__range');
    var before = comp.querySelector('.compare__before');
    var after = comp.querySelector('.compare__after');
    var lblB = comp.querySelector('.compare__label--before');
    var lblA = comp.querySelector('.compare__label--after');
    if (!range) return;

    function apply(v) {
      comp.style.setProperty('--pos', v + '%');
      range.setAttribute('aria-valuetext', 'Après révélé à ' + Math.round(v) + '%');
      if (lblB) lblB.style.opacity = v < 22 ? '0' : '1';
      if (lblA) lblA.style.opacity = v > 78 ? '0' : '1';
    }
    range.addEventListener('input', function () { apply(+range.value); });
    apply(+range.value || 50);

    /* Animation d'invite unique au 1er passage dans le viewport */
    if (!reduce && 'IntersectionObserver' in window) {
      var hinted = false;
      var ho = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting && !hinted) {
            hinted = true; ho.disconnect();
            var start = performance.now(), dur = 900;
            function tick(now) {
              var t = Math.min((now - start) / dur, 1);
              // 50 -> 65 -> 50 (aller-retour doux)
              var eased = Math.sin(t * Math.PI); // 0..1..0
              var v = 50 + eased * 15;
              range.value = v; apply(v);
              if (t < 1) requestAnimationFrame(tick); else { range.value = 50; apply(50); }
            }
            requestAnimationFrame(tick);
          }
        });
      }, { threshold: 0.55 });
      ho.observe(comp);
    }
  });

  /* ---------- Onglets avant/après ---------- */
  var tabs = document.querySelectorAll('.ba__tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-panel');
      tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t === tab)); });
      document.querySelectorAll('.ba__panel').forEach(function (p) {
        p.hidden = (p.id !== target);
      });
    });
  });

  /* ---------- Lightbox galerie ---------- */
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img');
    var triggers = Array.prototype.slice.call(document.querySelectorAll('.gallery button'));
    var idx = 0, lastFocus = null;
    function show(i) {
      idx = (i + triggers.length) % triggers.length;
      var src = triggers[idx].getAttribute('data-full');
      var alt = triggers[idx].querySelector('img').getAttribute('alt');
      lbImg.src = src; lbImg.alt = alt;
    }
    function open(i) { lastFocus = document.activeElement; show(i); lb.dataset.open = 'true';
      document.body.style.overflow = 'hidden'; lb.querySelector('.lightbox__close').focus(); }
    function close() { lb.dataset.open = 'false'; document.body.style.overflow = '';
      lbImg.src = ''; if (lastFocus) lastFocus.focus(); }
    triggers.forEach(function (btn, i) { btn.addEventListener('click', function () { open(i); }); });
    lb.querySelector('.lightbox__close').addEventListener('click', close);
    lb.querySelector('.lightbox__nav--prev').addEventListener('click', function () { show(idx - 1); });
    lb.querySelector('.lightbox__nav--next').addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.dataset.open !== 'true') return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* ---------- Formulaire (validation + honeypot + Formspree) ---------- */
  var form = document.getElementById('devis-form');
  if (form) {
    var okBox = form.querySelector('.form__msg--ok');
    var errBox = form.querySelector('.form__msg--err');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      okBox.style.display = 'none'; errBox.style.display = 'none';
      // honeypot
      if (form.querySelector('[name="_gotcha"]').value) return;
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var action = form.getAttribute('action') || '';
      if (action.indexOf('[FORMSPREE_ID]') !== -1 || action === '') {
        // Formspree pas encore branché : on informe sans faire échouer silencieusement
        errBox.textContent = 'Le formulaire n’est pas encore activé. Appelez-nous directement au 06 87 81 45 85.';
        errBox.style.display = 'block';
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      var label = btn.textContent; btn.disabled = true; btn.textContent = 'Envoi…';
      fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (r.ok) { form.reset(); okBox.style.display = 'block'; okBox.scrollIntoView({ block: 'center' }); }
          else throw new Error('bad');
        })
        .catch(function () {
          errBox.textContent = 'Envoi impossible pour le moment. Appelez-nous au 06 87 81 45 85, on vous répond directement.';
          errBox.style.display = 'block';
        })
        .finally(function () { btn.disabled = false; btn.textContent = label; });
    });
  }

  /* ---------- Année footer ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
