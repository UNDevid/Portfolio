/** Prefissa un percorso interno con il `base` di Astro (necessario su GitHub Pages in sottocartella). */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}
