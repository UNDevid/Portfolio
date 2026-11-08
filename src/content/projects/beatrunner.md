---
title: Beat Runner
summary: L'app di corsa con la musica al centro. Playlist curate per atmosfera o per ritmo, modalità che legano la musica al passo e suggerimenti sulla tua cadenza media, più GPS, ritmo e passi al minuto in diretta.
platform: android
year: 2026
client: Progetto personale
role: Ideazione, design e sviluppo
status: In arrivo su Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, Navigation 3, Coroutines & Flow, Firebase, Google Maps, Glance, Baseline Profile]
accent: '#C1EF00'
cover: ../../assets/projects/beatrunner/cover-photo.jpg
coverEffect: beatrunner-neon
coverPosition: right
featured: true
order: 1
highlights:
  - Playlist Atmosfera e Ritmiche, con BPM misurati
  - Modalità Libera e Metronomo sulla cadenza
  - Da ~16k righe XML e Fragment a 100% Compose
  - 11 moduli Gradle con convention plugin
  - Corsa che sopravvive alla chiusura dell'app
gallery:
  - src: ../../assets/projects/beatrunner/run.jpg
    caption: Corsa in diretta
  - src: ../../assets/projects/beatrunner/playlists.jpg
    caption: Playlist per correre
  - src: ../../assets/projects/beatrunner/detail.jpg
    caption: Dettaglio della corsa
  - src: ../../assets/projects/beatrunner/diary.jpg
    caption: Diario mese per mese
plain:
  summary: Un'app per chi corre con la musica nelle orecchie. Propone playlist che creano l'atmosfera giusta o che vanno a tempo con il tuo passo, e registra percorso, tempi e passi al minuto. L'ho ideata, disegnata e sviluppata da solo.
  tags: [App Android, Sport e musica, In arrivo su Google Play]
  challenge: "È nata nel 2021 per imparare Kotlin, arrivando da Java, e unisce le mie tre passioni: la corsa, la musica e lo sviluppo di app. La musica fa davvero correre meglio, lo dicono molti studi. Volevo un'app che la mettesse al centro, non come sottofondo."
  solution: Playlist curate in due famiglie. Le Atmosfera ti immergono in un mondo, dai videogiochi agli anime; le Ritmiche tengono un battito costante. Puoi correre in modalità Libera o Metronomo, dove la musica ti dà il passo. L'app conta i tuoi passi al minuto e ti suggerisce le playlist adatte alla tua cadenza media.
  result: Un'app curata in ogni dettaglio, veloce, in italiano e inglese, pronta per la pubblicazione su Google Play. Nel frattempo è diventata la mia palestra per ogni tecnica moderna di sviluppo Android.
  highlights:
    - Ideazione, design e sviluppo in autonomia
    - Musica scelta in base al tuo passo
    - Funziona anche a schermo spento e senza rete
    - Widget, condivisione social e assistente vocale
    - Disponibile in italiano e inglese
---

## L'idea

Beat Runner nasce nel 2021 come progetto personale per imparare **Kotlin**, arrivando da Java. Ho scelto un tema che mettesse insieme le mie tre passioni: la corsa, la musica e lo sviluppo di app.

Chi corre con la musica non pensa ai chilometri, pensa alla playlist. Beat Runner parte da qui: scegli la colonna sonora, premi Play e corri. Le playlist si aprono nell'app musicale che usi già (Spotify, SoundCloud, YouTube Music). L'app registra il percorso e ti dice quanta musica manca alla fine. Durante la corsa vedi tempo, distanza, ritmo, calorie e **cadenza**, cioè i passi al minuto letti dal contapassi del telefono. Un assistente vocale annuncia i traguardi anche a schermo spento.

## Perché la musica conta

Non è solo una sensazione. La ricerca sulla musica nello sport è ampia, e una meta-analisi pubblicata nel 2020 su *Psychological Bulletin* (Terry, Karageorghis e colleghi, oltre 130 studi) ha riassunto i risultati. Ascoltare musica durante l'attività fisica migliora l'umore, riduce la fatica percepita e migliora la prestazione. Gli effetti sono più marcati quando il **battito del brano è sincronizzato con il movimento**. Correre a tempo di musica aiuta a mantenere il passo e a usare l'energia in modo più efficiente.

Beat Runner lavora su entrambi i fronti, l'emozione e il ritmo.

- **Playlist Atmosfera**: curate per mood e immaginario, dalle colonne sonore dei videogiochi agli anime e ai brani orchestrali epici. Il ritmo cambia da un brano all'altro, e va bene così: il valore è il percorso emotivo, la carica che ti porta oltre il chilometro in cui vorresti fermarti.
- **Playlist Ritmiche**: costruite su un BPM costante, una fascia di cadenza come "165–170 passi/min", oppure su una sequenza di fasce pensata per l'allenamento.

Per distinguerle ho misurato i BPM di ogni brano del catalogo con strumenti scritti apposta in Python. Ascoltano l'audio di sistema mentre la playlist suona (WASAPI loopback) e stimano il tempo con onset envelope e autocorrelazione. Nel catalogo finiscono solo i BPM misurati, e il report propone l'etichetta: Ritmica quando almeno l'80% dei brani sta entro ±4% dal BPM mediano.

## Le modalità musica

Nella schermata delle playlist scegli come la musica accompagna la corsa. Puoi cambiarla prima di ogni uscita.

- **Libera**: scegli tu la playlist, il ritmo non conta. Va bene con ogni playlist e ogni account.
- **Metronomo**: è la musica a darti il passo. Beat Runner propone una playlist ritmica con tutti i brani sulla stessa fascia di cadenza, la tua. Durante la corsa non devi toccare niente: corri sulla musica.
- In arrivo: **Cambio con un tocco**, che ti avvisa quando cambi passo e propone la playlist giusta dalla notifica, e **Automatica**, che salta da sola i brani fuori dal tuo ritmo.

Le modalità che il tuo account non regge si vedono, ma spente e con il motivo. Per esempio, la modalità Automatica richiede un abbonamento Premium alla piattaforma musicale.

## La cadenza come filo conduttore

A ogni corsa l'app registra i passi al minuto, minuto per minuto, dal contapassi del telefono; senza sensore, li stima da velocità e altezza. Dalle ultime corse calcola la tua **cadenza media**. È lei a guidare i suggerimenti: in cima alla lista delle playlist compare "Per la tua cadenza: 168 passi/min" con la playlist che ci va a tempo, considerando anche i brani a metà o al doppio del tempo. La stessa cadenza è nel profilo, nel dettaglio di ogni corsa e nell'immagine da condividere.

## Da progetto per imparare a prodotto

Essendo nata per imparare, Beat Runner portava i segni di quel percorso: circa 16.000 righe Kotlin, 112 layout XML (metà duplicati per il tema scuro), 10 Fragment e una quindicina di dialog. La comunicazione passava per EventBus, non c'era dependency injection e non c'erano test. La schermata della mappa da sola superava le 1.900 righe.

Per portarla allo store l'ho rifondata. Non l'ho riscritta da zero: l'ho migrata **schermata per schermata**, con l'app sempre funzionante.

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
