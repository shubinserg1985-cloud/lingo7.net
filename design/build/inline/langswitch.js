/* Переключатель языка интерфейса и выбор изучаемого языка.

   Где лежит какая строка, знает Python: tools/build_locale_page.py --annotate
   расставил в разметке метки data-i18n="ключ". Здесь только подстановка по
   ключу — иначе алгоритм поиска существовал бы дважды и разошёлся бы молча.

   Пара живёт ТОЛЬКО в адресе. Запоминать выбор в localStorage пробовали и
   убрали: голый адрес молча превращался в #pair=de-kk, то есть сайт показывал
   разным людям разное по одной и той же ссылке, а вернуться к умолчанию можно
   было лишь очисткой хранилища.

   Где именно в адресе — зависит от страницы. У страницы пары это ПУТЬ
   (/de/learn-fr/): он же адрес в выдаче, и фрагмент рядом с ним был бы вторым
   состоянием, спорящим с первым. У корня и хабов пары в пути нет, там работает
   фрагмент (#pair=de-fr). Путь сильнее всегда. */
(function () {
  var D = window.L7_PAIRS || {};
  // На какой паре собрана ЭТА страница — она сама и говорит. Выгрузка даёт
  // умолчание только исходнику, у которого пары нет.
  var EMIT = (document.documentElement.getAttribute('data-pair') || '').split('-');
  var DEF = EMIT.length === 2 ? EMIT : (D.defaultPair || ['ru', 'en']);

  // Что выпущено. Файл пишет генератор дерева; пока дерева нет, его нет тоже —
  // и тогда переходы остаются фрагментом, как было. Так один и тот же код
  // работает и на одиночной странице разработки, и на дереве.
  var PUB = window.L7_PUBLISHED || null;

  function fromPath() {
    var m = /^\/([a-z]{2,3})\/learn-([a-z]{2,3})\/?$/.exec(location.pathname || '');
    return m ? { my: m[1], target: m[2] } : null;
  }
  function fromHash() {
    var m = /[#&]pair=([a-z]{2,3})-([a-z]{2,3})\b/.exec(location.hash || '');
    return m ? { my: m[1], target: m[2] } : null;
  }
  function defaults() {
    // Умолчание приходит из выгрузки, а не написано здесь: иначе оно
    // существовало бы дважды. Язык браузера НАМЕРЕННО не спрашиваем — одна и
    // та же присланная ссылка показывала бы разным людям разное.
    return { my: DEF[0], target: DEF[1] };
  }

  // Изучаемый не может совпасть с языком читателя. Разрешать это столкновение
  // надо ТАМ ЖЕ, где пара записывается, а не при загрузке: иначе в адрес уходит
  // en-en, страница чинит пару у себя, и присланная ссылка врёт.
  function fix(p) {
    if (p.my === p.target) p.target = p.my === 'en' ? 'es' : 'en';
    return p;
  }

  // Путь читается ПЕРВЫМ: на /de/learn-fr/ фрагмент игнорируется целиком.
  var ONPAIR = fromPath();
  var CUR = fix(ONPAIR || fromHash() || defaults());

  // Решение о паре — ОДНО на странице. Выборщик и моки берут его отсюда, а не
  // разбирают адрес заново: три копии одного правила (разбор, умолчание,
  // «изучаемый ≠ родной») расходились бы молча.
  window.L7_PAIR = CUR;

  // Голый адрес НЕ переписываем: он и означает умолчание. Адрес меняется
  // только когда читатель сам выбрал язык — тогда ссылкой можно поделиться.

  function flatten(o, p, out) {
    if (o === null || o === undefined) return out;
    if (typeof o === 'string') { out[p] = o; return out; }
    if (Array.isArray(o)) {
      o.forEach(function (v, i) { flatten(v, p + '[' + i + ']', out); });
      return out;
    }
    Object.keys(o).forEach(function (k) {
      if (!p && k.charAt(0) === '_') return;
      flatten(o[k], p ? p + '.' + k : k, out);
    });
    return out;
  }

  var META = {
    'meta.description': 'meta[name="description"]',
    'meta.ogTitle': 'meta[property="og:title"]',
    'meta.ogDescription': 'meta[property="og:description"]',
    'meta.twitterTitle': 'meta[name="twitter:title"]',
    'meta.twitterDescription': 'meta[name="twitter:description"]'
  };

  // Слот {target} — название ИЗУЧАЕМОГО языка на языке читателя. У русского
  // девять таких заголовков лежат отдельным блоком _pair, у остальных сорока
  // восьми локалей слот стоит прямо в ключе, поэтому без подстановки на экран
  // выходило дословное «{target} lernen».
  function slotName() {
    var row = D && D.names && D.names[CUR.my] && D.names[CUR.my][CUR.target];
    return row ? row[0] : CUR.target;
  }

  // textContent стирает ДОЧЕРНИЕ элементы. У кнопки вопроса в FAQ внутри лежит
  // <svg> — стрелка раскрытия, — и подстановка её убивала: ответы не
  // раскрывались, потому что раскрывать стало нечем. Поэтому меняем только
  // текстовые узлы, а элементы оставляем на месте.
  //
  // Исключение — <br>: он расставлен под РУССКУЮ длину строки, и тащить его в
  // немецкий незачем. Если других детей нет, элемент заполняется целиком.
  function setText(el, v) {
    var kids = el.children;
    var onlyBr = kids.length > 0;
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].tagName !== 'BR') { onlyBr = false; break; }
    }
    if (!kids.length || onlyBr) { el.textContent = v; return; }
    var texts = [];
    for (var n = 0; n < el.childNodes.length; n++) {
      if (el.childNodes[n].nodeType === 3 && el.childNodes[n].data.trim()) {
        texts.push(el.childNodes[n]);
      }
    }
    if (!texts.length) { el.insertBefore(document.createTextNode(v), el.firstChild); return; }
    texts[0].data = v;
    for (var m = 1; m < texts.length; m++) texts[m].data = '';
  }

  // Название изучаемого языка выделяется цветом — только в главном заголовке.
  // В <title> и meta разметке взяться неоткуда, а в двух других заголовках цвет
  // спорит с ними самими.
  function fill(v, name, markup) {
    if (v.indexOf('{target}') < 0) return v;
    return v.split('{target}').join(
      markup ? '<span class="accent">' + name + '</span>' : name);
  }

  function apply(map) {
    var name = slotName();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var v = map[key];
      if (v == null) return;
      var slot = v.indexOf('{target}') >= 0;
      var markup = slot && key === 'hero.title';
      v = fill(v, name, markup);
      if (el.hasAttribute('data-i18n-html') || markup) el.innerHTML = v;
      else setText(el, v);
    });
    Object.keys(META).forEach(function (k) {
      var el = document.querySelector(META[k]);
      var v = map[k];
      if (!el || !v) return;
      el.setAttribute('content', fill(v, name, false));
    });
    document.documentElement.lang = CUR.my;
  }

  // Помещается ли шапка. Подписи меню на казахском вдвое длиннее русских, и
  // ряд ломался даже на широком экране: медиазапрос по ширине окна об этом
  // знать не может, а замер — знает. Ссылки не переносятся (nowrap), поэтому
  // переполнение видно по scrollWidth.
  function fitHeader() {
    var h = document.querySelector('.header');
    var inner = h && h.querySelector('.header__inner');
    if (!inner) return;
    var over = function () { return inner.scrollWidth > inner.clientWidth + 1; };
    h.classList.remove('is-tight', 'is-tighter', 'is-tightest');
    if (!over()) return;
    h.classList.add('is-tight');          // бейджи сторов → компактные значки
    if (!over()) return;
    // На широком экране это уводит меню в бургер; на узком меню и так в
    // бургере, и ступень снимает подпись у переключателя языка. Одна ступень,
    // два разных действия — потому что мерится ОДНО: влезает ряд или нет.
    h.classList.add('is-tighter');
    if (!over()) return;
    h.classList.add('is-tightest');       // и только теперь — без значков сторов
  }

  // Куда уводит выбор языка.
  //
  // Пара выпущена — на её страницу: это чистый адрес, он же индексируется, и
  // ссылкой на него можно поделиться. Не выпущена — на ХАБ языка читателя с
  // парой во фрагменте: хабы есть у всех 49 языков, поэтому промахнуться в 404
  // невозможно, а выбор изучаемого языка не теряется. Дерева ещё нет — остаётся
  // фрагмент на текущей странице, как было до него.
  function go(my, target) {
    var p = fix({ my: my, target: target });
    var pair = p.my + '-' + p.target;
    if (!PUB) {
      location.hash = 'pair=' + pair;
      location.reload();
      return;
    }
    if (PUB.pairs && PUB.pairs.indexOf(pair) >= 0) {
      location.assign('/' + p.my + '/learn-' + p.target + '/');
    } else {
      location.assign('/' + p.my + '/#pair=' + pair);
    }
  }

  // Плашки блока «49 языков» ставят ИЗУЧАЕМЫЙ язык. Код языка проставлен
  // разметке тем же скриптом на Python: в подписи его нет.
  document.addEventListener('click', function (e) {
    var chip = e.target.closest && e.target.closest('a.lang-chip[data-lang]');
    if (!chip) return;
    e.preventDefault();
    // Плашка ставит ИЗУЧАЕМЫЙ язык. Если он совпал с языком читателя, пару
    // меняем местами: человек ясно сказал, что хочет учить, и гасить его выбор
    // неправильно — интерфейс становится тем, что он учил до этого.
    var t = chip.getAttribute('data-lang');
    go(t === CUR.my ? CUR.target : CUR.my, t);
  });

  // Адрес — единственное состояние, значит его смена обязана менять страницу.
  // Логотип ведёт на «#», и без этого клик по нему возвращал голый адрес, а
  // страница оставалась на прежнем языке: адрес говорил одно, экран другое.
  window.addEventListener('hashchange', function () {
    if (ONPAIR) return;                 // на странице пары состояние — путь
    var p = fix(fromHash() || defaults());
    if (p.my !== CUR.my || p.target !== CUR.target) location.reload();
  });

  function load() {
    fitHeader();
    // Замер повторяется, когда догрузятся ВЕБ-ШРИФТЫ. При первом проходе текст
    // ещё нарисован запасным шрифтом и уже, чем будет: ряд «помещается»,
    // ступень не включается, а через долю секунды Inter делает подписи шире и
    // ряд вылезает за экран. Пересчитать было некому — событий resize при
    // смене шрифта не бывает.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitHeader).catch(function () {});
    }
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt); rt = setTimeout(fitHeader, 150);
    });
    var sel = document.getElementById('langSwitch');
    if (sel) {
      sel.value = CUR.my;
      sel.addEventListener('change', function () { go(sel.value, CUR.target); });
    }
    // Локаль вёрстки — особый случай. Подставлять ВСЁ нельзя: текстом мы бы
    // стёрли <br> и неразрывные пробелы, расставленные под русскую строку.
    // Но девять заголовков со слотом {target} у русского лежат отдельным блоком
    // _pair, и без них страница на #pair=ru-en показывала общее «Учите язык»
    // вместо «Учите английский». Поэтому для BASE берём ТОЛЬКО _pair.
    // Путь КОРНЕВОЙ: относительный на /en/learn-es/ ищет
    // /en/learn-es/i18n/en.json, получает 404 и молча оставляет страницу
    // на языке сборки — ошибка гасится .catch(), экран выглядит целым.
    fetch('/i18n/' + CUR.my + '.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d) return;
        // Совпало с тем, на чём страница собрана — подставлять нечего, и не
        // надо: текстом стёрлись бы <br> и неразрывные пробелы вёрстки. Раньше
        // условие сравнивало только ЯЗЫК, и на /en/learn-de/ заголовки
        // оставались бы от испанского.
        var same = CUR.my === DEF[0] && CUR.target === DEF[1];
        if (same) { document.documentElement.lang = CUR.my; return; }
        apply(flatten(CUR.my === DEF[0] ? (d._pair || d) : d, '', {}));
        fitHeader();
      })
      .catch(function () {});
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
