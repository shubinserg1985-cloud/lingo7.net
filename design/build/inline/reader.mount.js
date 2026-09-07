window.mountMock_reader = function (__R, __P) {
  const location = { search: (__P && __P.search) || '' };

(function(){
  const TAPS = (typeof __P !== 'undefined' && __P && __P.taps) ? __P.taps
             : [{ p: 0, from: 13, to: 14, key: 'home' },
                { p: 1, from: 8, to: 9, key: 'medicine' }];
  const dictOf = i => DICT[(TAPS[i] && TAPS[i].key) || ''] || {};
  const UI_DEFAULT = {
    "appUi._note": "Интерфейс демо-экранов телефона (my_lang only). Источник — design/build/*.html. В index.html этих строк нет, экстрактор лендинга переносит блок как есть. Инвентарь и обратная сверка — tools/mock_strings.py. Контент экранов (абзац, слова, диалог чата) живёт в reader-sample.json, здесь только обвязка.",
    "appUi.reader.listen": "Listen",
    "appUi.reader.add": "Save",
    "appUi.reader.translate": "Translate",
    "appUi.reader.addToMyWords": "Add to my words",
    "appUi.reader.inMyWords": "In my words",
    "appUi.reader.audioMode": "Audio mode",
    "appUi.reader.discussWithAi": "Discuss with AI",
    "appUi.reader.selfCheck": "Test yourself",
    "appUi.wordCard.freqHigh": "COMMON",
    "appUi.wordCard.freqMid": "MEDIUM",
    "appUi.wordCard.example": "Example",
    "appUi.wordCard.otherTranslations": "More translations",
    "appUi.wordCard.synonyms": "Synonyms",
    "appUi.wordCard.open": "Open",
    "appUi.wordCard.group": "Group:",
    "appUi.wordCard.groupDefault": "General",
    "appUi.wordCard.page": "p.",
    "appUi.readerSettings.sectionText": "TEXT",
    "appUi.readerSettings.sectionAudio": "AUDIO",
    "appUi.readerSettings.highlightMyWords": "Highlight my words",
    "appUi.readerSettings.highlightMyWordsHint": "Marks the words you saved",
    "appUi.readerSettings.theme": "Theme",
    "appUi.readerSettings.themeLight": "Light mode",
    "appUi.readerSettings.fontSize": "Font size",
    "appUi.readerSettings.font": "Font",
    "appUi.readerSettings.speakOnTap": "Speak the word on tap",
    "appUi.readerSettings.speakOnTapHint": "Reads out the word you tapped",
    "appUi.readerSettings.speechRate": "Speech rate",
    "appUi.readerSettings.pronunciationTest": "Pronunciation test",
    "appUi.readerSettings.playSample": "Play a sample phrase",
    "appUi.readerSettings.reset": "Reset settings",
    "appUi.readerSettings.done": "Done",
    "appUi.readerSettings.on": "On",
    "appUi.readerSettings.off": "Off",
    "appUi.readerSettings.accent": "Accent",
    "appUi.readerSettings.translationAlways": "Always",
    "appUi.vocab.pickRightPicture": "Pick the right picture",
    "appUi.vocab.correct": "Exactly right",
    "appUi.vocab.rightAnswer": "Correct answer:",
    "appUi.vocab.next": "Next",
    "appUi.vocab.done": "Done",
    "appUi.vocab.skip": "Skip",
    "appUi.vocab.exercise": "Exercise",
    "appUi.vocab.exerciseMeta": "/11 · 10 words",
    "appUi.chat.title": "Practice",
    "appUi.chat.discussing": "Discussing “{book}”",
    "appUi.chat.finish": "Finish",
    "appUi.chat.replyOptions": "Reply options",
    "appUi.chat.placeholder": "Write a message",
    "appUi.bookDetail.adapted": "Adapted",
    "appUi.bookDetail.adaptedHint": "Rewritten in simpler language, meaning kept",
    "appUi.bookDetail.original": "Original",
    "appUi.bookDetail.originalHint": "The full original text, unchanged",
    "appUi.bookDetail.open": "Open",
    "appUi.bookDetail.genre": "Genre",
    "appUi.nav.library": "Library",
    "appUi.nav.myWords": "My words",
    "appUi.nav.practice": "Practice",
    "appUi.nav.collections": "Collections"
  };
  const UI = Object.assign({}, UI_DEFAULT,
    (typeof __P !== 'undefined' && __P && __P.ui) ? __P.ui : {});

  const BOOK = Object.assign({
    title: 'The Curious Case of Benjamin Button', chapter: 'Chapter 1',
    titleMy: 'Загадочная история Бенджамина Баттона', chapterMy: 'Глава 1',
    shortMy: 'Загадочная история Бенджамина…'
  }, (typeof __P !== 'undefined' && __P && __P.book) ? __P.book : {});
  const __ROOT = (typeof __R !== 'undefined' && __R) || document;
  __ROOT.querySelectorAll('[data-book]').forEach(function (el) {
    const v = BOOK[el.getAttribute('data-book')];
    if (v) el.textContent = v;
  });
  __ROOT.querySelectorAll('[data-ui]').forEach(function (el) {
    const v = UI[el.getAttribute('data-ui')];
    if (v) el.textContent = v;
  });

  const PARAS = (typeof __P !== 'undefined' && __P && __P.paras) ? __P.paras : [
    { line: "In 1860, it was still believed that one ought to be born at home.",
      tr:   "В 1860 году ещё считалось, что рождаться нужно дома." },
    { line: "Nowadays, rumor has it, the high priests of medicine command that the first cry of a newborn resound in the sterile atmosphere of a clinic, preferably a fashionable one.",
      tr:   "Теперь, поговаривают, верховные жрецы медицины повелевают, чтобы первый крик новорождённого раздавался в стерильной атмосфере клиники — желательно фешенебельной." },
    { line: "Therefore, when the young married couple Mr. and Mrs. Roger Button decided on one fine summer day in 1860 that their first child should enter the world in a clinic, they were ahead of fashion by a full fifty years.",
      tr:   "Поэтому, когда молодые супруги — мистер и миссис Роджер Баттон — в один прекрасный летний день 1860 года решили, что их первенец появится на свет в клинике, они опередили моду на целых пятьдесят лет." },
    { line: "Whether this anachronism is connected with the astonishing story I am about to relate here will forever remain a mystery.",
      tr:   "Связан ли этот анахронизм с удивительной историей, которую я собираюсь здесь рассказать, навсегда останется тайной." }
  ];
  const SPEEDS = [0.7, 0.8, 0.9, 1, 1.2, 1.5];
  const ALIGN = (typeof __P !== 'undefined' && __P && __P.align) ? __P.align
              : { 0: [8, 9], 1: [4, 5] };

  const TARGET = (typeof __P !== 'undefined' && __P && __P.target) || 'en';
  const ACCENTS = (typeof __P !== 'undefined' && __P && __P.accents) ? __P.accents
                : { en: { flag: '🇬🇧', name: 'Британский' },
                    es: { flag: '🇪🇸', name: 'Испанский (Испания)' } };
  const targetAccent = ACCENTS[TARGET];   // нет языка в наборе ⇒ ряда нет вовсе

  const st = { playing: true, active: 0, wordIdx: 0, speedIdx: 2, popup: null, added: {} };
  let timer = null;

  const scroll = __R.querySelector('[data-el="scroll"]');
  const parasEl = __R.querySelector('[data-el="paras"]');
  const popup = __R.querySelector('[data-el="popup"]');
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const playIcon = '<svg width="11" height="11" viewBox="0 0 12 12"><path d="M3.4 1.6 10.4 6 3.4 10.4 Z" fill="#1F9D53"></path></svg>';
  const pauseIcon = '<svg width="10" height="11" viewBox="0 0 10 11"><rect x="0.5" y="0" width="3.2" height="11" rx="1.4" fill="#ffffff"></rect><rect x="6.3" y="0" width="3.2" height="11" rx="1.4" fill="#ffffff"></rect></svg>';

  function wireParas(){
    parasEl.querySelectorAll('.rd-toggle').forEach(t => {
      const i = +t.dataset.p;
      t.addEventListener('click', () => togglePara(i));
    });
    parasEl.querySelectorAll('.rd-line .w').forEach(sp => {
      const i = +sp.dataset.p, k = +sp.dataset.k;
      sp.addEventListener('click', (e) => openPopup(e, sp.textContent, i, k));
    });
  }

  function buildParas(){
    if (parasEl.querySelectorAll('.rd-line').length === PARAS.length) {
      wireParas(); paint(); return;
    }
    parasEl.innerHTML = '';
    PARAS.forEach((p, i) => {
      const wrap = document.createElement('div');
      wrap.style.marginBottom = '24px';

      const line = document.createElement('p');
      line.className = 'rd-line';
      line.dataset.p = i;
      line.style.cssText = 'margin:0 -9px;padding:5px 9px;border-radius:13px;font-size:20px;line-height:1.38;color:#333d4b;text-wrap:pretty;transition:background .2s';

      const toggle = document.createElement('span');
      toggle.className = 'rd-toggle';
      toggle.dataset.p = i;
      toggle.style.cssText = 'width:30px;height:30px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;vertical-align:middle;margin:-6px 12px -6px 0';
      toggle.addEventListener('click', () => togglePara(i));
      line.appendChild(toggle);

      p.line.split(/\s+/).forEach((w, k) => {
        const span = document.createElement('span');
        span.className = 'w';
        span.dataset.p = i; span.dataset.k = k;
        span.textContent = w;
        span.addEventListener('click', (e) => openPopup(e, w, i, k));
        line.appendChild(span);
        line.appendChild(document.createTextNode(' '));
      });
      wrap.appendChild(line);

      const tr = document.createElement('p');
      tr.className = 'rd-tr';
      tr.style.cssText = 'margin:5px 0 0;font-size:17.5px;line-height:1.34;color:#93a0ae;text-wrap:pretty';
      p.tr.split(/\s+/).forEach((w, k) => {
        const span = document.createElement('span');
        span.className = 'tw'; span.dataset.p = i; span.dataset.k = k;
        span.textContent = w; span.style.borderRadius = '3px';
        tr.appendChild(span); tr.appendChild(document.createTextNode(' '));
      });
      wrap.appendChild(tr);

      parasEl.appendChild(wrap);
    });
    paint();
  }

  function lexOf(p){
    for (let n = 0; n < TAPS.length; n++) if (TAPS[n].p === p) return TAPS[n];
    return null;
  }
  function inLex(p, k){
    const t = lexOf(p);
    if (!t) return st.popup && st.popup.k === k;
    return k >= t.from && k < t.to;
  }

  function paint(){
    const audio = st.mAudio !== false;                 // audio mode reshapes the reader
    __R.querySelectorAll('.rd-line').forEach(l => {
      l.style.background = (audio && +l.dataset.p === st.active) ? '#FDEFE1' : 'transparent';
    });
    __R.querySelectorAll('.rd-toggle').forEach(t => {
      if (!audio){ t.style.display = 'none'; return; }  // no play buttons when audio off
      t.style.display = 'inline-flex';
      const i = +t.dataset.p;
      const isPlayingThis = st.playing && st.active === i;
      if (isPlayingThis){
        t.style.background = '#1F9D53'; t.style.border = 'none'; t.innerHTML = pauseIcon;
      } else {
        t.style.background = '#e7f4ec'; t.style.border = '1.5px solid #8fcda9'; t.innerHTML = playIcon;
      }
    });
    __R.querySelectorAll('.w').forEach(s => {
      const i = +s.dataset.p, k = +s.dataset.k;
      let bg = 'transparent';
      if (audio && st.active === i && k === st.wordIdx && st.playing) bg = '#F7B267';  // karaoke word
      else if (st.popup && st.popup.p === i && inLex(i, k)) bg = '#CDE4CE';   // tapped word
      s.style.background = bg;
    });
    let alignRange = null, alignP = -1;
    if (st.popup && ALIGN[st.popup.p]) { alignRange = ALIGN[st.popup.p]; alignP = st.popup.p; }
    __R.querySelectorAll('.tw').forEach(sp => {
      const k = +sp.dataset.k;
      const on = alignRange && +sp.dataset.p === alignP && k >= alignRange[0] && k < alignRange[1];
      sp.style.background = on ? '#CDE4CE' : 'transparent';
    });
  }
  function applyAudioMode(){
    if (!st.mAudio) st.playing = false;
    updatePill(); paint();
  }

  function currentSpeed(){ return SPEEDS[st.speedIdx]; }
  const KARAOKE_STEP_MS = 292;
  function schedule(){
    clearTimeout(timer);
    timer = setTimeout(() => { if (st.playing) advance(); schedule(); }, KARAOKE_STEP_MS / currentSpeed());
  }
  function advance(){
    const words = PARAS[st.active].line.split(/\s+/);
    if (st.wordIdx + 1 < words.length){ st.wordIdx++; }
    else if (st.active + 1 < PARAS.length){ st.active++; st.wordIdx = 0; scrollToActive(); }
    else if (st.stopAtEnd){ st.playing = false; }         // демо-финал: стоп на последней фразе (без loop на «In 1860»)
    else { st.active = 0; st.wordIdx = 0; scrollTo0(); }   // loop
    paint();
  }
  function scrollToActive(){
    const el = parasEl.children[st.active];
    if (el) scroll.scrollTo({ top: Math.max(0, el.offsetTop - 40), behavior: 'smooth' });
  }
  function scrollTo0(){ scroll.scrollTo({ top: 0, behavior: 'smooth' }); }

  function togglePara(i){
    if (st.active === i){ st.playing = !st.playing; }
    else { st.active = i; st.wordIdx = 0; st.playing = true; scrollToActive(); }
    updatePill(); paint();
  }

  const scaleOf = el => {
    const host = el.closest('#reader, [data-el="reader"]');
    if (!host || !host.offsetWidth) return 1;
    return host.getBoundingClientRect().width / host.offsetWidth || 1;
  };

  function openPopup(e, word, p, k){
    const sc = scaleOf(e.currentTarget);
    const r = e.currentTarget.getBoundingClientRect();
    const cr = scroll.getBoundingClientRect();
    const x = (r.left - cr.left + r.width/2) / sc;
    const y = (r.top - cr.top) / sc + scroll.scrollTop;
    st.popup = { p, k, word: word.replace(/[.,;:!?«»"'—:]/g,'') };
    popup.style.display = 'flex';
    const W = 210;
    popup.style.left = Math.max(6, Math.min(x - W/2, 390 - W - 12)) + 'px';
    popup.style.top = Math.max(6, y - 78) + 'px';
    updateAddLabel();
    paint();
  }
  function closePopup(){ st.popup = null; popup.style.display = 'none'; paint(); }
  function updateAddLabel(){
    const added = st.popup ? !!st.added[st.popup.word] : false;
    const el = __R.querySelector('[data-el="pop-add"]');
    const label = __R.querySelector('[data-el="pop-add-label"]');
    el.style.background = added ? '#ECEBE3' : 'transparent';
    label.innerHTML = added
      ? '<svg width="16" height="12" viewBox="0 0 19 14" fill="none" stroke="#2b3440" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5 7 12.5 17 1.5"></path></svg>'
      : UI['appUi.reader.add'];
  }
  __R.querySelector('[data-el="pop-add"]').addEventListener('click', () => {
    if (!st.popup) return;
    st.added[st.popup.word] = !st.added[st.popup.word];
    updateAddLabel();
  });
  __R.querySelector('[data-el="pop-close"]').addEventListener('click', closePopup);
  __R.querySelector('[data-el="pop-listen"]').addEventListener('click', ()=>{});

  const DICT = (typeof __P !== 'undefined' && __P && __P.dict) ? __P.dict : {
    home:     { title:'home',     freq:UI['appUi.wordCard.freqHigh'],  d:3, transBold:'дом,',     transRest:' домой', img:'/design/build/assets/reader/img-casa.png',      other:2, syn:4,
      en:'In 1860, it was still believed that one ought to be born at |home.|',
      ru:'В 1860 году ещё считалось, что рождаться нужно |дома.|' },
    medicine: { title:'medicine', freq:UI['appUi.wordCard.freqMid'], d:2, transBold:'медицина', transRest:'',       img:'/design/build/assets/reader/img-medicina2.png', other:2, syn:3,
      en:'The high priests of |medicine| decide where a child is born.',
      ru:'Верховные жрецы |медицины| решают, где родится ребёнок.' }
  };
  const cut = s => { const a = s.split('|'); return { b:a[0], w:a[1]||'', a:a[2]||'' }; };
  function renderCard(word){
    const d = DICT[word]; if (!d) return;
    const en = cut(d.en), ru = cut(d.ru), dot = n => d.d>=n ? '#1F9D53' : '#e4e3dc';
    const o = document.createElement('div'); o.setAttribute("data-el", "card"); o.style.cssText = 'position:absolute;inset:0;z-index:20';
    o.innerHTML = `
      <div data-el="card-bg" style="position:absolute;inset:0;background:rgba(62,66,62,.52)"></div>
      <div style="position:absolute;left:0;bottom:calc(56% - 24px);width:122px;height:128px;background:#fff;border-radius:24px 24px 24px 0;padding:20px 0 0 20px;animation:cardUp .25s ease">
        <div style="width:82px;height:82px;border-radius:12px;overflow:hidden"><img src="${d.img}" alt="" style="width:100%;height:100%;object-fit:cover"></div>
      </div>
      <div style="position:absolute;left:0;right:0;bottom:0;height:56%;background:#fff;border-radius:0 28px 0 0;display:flex;flex-direction:column;animation:cardUp .25s ease">
        <div style="padding:16px 20px 14px;flex:none">
          <div style="display:flex;align-items:flex-start;justify-content:space-between">
            <div style="display:flex;align-items:center;gap:12px">
              <span style="font-size:34px;font-weight:800;color:#17181A;letter-spacing:-.5px">${d.title}</span>
              <span style="width:32px;height:32px;flex:none;border-radius:11px;border:1.5px solid #e8e6df;display:flex;align-items:center;justify-content:center;cursor:pointer"><svg width="15" height="14" viewBox="1 0 17 19" fill="none" stroke="#17181A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.8 2.4 6 5.8H3.1A1.1 1.1 0 0 0 2 6.9v5.2a1.1 1.1 0 0 0 1.1 1.1H6l3.8 3.4V2.4Z" fill="#17181A"></path><path d="M13.6 6.4a4 4 0 0 1 0 6.2"></path></svg></span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;padding-top:6px">
              <div style="display:flex;gap:4px"><span style="width:17px;height:7px;border-radius:4px;background:${dot(1)}"></span><span style="width:17px;height:7px;border-radius:4px;background:${dot(2)}"></span><span style="width:17px;height:7px;border-radius:4px;background:${dot(3)}"></span></div>
              <span style="font-size:12px;font-weight:700;letter-spacing:1px;color:#4c4c45">${d.freq}</span>
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:16px">
            <div style="font-size:32px;letter-spacing:-.4px;color:#2b2822"><span style="color:#6b6659">—</span> <span style="font-weight:800">${d.transBold}</span><span style="font-weight:400;color:#3c3830">${d.transRest}</span></div>
            <span style="width:34px;height:34px;flex:none;border-radius:50%;border:1.5px solid #e8e6df;display:flex;align-items:center;justify-content:center;cursor:pointer"><svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#17181A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11.3 1.9a1.9 1.9 0 0 1 2.7 2.7L5 13.6l-3.5.9.9-3.5Z"></path></svg></span>
          </div>
        </div>
        <div style="border-top:1px solid #eceae2;padding:14px 20px 0;flex:1;overflow:hidden">
          <div style="display:flex;flex-wrap:wrap;gap:6px 22px;font-size:16.5px"><span style="font-weight:700;color:#17181A;white-space:nowrap">${UI['appUi.wordCard.example']}</span><span style="color:#8b867a;white-space:nowrap">${UI['appUi.wordCard.otherTranslations']} ${d.other}</span><span style="color:#8b867a;white-space:nowrap">${UI['appUi.wordCard.synonyms']} ${d.syn}</span></div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:16px">
            <span style="font-size:16.5px;font-weight:700;color:#17181A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px">${BOOK.shortMy}</span>
            <span style="font-size:15.5px;color:#8b867a;flex:none">${UI['appUi.wordCard.page']} 1</span>
            <span style="font-size:16.5px;font-weight:700;color:#8b8272;flex:none;cursor:pointer;display:flex;align-items:center;gap:3px">${UI['appUi.bookDetail.open']} <svg width="7" height="12" viewBox="0 0 8 13" fill="none" stroke="#8b8272" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5l5 5-5 5"></path></svg></span>
          </div>
          <p style="margin:14px 0 0;font-size:22px;line-height:1.4;color:#17181A;text-wrap:pretty">${esc(en.b)}<span style="background:#CDEBD3;border-radius:6px;padding:1px 6px;font-weight:600">${esc(en.w)}</span>${esc(en.a)}</p>
          <p style="margin:10px 0 0;font-size:18px;line-height:1.45;color:#8a8577;text-wrap:pretty">${esc(ru.b)}<span style="background:#DBF0E0;border-radius:6px;padding:1px 6px;font-weight:600;color:#5f5b50">${esc(ru.w)}</span>${esc(ru.a)}</p>
          <div style="display:flex;justify-content:flex-end;align-items:center;gap:6px;margin-top:18px;font-size:16px"><span style="color:#8b867a">${UI['appUi.wordCard.group']}</span><span style="color:#3c3830;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px">${UI['appUi.wordCard.groupDefault']} <svg width="7" height="12" viewBox="0 0 8 13" fill="none" stroke="#3c3830" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5l5 5-5 5"></path></svg></span></div>
        </div>
        <div style="flex:none;border-top:1px solid #eceae2;padding:12px 18px 16px;display:flex;align-items:center;gap:12px">
          <span style="width:48px;height:46px;flex:none;border-radius:15px;border:1.5px solid #e5e3dc;display:flex;align-items:center;justify-content:center;cursor:pointer"><svg width="16" height="21" viewBox="0 0 16 21" fill="none" stroke="#17181A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="1.5" width="6" height="11" rx="3"></rect><path d="M1.5 9.5a6.5 6.5 0 0 0 13 0"></path><path d="M8 16v3.5"></path></svg></span>
          <span data-el="card-add" style="flex:1;min-width:0;min-height:46px;border-radius:15px;display:flex;align-items:center;justify-content:center;gap:9px;padding:0 12px;cursor:pointer;box-sizing:border-box;text-align:center;line-height:1.15"></span>
        </div>
      </div>`;
    __R.querySelector('[data-el="reader"]').appendChild(o);
    o.querySelector('[data-el="card-bg"]').addEventListener('click', closeCard);
    const addBtn = o.querySelector('[data-el="card-add"]');
    const paintAdd = () => {
      const added = !!st.added[st.popup.word];
      addBtn.style.background = added ? '#EAF6EC' : '#46A167';
      addBtn.style.border = added ? '1.5px solid #A9D8B4' : '1.5px solid transparent';
      addBtn.innerHTML = added
        ? '<svg width="18" height="14" viewBox="0 0 19 14" fill="none" stroke="#1F9D53" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5 7 12.5 17 1.5"></path></svg><span style="font-size:21px;font-weight:800;color:#1F9D53;min-width:0">' + UI['appUi.reader.inMyWords'] + '</span>'
        : '<span style="font-size:21px;font-weight:800;color:#fff;min-width:0">' + UI['appUi.reader.addToMyWords'] + '</span>';
    };
    paintAdd();
    addBtn.addEventListener('click', () => {
      st.added[st.popup.word] = !st.added[st.popup.word];
      paintAdd();
      updateAddLabel();                 // держим плашку «В слова» в синхроне
    });
  }
  function closeCard(){ const c = __R.querySelector('[data-el="card"]'); if (c) c.remove(); }   // плашку НЕ закрываем — только крестиком
  __R.querySelector('[data-el="pop-translate"]').addEventListener('click', () => {
    if (st.popup && DICT[st.popup.word.toLowerCase()]) renderCard(st.popup.word.toLowerCase());
  });

  const pillPlay = __R.querySelector('[data-el="pill-play"]');
  function updatePill(){
    __R.querySelector('[data-el="pill"]').style.display = (st.mAudio !== false) ? 'flex' : 'none';
    pillPlay.innerHTML = st.playing
      ? '<svg width="14" height="16" viewBox="0 0 18 20"><rect x="1" y="0" width="5.6" height="20" rx="2" fill="#ffffff"></rect><rect x="11.4" y="0" width="5.6" height="20" rx="2" fill="#ffffff"></rect></svg>'
      : '<svg width="16" height="18" viewBox="0 0 20 22" style="margin-left:3px"><path d="M2 1.5 18 11 2 20.5 Z" fill="#ffffff"></path></svg>';
    __R.querySelector('[data-el="pill-speed"]').textContent = currentSpeed() + 'x';
  }
  pillPlay.addEventListener('click', () => {
    if (st.popup) closePopup();                 // большой Play закрывает открытую плашку
    st.playing = !st.playing; updatePill(); paint();
  });
  __R.querySelector('[data-el="pill-speed"]').addEventListener('click', () => {
    st.speedIdx = (st.speedIdx + 1) % SPEEDS.length; updatePill(); schedule();
  });

  Object.assign(st, { menu:false, mAudio:true, mHl:false, mPr:false, mSpeed:0.9, mOrig:20, mTrans:17 });
  const menuEl = document.createElement('div');
  menuEl.setAttribute("data-el", "menu");
  menuEl.style.cssText = 'position:absolute;inset:0;z-index:30;display:none';
  __R.querySelector('[data-el="reader"]').appendChild(menuEl);
  const chevR = '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" stroke="#9aa3ad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5l5 5-5 5"></path></svg>';
  const sw = (on, id) => `<span data-sw="${id}" style="display:inline-block;width:52px;height:31px;flex:none;border-radius:16px;background:${on?'#1F9D53':'#d6d6cf'};position:relative;cursor:pointer;transition:background .2s;vertical-align:middle"><span style="position:absolute;top:2.5px;left:${on?23.5:2.5}px;width:26px;height:26px;border-radius:50%;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.25);transition:left .2s"></span></span>`;
  const stepper = (val, key) => `<div style="display:flex;align-items:center;background:#fff;border-radius:14px;overflow:hidden"><span data-step="${key}-" style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:#17181A">−</span><span data-stepval style="font-size:15px;font-weight:800;color:#17181A;min-width:30px;text-align:center">${val}</span><span data-step="${key}+" style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:#1F9D53;background:#E8F3EA;border:2px solid #fff;border-radius:12px">+</span></div>`;
  function applyFontSizes(){
    __R.querySelectorAll('.rd-line').forEach(l => l.style.fontSize = st.mOrig + 'px');
    __R.querySelectorAll('.rd-tr').forEach(l => l.style.fontSize = st.mTrans + 'px');
  }
  function renderMenu(){
    const pct = Math.round((st.mSpeed - 0.6) / 0.5 * 100);
    menuEl.innerHTML = `
      <div data-mclose style="position:absolute;inset:0;background:rgba(62,66,62,.45)"></div>
      <div class="rd-scroll" style="position:absolute;top:0;right:0;bottom:0;width:346px;background:#fff;border-radius:28px 0 0 28px;box-shadow:-10px 0 34px rgba(0,0,0,.18);overflow-y:auto;padding:18px 16px 20px;animation:cardUp .22s ease">
        <div data-maudio style="background:#F0F0EB;border-radius:20px;padding:15px 18px;display:flex;align-items:center;gap:14px;cursor:pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3c4757" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a8 8 0 0 1 16 0"></path><rect x="2.5" y="13" width="4.5" height="7" rx="2"></rect><rect x="17" y="13" width="4.5" height="7" rx="2"></rect></svg>
          <div style="flex:1"><div style="font-size:15px;font-weight:700;color:#17181A">${UI['appUi.reader.audioMode']}</div><div data-malabel style="font-size:12px;color:#8b95a1">${st.mAudio?UI['appUi.readerSettings.on']:UI['appUi.readerSettings.off']}</div></div>
          <span data-madot style="width:14px;height:14px;border-radius:50%;background:${st.mAudio?'#1F9D53':'#cfcfc8'};flex:none"></span>
        </div>
        <div style="background:#F0F0EB;border-radius:20px;padding:15px 18px;display:flex;align-items:center;gap:14px;cursor:pointer;margin-top:12px">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" stroke="#3c4757" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="14" height="11" rx="2.5"></rect><path d="M6 5.5h6"></path><path d="M6 9h4"></path><path d="M18 8h2a2 2 0 0 1 2 2v9l-3.5-3H12a2 2 0 0 1-2-2v-1"></path></svg>
          <div style="flex:1"><div style="font-size:15px;font-weight:700;color:#17181A">${UI['appUi.reader.discussWithAi']}</div><div style="font-size:12px;color:#8b95a1">${UI['appUi.reader.selfCheck']}</div></div>
          ${chevR}
        </div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#8b95a1;margin:20px 4px 10px">${UI['appUi.readerSettings.sectionText']}</div>
        <div style="background:#F0F0EB;border-radius:20px;padding:4px 18px">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid #e2e2da">
            <div style="flex:1"><div style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.highlightMyWords']}</div><div style="font-size:11.5px;color:#8b95a1">${UI['appUi.readerSettings.highlightMyWordsHint']}</div></div>
            ${sw(st.mHl,'hl')}
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid #e2e2da;cursor:pointer"><span style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.reader.translate']}</span><span style="display:flex;align-items:center;gap:6px;font-size:14.5px;font-weight:700;color:#17181A">${UI['appUi.readerSettings.translationAlways']} ${chevR}</span></div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid #e2e2da;cursor:pointer"><span style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.theme']}</span><span style="display:flex;align-items:center;gap:10px"><span style="width:34px;height:34px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#17181A" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></span><span style="font-size:14.5px;font-weight:700;color:#17181A;text-align:right;line-height:1.15">${UI['appUi.readerSettings.themeLight']}</span>${chevR}</span></div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid #e2e2da"><div><div style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.bookDetail.original']}</div><div style="font-size:11.5px;color:#8b95a1">${UI['appUi.readerSettings.fontSize']}</div></div>${stepper(st.mOrig,'orig')}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid #e2e2da"><div><div style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.reader.translate']}</div><div style="font-size:11.5px;color:#8b95a1">${UI['appUi.readerSettings.fontSize']}</div></div>${stepper(st.mTrans,'trans')}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 0;cursor:pointer"><span style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.font']}</span><span style="display:flex;align-items:center;gap:6px;font-size:14.5px;font-weight:700;color:#17181A">Roboto ${chevR}</span></div>
        </div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#8b95a1;margin:20px 4px 10px">${UI['appUi.readerSettings.sectionAudio']}</div>
        <div style="background:#F0F0EB;border-radius:20px;padding:4px 18px">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid #e2e2da">
            <div style="flex:1"><div style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.speakOnTap']}</div><div style="font-size:11.5px;color:#8b95a1">${UI['appUi.readerSettings.speakOnTapHint']}</div></div>
            ${sw(st.mPr,'pr')}
          </div>
          ${targetAccent ? `<div style="display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid #e2e2da;cursor:pointer"><span style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.accent']}</span><span style="display:flex;align-items:center;gap:8px;font-size:14.5px;font-weight:700;color:#17181A"><span style="font-size:13.5px">${targetAccent.flag}</span> ${targetAccent.name} ${chevR}</span></div>` : ''}
          <div style="padding:16px 0 18px;border-bottom:1px solid #e2e2da">
            <div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.speechRate']}</span><span data-speedbadge style="background:#DCF0E2;border-radius:12px;padding:4px 12px;font-size:13px;font-weight:800;color:#1F9D53">${st.mSpeed}x</span></div>
            <div data-speed style="position:relative;height:28px;margin-top:14px;cursor:pointer"><span style="position:absolute;left:0;right:0;top:11px;height:6px;border-radius:3px;background:#e2e2da"></span><span style="position:absolute;left:0;top:11px;height:6px;border-radius:3px;background:#1F9D53;width:${pct}%"></span><span style="position:absolute;top:0;left:calc(${pct}% - 14px);width:28px;height:28px;border-radius:50%;background:#1F9D53;box-shadow:0 1px 5px rgba(0,0,0,.25)"></span></div>
            <div style="display:flex;justify-content:space-between;font-size:11.5px;color:#8b95a1;margin-top:6px"><span>0.6x</span><span>1.1x</span></div>
          </div>
          <div style="display:flex;align-items:center;gap:13px;padding:15px 0;cursor:pointer"><svg width="17" height="23" viewBox="0 0 16 21" fill="none" stroke="#17181A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="1.5" width="6" height="11" rx="3"></rect><path d="M1.5 9.5a6.5 6.5 0 0 0 13 0"></path><path d="M8 16v3.5"></path></svg><div style="flex:1"><div style="font-size:14.5px;font-weight:600;color:#17181A">${UI['appUi.readerSettings.pronunciationTest']}</div><div style="font-size:11.5px;color:#8b95a1">${UI['appUi.readerSettings.playSample']}</div></div>${chevR}</div>
        </div>
        <div style="background:#F0F0EB;border-radius:20px;padding:17px;text-align:center;font-size:15px;font-weight:700;color:#17181A;cursor:pointer;margin-top:18px">${UI['appUi.readerSettings.reset']}</div>
        <div data-mdone style="background:#1F9D53;border-radius:20px;padding:18px;text-align:center;font-size:17px;font-weight:800;color:#fff;cursor:pointer;margin-top:12px;box-shadow:0 6px 18px rgba(31,157,83,.35)">${UI['appUi.vocab.done']}</div>
      </div>`;
    menuEl.querySelector('[data-mclose]').onclick = () => toggleMenu(false);
    menuEl.querySelector('[data-mdone]').onclick = () => toggleMenu(false);
    const arow = menuEl.querySelector('[data-maudio]');
    arow.onclick = () => {
      st.mAudio = !st.mAudio;
      arow.querySelector('[data-malabel]').textContent = st.mAudio ? UI['appUi.readerSettings.on'] : UI['appUi.readerSettings.off'];
      arow.querySelector('[data-madot]').style.background = st.mAudio ? '#1F9D53' : '#cfcfc8';
      applyAudioMode();
      setTimeout(() => toggleMenu(false), 420);
    };
    menuEl.querySelectorAll('[data-sw]').forEach(el => el.onclick = () => {
      const on = el.dataset.sw === 'hl' ? (st.mHl = !st.mHl) : (st.mPr = !st.mPr);
      el.style.background = on ? '#1F9D53' : '#d6d6cf';
      el.firstElementChild.style.left = (on ? 23.5 : 2.5) + 'px';
    });
    menuEl.querySelectorAll('[data-step]').forEach(el => el.onclick = () => {
      const key = el.dataset.step;
      if (key === 'orig-') st.mOrig = Math.max(14, st.mOrig - 1);
      else if (key === 'orig+') st.mOrig = Math.min(28, st.mOrig + 1);
      else if (key === 'trans-') st.mTrans = Math.max(12, st.mTrans - 1);
      else if (key === 'trans+') st.mTrans = Math.min(26, st.mTrans + 1);
      el.parentElement.querySelector('[data-stepval]').textContent = key[0] === 'o' ? st.mOrig : st.mTrans;
      applyFontSizes();
    });
    const track = menuEl.querySelector('[data-speed]');
    track.onclick = (e) => {
      const r = track.getBoundingClientRect();
      const raw = 0.6 + Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * 0.5;
      st.mSpeed = Math.round(raw * 10) / 10;
      const pct = Math.round((st.mSpeed - 0.6) / 0.5 * 100);
      track.children[1].style.width = pct + '%';
      track.children[2].style.left = 'calc(' + pct + '% - 14px)';
      menuEl.querySelector('[data-speedbadge]').textContent = st.mSpeed + 'x';
    };
  }
  function toggleMenu(open){
    st.menu = (open === undefined) ? !st.menu : open;
    menuEl.style.display = st.menu ? 'block' : 'none';
    if (st.menu) renderMenu();
  }
  __R.querySelector('[data-el="menu-btn"]').addEventListener('click', () => toggleMenu());

  buildParas();
  applyFontSizes();
  updatePill();
  schedule();

  const DEMO = (window.self !== window.top) || /[?&]demo\b/.test(location.search);
  if (DEMO) startDemo();

  function startDemo(){
    const readerEl = __R.querySelector('[data-el="reader"]');
    if (window.self !== window.top) {
      document.body.style.cssText = 'margin:0;padding:0;background:transparent;min-height:0;display:block';
    }
    readerEl.style.borderRadius = '0';
    readerEl.style.boxShadow = 'none';
    st.playing = false; updatePill(); paint();   // в демо караоке не крутится вхолостую до старта скрипта
    const sleepD = ms => new Promise(r => setTimeout(r, ms));
    const MOUNT_ID = (typeof __R !== 'undefined' && __R && __R.id) || '';
    const post = msg => {
      try { window.parent.postMessage(Object.assign({ from: MOUNT_ID }, msg), '*'); }
      catch(e){}
    };
    const clickEl = el => el && el.dispatchEvent(new MouseEvent('click', { bubbles:true, cancelable:true, view:window }));

    const finger = document.createElement('div');
    finger.style.cssText = 'position:absolute;z-index:60;width:44px;height:44px;pointer-events:none;opacity:0;transition:opacity .18s, top .38s ease, left .38s ease;filter:drop-shadow(0 3px 5px rgba(0,0,0,.28))';
    finger.innerHTML = '<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><path d="M19 5c-1.7 0-3 1.3-3 3v17.5l-3.4-3.6a3.1 3.1 0 0 0-4.5 4.3l8.7 10.4c1.4 1.7 3.4 2.6 5.6 2.6h8.1a6 6 0 0 0 6-5.2l1.3-9.7a3.2 3.2 0 0 0-3.2-3.6H22V8c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#2b2b2b" stroke-width="2" stroke-linejoin="round"/></svg>';
    readerEl.appendChild(finger);
    const fingerTo = el => {
      const sc = scaleOf(el);
      const rr = readerEl.getBoundingClientRect(), r = el.getBoundingClientRect();
      finger.style.left = ((r.left - rr.left + r.width/2) / sc - 6) + 'px';
      finger.style.top  = ((r.top  - rr.top  + r.height/2) / sc - 2) + 'px';
      finger.style.opacity = '1';
    };
    const tapAnim = async () => { finger.animate([{transform:'scale(1)'},{transform:'scale(.78)'},{transform:'scale(1)'}], {duration:280}); await sleepD(280); };

    const clean = s => s.replace(/[.,;:!?«»"'—:]/g,'').toLowerCase();

    async function runScript(){
      const el = id => __R.querySelector('[data-el="' + id + '"]');
      const paraWords = p => [...parasEl.children[p].querySelectorAll('.w')];
      const paraToggle = p => parasEl.children[p].querySelector('.rd-toggle');
      const scrollToPara = p => { const e = parasEl.children[p]; if (e) scroll.scrollTo({ top: Math.max(0, e.offsetTop - 40), behavior:'smooth' }); };
      const cardEl = () => el('card');
      const hideFinger = () => finger.style.opacity = '0';
      const idxOf = (words, w) => words.findIndex(s => clean(s.textContent) === w);
      async function fTap(t, pre){ if(!t) return; fingerTo(t); await sleepD(pre||430); await tapAnim(); clickEl(t); }
      const SEG = (location.search.match(/[?&]seg=(read|audio)\b/) || [])[1] || 'full';

      while (true){
        st.added = {}; st.mAudio = (SEG === 'audio'); st.playing = false; st.active = 0; st.wordIdx = 0; st.popup = null; st.stopAtEnd = false;
        { const c = cardEl(); if (c) c.remove(); }
        popup.style.display = 'none'; menuEl.style.display = 'none'; st.menu = false;
        applyAudioMode();
        scrollTo0();
        if (window.self !== window.top) window.scrollTo(0, 0);
        paint(); updatePill();
        post({ type:'l7demo-reset' });
        await sleepD(1200);

        if (SEG !== 'audio') {
          const w0 = paraWords(0);
          const homeIdx = (TAPS[0].at != null ? TAPS[0].at : TAPS[0].from);
          for (let k=0; k<homeIdx; k++){ fingerTo(w0[k]); await sleepD(180); }
          fingerTo(w0[homeIdx]); await sleepD(330); await tapAnim();
          clickEl(w0[homeIdx]);                    // тап home → попап (home + дома зелёным)
          await sleepD(1100);
          await fTap(el('pop-translate')); await sleepD(1300);
          await fTap(cardEl() && cardEl().querySelector('[data-el="card-add"]'));
          post({ type:'l7demo-save', en:dictOf(0).title, ru:(dictOf(0).transBold||'').replace(/[,\s]+$/,'') });
          await sleepD(1100);
          { const bg = cardEl() && cardEl().querySelector('[data-el="card-bg"]'); if (bg) clickEl(bg); }
          hideFinger(); await sleepD(700);
          await fTap(el('pop-close')); hideFinger(); await sleepD(850);
        }

        if (SEG === 'read') {
          await sleepD(600);
          scrollToPara(1); await sleepD(750);
          const w1r = paraWords(1);
          const medIdxR = (TAPS[1].at != null ? TAPS[1].at : TAPS[1].from);
          for (let k=0; k<medIdxR; k++){ fingerTo(w1r[k]); await sleepD(150); }
          fingerTo(w1r[medIdxR]); await sleepD(330); await tapAnim();
          clickEl(w1r[medIdxR]);                    // тап medicine → попап (medicine + медицины зелёным)
          await sleepD(1100);
          await fTap(el('pop-translate')); await sleepD(1300);
          await fTap(cardEl() && cardEl().querySelector('[data-el="card-add"]'));
          post({ type:'l7demo-save', en:dictOf(1).title, ru:(dictOf(1).transBold||'').replace(/[,\s]+$/,'') });
          await sleepD(1100);
          { const bg = cardEl() && cardEl().querySelector('[data-el="card-bg"]'); if (bg) clickEl(bg); }
          hideFinger(); await sleepD(700);
          await fTap(el('pop-close')); hideFinger(); await sleepD(1200);
          continue;
        }

        if (SEG === 'full') {
          await fTap(el('menu-btn')); await sleepD(950);
          await fTap(menuEl.querySelector('[data-maudio]')); hideFinger(); await sleepD(900);
        }

        if (SEG === 'audio') {
          scrollTo0(); await sleepD(500);
          await fTap(paraToggle(0)); hideFinger();      // togglePara(0): active=0, playing=true
          const w0a = paraWords(0);
          const homeIdxA = (TAPS[0].at != null ? TAPS[0].at : TAPS[0].from);
          let gA = 0;
          while (!(st.active===0 && st.wordIdx >= homeIdxA - 1 && st.playing) && gA++ < 500) await sleepD(45);
          st.playing = false; updatePill(); paint();     // пауза у «home»
          await sleepD(350);
          fingerTo(w0a[homeIdxA]); finger.style.opacity='1'; await sleepD(430); await tapAnim();
          clickEl(w0a[homeIdxA]); await sleepD(1000);
          await fTap(el('pop-add')); await sleepD(350);   // «В слова» вместо «Перевод»
          post({ type:'l7demo-save', en:dictOf(0).title, ru:(dictOf(0).transBold||'').replace(/[,\s]+$/,'') });
          await sleepD(900);
          await fTap(el('pop-close')); hideFinger(); await sleepD(650);

          scrollToPara(1); await sleepD(650);
          await fTap(paraToggle(1)); hideFinger();        // active=1, playing=true
          const w1a = paraWords(1);
          const medIdxA = (TAPS[1].at != null ? TAPS[1].at : TAPS[1].from);
          const thatIdxA = Math.min(TAPS[1].to, w1a.length - 1);
          let gB = 0;
          while (!(st.active===1 && st.wordIdx >= thatIdxA && st.playing) && gB++ < 500) await sleepD(45);
          st.playing = false; updatePill(); paint();      // пауза у «that» (после medicine)
          await sleepD(350);
          fingerTo(w1a[medIdxA]); finger.style.opacity='1'; await sleepD(430); await tapAnim();
          clickEl(w1a[medIdxA]); await sleepD(1000);
          await fTap(el('pop-add')); await sleepD(350);   // «В слова» вместо «Перевод»
          post({ type:'l7demo-save', en:dictOf(1).title, ru:(dictOf(1).transBold||'').replace(/[,\s]+$/,'') });
          await sleepD(900);
          await fTap(el('pop-close')); hideFinger(); await sleepD(650);

          st.stopAtEnd = true;
          await fTap(el('pill-play')); hideFinger();
          let gEndA = 0;
          while (st.playing && gEndA++ < 6000) await sleepD(25);
          st.stopAtEnd = false;
          updatePill(); paint();
          await sleepD(2000);
          continue;
        }

        scrollToPara(1); await sleepD(700);
        await fTap(paraToggle(1)); hideFinger();  // togglePara(1): active=1, playing=true, караоке
        const w1 = paraWords(1);
        const medIdx = (TAPS[1].at != null ? TAPS[1].at : TAPS[1].from);
        const thatIdx = Math.min(TAPS[1].to, w1.length - 1);
        let guard = 0;
        while (!(st.active===1 && st.wordIdx >= thatIdx && st.playing) && guard++ < 500) await sleepD(45);
        st.playing = false; updatePill(); paint();     // пауза на "that" (значок пауза → play)
        await sleepD(350);
        fingerTo(w1[medIdx]); finger.style.opacity='1'; await sleepD(430); await tapAnim();
        clickEl(w1[medIdx]); await sleepD(1000);
        await fTap(el('pop-translate')); await sleepD(1300);
        await fTap(cardEl() && cardEl().querySelector('[data-el="card-add"]'));
        post({ type:'l7demo-save', en:dictOf(1).title, ru:(dictOf(1).transBold||'').replace(/[,\s]+$/,'') });
        await sleepD(1100);
        { const bg = cardEl() && cardEl().querySelector('[data-el="card-bg"]'); if (bg) clickEl(bg); }
        hideFinger(); await sleepD(750);
        st.stopAtEnd = true;                        // финал: advance() сам остановится на конце, без гонки и без loop на «In 1860»
        await fTap(el('pill-play')); hideFinger();  // pill-play включает st.playing → караоке резюмится с «that»
        let gEnd = 0;
        while (st.playing && gEnd++ < 6000) await sleepD(25);    // ждём, пока advance() детерминированно остановится на последней фразе
        st.stopAtEnd = false;                       // сброс перед следующей итерацией демо
        updatePill(); paint();
        await sleepD(2200);
      }
    }
    if (/[?&]hold\b/.test(location.search)) {
      window.addEventListener('message', function onGo(e){
        if (e && e.data && e.data.type === 'l7demo-go') { window.removeEventListener('message', onGo); runScript(); }
      });
    } else {
      runScript();
    }
  }
})();

};
