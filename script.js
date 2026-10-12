/* Jinimon — loom, bilingual switch, world art, menu, follow form. No dependencies. */
(() => {
  "use strict";

  /* ---------------- i18n ---------------- */
  const I18N = {
    en: {
      "skip": "Skip to content",
      "nav.worlds": "Two worlds", "nav.studio": "Studio", "nav.players": "Players", "nav.partners": "Partners",
      "hero.title": "Bridging both worlds",
      "hero.hook": "A startup in Riyadh, Saudi Arabia, building mobile games and the AI that makes them feel alive.",
      "hero.cta": "Follow Jinimon", "hero.secondary": "Partner with us",
      "hero.status": "Riyadh, Saudi Arabia · Mobile games · AI",
      "worlds.title": "Two worlds, one bridge",
      "worlds.lede": "Most studios pick one. We build both, because the best mobile game of the next decade will be half game design and half intelligence.",
      "worlds.games.t": "Mobile games", "worlds.games.p": "Games for the phone in your hand: one rule you can explain in a breath, sessions that fit a train ride, controls that respect a thumb.",
      "worlds.ai.t": "Artificial intelligence", "worlds.ai.p": "Models that learn how you play, adapt the next round to you, and run on the device, not in a data centre.",
      "worlds.bridge": "The bridge: every game ships with its intelligence inside, and every model is trained on play.",
      "studio.title": "Made in Riyadh",
      "players.lede": "Be first to hear about our games, playtests and releases. One email a month, nothing else.",
      "studio.p1": "Jinimon is a startup based in Riyadh, Saudi Arabia, specialized in mobile game development and artificial intelligence. We build games for the phone in your hand, and the intelligence that makes them feel alive.",
      "studio.p2": "Two crafts on one loom: game design that respects a thumb and a train ride, and AI that learns how you play and weaves the next round around you.",
      "studio.design.t": "Design", "studio.design.p": "One rule a player can repeat to a friend.",
      "studio.art.t": "Art", "studio.art.p": "Geometry from here, readable at thumb size.",
      "studio.ai.t": "AI", "studio.ai.p": "Models that learn how you play, on the device in your hand.",
      "studio.eng.t": "Engineering", "studio.eng.p": "Sixty frames on a mid-range phone, in both scripts.",
      "players.title": "Pull the first thread",
      "players.label": "Email address", "players.cta": "Follow Jinimon",
      "players.ok": "You're on the loom. Watch your inbox.", "players.err": "That email doesn't look right yet.",
      "social.x": "X", "social.discord": "Discord", "social.youtube": "YouTube", "social.tiktok": "TikTok",
      "partners.title": "Publishers and partners",
      "partners.p": "Platform holders, publishers and studios who want to build with us: we answer every message ourselves.",
      "partners.cta": "Start a conversation",
      "careers.title": "Join the loom",
      "careers.p": "We hire game designers, artists, engineers and AI researchers in Riyadh and remotely. Show us one thing you made and loved.",
      "careers.cta": "See open roles",
      "footer.line": "A Riyadh startup bridging mobile games and AI.",
      "footer.contact": "Write to us:", "footer.rights": "All rights reserved",
      "menu.open": "Open menu", "menu.close": "Close menu", "lang.switch": "Switch language to Arabic",
    },
    ar: {
      "skip": "انتقل إلى المحتوى",
      "nav.worlds": "عالمان", "nav.studio": "الاستوديو", "nav.players": "اللاعبون", "nav.partners": "الشركاء",
      "hero.title": "جسرٌ بين عالمين",
      "hero.hook": "شركة ناشئة في الرياض، المملكة العربية السعودية، تبني ألعاب الجوال والذكاء الاصطناعي الذي يجعلها تنبض بالحياة.",
      "hero.cta": "تابِع جينيمون", "hero.secondary": "شاركنا العمل",
      "hero.status": "الرياض، السعودية · ألعاب الجوال · الذكاء الاصطناعي",
      "worlds.title": "عالمان، جسرٌ واحد",
      "worlds.lede": "معظم الاستوديوهات تختار عالمًا واحدًا. نحن نبني العالمين معًا، لأن أفضل لعبة جوال في العقد القادم ستكون نصفها تصميمًا ونصفها ذكاءً.",
      "worlds.games.t": "ألعاب الجوال", "worlds.games.p": "ألعابٌ للهاتف الذي في يدك: قاعدة واحدة تشرحها في نفَس، وجلسات تناسب رحلة قطار، وتحكّمٌ يحترم الإبهام.",
      "worlds.ai.t": "الذكاء الاصطناعي", "worlds.ai.p": "نماذج تتعلّم كيف تلعب، وتكيّف الجولة التالية لك، وتعمل على جهازك لا في مركز بيانات.",
      "worlds.bridge": "الجسر: كل لعبة تُشحن وذكاؤها في داخلها، وكل نموذج يتدرّب على اللعب.",
      "studio.title": "صُنع في الرياض",
      "players.lede": "كن أول من يعرف عن ألعابنا وتجاربها وإصداراتها. رسالة واحدة في الشهر، لا أكثر.",
      "studio.p1": "جينيمون شركة ناشئة مقرّها الرياض، المملكة العربية السعودية، متخصّصة في تطوير ألعاب الجوال والذكاء الاصطناعي. نبني الألعاب للهاتف الذي في يدك، والذكاء الذي يجعلها تنبض بالحياة.",
      "studio.p2": "حرفتان على نولٍ واحد: تصميم ألعاب يحترم الإبهام ورحلة القطار، وذكاء اصطناعي يتعلّم كيف تلعب وينسج الجولة التالية حولك.",
      "studio.design.t": "التصميم", "studio.design.p": "قاعدة واحدة يستطيع اللاعب أن يرويها لصديقه.",
      "studio.art.t": "الفن", "studio.art.p": "هندسةٌ من هنا، تُقرأ بحجم الإبهام.",
      "studio.ai.t": "الذكاء الاصطناعي", "studio.ai.p": "نماذج تتعلّم كيف تلعب، على الجهاز الذي في يدك.",
      "studio.eng.t": "الهندسة", "studio.eng.p": "ستون إطارًا على هاتفٍ متوسّط، وباللغتين.",
      "players.title": "اسحب الخيط الأول",
      "players.label": "البريد الإلكتروني", "players.cta": "تابِع جينيمون",
      "players.ok": "صرت على النول. راقب بريدك.", "players.err": "هذا البريد لا يبدو صحيحًا بعد.",
      "social.x": "إكس", "social.discord": "ديسكورد", "social.youtube": "يوتيوب", "social.tiktok": "تيك توك",
      "partners.title": "الناشرون والشركاء",
      "partners.p": "أصحاب المنصات والناشرون والاستوديوهات الراغبة في البناء معنا: نردّ على كل رسالة بأنفسنا.",
      "partners.cta": "ابدأ الحديث",
      "careers.title": "انضم إلى النول",
      "careers.p": "نوظّف مصمّمي ألعاب وفنّانين ومهندسين وباحثين في الذكاء الاصطناعي في الرياض وعن بُعد. أرِنا شيئًا واحدًا صنعته وأحببته.",
      "careers.cta": "اطّلع على الوظائف",
      "footer.line": "شركة ناشئة من الرياض تصل بين ألعاب الجوال والذكاء الاصطناعي.",
      "footer.contact": "راسلنا:", "footer.rights": "جميع الحقوق محفوظة",
      "menu.open": "افتح القائمة", "menu.close": "أغلق القائمة", "lang.switch": "Switch language to English",
    },
  };
  const html = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => { const k = el.dataset.i18n; if (dict[k]) el.textContent = dict[k]; });
    // Elements that echo a string in the *other* script (the hero tagline).
    const other = lang === "ar" ? "en" : "ar";
    $$("[data-i18n-other]").forEach((el) => { const k = el.dataset.i18nOther; if (I18N[other][k]) { el.textContent = I18N[other][k]; el.lang = other; el.dir = other === "ar" ? "rtl" : "ltr"; } });
    $$(".lang__opt").forEach((o) => o.classList.toggle("is-active", o.dataset.lang === lang));
    $("#langToggle").setAttribute("aria-label", dict["lang.switch"]);
    const menu = $("#menuToggle");
    menu.setAttribute("aria-label", menu.getAttribute("aria-expanded") === "true" ? dict["menu.close"] : dict["menu.open"]);
    document.title = lang === "ar" ? "جينيمون — ألعاب الجوال والذكاء الاصطناعي من الرياض" : "Jinimon — Mobile games and AI, from Riyadh";
    try { localStorage.setItem("jinimon.lang", lang); } catch (_) {}
    loom && loom.reveal(true);
  }
  let startLang = (navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en";
  try { startLang = localStorage.getItem("jinimon.lang") || startLang; } catch (_) {}
  $("#langToggle").addEventListener("click", () => applyLang(html.lang === "ar" ? "en" : "ar"));

  /* ---------------- mobile menu ---------------- */
  const menuBtn = $("#menuToggle"), mobileNav = $("#mobileNav");
  const setMenu = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileNav.hidden = !open;
    menuBtn.setAttribute("aria-label", (I18N[html.lang] || I18N.en)[open ? "menu.close" : "menu.open"]);
  };
  menuBtn.addEventListener("click", () => setMenu(mobileNav.hidden));
  $$("a", mobileNav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !mobileNav.hidden) setMenu(false); });

  /* ---------------- Sadu pattern generators (cell space) ----------------
     Each band returns a colour index per cell: 0 ground, 1 thread, 2 ivory, 3 accent.
     Period P = 2H-2 so diamonds and triangles tile without a visible seam. */
  const BANDS = {
    diamond: (x, y, H) => { const P = 2 * H - 2, cy = (H - 1) / 2; const d = Math.abs((x % P) - (H - 1)) + Math.abs(y - cy); if (d > cy) return 0; if (d === Math.floor(cy)) return 2; return d <= cy / 3 ? 3 : 1; },
    tree: (x, y, H) => { const P = 2 * H - 2; const dx = Math.abs((x % P) - (H - 1)); if (dx > y) return 0; return y === H - 1 ? 2 : (dx === y ? 2 : 1); },
    zigzag: (x, y, H) => { const P = 2 * H - 2, m = x % P; const z = m < H ? m : P - m; const d = Math.abs(y - z); return d === 0 ? 2 : d === 1 ? 1 : 0; },
    stripe: (x, y) => (y % 2 === 0 ? 2 : 0),
    dots: (x, y) => ((x % 4 === 0 && y % 4 === ((Math.floor(x / 4) % 2) * 2)) ? 3 : (y % 4 === 1 && x % 2 === 0 ? 1 : 0)),
    comb: (x, y, H) => (y === 0 || y === H - 1 ? 2 : (x % 3 === 0 ? 1 : 0)),
  };
  const SEQ = [["stripe", 2], ["diamond", 9], ["comb", 3], ["zigzag", 5], ["stripe", 2], ["tree", 7], ["dots", 4], ["diamond", 13], ["stripe", 2], ["zigzag", 7], ["comb", 3]];
  const PAL = { ground: [11, 7, 8], crimson: [179, 18, 43], ivory: [243, 233, 214], ochre: [227, 154, 43], indigo: [43, 58, 158] };

  function buildGrid(cols, rows, threadName) {
    const grid = new Uint8Array(cols * rows);
    let y = 0, i = 0;
    while (y < rows) {
      const [name, H] = SEQ[i % SEQ.length]; i++;
      const fn = BANDS[name];
      for (let yy = 0; yy < H && y + yy < rows; yy++) for (let x = 0; x < cols; x++) grid[(y + yy) * cols + x] = fn(x, yy, H);
      y += H + 1; // one ground row between bands
    }
    return grid;
  }

  /* ---------------- the hero loom ---------------- */
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let loom = null;
  function makeLoom(canvas) {
    const ctx = canvas.getContext("2d", { alpha: false });
    let cols, rows, cell, grid, dpr, w, h;
    let revealStart = performance.now(), revealDur = reduceMotion ? 0 : 1900;
    let pointer = null, lastFrame = 0, running = true, visible = true;
    const LEVELS = 10;
    const colorStr = {};
    const idxColor = (idx) => idx === 0 ? PAL.ground : idx === 1 ? PAL.crimson : idx === 2 ? PAL.ivory : PAL.ochre;
    for (let idx = 0; idx < 4; idx++) for (let l = 0; l <= LEVELS; l++) {
      const f = 0.42 + (l / LEVELS) * 0.9; const c = idxColor(idx);
      colorStr[idx * 100 + l] = `rgb(${Math.min(255, c[0] * f) | 0},${Math.min(255, c[1] * f) | 0},${Math.min(255, c[2] * f) | 0})`;
    }
    function resize() {
      dpr = Math.min(2, devicePixelRatio || 1);
      w = canvas.clientWidth; h = canvas.clientHeight;
      cell = w < 480 ? 8 : w < 900 ? 10 : 12;
      cols = Math.ceil(w / cell); rows = Math.ceil(h / cell);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
      grid = buildGrid(cols, rows);
      draw(performance.now(), true);
    }
    function easeOutExpo(t) { return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t); }
    function draw(now, force) {
      if (!force && now - lastFrame < 33) return; lastFrame = now;
      const rtl = html.dir === "rtl";
      const p = revealDur ? easeOutExpo(Math.min(1, (now - revealStart) / revealDur)) : 1;
      const front = p * (cols + 6);
      const t = now / 1800;
      ctx.fillStyle = "#0B0708"; ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < rows; y++) {
        const by = y * cell;
        for (let x = 0; x < cols; x++) {
          const idx = grid[y * cols + x]; if (idx === 0) continue;
          const dist = rtl ? x : cols - 1 - x;          // distance from the inline-end edge
          if (dist > front) continue;                    // not woven yet
          let f = 0.55 + 0.1 * Math.sin(t + x * 0.07 + y * 0.11);
          const edge = front - dist; if (edge < 6) f += (6 - edge) * 0.12;     // shuttle glow at the front
          if (pointer) { const dx = pointer.x - x, dy = pointer.y - y; const d = Math.sqrt(dx * dx + dy * dy); if (d < 9) f += (1 - d / 9) * 0.6; }
          const l = Math.max(0, Math.min(LEVELS, Math.round((f - 0.42) / 0.9 * LEVELS)));
          ctx.fillStyle = colorStr[idx * 100 + l];
          ctx.fillRect(x * cell, by, cell, cell);
        }
      }
      if (p >= 1 && reduceMotion) running = false;
    }
    function frame(now) { if (visible && running) draw(now, false); requestAnimationFrame(frame); }
    canvas.parentElement.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); pointer = { x: (e.clientX - r.left) / cell, y: (e.clientY - r.top) / cell }; });
    canvas.parentElement.addEventListener("pointerleave", () => { pointer = null; });
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(canvas);
    new ResizeObserver(resize).observe(canvas);
    resize(); requestAnimationFrame(frame);
    return { reveal(again) { if (again && !reduceMotion) { revealStart = performance.now(); running = true; } } };
  }
  loom = makeLoom($("#loom"));
  applyLang(startLang);

  /* ---------------- world art: one band per world, in its thread colour ---------------- */
  const PATTERN_FOR = { diamond: ["diamond", 9], wave: ["zigzag", 7] };
  $$(".world__art").forEach((art) => {
    const spec = PATTERN_FOR[art.dataset.pattern]; if (!spec) return;
    const thread = art.closest(".world").dataset.thread || "crimson";
    const c = document.createElement("canvas"); art.appendChild(c);
    const ctx = c.getContext("2d");
    const paint = () => {
      const w = art.clientWidth, h = art.clientHeight, dpr = Math.min(2, devicePixelRatio || 1), cell = 10;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = "#0B0708"; ctx.fillRect(0, 0, w, h);
      const cols = Math.ceil(w / cell), rows = Math.ceil(h / cell), [name, H] = spec, fn = BANDS[name];
      const tc = PAL[thread] || PAL.crimson;
      const col = (i) => i === 1 ? `rgb(${tc})` : i === 2 ? `rgb(${PAL.ivory})` : `rgb(${PAL.ochre})`;
      for (let y = 0; y < rows; y++) { const band = Math.floor(y / (H + 1)), yy = y % (H + 1); if (yy === H) continue;
        for (let x = 0; x < cols; x++) { const i = fn(x + band * 3, yy, H); if (!i) continue; ctx.fillStyle = col(i); ctx.fillRect(x * cell, y * cell, cell, cell); } }
    };
    new ResizeObserver(paint).observe(art); paint();
  });

  /* ---------------- follow form (no backend yet) ---------------- */
  const form = $("#followForm"), note = $("#followNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = I18N[html.lang] || I18N.en;
    const email = $("#email").value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    note.textContent = ok ? dict["players.ok"] : dict["players.err"];
    $("#email").setAttribute("aria-invalid", String(!ok));
    if (ok) form.reset();
    // TODO: POST { email, lang: html.lang } to your list provider here.
  });
})();
