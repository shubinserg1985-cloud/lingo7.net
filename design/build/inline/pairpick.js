(function () {
  var D = window.L7_PAIRS;
  if (!D) return;

  var CUR = window.L7_PAIR;
  if (!CUR) {
    console.error('L7: пара не определена — langswitch.js должен идти до pairs.js-потребителей');
    return;
  }

  function keyOf(s) { return s.replace(/[.,;:!?«»"'\u2014:]/g, '').toLowerCase(); }

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

    var st = D.show[tg] || [], sm = D.show[my] || [];
    var showcase = st.map(function (w, i) { return { en: w, ru: sm[i] || '' }; });

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
      catalog: D.catalog, catText: D.catText[my],
      vocab: { word: (D.cards[tg] && D.cards[tg].home || {}).word || '',
               tr:   (D.cards[my] && D.cards[my].home || {}).main || '' },
      chat: { target: D.chat[tg], my: D.chat[my] }
    };
  };

  function taks_at(taps, i) { return taps[i].at; }

  var L = 'margin:0 -9px;padding:5px 9px;border-radius:13px;font-size:20px;line-height:1.38;color:#333d4b;text-wrap:pretty;transition:background .2s';
  var T = 'width:30px;height:30px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;vertical-align:middle;margin:-6px 12px -6px 0';
  var R = 'margin:5px 0 0;font-size:17.5px;line-height:1.34;color:#93a0ae;text-wrap:pretty';
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function repaintParas() {
    var p = window.L7_pickPair();
    if (!p) return;
    var hosts = document.querySelectorAll('[data-el="paras"]');
    for (var h = 0; h < hosts.length; h++) repaintOne(hosts[h], p);
  }

  function repaintOne(host, p) {
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

    var warn = document.getElementById('pairWarn');
    var bad = D.lead[my] === 'lower' && slot && slot[0] !== slot[0].toLowerCase();
    warn.hidden = !bad;
    if (bad) warn.textContent = 'В этой локали названия языков пишутся со строчной, а атом «' +
      slot + '» начинается с заглавной — проверьте, не название ли это страны.';
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
