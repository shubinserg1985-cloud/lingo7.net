(function () {
  var D = window.L7_PAIRS || {};
  var EMIT = (document.documentElement.getAttribute('data-pair') || '').split('-');
  var DEF = EMIT.length === 2 ? EMIT : (D.defaultPair || ['ru', 'en']);

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
    return { my: DEF[0], target: DEF[1] };
  }

  function fix(p) {
    if (p.my === p.target) p.target = p.my === 'en' ? 'es' : 'en';
    return p;
  }

  var ONPAIR = fromPath();
  var CUR = fix(ONPAIR || fromHash() || defaults());

  window.L7_PAIR = CUR;

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

  function slotName() {
    var row = D && D.names && D.names[CUR.my] && D.names[CUR.my][CUR.target];
    return row ? row[0] : CUR.target;
  }

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

  function fitHeader() {
    var h = document.querySelector('.header');
    var inner = h && h.querySelector('.header__inner');
    if (!inner) return;
    var over = function () { return inner.scrollWidth > inner.clientWidth + 1; };
    h.classList.remove('is-tight', 'is-tighter', 'is-tightest');
    if (!over()) return;
    h.classList.add('is-tight');          // бейджи сторов → компактные значки
    if (!over()) return;
    h.classList.add('is-tighter');
    if (!over()) return;
    h.classList.add('is-tightest');       // и только теперь — без значков сторов
  }

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

  document.addEventListener('click', function (e) {
    var chip = e.target.closest && e.target.closest('a.lang-chip[data-lang]');
    if (!chip) return;
    e.preventDefault();
    var t = chip.getAttribute('data-lang');
    go(t === CUR.my ? CUR.target : CUR.my, t);
  });

  window.addEventListener('hashchange', function () {
    if (ONPAIR) return;                 // на странице пары состояние — путь
    var p = fix(fromHash() || defaults());
    if (p.my !== CUR.my || p.target !== CUR.target) location.reload();
  });

  function load() {
    fitHeader();
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
    fetch('/i18n/' + CUR.my + '.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d) return;
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
