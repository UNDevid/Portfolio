// Modalità di lettura del sito.
// - "plain" (predefinita): il racconto per tutti, pensato per recruiter e curiosi
// - "tech": aggiunge architettura, stack e scelte di codice
// La scelta resta memorizzata; ?view=tech (o ?view=plain) nel link la imposta da fuori.
// Il valore iniziale lo applica già lo script inline nel <head>, per evitare sfarfallii.

export type View = 'plain' | 'tech';
const KEY = 'portfolio-view';

export const currentView = (): View =>
  document.documentElement.dataset.view === 'tech' ? 'tech' : 'plain';

function save(view: View) {
  try {
    localStorage.setItem(KEY, view);
  } catch {
    /* archiviazione non disponibile: la scelta vale solo per questa visita */
  }
}

function syncControls() {
  const tech = currentView() === 'tech';
  document.querySelectorAll<HTMLElement>('[data-view-toggle]').forEach((b) => {
    b.setAttribute('aria-checked', String(tech));
  });
}

export function setView(view: View) {
  const apply = () => {
    document.documentElement.dataset.view = view;
    syncControls();
  };
  save(view);
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !document.hidden && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Rete di sicurezza: se il browser non avvia la transizione (pagina in background), si applica comunque.
    let done = false;
    doc.startViewTransition(() => {
      done = true;
      apply();
    });
    setTimeout(() => !done && apply(), 250);
  } else apply();
}

// La modalità sopravvive alla navigazione tra pagine (View Transitions sostituisce gli attributi di <html>).
document.addEventListener('astro:before-swap', (e) => {
  (e as Event & { newDocument: Document }).newDocument.documentElement.dataset.view = currentView();
});

document.addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLElement>('[data-view-toggle],[data-view-set]');
  if (!t) return;
  const next = (t.dataset.viewSet as View | undefined) ?? (currentView() === 'tech' ? 'plain' : 'tech');
  setView(next);
});

document.addEventListener('astro:page-load', syncControls);
