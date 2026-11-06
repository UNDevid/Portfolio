// Interazioni globali: rieseguite a ogni navigazione (View Transitions).
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(pointer: fine)').matches;

let cleanup: Array<() => void> = [];

function on<K extends keyof WindowEventMap>(
  target: Window | HTMLElement,
  type: K | string,
  fn: (e: any) => void,
  opts?: AddEventListenerOptions,
) {
  target.addEventListener(type, fn, opts);
  cleanup.push(() => target.removeEventListener(type, fn, opts));
}

function reveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
  cleanup.push(() => io.disconnect());
}

function spotlight() {
  const root = document.documentElement;
  on(window, 'pointermove', (e: PointerEvent) => {
    root.style.setProperty('--mx', `${e.clientX}px`);
    root.style.setProperty('--my', `${e.clientY}px`);
  }, { passive: true });
}

/** Pulsanti "magnetici" che seguono leggermente il cursore. */
function magnetic() {
  if (!finePointer() || reduced()) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    on(el, 'pointermove', (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    on(el, 'pointerleave', () => (el.style.transform = ''));
  });
}

/** Inclinazione 3D + bagliore che segue il cursore sulle card. */
function tilt() {
  if (!finePointer() || reduced()) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt || 6);
    on(el, 'pointermove', (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--gx', `${px * 100}%`);
      el.style.setProperty('--gy', `${py * 100}%`);
      el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)`;
    });
    on(el, 'pointerleave', () => (el.style.transform = ''));
  });
}

/** Barra di avanzamento della lettura + navbar che si compatta. */
function scrollUi() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const root = document.documentElement;
  let idle = 0;
  const update = (e?: Event) => {
    const h = root.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    nav?.toggleAttribute('data-scrolled', scrollY > 24);
    if (!e) return;
    // La scrollbar si accende nel colore accento mentre si scorre, poi torna discreta.
    root.classList.add('is-scrolling');
    clearTimeout(idle);
    idle = window.setTimeout(() => root.classList.remove('is-scrolling'), 700);
  };
  update();
  on(window, 'scroll', update, { passive: true });
}

/** Testo che si "decodifica" carattere per carattere. */
function scramble() {
  const glyphs = '01<>/{}[]=+*#$%&';
  document.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el) => {
    const final = el.dataset.scramble || el.textContent || '';
    if (reduced()) { el.textContent = final; return; }
    let frame = 0;
    const total = 28;
    const tick = () => {
      frame++;
      el.textContent = final
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' ';
          return i / final.length < frame / total ? ch : glyphs[(Math.random() * glyphs.length) | 0];
        })
        .join('');
      if (frame < total) id = requestAnimationFrame(tick);
    };
    let id = requestAnimationFrame(tick);
    cleanup.push(() => cancelAnimationFrame(id));
  });
}

/** Filtri della griglia progetti. */
function filters() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const cards = document.querySelectorAll<HTMLElement>('[data-platform]');
  buttons.forEach((btn) =>
    on(btn, 'click', () => {
      const f = btn.dataset.filter!;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      const apply = () =>
        cards.forEach((c) => {
          c.hidden = f !== 'all' && c.dataset.platform !== f;
        });
      const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
      if (doc.startViewTransition && !reduced()) doc.startViewTransition(apply);
      else apply();
    }),
  );
}

function init() {
  cleanup.forEach((fn) => fn());
  cleanup = [];
  document.documentElement.classList.add('js');
  reveal();
  spotlight();
  magnetic();
  tilt();
  scrollUi();
  scramble();
  filters();
}

document.addEventListener('astro:page-load', init);
