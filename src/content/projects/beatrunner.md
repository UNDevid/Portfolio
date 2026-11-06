---
title: Beat Runner
summary: L'app di corsa con la musica al centro. GPS, ritmo e cadenza in diretta, e playlist pensate per correre su Spotify, SoundCloud e YouTube Music.
platform: android
year: 2026
client: Progetto personale
role: Ideazione, design e sviluppo
status: In arrivo su Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, Navigation 3, Coroutines & Flow, Firebase, Google Maps, Glance, Baseline Profile]
accent: '#C6F432'
cover: ../../assets/projects/beatrunner/cover.jpg
coverPosition: left
featured: true
order: 1
highlights:
  - Da ~16k righe XML e Fragment a 100% Compose
  - 11 moduli Gradle con convention plugin
  - Corsa che sopravvive alla chiusura dell'app
  - Screenshot test con Roborazzi e Baseline Profile
gallery:
  - src: ../../assets/projects/beatrunner/run.jpg
    caption: Corsa in diretta
  - src: ../../assets/projects/beatrunner/playlists.jpg
    caption: Playlist per correre
  - src: ../../assets/projects/beatrunner/detail.jpg
    caption: Dettaglio della corsa
  - src: ../../assets/projects/beatrunner/diary.jpg
    caption: Diario mese per mese
---

## L'idea

Chi corre con la musica non pensa ai chilometri, pensa alla playlist. Beat Runner parte da qui: scegli la colonna sonora, premi Play e corri. L'app registra il percorso e ti dice quanta musica manca alla fine.

Le playlist si aprono nell'app musicale che usi già (Spotify, SoundCloud, YouTube Music). Durante la corsa vedi tempo, distanza, ritmo, calorie e **cadenza**, letta dal contapassi del telefono. Un assistente vocale annuncia i traguardi anche a schermo spento.

## La sfida: rifondare un'app nata nel 2021

Beat Runner esisteva già, ma con il codice di un'altra epoca: circa 16.000 righe Kotlin, 112 layout XML (metà duplicati per il tema scuro), 10 Fragment e una quindicina di dialog. La comunicazione passava per EventBus, non c'era dependency injection e non c'erano test. La schermata della mappa da sola superava le 1.900 righe.

Invece di riscriverla da zero l'ho migrata **schermata per schermata**, con l'app sempre funzionante:

- **Clean Architecture + MVI**: `State` immutabile in `StateFlow`, un solo punto di ingresso per gli `Intent`, `Effect` one-shot e reducer puri.
- **11 moduli Gradle** (`core:domain` in Kotlin puro, `core:data`, `core:designsystem`, `feature:*`) con convention plugin condivisi.
- **Navigation 3** e una sola Activity: alla fine nessun Fragment, nessun `nav_graph.xml`.
- Ogni schermata migrata vive nel suo modulo feature, ospitata da un Fragment "guscio" finché tutto non è Compose. Poi i gusci spariscono in un colpo.

## Il motore della corsa

La parte più delicata. Il calcolo di segmenti, pause, tempo attivo e calorie vive nel domain come codice puro e testato. Un `RunTracker` legato al processo, non allo schermo, tiene viva la corsa anche se la mappa viene distrutta. Salva una cache ogni 10 secondi, così se l'app si chiude durante una corsa la riprendi da dove eri.

## Un design system "neon glass"

Ho costruito un modulo `core:designsystem` con superfici di vetro sfocato (Haze e BlurView, anche sopra la mappa), bordi e glow neon, `StatTile`, `ProgressRing` e tab segmentate. Il tema usa **Material 3 Expressive** con le animazioni a molla del `MotionScheme`. L'accento è a scelta dell'utente o preso dallo sfondo del telefono.

> Il vetro non si testa su Robolectric: il blur va guardato su un dispositivo vero.

## I dettagli che fanno la differenza

- **Widget** della settimana con Glance: chilometri, giorni di corsa e la playlist della prossima uscita, con Play per partire subito.
- **Condivisione**: un'immagine con mappa o foto e i numeri della corsa disegnati sopra su canvas.
- Il diario delle corse mese per mese, con la colonna sonora del mese.
- Ogni permesso spiegato prima di chiederlo, preferenze cifrate escluse dai backup, **Baseline Profile** per un avvio più rapido.
- Per il catalogo ho scritto anche degli strumenti in Python che misurano i BPM dei brani dall'audio di sistema (WASAPI loopback, onset envelope e autocorrelazione).
