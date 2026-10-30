// Curtain-reveal intro: tap the seal -> drapes part, petals fall, invitation appears.
(function () {
  const c = typeof COUPLE !== "undefined" ? COUPLE : null, w = typeof WEDDING !== "undefined" ? WEDDING : null;
  const initials = c ? c.groom.name[0] + " & " + c.bride.name[0] : "S & V";
  const el = document.createElement("div");
  el.className = "intro";
  el.innerHTML =
    '<div class="intro-stage"><img src="images/couple-1.jpeg" alt="" />' +
    '<p class="intro-names">' + (c ? c.displayName : "") + "</p>" +
    '<p class="intro-date">' + (w ? w.date.display.toUpperCase() : "") + "</p></div>" +
    '<div class="drape left"></div><div class="drape right"></div><div class="valance"></div>' +
    '<button class="seal" aria-label="Open invitation" style="cursor:pointer">' + initials + "<small>TAP TO OPEN</small></button>";
  document.body.prepend(el);
  document.body.classList.add("intro-lock");

  let done = false;
  function open() {
    if (done) return; done = true;
    el.classList.add("opening");
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("i");
      p.className = "petal";
      p.style.cssText = "left:" + Math.random() * 100 + "vw;--dx:" + (Math.random() * 160 - 80) + "px;animation-duration:" + (4 + Math.random() * 4) + "s;animation-delay:" + Math.random() * 1.5 + "s";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 10000);
    }
    setTimeout(() => { el.classList.add("is-open"); document.body.classList.remove("intro-lock"); }, 2600);
    setTimeout(() => el.remove(), 4200);
  }
  el.addEventListener("click", open);
})();
