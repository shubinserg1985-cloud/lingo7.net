window.mountMock_vocab = function (__R, __P) {
  const location = { search: (__P && __P.search) || '' };

(function(){
  const accent = '#1FA45B';
  const coral  = '#D96A5C';
  const P = (typeof __P !== 'undefined' && __P) || null;
  const UI_DEFAULT = {
  "appUi.vocab.pickRightPicture": "Pick the right picture",
  "appUi.vocab.correct": "Exactly right",
  "appUi.vocab.rightAnswer": "Correct answer:",
  "appUi.vocab.next": "Next",
  "appUi.vocab.done": "Done",
  "appUi.vocab.skip": "Skip",
  "appUi.vocab.exercise": "Exercise",
  "appUi.vocab.exerciseMeta": "/11 · 10 words",
  "appUi.nav.library": "Library",
  "appUi.nav.practice": "Practice",
  "appUi.nav.read": "Read",
  "appUi.nav.myWords": "My words",
  "appUi.nav.collections": "Collections",
  "appUi.wordCard.freqHigh": "COMMON"
};
  const UI = Object.assign({}, UI_DEFAULT, (P && P.ui) || {});
  const T = k => UI[k] || '';

  const OPTS = [
    { id:'seats',  src:'/design/build/assets/vocab/opt-seats.png',  h:97 },
    { id:'hacker', src:'/design/build/assets/vocab/opt-hacker.png', h:97 },
    { id:'casa',   src:'/design/build/assets/vocab/opt-casa.png',   h:105, correct:true },
    { id:'book',   src:'/design/build/assets/vocab/opt-book.png',   h:105 },
  ];
  const ANSWER = { src:'/design/build/assets/vocab/opt-casa.png',
                   ru: (P && P.vocab && P.vocab.tr) || 'Home' };  // подпись на языке читателя
  const st = { ex:5, selected:null, revealed:false, results:{} };  // results: {exNum: 'ok'|'bad'}

  __R.querySelectorAll('[data-ui]').forEach(function (el) {
    const v = UI[el.getAttribute('data-ui')];
    if (v) el.textContent = v;
  });
  const bw = __R.querySelector('[data-el="bigword"]');
  if (bw) bw.textContent = (P && P.vocab && P.vocab.word) || 'home';

  const choiceEl = __R.querySelector('[data-el="choice"]');

  function renderPills(){
    const el = __R.querySelector('[data-el="pills"]');
    let html = '';
    for (let i=0;i<11;i++){
      const res = st.results[i+1];                        // 'ok' | 'bad' | undefined
      const done = i < st.ex-1, current = i === st.ex-1;
      let bg;
      if (res === 'bad')       bg = coral;
      else if (res === 'ok')   bg = accent;
      else if (done)           bg = (i===0 ? '#A5B4F0' : accent);  // прежний прогресс без записи
      else                     bg = '#fff';                        // текущая (без ответа) / будущие
      const h = current ? 46 : 38, ty = current ? -8 : 0;
      const shadow = current ? '0 3px 8px rgba(0,0,0,.14)' : 'none';
      const z = current ? 12 : done ? i+1 : 11-i;
      html += `<div style="width:30px;height:${h}px;border-radius:10px;background:${bg};border:1.5px solid #F6F4EA;margin-left:${i===0?0:-21}px;transform:translateY(${ty}px);box-shadow:${shadow};position:relative;z-index:${z};flex:none"></div>`;
    }
    el.innerHTML = html;
  }

  function optionsHtml(){
    const tiles = OPTS.map(o => {
      const border  = st.selected===o.id ? (o.correct ? accent : coral) : 'transparent';
      const opacity = st.selected && st.selected!==o.id ? 0.45 : 1;
      return `<div data-data-el="${o.id}" style="width:137px;height:${o.h}px;border-radius:14px;overflow:hidden;cursor:pointer;border:3px solid ${border};box-sizing:border-box;opacity:${opacity};transition:opacity .3s,border-color .15s"><img src="${o.src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block"></div>`;
    }).join('');
    return `<div style="padding:16px 0 18px;display:flex;flex-direction:column;align-items:center">
      <div style="font-size:26px;font-weight:800;color:${accent};margin-bottom:14px;text-align:center">${T('appUi.vocab.pickRightPicture')}</div>
      <div style="display:grid;grid-template-columns:137px 137px;gap:10px 11px;align-items:start">${tiles}</div>
    </div>`;
  }

  function revealHtml(correct){
    const col   = correct ? accent : coral;
    const title = correct ? T('appUi.vocab.correct') : T('appUi.vocab.rightAnswer');
    return `<div style="padding:22px 24px 26px">
      <div style="font-size:26px;font-weight:800;color:${col};margin-bottom:18px">${title}</div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px">
        <div style="width:118px;height:118px;border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,.08);flex:none"><img src="${ANSWER.src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block"></div>
        <div style="font-size:48px;font-weight:800;color:#1c1a15;letter-spacing:-.5px;text-align:center;line-height:1.05">${ANSWER.ru}</div>
      </div>
    </div>`;
  }

  function renderChoice(){
    if (st.revealed){
      const correct = st.selected === 'casa';
      choiceEl.style.borderColor = correct ? accent : coral;
      choiceEl.style.borderWidth = '2.5px';
      choiceEl.innerHTML = revealHtml(correct);
    } else {
      choiceEl.style.borderColor = accent + '55';
      choiceEl.style.borderWidth = '1.5px';
      choiceEl.innerHTML = optionsHtml();
    }
  }

  function updateBtn(){
    const b = __R.querySelector('[data-el="skip"]');
    let label, bg, color;
    if (st.revealed)      { label=T('appUi.vocab.next');  bg=accent; color='#fff'; }
    else if (st.selected) { label=T('appUi.vocab.done');  bg=accent; color='#fff'; }
    else                  { label=T('appUi.vocab.skip'); bg='#fff'; color='#1c1a15'; }
    b.textContent = label; b.style.background = bg; b.style.color = color;
  }
  function render(){
    __R.querySelector('[data-el="ex-label"]').textContent = T('appUi.vocab.exercise') + ' ' + st.ex + T('appUi.vocab.exerciseMeta');
    renderPills(); renderChoice(); updateBtn();
  }
  function pick(id){ if(st.revealed) return; st.selected = id; renderChoice(); updateBtn(); }
  function primary(){                                   // кнопка снизу: Пропустить → Готово → Вперёд
    if (st.revealed) advance(1);
    else if (st.selected){
      st.revealed = true;
      st.results[st.ex] = (st.selected === 'casa') ? 'ok' : 'bad';   // фиксируем результат
      render();                                          // обновить и карточку, и стопку сверху
    }
    else advance(1);
  }
  function advance(d){ st.ex = Math.min(11, Math.max(1, st.ex + d)); st.selected = null; st.revealed = false; render(); }

  choiceEl.addEventListener('click', e => {
    const t = e.target.closest('[data-id]');
    if (t) pick(t.dataset.id);
  });
  __R.querySelector('[data-el="prev"]').addEventListener('click', () => advance(-1));
  __R.querySelector('[data-el="next"]').addEventListener('click', () => advance(1));
  __R.querySelector('[data-el="skip"]').addEventListener('click', primary);

  render();

  const IFRAME = window.self !== window.top;
  const DEMO = IFRAME || /[?&]demo\b/.test(location.search);
  if (DEMO) startDemo();

  function startDemo(){
    if (IFRAME) document.body.style.cssText = 'margin:0;padding:0;background:transparent;min-height:0;display:block';
    const screen = __R.querySelector('[data-el="screen"]');
    screen.style.borderRadius = '0'; screen.style.boxShadow = 'none';   // рамку/тень даёт внешняя .phone__frame

    const sleepD = ms => new Promise(r => setTimeout(r, ms));
    const clickEl = el => el && el.dispatchEvent(new MouseEvent('click', { bubbles:true, cancelable:true, view:window }));
    const finger = document.createElement('div');
    finger.style.cssText = 'position:absolute;z-index:60;width:44px;height:44px;pointer-events:none;opacity:0;transition:opacity .18s, top .38s ease, left .38s ease;filter:drop-shadow(0 3px 5px rgba(0,0,0,.28))';
    finger.innerHTML = '<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><path d="M19 5c-1.7 0-3 1.3-3 3v17.5l-3.4-3.6a3.1 3.1 0 0 0-4.5 4.3l8.7 10.4c1.4 1.7 3.4 2.6 5.6 2.6h8.1a6 6 0 0 0 6-5.2l1.3-9.7a3.2 3.2 0 0 0-3.2-3.6H22V8c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#2b2b2b" stroke-width="2" stroke-linejoin="round"/></svg>';
    screen.appendChild(finger);
    const scaleOf = () => (screen.offsetWidth
      ? screen.getBoundingClientRect().width / screen.offsetWidth : 1) || 1;
    const fingerTo = el => {
      if (!el) return;
      const sc = scaleOf();
      const rr = screen.getBoundingClientRect(), r = el.getBoundingClientRect();
      finger.style.left = ((r.left - rr.left + r.width/2) / sc - 6) + 'px';
      finger.style.top  = ((r.top  - rr.top  + r.height/2) / sc - 2) + 'px';
      finger.style.opacity = '1';
    };
    const tapAnim = async () => { finger.animate([{transform:'scale(1)'},{transform:'scale(.78)'},{transform:'scale(1)'}], {duration:280}); await sleepD(280); };
    const hideFinger = () => finger.style.opacity = '0';
    const tile = id => choiceEl.querySelector('[data-data-el="'+id+'"]');   // сетка перерисовывается — цель всегда перезапрашиваем
    const skipBtn = () => __R.querySelector('[data-el="skip"]');
    async function fTap(getter, pre){ const t = (typeof getter==='function' ? getter() : getter); if(!t) return; fingerTo(t); await sleepD(pre||430); await tapAnim(); clickEl(t); }

    (async function run(){
      while (true) {
        st.ex = 5; st.selected = null; st.revealed = false;
        st.results = { 1:'ok', 2:'ok', 3:'bad', 4:'ok' };
        render(); hideFinger();
        await sleepD(1200);

        for (const id of ['seats','hacker','book']){ fingerTo(tile(id)); await sleepD(230); }
        fingerTo(tile('casa')); await sleepD(330); await tapAnim(); clickEl(tile('casa'));   // зелёная рамка, «Готово»
        await sleepD(800);
        await fTap(skipBtn, 430);   // Готово → reveal «Совершенно верно!» + Дом, пилюля 5 зелёная
        await sleepD(1600);
        await fTap(skipBtn, 430);   // Вперёд → упражнение 6
        await sleepD(850);

        for (const id of ['seats','hacker','casa']){ fingerTo(tile(id)); await sleepD(230); }
        fingerTo(tile('book')); await sleepD(330); await tapAnim(); clickEl(tile('book'));    // коралловая рамка
        await sleepD(800);
        await fTap(skipBtn, 430);   // Готово → reveal «Правильный ответ: Дом», пилюля 6 коралловая
        await sleepD(1600);
        await fTap(skipBtn, 430);   // Вперёд → упражнение 7
        await sleepD(850);

        hideFinger();
        await sleepD(1500);
      }
    })();
  }
})();

};
