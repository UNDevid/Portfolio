---
title: Beat Runner
summary: L'app di corsa con la musica al centro. Playlist curate per atmosfera o per ritmo, modalità che legano la musica al passo e suggerimenti sulla tua cadenza media. In più obiettivi, voce naturale anche offline, Health Connect, e GPS, ritmo e passi al minuto in diretta.
platform: android
year: 2026
client: Progetto personale
role: Ideazione, design e sviluppo
status: In arrivo su Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, Navigation 3, Coroutines & Flow, Firebase, Google Maps, Health Connect, Glance, Baseline Profile]
accent: '#C1EF00'
cover: ../../assets/projects/beatrunner/cover-photo.jpg
coverEffect: beatrunner-neon
coverPosition: right
featured: true
order: 1
highlights:
  - Playlist con il ritmo misurato brano per brano
  - Modalità Libera e Metronomo sulla cadenza
  - Obiettivi, voce naturale offline e pausa automatica
  - Health Connect, import GPX/TCX/FIT ed export GPX
  - Da ~16k righe XML e Fragment a 100% Compose, in 12 moduli
links:
  - label: "Lo studio su musica e sport (2020)"
    href: https://pubmed.ncbi.nlm.nih.gov/31804098/
gallery:
  - src: ../../assets/projects/beatrunner/music.jpg
    caption: Playlist e modalità musica
  - src: ../../assets/projects/beatrunner/modes.jpg
    caption: Come la musica accompagna la corsa
  - src: ../../assets/projects/beatrunner/tempo.jpg
    caption: Il ritmo, brano per brano
  - src: ../../assets/projects/beatrunner/goal.jpg
    caption: Obiettivo della corsa
  - src: ../../assets/projects/beatrunner/detail.jpg
    caption: Cadenza, parziali e altimetria
  - src: ../../assets/projects/beatrunner/diary.jpg
    caption: Diario con la colonna sonora del mese
  - src: ../../assets/projects/beatrunner/health.jpg
    caption: Health Connect e corse da altre app
plain:
  summary: Un'app per chi corre con la musica nelle orecchie. Propone playlist che creano l'atmosfera giusta o che vanno a tempo con il tuo passo, registra percorso, tempi e passi al minuto e ti accompagna con una voce naturale. L'ho ideata, disegnata e sviluppata da solo.
  tags: [App Android, Sport e musica, In arrivo su Google Play]
  challenge: "È nata nel 2021 per imparare Kotlin, arrivando da Java, e unisce le mie tre passioni: la corsa, la musica e lo sviluppo di app. La musica fa davvero correre meglio, lo dicono molti studi. Volevo un'app che la mettesse al centro, non come sottofondo."
  solution: "Playlist curate in famiglie: le Atmosfera ti immergono in un mondo, dai videogiochi agli anime; le Ritmiche tengono un battito costante; quelle da allenamento cambiano ritmo a blocchi. Puoi correre in modalità Libera o Metronomo, dove la musica ti dà il passo. L'app conta i tuoi passi al minuto, ti suggerisce le playlist adatte alla tua cadenza, ti aiuta a raggiungere i tuoi obiettivi e si collega alle altre app di corsa tramite Health Connect."
  result: Un'app curata in ogni dettaglio, veloce, in italiano e inglese, pronta per la pubblicazione su Google Play. Nel frattempo è diventata la mia palestra per ogni tecnica moderna di sviluppo Android.
  highlights:
    - Ideazione, design e sviluppo in autonomia
    - Musica scelta in base al tuo passo
    - Obiettivi per la corsa e per la settimana
    - Voce naturale che funziona anche senza rete
    - Corse importate da Strava e dalle altre app
    - Disponibile in italiano e inglese
---

## L'idea

Beat Runner nasce nel 2021 come progetto personale per imparare **Kotlin**, arrivando da Java. Ho scelto un tema che mettesse insieme le mie tre passioni: la corsa, la musica e lo sviluppo di app.

Chi corre con la musica non pensa ai chilometri, pensa alla playlist. Beat Runner parte da qui: scegli la colonna sonora, premi Play e corri. Le playlist si aprono nell'app musicale che usi già (Spotify, SoundCloud, YouTube Music). L'app registra il percorso e ti dice quanta musica manca alla fine. Durante la corsa vedi tempo, distanza, ritmo attuale e medio, il tempo dell'ultimo chilometro, calorie e **cadenza**, cioè i passi al minuto letti dal contapassi del telefono.

## Perché la musica conta

