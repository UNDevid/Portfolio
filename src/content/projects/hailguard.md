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
coverEffect: hail
order: 2
highlights:
  - Rischio calcolato da CAPE e probabilità di precipitazione
  - Modalità dinamica, da 18 ore a 30 minuti in base al meteo
  - Widget con le 3 posizioni più a rischio
  - Italiano e inglese, tema chiaro e scuro
links:
  - label: Scarica da Google Play
    href: https://play.google.com/store/apps/details?id=it.ildevid.hailguard
gallery:
  - src: ../../assets/projects/hailguard/map.jpg
    caption: L'area monitorata sulla mappa
  - src: ../../assets/projects/hailguard/detail.jpg
    caption: Dettaglio della posizione
  - src: ../../assets/projects/hailguard/settings.jpg
    caption: Intervallo e soglia di allerta
  - src: ../../assets/projects/hailguard/dynamic.jpg
    caption: La modalità dinamica
plain:
  summary: Avvisa fino a 24 ore prima se è prevista grandine nei luoghi che ti stanno a cuore, come casa, campi o auto. È in vendita su Google Play.
  tags: [App Android, Meteo, Su Google Play]
  challenge: Le app meteo parlano di "temporali" in generale. Chi ha un campo, una serra o un'auto all'aperto ha bisogno di sapere proprio se arriverà la grandine, e quando.
  solution: Un'app che fa una cosa sola, e la fa bene. Controlla da sola fino a 6 luoghi e manda una notifica quando il rischio supera la soglia scelta, con l'orario previsto e la possibilità di avvisare gli altri. Con la modalità dinamica decide da sola quanto spesso controllare. Quando il cielo è sereno risparmia batteria; se si avvicina un temporale controlla ogni mezz'ora.
  result: Un prodotto pubblicato e venduto su Google Play con un prezzo unico, senza abbonamenti, in italiano e inglese.
  highlights:
    - Prodotto in vendita su Google Play
    - Notifiche automatiche fino a 24 ore prima
    - Controlli più fitti quando arriva il temporale
    - Per privati, agricoltori e assicuratori
    - Widget per la schermata Home
---

## Il problema

Una grandinata può distruggere in pochi minuti un raccolto, un'auto o una serra. Le app meteo generiche la mostrano come "temporale", senza un avviso dedicato. HailGuard si occupa di una cosa sola: dirti **se, dove e quando** è previsto rischio grandine nei posti che ti interessano.

È pensata per privati, agricoltori, assicuratori e chiunque abbia beni esposti alle intemperie.

## Come funziona

- Aggiungi fino a **6 posizioni**: cercando un indirizzo, inserendo le coordinate o toccando la mappa. Una può essere "Casa", con un'icona dedicata.
- Per ogni posizione l'app calcola il rischio delle prossime 24 ore su quattro livelli: Nessuno, Basso, Moderato, Elevato.
- Il calcolo usa le previsioni orarie di **Open-Meteo** e incrocia l'energia convettiva (CAPE) con la probabilità di precipitazione.
- Un worker di **WorkManager** controlla tutte le posizioni attive con l'intervallo che scegli: fisso (da 1 a 24 ore) oppure **dinamico**. Se il rischio supera la tua soglia arriva una notifica con livello, posizione, orario previsto e ore successive a rischio.
- L'allerta si condivide al volo con qualsiasi app di messaggistica, dal dettaglio o dalla notifica.

## La modalità dinamica

Un intervallo fisso è sempre un compromesso. Ogni ora consuma batteria anche con il sole, ogni 12 ore rischia di arrivare tardi. La modalità dinamica decide da sola quando fare il controllo successivo, in base a quello che sta per succedere.

A ogni esecuzione il worker scarica le previsioni giornaliere dei prossimi 4 giorni per tutte le posizioni in parallelo. Per ogni giorno tiene il **caso peggiore** tra tutte le posizioni. Poi sceglie il livello di allerta, partendo dal più grave:

| Situazione prevista | Prossimo controllo |
|---|---|
| Temporale imminente nelle prossime 24 ore (CAPE ≥ 500 e pioggia probabile oltre il 60% o rovesci) | tra **30 minuti** |
| Forte instabilità entro 2 giorni (CAPE ≥ 300 con rovesci o pioggia oltre il 40%) | tra **2 ore** |
| Instabilità con piogge entro 3 giorni (CAPE ≥ 150) | tra **6 ore** |
| Qualche segnale debole entro 4 giorni | tra **12 ore** |
| Cielo tranquillo | tra **18 ore** |

La regola chiave: la grandine nasce dall'instabilità, quindi **la pioggia senza energia convettiva** (fronti e piogge stratiformi) **non accorcia l'intervallo**. Se le previsioni non arrivano, l'app sceglie un prudente controllo ogni 6 ore. Il risultato è massima protezione quando serve e quasi zero consumi quando il tempo è stabile.

Ogni passaggio tra i livelli resta tracciato nei log, e un dialog spiega all'utente cosa fa la modalità prima di attivarla.

## Il design

Interfaccia interamente in **Jetpack Compose** con un tema glassmorphism: sfondi sfocati con BlurView, card semitrasparenti, gradienti e animazioni particellari. Sulla Google Map gira un overlay radar animato, con i geofence delle posizioni disegnati sopra.

Il bottom sheet di dettaglio mostra il livello di rischio e le ore critiche come chip scorrevoli. Il bottone "Condividi" compare solo quando c'è davvero qualcosa da condividere.

## Dal codice allo store

- Architettura **MVI + Clean Architecture** con Hilt.
- **Widget** Glance con le tre posizioni più a rischio, refresh manuale e apertura diretta della lista.
- Gestione dell'ottimizzazione batteria per non perdere i controlli in background.
- Modello di vendita semplice: **prezzo unico**, nessun abbonamento e nessun acquisto in-app, con Play Integrity contro la pirateria.
- Firebase Crashlytics e Performance per tenere d'occhio la stabilità dopo ogni rilascio.
