// Embroidered corner florals + sliding event timeline (reads EVENT_SCHEDULES from config/wedding.js)
(function () {
  /* ---------- Embroidered floral spray (SVG generated once) ---------- */
  const leaf = (x, y, r, s = 1) =>
    `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="M0 0C8-10 24-10 32 0C24 10 8 10 0 0Z" fill="#8fa07a" stroke="#5f7352" stroke-width="1.2" stroke-dasharray="3 1.6"/><path d="M0 0C8-10 24-10 32 0C24 10 8 10 0 0Z" fill="url(#stitch)"/><path d="M2 0H29" stroke="#dfe8cf" stroke-width="1" stroke-dasharray="2 2"/></g>`;
  const rose = (x, y, r) =>
    `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#cf8591" stroke="#a85565" stroke-width="1.4" stroke-dasharray="3 1.6"/><circle r="${r * .7}" fill="#c0707e" stroke="#8f4352" stroke-width="1.2" stroke-dasharray="2.5 1.5"/><circle r="${r * .4}" fill="#a85565" stroke="#e8b3bb" stroke-width="1" stroke-dasharray="2 1.5"/><path d="M0 0m-${r * .2} 0a${r * .2} ${r * .2} 0 1 1 ${r * .4} 0" stroke="#f4cdd3" fill="none" stroke-width="1"/><circle r="${r}" fill="url(#stitch)"/></g>`;
  const wisteria = (x, y) => {
    let s = `<path d="M${x} ${y}q4 20 0 52" stroke="#7d8a68" fill="none" stroke-dasharray="3 2"/>`;
    for (let i = 0; i < 9; i++) {
      const rr = 6.5 - i * 0.5, cx = x + (i % 2 ? 5 : -5) * (1 - i / 11);
      s += `<circle cx="${cx}" cy="${y + 6 + i * 6}" r="${rr}" fill="${i % 2 ? '#b79ad0' : '#a584c2'}" stroke="#7f62a0" stroke-width="1" stroke-dasharray="2 1.4"/>`;
    }
    return s;
  };
  const knots = [[40, 8], [98, 62], [128, 118], [150, 170], [14, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#d9b978" stroke="#a9894b"/>`).join("");
  const spray =
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><pattern id="stitch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V5" stroke="#fff" stroke-opacity=".28" stroke-width="1.1"/></pattern></defs>` +
    `<path d="M0 12C60 0 92 58 118 120S170 176 198 196" fill="none" stroke="#7d8a68" stroke-width="3" stroke-dasharray="6 2"/>` +
    wisteria(84, 56) + wisteria(30, 20) + wisteria(120, 128) +
    leaf(20, 14, 30) + leaf(56, 26, -40, .9) + leaf(70, 38, 70) + leaf(96, 86, -20) + leaf(112, 104, 100, .9) +
    leaf(140, 142, 10) + leaf(150, 160, 80, .8) + leaf(176, 180, -30, .8) +
    rose(56, 26, 15) + rose(108, 98, 17) + rose(168, 176, 13) + knots + `</svg>`;
  const hosts = ".events-section, .family-section, .countdown-section, .timeline-section, .thank-you-section";
  const addFlorals = () => document.querySelectorAll(hosts).forEach((s) => {
    s.classList.add("has-embroidery");
    ["tl", "tr", "bl", "br"].forEach((p) => { const d = document.createElement("div"); d.className = "emb " + p; d.innerHTML = spray; s.prepend(d); });
  });

  /* ---------- Timeline ---------- */
  const sec = document.createElement("section");
  sec.className = "timeline-section";
  sec.innerHTML = `<p class="section-label">THE DAY, MOMENT BY MOMENT</p><h2>Timeline</h2>
    <div class="tl-tabs"><button class="tl-tab active" data-k="wedding">Wedding Day</button><button class="tl-tab" data-k="reception">Reception</button></div>
    <div class="tl-rail"></div><div class="tl-view"><div class="tl-track"></div></div>
    <div class="tl-controls"><button class="tl-prev" aria-label="Previous">←</button><button class="tl-next" aria-label="Next">→</button></div>`;
  const anchor = document.querySelector(".family-section");
  anchor.parentNode.insertBefore(sec, anchor);

  const $ = (q) => sec.querySelector(q), rail = $(".tl-rail"), track = $(".tl-track"), prev = $(".tl-prev"), next = $(".tl-next"), view = $(".tl-view");
  let list = [], i = 0;
  const go = (n) => {
    i = Math.max(0, Math.min(list.length - 1, n));
    track.style.transform = `translateX(${-i * 100}%)`;
    rail.querySelectorAll(".tl-node").forEach((el, k) => el.classList.toggle("active", k === i));
    prev.disabled = i === 0; next.disabled = i === list.length - 1;
  };
  const load = (k) => {
    list = (typeof EVENT_SCHEDULES !== "undefined" && EVENT_SCHEDULES[k]) || [];
    rail.innerHTML = list.map((e, n) => `<button class="tl-node" data-n="${n}" aria-label="${e.title}">${e.time.replace(/ (AM|PM).*/, "<br>$1")}</button>`).join("");
    track.innerHTML = list.map((e) => `<div class="tl-card"><div class="tl-frame"><img src="${e.photo}" alt="${e.title}" loading="lazy"><p class="tl-time">${e.time}</p><h3>${e.title}</h3><p class="tl-venue">${e.venue || ""}</p><p>${e.details || ""}</p></div></div>`).join("");
    go(0);
  };
  sec.addEventListener("click", (e) => {
    const t = e.target.closest(".tl-tab"), n = e.target.closest(".tl-node");
    if (t) { sec.querySelectorAll(".tl-tab").forEach((b) => b.classList.toggle("active", b === t)); load(t.dataset.k); }
    if (n) go(+n.dataset.n);
  });
  prev.onclick = () => go(i - 1); next.onclick = () => go(i + 1);
  let x0 = null;
  view.addEventListener("pointerdown", (e) => (x0 = e.clientX));
  view.addEventListener("pointerup", (e) => { if (x0 !== null && Math.abs(e.clientX - x0) > 40) go(i + (e.clientX < x0 ? 1 : -1)); x0 = null; });
  load("wedding");
  addFlorals();
})();