Non è solo una sensazione. Nel 2020 una [meta-analisi pubblicata su *Psychological Bulletin*](https://pubmed.ncbi.nlm.nih.gov/31804098/) (Terry, Karageorghis e colleghi) ha messo insieme **139 studi e quasi 3.600 partecipanti**. Il risultato: ascoltare musica durante l'attività fisica migliora l'umore, la prestazione e l'efficienza nell'uso dell'ossigeno, e fa percepire meno la fatica. L'effetto sulla prestazione è più forte con la **musica dal ritmo veloce**.

Il **ritmo** conta, quindi, e non solo la canzone che piace. Da qui l'idea di dare a ogni playlist un tempo misurato e di legarlo al passo di chi corre.

Beat Runner lavora su entrambi i fronti, l'emozione e il ritmo.

- **Playlist Atmosfera**: curate per mood e immaginario, dalle colonne sonore dei videogiochi agli anime e ai brani orchestrali epici. Il ritmo cambia da un brano all'altro, e va bene così: il valore è il percorso emotivo, la carica che ti porta oltre il chilometro in cui vorresti fermarti.
- **Playlist Ritmiche**: costruite su un BPM costante, una fascia di cadenza come "165–170 passi/min".
- **Playlist da allenamento**: una sequenza di fasce di ritmo. L'app la divide in blocchi dal tempo dei brani, te li annuncia e te li mostra quando arrivano, e li ritrovi evidenziati sul grafico della cadenza.

Per distinguerle ho misurato i BPM di ogni brano del catalogo con strumenti scritti apposta in Python. Ascoltano l'audio di sistema mentre la playlist suona (WASAPI loopback) e stimano il tempo con onset envelope e autocorrelazione. Nel catalogo finiscono solo i BPM misurati, e il report propone l'etichetta: Ritmica quando almeno l'80% dei brani sta entro ±4% dal BPM mediano. Nella scheda di ogni playlist si vede il ritmo **brano per brano**, in un grafico a gradini.

Anche le copertine vengono dai dati: l'emblema della famiglia musicale, il grafico del tempo nella forma della categoria e un colore neon che dipende dal ritmo. E chi corre può dare un pollice su o giù alla playlist di una corsa: quelle bocciate non vengono più suggerite, e i totali anonimi aiutano a curare il catalogo.

## Le modalità musica

Nella schermata delle playlist scegli come la musica accompagna la corsa. Puoi cambiarla prima di ogni uscita.

- **Libera**: scegli tu la playlist, il ritmo non conta. Va bene con ogni playlist e ogni account.
- **Metronomo**: è la musica a darti il passo. Beat Runner propone una playlist ritmica con tutti i brani sulla stessa fascia di cadenza, la tua. Durante la corsa non devi toccare niente: corri sulla musica.
- In arrivo: **Cambio con un tocco**, che ti avvisa quando cambi passo e propone la playlist giusta dalla notifica, e **Automatica**, che salta da sola i brani fuori dal tuo ritmo.

Le modalità che il tuo account non regge si vedono, ma spente e con il motivo. Per esempio, la modalità Automatica richiede un abbonamento Premium alla piattaforma musicale.

## La cadenza come filo conduttore

A ogni corsa l'app registra i passi al minuto, minuto per minuto, dal contapassi del telefono; senza sensore, li stima da velocità e altezza. Dalle ultime corse calcola la tua **cadenza media**. È lei a guidare i suggerimenti: in cima alla lista compare la playlist ritmica che va a tempo con il tuo passo, considerando anche i brani a metà o al doppio del tempo. Di ogni playlist l'app ti dice quanta parte suona sulla tua cadenza. La stessa cadenza è nel profilo, nel dettaglio di ogni corsa e nell'immagine da condividere.

## Obiettivi, voce e pausa automatica

- **Obiettivo della corsa**, a tempo o a distanza, scelto con uno slider prima di partire. L'app suggerisce una playlist che dura altrettanto, mostra una barra di avanzamento e la voce ti avvisa a metà e alla fine.
- **Obiettivo della settimana**, in chilometri o in corse. Lo vedi nel widget e a fine corsa; una schermata dedicata mostra le settimane di fila e le ultime dodici a confronto con l'obiettivo.
- **Assistente vocale** che parla in frasi naturali: distanza e tempo, ritmo, calorie, ogni tot chilometri o minuti. Mentre parla abbassa la musica e poi la riporta su. Oltre alle voci del sistema ci sono **voci naturali** (modelli Piper) che si scaricano una volta e funzionano anche offline.
- **Pausa automatica**: quando ti fermi, si ferma anche la corsa, musica compresa.
- Chilometri o miglia in tutta l'app, voce compresa. Le impostazioni seguono l'account su ogni telefono.

## Health Connect e le altre app

Beat Runner non vuole essere un'isola. Ogni corsa si salva in **Health Connect** con percorso, distanza, calorie e passi, e il battito di un orologio o di una fascia compare nel dettaglio.

Funziona anche al contrario: le corse registrate da Strava, adidas Running e dalle altre app arrivano nel diario, una volta sola e senza doppioni. Si importano anche file **GPX, TCX e FIT**, compresi gli zip e l'intero archivio di dati di Strava. Ogni corsa si può esportare in GPX.

## Il diario, le scarpe e l'anno in musica

- Il dettaglio di ogni corsa ha i grafici di ritmo, cadenza e altimetria, i parziali per chilometro e una **mappa a schermo intero** con uno slider per ripercorrere la corsa.
- Le **scarpe**, con foto, chilometri calcolati dalle corse e un avviso quando è ora di cambiarle.
- Il diario mese per mese con la **colonna sonora del mese**, e a dicembre e gennaio l'**anno in musica**: totali, mese migliore, playlist e cadenza, ognuno da condividere.

## Da progetto per imparare a prodotto

Essendo nata per imparare, Beat Runner portava i segni di quel percorso: circa 16.000 righe Kotlin, 112 layout XML (metà duplicati per il tema scuro), 10 Fragment e una quindicina di dialog. La comunicazione passava per EventBus, non c'era dependency injection e non c'erano test. La schermata della mappa da sola superava le 1.900 righe.

Per portarla allo store l'ho rifondata. Non l'ho riscritta da zero: l'ho migrata **schermata per schermata**, con l'app sempre funzionante.

- **Clean Architecture + MVI**: `State` immutabile in `StateFlow`, un solo punto di ingresso per gli `Intent`, `Effect` one-shot e reducer puri.
- **12 moduli Gradle** (`core:domain` in Kotlin puro, `core:data`, `core:designsystem`, `core:ui`, sei `feature:*`, il modulo del Baseline Profile e l'app) con convention plugin condivisi.
- **Navigation 3** e una sola Activity: alla fine nessun Fragment, nessun `nav_graph.xml`.
- Ogni schermata migrata vive nel suo modulo feature, ospitata da un Fragment "guscio" finché tutto non è Compose. Poi i gusci spariscono in un colpo.

## Il motore della corsa

La parte più delicata. Il calcolo di segmenti, pause, tempo attivo e calorie vive nel domain come codice puro e testato. Un `RunTracker` legato al processo, non allo schermo, tiene viva la corsa anche se la mappa viene distrutta. Salva una cache ogni 10 secondi, così se l'app si chiude durante una corsa la riprendi da dove eri. La direzione sulla mappa si calcola dalla traccia, non dalla bussola: con il telefono in tasca la bussola dice dove guarda il telefono, non dove corri.

## Un design system "neon glass"

Ho costruito un modulo `core:designsystem` con superfici di **liquid glass** (Haze e BlurView, anche sopra la mappa), bordi e glow neon, `StatTile`, `ProgressRing`, tab segmentate e sheet che sfocano lo schermo dietro. Il tema usa **Material 3 Expressive** con le animazioni a molla del `MotionScheme`.

L'interfaccia prende il **mood della playlist** scelta: una luce morbida nei suoi colori dietro le schermate e sopra la mappa. L'accento si sceglie tra Volt, Ciano, Magenta, Arancio, il colore dello sfondo del telefono o quello della playlist; il tema chiaro ricava i suoi grigi dalla tinta dell'accento.

> Il vetro non si testa su Robolectric: il blur va guardato su un dispositivo vero. Per il resto ci sono gli screenshot test con Roborazzi.

## Prestazioni

- **Baseline Profile** generato e misurato da un modulo dedicato, per un avvio più rapido.
- Compose senza lavoro inutile: collezioni immutabili negli stati, classi del domain dichiarate stabili, calcoli ricordati e grafici disegnati con `drawWithCache`, così le etichette non si rimisurano a ogni frame. I report del compilatore Compose si attivano con un flag.

## I dettagli che fanno la differenza

- **Widget** della settimana con Glance: chilometri, obiettivo e la playlist della prossima uscita, con Play per partire subito.
- **Condivisione**: un'immagine con mappa o foto e i numeri della corsa disegnati sopra su canvas, nei colori della playlist.
- La notifica della corsa si vede anche dalla schermata di blocco e ti dice quanto manca all'obiettivo.
- Ogni permesso spiegato prima di chiederlo, preferenze cifrate escluse dai backup.
