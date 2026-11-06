# Davide Valentino — Portfolio

Portfolio personale costruito con **Astro 7** + **Tailwind CSS 4**, pubblicato su GitHub Pages.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npm run check    # type-check
```

Richiede Node ≥ 26.

## Dove modificare

| Cosa | File |
|---|---|
| Nome, ruolo, email, social, stack | `src/config.ts` |
| Progetti (uno per file Markdown) | `src/content/projects/*.md` |
| Colori, font, stili globali | `src/styles/global.css` |
| Sezioni della home | `src/components/` |

### Aggiungere un progetto

Crea `src/content/projects/nome-progetto.md`:

```md
---
title: Nome progetto
summary: Una frase che spiega il valore del progetto.
platform: android        # android | flutter | web
year: 2026
client: Nome cliente     # default: "Progetto personale"
role: Lead Android Developer
stack: [Kotlin, Jetpack Compose]
accent: '#3DDC84'        # colore del progetto (card + pagina dettaglio)
monogram: FO             # opzionale, per la copertina generata
cover: ./cover.png       # opzionale, immagine relativa al file .md
featured: true           # card grande in evidenza
order: 1                 # ordinamento
highlights: [Punto chiave 1, Punto chiave 2]
links:
  - label: Google Play
    href: https://play.google.com/store/apps/details?id=...
---

## Il contesto
Testo del case study in Markdown...
```

## Pubblicazione su GitHub Pages

1. Crea il repository **`UNDevid.github.io`** (così il sito sarà su `https://undevid.github.io`).
   Va bene anche un altro nome: il workflow calcola automaticamente il percorso base.
2. Fai il push di questa cartella sul branch `main`.
3. Su GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Ogni push su `main` pubblica il sito tramite `.github/workflows/deploy.yml`.
