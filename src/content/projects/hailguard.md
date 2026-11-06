---
title: HailGuard
summary: Avvisi di grandine fino a 24 ore prima, per un massimo di 6 posizioni. Pubblicata su Google Play come app a pagamento, senza abbonamenti.
platform: android
year: 2026
client: Progetto personale
role: Ideazione, design e sviluppo
status: Su Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, WorkManager, Retrofit, DataStore, Google Maps, Open-Meteo, Glance]
accent: '#7CC8FF'
cover: ../../assets/projects/hailguard/cover.jpg
order: 2
highlights:
  - Rischio calcolato da CAPE e probabilità di precipitazione
  - Controlli in background da 1 a 24 ore
  - Widget con le 3 posizioni più a rischio
  - Italiano e inglese, tema chiaro e scuro
links:
  - label: Scarica da Google Play
    href: https://play.google.com/store/apps/details?id=it.ildevid.hailguard
gallery:
  - src: ../../assets/projects/hailguard/map.jpg
    caption: Mappa con radar animato
  - src: ../../assets/projects/hailguard/detail.jpg
    caption: Dettaglio del rischio
  - src: ../../assets/projects/hailguard/settings.jpg
    caption: Intervallo e soglia
---

## Il problema

Una grandinata può distruggere in pochi minuti un raccolto, un'auto o una serra. Le app meteo generiche la mostrano come "temporale", senza un avviso dedicato. HailGuard si occupa di una cosa sola: dirti **se, dove e quando** è previsto rischio grandine nei posti che ti interessano.

È pensata per privati, agricoltori, assicuratori e chiunque abbia beni esposti alle intemperie.

## Come funziona

- Aggiungi fino a **6 posizioni**: cercando un indirizzo, inserendo le coordinate o toccando la mappa. Una può essere "Casa", con un'icona dedicata.
- Per ogni posizione l'app calcola il rischio delle prossime 24 ore su quattro livelli: Nessuno, Basso, Moderato, Elevato.
- Il calcolo usa le previsioni orarie di **Open-Meteo** e incrocia l'energia convettiva (CAPE) con la probabilità di precipitazione.
- Un worker di **WorkManager** controlla tutte le posizioni attive con l'intervallo che scegli (da 1 a 24 ore). Se il rischio supera la tua soglia arriva una notifica con livello, posizione, orario previsto e ore successive a rischio.
- L'allerta si condivide al volo con qualsiasi app di messaggistica, dal dettaglio o dalla notifica.

## Il design

Interfaccia interamente in **Jetpack Compose** con un tema glassmorphism: sfondi sfocati con BlurView, card semitrasparenti, gradienti e animazioni particellari. Sulla Google Map gira un overlay radar animato, con i geofence delle posizioni disegnati sopra.

Il bottom sheet di dettaglio mostra il livello di rischio e le ore critiche come chip scorrevoli. Il bottone "Condividi" compare solo quando c'è davvero qualcosa da condividere.

## Dal codice allo store

- Architettura **MVI + Clean Architecture** con Hilt.
- **Widget** Glance con le tre posizioni più a rischio, refresh manuale e apertura diretta della lista.
- Gestione dell'ottimizzazione batteria per non perdere i controlli in background.
- Modello di vendita semplice: **prezzo unico**, nessun abbonamento e nessun acquisto in-app, con Play Integrity contro la pirateria.
- Firebase Crashlytics e Performance per tenere d'occhio la stabilità dopo ogni rilascio.
