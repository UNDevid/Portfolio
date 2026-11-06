---
# ⚠️ PROGETTO DI ESEMPIO: sostituiscilo con un tuo progetto reale (o elimina il file)
title: FieldOps
summary: App Android offline-first per tecnici sul campo. Interventi, foto e firme si sincronizzano anche con connettività instabile.
platform: android
year: 2025
client: Cliente di esempio
role: Lead Android Developer
stack: [Kotlin, Jetpack Compose, Room, WorkManager, Hilt, Retrofit]
accent: '#3DDC84'
order: 2
highlights:
  - Architettura offline-first con sync in background
  - UI 100% Jetpack Compose + Material 3
  - Crash-free rate > 99.8%
links:
  - label: Google Play
    href: https://play.google.com/
---

## Il contesto

Il cliente gestiva gli interventi con moduli cartacei. Serviva un'app robusta da usare in cantiere, dove la connessione è un lusso.

## Architettura

- **Single source of truth** su Room, con `Flow` esposti dai repository.
- Sincronizzazione differenziale con `WorkManager` e retry esponenziale.
- Moduli feature separati per velocizzare le build e isolare le responsabilità.

## Risultati

Tempi di compilazione dei rapporti ridotti drasticamente e zero dati persi nei primi mesi di utilizzo.
