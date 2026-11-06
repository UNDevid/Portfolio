// Ispezione stile DevTools, solo in modalità tecnica: passando sugli elementi [data-inspect]
// compaiono un riquadro, l'etichetta "Nome · larghezza × altezza" e le coordinate accanto al cursore.
// Non sostituisce il cursore di sistema; attiva solo con mouse/trackpad (pointer: fine).
import { currentView } from './view';

const fine = () => matchMedia('(pointer: fine)').matches;

let ui: { box: HTMLElement; tag: HTMLElement; coords: HTMLElement } | null = null;

function build() {
  // Il <body> viene sostituito a ogni navigazione: gli elementi si ricreano se mancano.
  if (ui && document.body.contains(ui.box)) return ui;
  const make = (cls: string) => {
    const el = document.createElement('div');
    el.className = cls;
    el.setAttribute('aria-hidden', 'true');
    document.body.append(el);
    return el;
  };
  ui = { box: make('inspect-box'), tag: make('inspect-tag'), coords: make('inspect-coords') };
  return ui;
}

const names: Record<string, string> = { TABLE: 'Table', PRE: 'CodeBlock' };

function stop() {
  document.documentElement.removeAttribute('data-inspecting');
}

function onMove(e: PointerEvent) {
  if (e.pointerType !== 'mouse') return;
  if (currentView() !== 'tech') return stop();
  const el = (e.target as Element).closest?.('[data-inspect], .prose-case table, .prose-case pre');
  if (!el) return stop();

  const { box, tag, coords } = build();
  document.documentElement.setAttribute('data-inspecting', '');
  const r = el.getBoundingClientRect();
  const name = (el as HTMLElement).dataset.inspect || names[el.tagName] || el.tagName.toLowerCase();
  Object.assign(box.style, {
    transform: `translate(${r.left}px, ${r.top}px)`,
    width: `${r.width}px`,
    height: `${r.height}px`,
  });
  tag.textContent = `${name} · ${Math.round(r.width)} × ${Math.round(r.height)}`;
  tag.style.transform = `translate(${Math.max(4, r.left)}px, ${r.top > 28 ? r.top - 24 : r.top + 4}px)`;
  coords.textContent = `x ${Math.round(e.clientX)}  y ${Math.round(e.clientY + scrollY)}`;
  coords.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 18}px)`;
}

let bound = false;
document.addEventListener('astro:page-load', () => {
  stop();
  if (!fine() || bound) return;
  bound = true;
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', stop);
  window.addEventListener('scroll', stop, { passive: true });
});
