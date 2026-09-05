/* Собственные скрипты лендинга: раскрытие блоков по прокрутке, липкий
   призыв, меню, галерея библиотеки, колода сохранённых слов.

   Лежат ФАЙЛОМ, а не в странице: они одинаковы для всех 2352 пар, и копией
   это 11 КБ в каждой плюс отсутствие кэша между переходами. Правки идут
   СЮДА — в page.html осталась только ссылка.

   Четыре блока склеены в том же порядке, в каком стояли: они делили общую
   область видимости скрипта, и порядок в ней значим. */
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

    // Burger menu
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

    // Compare cards reveal on scroll
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

    // Audience cards reveal on scroll
    const audienceCards = document.querySelectorAll('.audience__card');
    audienceCards.forEach((card, i) => {
      card.style.transitionDelay = (i * 0.1) + 's';
      revealObserver.observe(card);
    });

    // Library tabs
    document.querySelectorAll('.library__tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        document.querySelectorAll('.library__tab').forEach(t => t.classList.remove('is-active'));
        document.querySelectorAll('.library__panel').forEach(p => p.classList.remove('is-active'));
        tab.classList.add('is-active');
        document.querySelector(`.library__panel[data-tab="${id}"]`).classList.add('is-active');
      });
    });


    // Library dots (gallery) – preload all images, then swap on click
    document.querySelectorAll('.library__phone').forEach(phone => {
      const dots = phone.querySelectorAll('.library__dot');
      const scr = phone.querySelector('.library__screen');   // контейнер смонтированного мока
      const prevBtn = phone.querySelector('.library__arrow--prev');
      const nextBtn = phone.querySelector('.library__arrow--next');

      // экраны не префетчим — компонент собирается по требованию, плавно

      function switchTo(idx) {
        const dot = dots[idx];
        if (!dot || dot.classList.contains('is-active')) return;
        dots.forEach(d => d.classList.remove('is-active'));
        dot.classList.add('is-active');
        scr.style.opacity = '0';
        setTimeout(() => {
          const d = dot.dataset.src || '';
          const bk = /book=(\d+)/.exec(d);
          // Карточки книг ЛЕЖАТ В РАЗМЕТКЕ — все, а не одна. Раньше каждый
          // слайд рисовал компонент по нажатию, и поисковик их не видел: он
          // на точки не нажимает, а с ними мимо него проходили девятнадцать
          // описаний книг. Теперь листание — это показать одну и спрятать
          // остальные.
          const slides = scr.querySelectorAll('[data-slide]');
          if (bk && slides.length) {
            slides.forEach(el => {
              const show = el.dataset.slide === String(idx);
              el.hidden = !show;
              // Обложка скрытой карточки держится в data-src: Chrome тянет
              // loading="lazy" даже из-под display:none, и девятнадцать живых
              // адресов стоили бы 6.3 МБ на загрузку. Переносим при показе.
              if (show) {
                el.querySelectorAll('img[data-src]').forEach(im => {
                  im.src = im.dataset.src;
                  im.removeAttribute('data-src');
                });
              }
            });
          } else if (window.L7_mountCatalog) {
            // Каталог (первая точка вкладки Discovery) карточками не устроен —
            // его по-прежнему собирает компонент.
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

      // Touch swipe on phone frame
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

    // Pains chips
    document.querySelectorAll('.pains__chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const idx = chip.dataset.pain;
        document.querySelectorAll('.pains__chip').forEach(c => c.classList.remove('is-active'));
        document.querySelectorAll('.pains__answer').forEach(a => a.classList.remove('is-active'));
        chip.classList.add('is-active');
        document.querySelector(`.pains__answer[data-pain="${idx}"]`).classList.add('is-active');
      });
    });

    // Review screenshot modal
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

    // FAQ accordion
    document.querySelectorAll('.faq__q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const wasOpen = item.classList.contains('is-open');
        document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('is-open'));
        if (!wasOpen) item.classList.add('is-open');
      });
    });

    // Hero: колода сохранённых слов — питается postMessage'ами из встроенного reader.html
    (function() {
      const deck = document.getElementById('vocabRow');
      if (!deck) return;
      // «уже сохранённые» слова из этой книги; новые прилетают из ридера при тапе «В мои слова»
      // канон = i18n/reader-sample.json → showcaseWords (Benjamin Button); лемма, UI капитализирует target
      // Слово на изучаемом языке + перевод на язык читателя. Берутся из
      // выбранной пары; зашитый список остаётся запасным, если блок выбора
      // не подключён. Раньше он был единственным, и на паре en←sr первые три
      // плашки показывали Year/год вместо сербского с английским.
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
        // предыдущее «новое» слово становится обычным (как 1-2-3) — зелёной остаётся только последняя плашка
        deck.querySelectorAll('.vocab-card--new').forEach(el => el.classList.remove('vocab-card--new'));
        deck.insertAdjacentHTML('beforeend', chip(w, true));   // fly-in через vocab-pop
      }
      const heroReader = document.getElementById('heroReader');
      window.addEventListener('message', e => {
        // только hero-ридер — не встроенные reader'ы карточек «цикла»
        // hero-ридер встроен в страницу: его window.parent — это сама страница,
        // поэтому источник сообщений здесь window, а не contentWindow фрейма
        // Встроены ВСЕ моки, и шлют они от имени страницы: e.source у всех
        // один и тот же. Плашки над телефоном прилетали от ридеров
        // карточек «цикла», крутящих свой цикл в своём темпе, — поэтому
        // отправитель называет себя сам.
        if (!e || !e.data || e.data.from !== 'heroReader') return;
        const m = e.data;
        if (!m || typeof m !== 'object') return;
        if (m.type === 'l7demo-save')       add({ en: m.en, ru: m.ru });
        else if (m.type === 'l7demo-reset') reset();
      });
      reset();
    })();

    // Hero: контроллер экранов анимации — сначала библиотека (каталог), затем передаём управление ридеру.
    // Базовая интеграция; последовательность действий (тап по книге → открытие) дорабатывается отдельно.
    (function(){
      const lib = document.getElementById('heroLibrary');
      const rdr = document.getElementById('heroReader');
      if (!lib || !rdr) return;
      // библиотека сверху и видна; её демо скроллит к книгам и тапает обложку над «Читать»,
      // затем шлёт openBook → уводим библиотеку и запускаем сценарий ридера.
      window.addEventListener('message', function(e){
        // только hero-библиотека — не встроенные library карточек «цикла»
        // Встроенный компонент шлёт от имени страницы, поэтому источник
        // не различает hero и карточку «цикла» — различает подпись.
        if (!e || !e.data || e.data.from !== 'heroLibrary') return;
        if (e && e.data && e.data.type === 'l7demo-openBook') {
          lib.style.opacity = '0';
          window.postMessage({ type: 'l7demo-go' }, '*');   // ридер встроен: слушатель висит на window
        }
      });
    })();
