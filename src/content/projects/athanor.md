---
title: L'Athanor dell'Alchimista
summary: Una mostra digitale in cui ogni opera è un brano musicale. Le luci dell'ambiente prendono vita dai colori della copertina.
platform: web
year: 2025
client: Progetto personale
role: Concept, design e sviluppo
stack: [HTML5, CSS3, JavaScript, Canvas API, Media Session API]
accent: '#E8A33D'
monogram: Au
featured: true
order: 1
highlights:
  - Zero framework, zero dipendenze
  - Palette dinamica estratta dalla copertina
  - Controlli nativi del sistema via Media Session
links:
  - label: Codice su GitHub
    href: https://github.com/UNDevid/athanor
---

## L'idea

Un percorso in 14 stanze, come una galleria d'arte. Ogni stanza ospita un'opera musicale, ha un nome evocativo (*Il genio*, *Il creatore*, *Il maestro*, *Lo sciamano*…) e un'atmosfera propria.

## La sfida

Volevo un'esperienza immersiva **senza framework**: niente build step, caricamento istantaneo e un'atmosfera che cambia per ogni opera senza disegnare a mano 14 temi diversi.

## La soluzione

- I colori dominanti della copertina vengono estratti al volo con la **Canvas 2D API**.
- Quei colori alimentano tre livelli di luce pulsante sullo sfondo, animati con `@keyframes` e `backdrop-filter`.
- La **Media Session API** porta titolo, artista e controlli nella schermata di blocco e nelle notifiche del sistema operativo, come in una vera app.

> Il design si adatta al contenuto, non il contrario.

## Cosa ho imparato

Le piattaforme web moderne bastano per esperienze ricche. Con poche API ben scelte il risultato è leggero, accessibile e sembra un'app nativa.
