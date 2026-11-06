---
title: Domenico Bini Soundboard
summary: I pezzi più iconici del "Maestro" del metal del web, sempre in tasca. Gratuita su Google Play, valutata 5 stelle da oltre 200 fan.
platform: android
year: 2019
client: Progetto personale
role: Ideazione, design e sviluppo
status: Gratuita su Google Play
stack: [Kotlin, Java, Android SDK, SceneView AR, YouTube Player, Firebase, WorkManager]
accent: '#FF6A2A'
cover: ../../assets/projects/soundboard/cover.jpg
coverEffect: soundboard-concert
coverPosition: left
order: 3
highlights:
  - 5,0 ★ con oltre 200 recensioni
  - 112 brani, suonerie e sveglie
  - Il Maestro in realtà aumentata
  - Gratuita e senza pubblicità
links:
  - label: Scarica da Google Play
    href: https://play.google.com/store/apps/details?id=it.ildevid.domenicobinisoundboard
galleryStyle: promo
gallery:
  - src: ../../assets/projects/soundboard/s1.jpg
    caption: La raccolta
  - src: ../../assets/projects/soundboard/s2.jpg
    caption: I pezzi del Maestro
  - src: ../../assets/projects/soundboard/s3.jpg
    caption: Ricerca vocale e sfondi
plain:
  summary: Un'app gratuita per i fan di Domenico Bini, star del metal del web. Raccoglie 112 suoi brani da ascoltare, condividere o usare come suoneria.
  tags: [App Android, Intrattenimento, 5 ★ su Google Play]
  challenge: I fan volevano avere sempre a portata di mano i pezzi più iconici del Maestro, da ascoltare e condividere con gli amici.
  solution: Una soundboard semplice e divertente, arricchita negli anni con ricerca vocale, sfondi a tema e perfino la realtà aumentata.
  result: Una valutazione di 5 stelle su oltre 200 recensioni e più di 1.000 download, con aggiornamenti costanti dal 2019 a oggi.
  highlights:
    - 5,0 ★ su oltre 200 recensioni
    - Oltre 1.000 download
    - Gratuita e senza pubblicità
    - Aggiornata con costanza dal 2019
---

## L'idea

Domenico Bini è un cantautore e chitarrista heavy metal diventato un fenomeno del web, con una schiera di fan affezionatissimi. La Soundboard nasce nel 2019 da un'idea semplice: avere i suoi pezzi più iconici sempre a portata di tocco.

È gratuita, **senza pubblicità** e non raccoglie alcun dato degli utenti. I fan l'hanno premiata con una media di **5 stelle su oltre 200 recensioni**.

## Cosa fa

- **112 brani** divisi per categoria (metal, in lingue, da cantautore), da ascoltare con un tocco.
- Ogni brano si può impostare come **suoneria o sveglia** e condividere con qualsiasi app.
- **Ricerca vocale**: per trovare un pezzo basta dirne il nome.
- **Il Maestro in realtà aumentata**: inquadri la stanza con la fotocamera e lui compare lì, con modelli 3D gestiti da SceneView e ARCore.
- Video dal canale YouTube integrati nell'app e **sfondi a tema** scaricati dal cloud, come quello per l'uscita dell'album *Sta andando tutto male*.
- Durante la pandemia l'app mostrava anche il colore della propria regione, "annunciato" dal Maestro.

## Sette anni di manutenzione

Un'app piccola ma viva: dal primo commit del 2019 l'ho aggiornata con costanza, a ogni nuova versione di Android.

- Migrazione progressiva da Java a **Kotlin**.
- Target SDK aggiornato fino ad **Android 16**, con Gradle e librerie sempre allineati.
- Dipendenze uscite da JCenter sostituite o portate in locale, per non perdere funzionalità.
- La parte AR aggiornata alle nuove versioni di SceneView.
- Firebase Crashlytics per tenere d'occhio la stabilità sui tanti dispositivi dei fan.
