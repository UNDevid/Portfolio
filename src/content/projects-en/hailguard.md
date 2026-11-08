---
title: HailGuard
summary: Hail alerts up to 24 hours ahead, for up to 6 locations. Published on Google Play as a paid app, with no subscriptions.
platform: android
year: 2026
client: Personal project
role: Concept, design and development
status: On Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, WorkManager, Retrofit, DataStore, Google Maps, Open-Meteo, Glance]
accent: '#7CC8FF'
cover: ../../assets/projects/hailguard/cover-en.jpg
coverEffect: hail
order: 2
highlights:
  - Risk computed from CAPE and precipitation probability
  - Dynamic mode, from every 18 hours to every 30 minutes depending on the weather
  - Widget with the 3 locations most at risk
  - Italian and English, light and dark theme
links:
  - label: Get it on Google Play
    href: https://play.google.com/store/apps/details?id=it.ildevid.hailguard
gallery:
  - src: ../../assets/projects/hailguard/map.jpg
    caption: The monitored area on the map
  - src: ../../assets/projects/hailguard/detail.jpg
    caption: Location detail
  - src: ../../assets/projects/hailguard/settings.jpg
    caption: Check interval and alert threshold
  - src: ../../assets/projects/hailguard/dynamic.jpg
    caption: Dynamic mode
plain:
  summary: It warns you up to 24 hours ahead when hail is forecast at the places you care about, such as your home, fields or car. It's on sale on Google Play.
  tags: [Android app, Weather, On Google Play]
  challenge: Weather apps talk about "thunderstorms" in general. Anyone with a field, a greenhouse or a car parked outside needs to know whether hail is actually coming, and when.
  solution: An app that does one thing and does it well. It checks up to 6 places on its own and sends a notification when the risk goes above the chosen threshold, with the expected time and a way to warn others. In dynamic mode it decides on its own how often to check. When the sky is clear it saves battery; when a storm is approaching it checks every half hour.
  result: A product published and sold on Google Play at a one-time price, with no subscriptions, in Italian and English.
  highlights:
    - A product on sale on Google Play
    - Automatic alerts up to 24 hours ahead
    - More frequent checks when a storm is coming
    - For individuals, farmers and insurers
    - Home screen widget
---

## The problem

A hailstorm can destroy a crop, a car or a greenhouse in minutes. General weather apps show it as a "thunderstorm", with no dedicated alert. HailGuard does one thing only: it tells you **if, where and when** hail is forecast at the places you care about.

It's built for individuals, farmers, insurers and anyone with property exposed to the weather.

## How it works

- Add up to **6 locations**: by searching for an address, entering coordinates or tapping the map. One of them can be "Home", with its own icon.
- For each location the app computes the risk for the next 24 hours on four levels: None, Low, Moderate, High.
- The calculation uses **Open-Meteo**'s hourly forecasts and combines convective energy (CAPE) with precipitation probability.
- A **WorkManager** worker checks every active location at the interval you choose: fixed (from 1 to 24 hours) or **dynamic**. If the risk goes above your threshold you get a notification with the level, the location, the expected time and the following hours at risk.
- The alert can be shared instantly with any messaging app, from the detail screen or from the notification.

## Dynamic mode

A fixed interval is always a compromise. Checking every hour drains the battery even when it's sunny; every 12 hours risks being too late. Dynamic mode decides on its own when to run the next check, based on what's about to happen.

On each run the worker downloads the daily forecasts for the next 4 days for every location in parallel. For each day it keeps the **worst case** across all locations. Then it picks the alert level, starting from the most severe:

| Forecast situation | Next check |
|---|---|
| Imminent thunderstorm in the next 24 hours (CAPE ≥ 500 and rain likelier than 60%, or showers) | in **30 minutes** |
| Strong instability within 2 days (CAPE ≥ 300 with showers or rain above 40%) | in **2 hours** |
| Instability with rain within 3 days (CAPE ≥ 150) | in **6 hours** |
| Some weak signals within 4 days | in **12 hours** |
| Calm skies | in **18 hours** |

The key rule: hail comes from instability, so **rain without convective energy** (fronts and stratiform rain) **doesn't shorten the interval**. If the forecasts don't arrive, the app falls back to a cautious check every 6 hours. The result is maximum protection when it's needed and near-zero battery use when the weather is stable.

Every change between levels is logged, and a dialog explains what the mode does before the user turns it on.

## The design

The interface is built entirely in **Jetpack Compose** with a glassmorphism theme: blurred backgrounds with BlurView, translucent cards, gradients and particle animations. An animated radar overlay runs on top of the Google Map, with the locations' geofences drawn over it.

The detail bottom sheet shows the risk level and the critical hours as scrollable chips. The "Share" button only appears when there's actually something to share.

## From code to store

- **MVI + Clean Architecture** with Hilt.
- Glance **widget** with the three locations most at risk, manual refresh and a direct link to the list.
- Battery optimization handling so background checks aren't missed.
- A simple business model: **one-time price**, no subscriptions and no in-app purchases, with Play Integrity against piracy.
- Firebase Crashlytics and Performance to keep an eye on stability after every release.
