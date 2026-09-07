    (function () {
      var modal = document.getElementById('downloadModal');
      if (!modal) return;
      function openModal() { modal.classList.add('is-open'); }
      function closeModal() { modal.classList.remove('is-open'); }
      document.addEventListener('click', function (e) {
        var opener = e.target.closest('[data-open-download]');
        if (opener) { e.preventDefault(); openModal(); return; }
        var closer = e.target.closest('[data-close-download]');
        if (closer) { e.preventDefault(); closeModal(); }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
      });
    })();

    const stickyCta = document.getElementById('stickyCta');
    const heroSection = document.querySelector('.hero');
    const finalCta = document.querySelector('.final-cta');
    if (stickyCta && heroSection) {
      window.addEventListener('scroll', () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const finalTop = finalCta ? finalCta.getBoundingClientRect().top : Infinity;
        if (heroBottom < 0 && finalTop > window.innerHeight) {
          stickyCta.classList.add('is-visible');
        } else {
          stickyCta.classList.remove('is-visible');
        }
      }, { passive: true });
    }

    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
    });
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
      });
    });

    const compareRows = document.querySelectorAll('.compare__row');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    compareRows.forEach((row, i) => {
      row.style.transitionDelay = (i * 0.15) + 's';
      revealObserver.observe(row);
    });

    const audienceCards = document.querySelectorAll('.audience__card');
    audienceCards.forEach((card, i) => {
      card.style.transitionDelay = (i * 0.1) + 's';
      revealObserver.observe(card);
    });

    document.querySelectorAll('.library__tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        document.querySelectorAll('.library__tab').forEach(t => t.classList.remove('is-active'));
        document.querySelectorAll('.library__panel').forEach(p => p.classList.remove('is-active'));
        tab.classList.add('is-active');
        document.querySelector(`.library__panel[data-tab="${id}"]`).classList.add('is-active');
      });
    });

    document.querySelectorAll('.library__phone').forEach(phone => {
      const dots = phone.querySelectorAll('.library__dot');
      const scr = phone.querySelector('.library__screen');   // контейнер смонтированного мока
      const prevBtn = phone.querySelector('.library__arrow--prev');
      const nextBtn = phone.querySelector('.library__arrow--next');

      function switchTo(idx) {
        const dot = dots[idx];
        if (!dot || dot.classList.contains('is-active')) return;
        dots.forEach(d => d.classList.remove('is-active'));
        dot.classList.add('is-active');
        scr.style.opacity = '0';
        setTimeout(() => {
          const d = dot.dataset.src || '';
          const bk = /book=(\d+)/.exec(d);
          const slides = scr.querySelectorAll('[data-slide]');
          const bookFrame = scr.querySelector('[data-book-frame]');
          const libFrame = scr.querySelector('[data-el="frame"]');
          if (bookFrame) {
            bookFrame.hidden = !bk;
            if (libFrame) libFrame.hidden = !!bk;
          }
          if (bk && slides.length) {
            slides.forEach(el => {
              const show = el.dataset.slide === String(idx);
              el.hidden = !show;
              if (show) {
                el.querySelectorAll('img[data-src]').forEach(im => {
                  im.src = im.dataset.src;
                  im.removeAttribute('data-src');
                });
              }
            });
          } else if (!bookFrame && window.L7_mountCatalog) {
            window.L7_mountCatalog(scr, bk ? 'book' : 'library',
              bk ? '?demo&book=' + bk[1] : '?demo&loop');
          }
          scr.style.opacity = '1';
        }, 150);
      }

      function getActive() {
        return [...dots].findIndex(d => d.classList.contains('is-active'));
      }

      dots.forEach((dot, i) => dot.addEventListener('click', () => switchTo(i)));
      if (prevBtn) prevBtn.addEventListener('click', () => switchTo((getActive() - 1 + dots.length) % dots.length));
      if (nextBtn) nextBtn.addEventListener('click', () => switchTo((getActive() + 1) % dots.length));

      const frame = phone.querySelector('.phone__frame');
      let startX = 0;
      if (frame) {
        frame.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        frame.addEventListener('touchend', e => {
          const diff = e.changedTouches[0].clientX - startX;
          if (Math.abs(diff) > 40) {
            if (diff < 0) switchTo((getActive() + 1) % dots.length);
            else switchTo((getActive() - 1 + dots.length) % dots.length);
          }
        });
      }
    });

    document.querySelectorAll('.pains__chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const idx = chip.dataset.pain;
        document.querySelectorAll('.pains__chip').forEach(c => c.classList.remove('is-active'));
        document.querySelectorAll('.pains__answer').forEach(a => a.classList.remove('is-active'));
        chip.classList.add('is-active');
        document.querySelector(`.pains__answer[data-pain="${idx}"]`).classList.add('is-active');
      });
    });

    const reviewModal = document.getElementById('reviewModal');
    const reviewModalImg = reviewModal.querySelector('.review-modal__img');
    document.querySelectorAll('.reviews__card[data-review]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        reviewModalImg.src = card.dataset.review;
        reviewModal.classList.add('is-open');
      });
    });
    reviewModal.querySelector('.review-modal__close').addEventListener('click', () => reviewModal.classList.remove('is-open'));
    reviewModal.querySelector('.review-modal__backdrop').addEventListener('click', () => reviewModal.classList.remove('is-open'));

    document.querySelectorAll('.faq__q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const wasOpen = item.classList.contains('is-open');
        document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('is-open'));
        if (!wasOpen) item.classList.add('is-open');
      });
    });

    (function() {
      const deck = document.getElementById('vocabRow');
      if (!deck) return;
      const PAIR = window.L7_pickPair && window.L7_pickPair();
      const PRESET = (PAIR && PAIR.showcase && PAIR.showcase.length) ? PAIR.showcase : [
        { en: 'year',  ru: 'год' },
        { en: 'child', ru: 'ребёнок' },
        { en: 'day',   ru: 'день' }
      ];
      const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      const chip = (w, isNew) =>
        `<div class="vocab-card${isNew ? ' vocab-card--new is-visible' : ''}">`
        + `<span class="vocab-card__en">${cap(w.en)}</span>`
        + `<span class="vocab-card__divider"></span>`
        + `<span class="vocab-card__ru">${w.ru}</span></div>`;
      const seen = new Set();
      function reset() {
        deck.innerHTML = PRESET.map(w => chip(w, false)).join('');
        seen.clear();
      }
      function add(w) {
        const key = (w.en || '').toLowerCase();
        if (!key || seen.has(key)) return;
        seen.add(key);
        deck.querySelectorAll('.vocab-card--new').forEach(el => el.classList.remove('vocab-card--new'));
        deck.insertAdjacentHTML('beforeend', chip(w, true));   // fly-in через vocab-pop
      }
      const heroReader = document.getElementById('heroReader');
      window.addEventListener('message', e => {
        if (!e || !e.data || e.data.from !== 'heroReader') return;
        const m = e.data;
        if (!m || typeof m !== 'object') return;
        if (m.type === 'l7demo-save')       add({ en: m.en, ru: m.ru });
        else if (m.type === 'l7demo-reset') reset();
      });
      reset();
    })();

    (function(){
      const lib = document.getElementById('heroLibrary');
      const rdr = document.getElementById('heroReader');
      if (!lib || !rdr) return;
      window.addEventListener('message', function(e){
        if (!e || !e.data || e.data.from !== 'heroLibrary') return;
        if (e && e.data && e.data.type === 'l7demo-openBook') {
          lib.style.opacity = '0';
          window.postMessage({ type: 'l7demo-go' }, '*');   // ридер встроен: слушатель висит на window
        }
      });
    })();
