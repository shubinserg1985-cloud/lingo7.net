/* Данные пары для всех экранов. Источник — design/build/inline/pairs.js.

   Главное здесь — window.L7_pickPair(): из него берут текст, словарь, каталог,
   диалог и упражнение ВСЕ пять моков. Без него телефон на странице пустой.

   Вторая половина файла — проверочный блок «посмотреть любую языковую пару».
   Он существовал, пока страниц /[my]/learn-[target] не было и увидеть пару
   было негде. Теперь дерево собрано, и смотреть надо на саму страницу пары, а
   не на её предпросмотр. Блок из разметки убран; код оставлен и молча
   выключается, если блока нет — так файл продолжает работать и на странице
   разработки, где блок при желании можно вернуть. */
(function () {
  var D = window.L7_PAIRS;
  if (!D) return;

  // Пару решает переключатель языка (langswitch.js) и кладёт сюда — разбор
  // адреса, умолчание и правило «изучаемый ≠ родной» существуют ОДИН раз.
  // Раньше этот файл решал то же самое сам, своими литералами 'ru' и 'en':
  // правка умолчания в одном месте сделала бы текст страницы одним языком, а
  // телефон рядом — другим, и заметить это можно было бы только глазами.
  var CUR = window.L7_PAIR;
  if (!CUR) {
    console.error('L7: пара не определена — langswitch.js должен идти до pairs.js-потребителей');
    return;
  }

  // Ключ словаря карточки — текст нажатого слова, очищенный ровно так же, как
  // это делает мок в openPopup. Иначе карточка не откроется.
  function keyOf(s) { return s.replace(/[.,;:!?«»"'\u2014:]/g, '').toLowerCase(); }

  // Абзац, позиции тап-слов и словарь карточки для выбранной пары.
  // Сценарий демо раньше искал тап-слова по английским «home» и «medicine»,
  // поэтому на паре вроде en←ru они не находились и демо тихо вставало.
  // Всё, что нужно экрану для пары. Собрано в базе (data/lingo7.db) слоем
  // модели и выгружено tools/l7_export_pairs.py — здесь только выбор пары.
  window.L7_pickPair = function () {
    var tg = CUR.target, my = CUR.my;
    var a = D.paras[tg], b = D.paras[my];
    if (!a || !b || a.length !== b.length) return null;
    var paras = a.map(function (x, i) { return { line: x, tr: b[i] }; });

    var tp = D.taps[tg] || {}, tm = D.taps[my] || {}, order = ['home', 'medicine'];
    var taps = [], align = {};
    order.forEach(function (w) {
      var t = tp[w] || { p: 0, from: 0, to: 1, at: 0 };
      taps.push({ p: t.p, from: t.from, to: t.to, at: t.at != null ? t.at : t.from, key: '' });
      var m = tm[w];
      if (m) align[t.p] = [m.from, m.to];   // диапазон парного слова в переводе
    });

    var ct = D.cards[tg] || {}, cm = D.cards[my] || {}, ui = D.ui[my] || {};
    var dict = {};
    order.forEach(function (w, i) {
      var T = ct[w], M = cm[w];
      if (!T || !M) return;
      var toks = (a[taps[i].p] || '').split(/\s+/);
      var key = keyOf(toks[taks_at(taps, i)] || T.word || w);
      taps[i].key = key;              // сценарий берёт запись словаря по этому ключу
      dict[key] = {
        title: T.word,
        freq: ui[T.freq === 'high' ? 'appUi.wordCard.freqHigh' : 'appUi.wordCard.freqMid'] || '',
        d: T.d, transBold: M.main, transRest: M.extra, img: T.img,
        other: T.other, syn: T.syn,
        en: T.example, ru: M.exampleMy    // поля названы по легаси: en = изучаемый, ru = родной
      };
    });

    // Заготовленные плашки над телефоном: слово на изучаемом языке и его
    // перевод на язык читателя. Раньше здесь был зашитый англо-русский список,
    // поэтому на паре en←sr первые три плашки оставались Year/год.
    var st = D.show[tg] || [], sm = D.show[my] || [];
    var showcase = st.map(function (w, i) { return { en: w, ru: sm[i] || '' }; });

    // Настройка, зависящая от изучаемого языка. Мок ждёт карту по коду языка;
    // если языка в ней нет, ряд не выводится вовсе — так и должно быть.
    var accents = {};
    (D.accents[tg] || []).forEach(function (o, i) {
      if (i === 0) accents[tg] = { flag: o.flag, name: (o.names || {})[my] || (o.names || {}).en || '' };
    });

    var bt = D.book[tg] || {}, bm = D.book[my] || {};
    return {
      my: my, target: tg, paras: paras, taps: taps, dict: dict, align: align,
      showcase: showcase, accents: accents,
      ui: ui,
      book: { title: bt.title, chapter: bt.chapter,
              titleMy: bm.title, chapterMy: bm.chapter, shortMy: bm.short },
      // Каталог: устройство полок языка не знает и берётся как есть, текст —
      // только языка ЧИТАТЕЛЯ. Изучаемый язык на каталог не влияет: полка
      // показывает, ЧТО читать, а не на чём.
      catalog: D.catalog, catText: D.catText[my],
      // Упражнение: картинку выбирают по слову на ИЗУЧАЕМОМ, подпись верного
      // ответа — на языке читателя. Раньше подпись была зашита как «Дом».
      vocab: { word: (D.cards[tg] && D.cards[tg].home || {}).word || '',
               tr:   (D.cards[my] && D.cards[my].home || {}).main || '' },
      // Диалог: реплика на изучаемом плюс её перевод, обе из одной таблицы по
      // двум локалям — как абзац ридера.
      chat: { target: D.chat[tg], my: D.chat[my] }
    };
  };

  function taks_at(taps, i) { return taps[i].at; }

  // Разметка ровно та, что строит buildParas: скрипт её подхватывает, а не
  // перерисовывает, поэтому она обязана совпадать до атрибутов.
  var L = 'margin:0 -9px;padding:5px 9px;border-radius:13px;font-size:20px;line-height:1.38;color:#333d4b;text-wrap:pretty;transition:background .2s';
  var T = 'width:30px;height:30px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;vertical-align:middle;margin:-6px 12px -6px 0';
  var R = 'margin:5px 0 0;font-size:17.5px;line-height:1.34;color:#93a0ae;text-wrap:pretty';
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function repaintParas() {
    var host = document.querySelector('#heroReader [data-el="paras"]');
    var p = window.L7_pickPair();
    if (!host || !p) return;
    host.innerHTML = p.paras.map(function (pr, i) {
      var w = pr.line.split(/\s+/).map(function (x, k) {
        return '<span class="w" data-p="' + i + '" data-k="' + k + '">' + esc(x) + '</span> ';
      }).join('');
      var t = pr.tr.split(/\s+/).map(function (x, k) {
        return '<span class="tw" data-p="' + i + '" data-k="' + k + '" style="border-radius:3px">' + esc(x) + '</span> ';
      }).join('');
      return '<div style="margin-bottom:24px"><p class="rd-line" data-p="' + i + '" style="' + L + '">' +
             '<span class="rd-toggle" data-p="' + i + '" style="' + T + '"></span>' + w + '</p>' +
             '<p class="rd-tr" style="' + R + '">' + t + '</p></div>';
    }).join('');
  }

  // Блока в разметке может не быть — на боевых страницах его и нет.
  // Раньше отсутствие #pairOut роняло скрипт на out.innerHTML, и вместе с ним
  // умирал L7_pickPair, то есть все пять экранов сразу.
  function hasBlock() { return !!document.getElementById('pairOut'); }

  function render() {
    if (!hasBlock()) return;
    var my = CUR.my, tg = CUR.target;
    var cell = (D.names[my] || {})[tg];
    var slot = cell ? cell[0] : tg, disp = cell ? cell[1] : tg;
    var out = document.getElementById('pairOut');
    var strings = D.strings[my] || {};
    var LABEL = { title: 'title', desc: 'description', h1: 'H1', lib: 'H2 библиотеки', cta: 'финальный призыв' };
    var rows = ['title', 'desc', 'h1', 'lib', 'cta'].filter(function (k) { return strings[k]; })
      .map(function (k) {
        var v = strings[k].replace(/\{target\}/g, '<b>' + esc(slot) + '</b>');
        var len = strings[k].replace(/\{target\}/g, slot).length;
        var over = (k === 'title' && len > 60) || (k === 'desc' && (len < 110 || len > 160));
        return '<div class="pairpick__row"><span class="pairpick__key">' + LABEL[k] + '</span>' +
               '<span class="pairpick__val">' + v + '</span>' +
               '<span class="pairpick__len' + (over ? ' is-over' : '') + '">' + len + '</span></div>';
      }).join('');
    out.innerHTML = rows || '<div class="pairpick__row">нет строк со слотом для этой локали</div>';

    document.getElementById('pairUrl').textContent = '/' + my + '/learn-' + tg;

    // Ловушка, ради которой блок и нужен: в финском и эстонском «espanja» и
    // «Espanja» различаются только регистром, и заглавная — это СТРАНА.
    var warn = document.getElementById('pairWarn');
    var bad = D.lead[my] === 'lower' && slot && slot[0] !== slot[0].toLowerCase();
    warn.hidden = !bad;
    if (bad) warn.textContent = 'В этой локали названия языков пишутся со строчной, а атом «' +
      slot + '» начинается с заглавной — проверьте, не название ли это страны.';
    // display-форма нужна переключателю языков и hreflang, slot — подстановке
    document.getElementById('pairTarget').title = 'slot: ' + slot + '  ·  display: ' + disp;
  }

  function fill() {
    if (!hasBlock()) return;
    var my = CUR.my;
    ['pairMy', 'pairTarget'].forEach(function (id) {
      var sel = document.getElementById(id), cur = id === 'pairMy' ? CUR.my : CUR.target;
      sel.innerHTML = D.codes.map(function (c) {
        var cell = (D.names[my] || {})[c];
        var name = cell ? cell[1] : c;
        return '<option value="' + c + '"' + (c === cur ? ' selected' : '') + '>' +
               esc(name) + ' · ' + c + '</option>';
      }).join('');
      sel.onchange = function () {
        var my2 = document.getElementById('pairMy').value;
        var tg2 = document.getElementById('pairTarget').value;
        if (my2 === tg2) { alert('Родной и изучаемый язык должны отличаться.'); return; }
        location.hash = 'pair=' + my2 + '-' + tg2;
        location.reload();
      };
    });
  }

  repaintParas();                       // до монтирования ридера
  document.addEventListener('DOMContentLoaded', function () { fill(); render(); });
  if (document.readyState !== 'loading') { fill(); render(); }
})();
