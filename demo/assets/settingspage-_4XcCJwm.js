const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sync-Dq1bbrrW.js","./rolldown-runtime-pP25SEvz.js","./edits-C6bDFk0_.js","./storage-BcgMki5y.js","./core-C9VaBKBY.js","./notes-DNrNZ-BO.js","./stats-d8ZMvPEP.js","./about-DLDXlcfv.js","./dom-CU1BopE_.js","./sheet-BtoROOMv.js","./guide-DS6igdLA.js","./formats-7ossRQxu.js","./web-dxRBrnxR.js","./touch-Co9qvRHu.js","./patron-C4mutN1c.js","./ambient-BFNHSMl3.js","./patron-DsF1DatE.js","./icons-QamHF50I.js","./settings-CL4FUrER.js"])))=>i.map(i=>d[i]);
import{a as e,o as t,r as n}from"./about-DLDXlcfv.js";import{t as r}from"./ambient-BFNHSMl3.js";import{_t as i,dt as a,ft as o,gt as s,lt as c,st as l,ut as u,v as d,vt as f}from"./storage-BcgMki5y.js";import{r as p}from"./patron-DsF1DatE.js";import{t as m}from"./acknowledgements-CzqMjhNC.js";import{o as h,s as g}from"./dom-CU1BopE_.js";import{t as _}from"./icons-QamHF50I.js";import{a as v,d as y,f as b,i as x,o as S}from"./settings-CL4FUrER.js";import{n as C}from"./sheet-BtoROOMv.js";var w=e=>e.map(e=>`<span class="kbd">${g(e)}</span>`).join(``),T=(e,t)=>`<button type="button" class="switch" role="switch" data-set="${e}" aria-label="${g(t)}"></button>`,E=(e,t,n=``)=>`<button type="button" class="set-link" data-go="${e}"><span>${t}</span>${n?`<small>${n}</small>`:``}${_.chevron}</button>`;function D(D){let O=d().settings,k=a?[`⌥`,`⇧`,`N`]:[`Alt`,`Shift`,`N`],A=h(`<div class="nb settings-page">
    <header class="bar nb-bar">
      <button class="icon-btn" data-go="close" aria-label="Close settings">${_.back}</button>
      <div class="brand-mark"><span>Settings</span></div>
      <div class="spacer"></div>
    </header>
    <div class="nb-scroll"><div class="nb-inner set-inner">

      <section class="set-group">
        <h2>Reading</h2>
        <div class="set-row set-col">
          <span class="set-label">Edition</span>
          <div class="set-swatches">${v.map(e=>`<button type="button" class="set-swatch" data-theme-pick="${e.id}" aria-label="${g(e.label)}${e.patron?` (Patron)`:``}" title="${g(e.label)}${e.patron?` · Patron`:``}"><i style="background:${e.bg};color:${e.ink}">Aa</i><span>${g(e.label)}${e.patron?` <b class="patron-mark">✦</b>`:``}</span></button>`).join(``)}</div>
        </div>
        <div class="set-row">
          <span class="set-label">Text size</span>
          <div class="set-stepper"><button type="button" data-size="-1" aria-label="Smaller">−</button><output class="set-size">${O.size}</output><button type="button" data-size="1" aria-label="Larger">+</button></div>
        </div>
        ${o?`<div class="set-row"><span class="set-label">Page tap<small>A light tap as you reach the next page</small></span>${T(`pageTap`,`Page tap`)}</div>`:``}
        <div class="set-row set-col">
          <span class="set-label">Ambient sound<small>While a book is open</small></span>
          <div class="seg set-sounds">${r.map(e=>`<button type="button" data-sound="${e.id}">${g(e.label)}${e.patron?` ✦`:``}</button>`).join(``)}</div>
        </div>
        <p class="set-note">Type faces, spacing and paragraphs: <b>Aa</b>, while you read.</p>
      </section>

      ${o?c?`<section class="set-group">
          <h2>On this phone</h2>
          <div class="set-row"><span class="set-label">The reading tab<small>A slim ribbon at the screen’s edge while a book is open: tap to come back to your book (or, in Edgeleaf, to tuck it away), pull in for a quick note, hold for the next lines</small></span>${T(`tab`,`The reading tab`)}</div>
          <div class="set-row"><span class="set-label">Its side</span><div class="seg" role="group" aria-label="Reading tab side">${x.map(e=>`<button type="button" data-tab-side="${e.value}">${e.label}</button>`).join(``)}</div></div>
        </section>`:u?`<section class="set-group">
          <h2>On this phone</h2>
          <div class="set-row"><span class="set-label">Your book in the Dynamic Island<small>While you read: tap to come back, hold for the next lines, the pencil for notes</small></span>${T(`float`,`Your book in the Dynamic Island`)}</div>
        </section>`:``:`<section class="set-group">
          <h2>On this computer</h2>
          <div class="set-row"><span class="set-label">Side of the screen</span><div class="seg side-pick" role="group" aria-label="Screen side">${x.map(e=>`<button type="button" data-side="${e.value}">${e.label}</button>`).join(``)}</div></div>
          <div class="set-row"><span class="set-label">Width</span><div class="seg width-pick" role="group" aria-label="Panel width">${S.map(e=>`<button type="button" data-width="${e.value}">${e.label}</button>`).join(``)}</div></div>
          <div class="set-row"><span class="set-label">Pin it open<small>Stays out when you click elsewhere</small></span>${T(`pinned`,`Pin Edgeleaf open`)}</div>
          <div class="set-row"><span class="set-label">The tab at the edge<small>Rest the pointer on the edge for a moment, or drag a book there</small></span>${T(`peek`,`The tab at the edge`)}</div>
          <div class="set-row"><span class="set-label">The other edge, for notes<small>Rest the pointer on the middle of the opposite edge: Edgeleaf comes out there with your commonplace book</small></span>${T(`notesEdge`,`The other edge, for notes`)}</div>
          <div class="set-row set-keys"><span class="set-label">Bring it out, tuck it away</span><span>${w(i)}</span></div>
          <div class="set-row set-keys"><span class="set-label">Quick notes, from anywhere</span><span>${w(k)}</span></div>
          <div class="set-row set-keys"><span class="set-label">Quick notes, in a book</span><span>${w([`N`])}</span></div>
        </section>`}

      <section class="set-group">
        <h2>Notes and library</h2>
        ${E(`commonplace`,`Commonplace book`,`Notes about anything`)}
        ${E(`sync`,o?`Sync with your computer`:`Send to your phone`,`Over your Wi-Fi`)}
        ${n?E(`get-app`,`Edgeleaf on your other devices`):``}
      </section>

      <section class="set-group">
        <h2>Help</h2>
        ${E(`card`,`Library card`,`Every feature, and a short walk`)}
        ${E(`guide`,`Field guide`,`Everything, as a book`)}
      </section>

      <section class="set-group">
        <h2>About</h2>
        ${E(`patron`,p()?`Patron ✦`:`Become a patron ✦`,p()?`Thank you`:`Six editions, four sounds`)}
        ${e?`<span data-act="support">${E(`support`,`Support Edgeleaf with a coffee`)}</span>`:``}
        ${n?E(`privacy`,`Privacy`):``}
        ${E(`thanks`,`Acknowledgements`)}
        <p class="set-note">Edgeleaf ${g(t)}${o?``:` · lives in your ${a?`menu bar`:`system tray`}`}</p>
        ${o?``:`<button type="button" class="pill-btn quiet set-quit" data-go="quit">Quit Edgeleaf</button>`}
      </section>
    </div></div>
  </div>`),j=C(A,{label:`Settings`});requestAnimationFrame(()=>M());let M=()=>{if(!A.isConnected)return;let e=d().settings;A.querySelectorAll(`[data-theme-pick]`).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.themePick===e.theme))),A.querySelector(`.set-size`).textContent=String(e.size),A.querySelectorAll(`[data-sound]`).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.sound===e.sound))),A.querySelectorAll(`.side-pick [data-side]`).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.side===e.side))),A.querySelectorAll(`[data-width]`).forEach(t=>t.setAttribute(`aria-pressed`,String(Math.abs(Number(t.dataset.width)-e.width)<.01))),A.querySelectorAll(`[data-tab-side]`).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.tabSide===(e.tabSide??`right`))));let t={pageTap:!!e.pageTap,pinned:e.pinned,peek:e.edgePeek,notesEdge:e.notesEdge!==!1,float:e.edgePeek,tab:e.edgePeek&&!!l?.tabAllowed()};A.querySelectorAll(`[data-set]`).forEach(e=>e.setAttribute(`aria-checked`,String(!!t[e.dataset.set])))};y(M),c&&document.addEventListener(`visibilitychange`,()=>document.visibilityState===`visible`&&M()),A.addEventListener(`click`,t=>{let i=t.target,a=i.closest(`[data-go]`)?.dataset.go,c=i.closest(`[data-set]`)?.dataset.set,u=d().settings;a===`close`?j.close():a===`commonplace`?(j.close(),D.commonplace()):a===`sync`?f(()=>import(`./sync-Dq1bbrrW.js`).then(e=>o?e.openSyncHelp():e.openSendToPhone()),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url):a===`get-app`?s.openExternal(n):a===`card`?(j.close(),D.card()):a===`guide`?(j.close(),f(()=>import(`./guide-DS6igdLA.js`).then(async e=>D.open(await e.ensureGuide())),__vite__mapDeps([10,11,1,3,4,12,13]),import.meta.url)):a===`patron`?f(()=>import(`./patron-C4mutN1c.js`).then(e=>e.openPatron()),__vite__mapDeps([14,7,15,3,4,16,8,17,18,9]),import.meta.url):a===`support`?s.openExternal(e):a===`privacy`?s.openExternal(new URL(`privacy/`,n).href):a===`thanks`?m():a===`quit`&&s.quit(),c===`pageTap`?b(`pageTap`,!u.pageTap):c===`pinned`?b(`pinned`,!u.pinned):c===`notesEdge`?b(`notesEdge`,u.notesEdge===!1):c===`peek`||c===`float`?b(`edgePeek`,!u.edgePeek):c===`tab`&&b(`edgePeek`,!(u.edgePeek&&l?.tabAllowed()));let h=i.closest(`[data-theme-pick]`)?.dataset.themePick;if(h){let e=v.find(e=>e.id===h);e?.patron&&!p()?f(()=>import(`./patron-C4mutN1c.js`).then(t=>t.openPatron(`${e.label} is a Patron edition.`)),__vite__mapDeps([14,7,15,3,4,16,8,17,18,9]),import.meta.url):b(`theme`,h)}let g=i.closest(`[data-size]`)?.dataset.size;g&&b(`size`,Math.min(28,Math.max(14,u.size+Number(g))));let _=i.closest(`[data-sound]`)?.dataset.sound;if(_){let e=r.find(e=>e.id===_);e?.patron&&!p()?f(()=>import(`./patron-C4mutN1c.js`).then(t=>t.openPatron(`${e.label} is a Patron sound.`)),__vite__mapDeps([14,7,15,3,4,16,8,17,18,9]),import.meta.url):b(`sound`,_)}let y=i.closest(`.side-pick [data-side]`)?.dataset.side;(y===`left`||y===`right`)&&b(`side`,y);let x=i.closest(`[data-width]`)?.dataset.width;x&&b(`width`,Number(x));let S=i.closest(`[data-tab-side]`)?.dataset.tabSide;(S===`left`||S===`right`)&&b(`tabSide`,S),M()})}export{D as openSettings};