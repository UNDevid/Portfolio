---
title: Domenico Bini Soundboard
summary: The most iconic songs of the web's heavy metal "Maestro", always in your pocket. Free on Google Play, rated 5 stars by more than 200 fans.
platform: android
year: 2019
client: Personal project
role: Concept, design and development
status: Free on Google Play
stack: [Kotlin, Java, Android SDK, SceneView AR, YouTube Player, Firebase, WorkManager]
accent: '#FF6A2A'
cover: ../../assets/projects/soundboard/cover-en.jpg
coverEffect: soundboard-concert
coverPosition: left
order: 3
highlights:
  - 5.0 ★ from more than 200 reviews
  - 112 tracks, ringtones and alarms
  - The Maestro in augmented reality
  - Free and ad-free
links:
  - label: Get it on Google Play
    href: https://play.google.com/store/apps/details?id=it.ildevid.domenicobinisoundboard
galleryStyle: promo
gallery:
  - src: ../../assets/projects/soundboard/s1.jpg
    caption: The collection
  - src: ../../assets/projects/soundboard/s2.jpg
    caption: The Maestro's songs
  - src: ../../assets/projects/soundboard/s3.jpg
    caption: Voice search and wallpapers
plain:
  summary: A free app for fans of Domenico Bini, an Italian heavy metal star of the web. It collects 112 of his tracks to play, share or use as a ringtone.
  tags: [Android app, Entertainment, 5 ★ on Google Play]
  challenge: Fans wanted the Maestro's most iconic songs always at hand, to play and share with their friends.
  solution: A simple, fun soundboard, enriched over the years with voice search, themed wallpapers and even augmented reality.
  result: A 5-star rating from more than 200 reviews and over 1,000 downloads, with steady updates from 2019 to today.
  highlights:
    - 5.0 ★ from more than 200 reviews
    - Over 1,000 downloads
    - Free and ad-free
    - Steadily updated since 2019
---

## The idea

Domenico Bini is an Italian heavy metal singer-songwriter and guitarist who became a web phenomenon, with a crowd of devoted fans. The Soundboard started in 2019 from a simple idea: keeping his most iconic songs one tap away.

It's free, **ad-free** and collects no user data at all. Fans have rewarded it with an average of **5 stars from more than 200 reviews**.

## What it does

- **112 tracks** grouped by category (metal, in other languages, singer-songwriter), playable with a tap.
- Any track can be set as a **ringtone or alarm** and shared with any app.
- **Voice search**: just say a song's name to find it.
- **The Maestro in augmented reality**: point the camera at the room and he appears right there, with 3D models handled by SceneView and ARCore.
- Videos from the YouTube channel built into the app, and **themed wallpapers** downloaded from the cloud, such as the one for the release of the album *Sta andando tutto male*.
- During the pandemic the app also showed the color of your region, "announced" by the Maestro.

## Seven years of maintenance

A small app, but a living one: since the first commit in 2019 I've kept it up to date with every new Android release.

- Gradual migration from Java to **Kotlin**.
- Target SDK updated all the way to **Android 16**, with Gradle and libraries always kept current.
- Dependencies dropped from JCenter replaced or brought in locally, so no feature was lost.
- The AR part updated to the new versions of SceneView.
- Firebase Crashlytics to keep an eye on stability across the fans' many devices.
