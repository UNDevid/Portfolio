---
title: Beat Runner
summary: The running app with music at its heart. Playlists curated for atmosphere or for rhythm, modes that tie the music to your stride and suggestions based on your average cadence, plus live GPS, pace and steps per minute.
platform: android
year: 2026
client: Personal project
role: Concept, design and development
status: Coming soon to Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, Navigation 3, Coroutines & Flow, Firebase, Google Maps, Glance, Baseline Profile]
accent: '#C1EF00'
cover: ../../assets/projects/beatrunner/cover-photo.jpg
coverEffect: beatrunner-neon
coverPosition: right
featured: true
order: 1
highlights:
  - Atmosphere and Rhythmic playlists, with measured BPM
  - Free and Metronome modes based on cadence
  - From ~16k lines of XML and Fragments to 100% Compose
  - 11 Gradle modules with convention plugins
  - A run that survives the app being closed
links:
  - label: "The study on music and exercise (2020)"
    href: https://pubmed.ncbi.nlm.nih.gov/31804098/
gallery:
  - src: ../../assets/projects/beatrunner/en/run.jpg
    caption: Live run
  - src: ../../assets/projects/beatrunner/en/playlists.jpg
    caption: Playlists for running
  - src: ../../assets/projects/beatrunner/en/detail.jpg
    caption: Run detail
  - src: ../../assets/projects/beatrunner/en/diary.jpg
    caption: Month-by-month diary
plain:
  summary: An app for people who run with music in their ears. It suggests playlists that set the right atmosphere or keep time with your stride, and it records your route, times and steps per minute. I conceived, designed and built it on my own.
  tags: [Android app, Sport and music, Coming soon to Google Play]
  challenge: "It started in 2021 as a way to learn Kotlin, coming from Java, and it brings together my three passions: running, music and building apps. Music really does make you run better, as many studies show. I wanted an app that put it at the center, not in the background."
  solution: Playlists curated in two families. Atmosphere playlists immerse you in a world, from video games to anime; Rhythmic playlists keep a steady beat. You can run in Free or Metronome mode, where the music sets your pace. The app counts your steps per minute and suggests playlists that match your average cadence.
  result: An app crafted down to the details, fast, in Italian and English, ready for release on Google Play. Along the way it has become my playground for every modern Android technique.
  highlights:
    - Conceived, designed and built on my own
    - Music chosen to match your stride
    - Works with the screen off and without a connection
    - Widget, social sharing and voice coach
    - Available in Italian and English
---

## The idea

Beat Runner started in 2021 as a personal project to learn **Kotlin**, coming from Java. I picked a theme that brought together my three passions: running, music and building apps.

People who run with music don't think about kilometers, they think about the playlist. Beat Runner starts from there: pick the soundtrack, press Play and run. Playlists open in the music app you already use (Spotify, SoundCloud, YouTube Music). The app records your route and tells you how much music is left. While running you see time, distance, pace, calories and **cadence**, the steps per minute read from the phone's step counter. A voice coach announces your milestones even with the screen off.

## Why music matters

It isn't just a feeling. In 2020 a [meta-analysis published in *Psychological Bulletin*](https://pubmed.ncbi.nlm.nih.gov/31804098/) (Terry, Karageorghis and colleagues) brought together **139 studies and almost 3,600 participants**. The finding: listening to music during exercise improves mood, performance and oxygen efficiency, and makes the effort feel lighter. The effect on performance is stronger with **fast-tempo music**.

So **tempo** matters, not just the song you like. That's where the idea came from: give every playlist a measured tempo and tie it to the runner's stride.

Beat Runner works on both fronts, emotion and rhythm.

- **Atmosphere playlists**: curated for mood and imagery, from video game soundtracks to anime and epic orchestral tracks. The tempo changes from track to track, and that's fine: their value is the emotional journey, the push that carries you past the kilometer where you'd want to stop.
- **Rhythmic playlists**: built on a steady BPM, a cadence band such as "165–170 steps/min", or a sequence of bands designed for a workout.

To tell them apart I measured the BPM of every track in the catalog with tools I wrote in Python. They listen to the system audio while the playlist plays (WASAPI loopback) and estimate the tempo with an onset envelope and autocorrelation. Only measured BPM values go into the catalog, and the report suggests the label: Rhythmic when at least 80% of the tracks fall within ±4% of the median BPM.

## Music modes

On the playlists screen you choose how the music goes with your run. You can change it before every run.

- **Free**: you pick the playlist, the tempo doesn't count. It works with every playlist and every account.
- **Metronome**: the music sets your pace. Beat Runner suggests a rhythmic playlist with every track in the same cadence band, yours. Nothing to touch while running: you run on the music.
- Coming soon: **One-tap switch**, which tells you when your pace changes and suggests the right playlist from the notification, and **Automatic**, which skips the tracks off your pace on its own.

Modes your account can't support are shown, but disabled and with the reason. Automatic mode, for example, needs a Premium subscription to the music platform.

## Cadence as the common thread

On every run the app records your steps per minute, minute by minute, from the phone's step counter; without the sensor it estimates them from speed and height. From your recent runs it works out your **average cadence**, and that drives the suggestions: at the top of the playlist list you see "For your cadence: 168 steps/min" with the playlist that keeps time with it, counting tracks at half or double tempo too. The same cadence appears on your profile, on every run's detail and in the image you share.

## From learning project to product

Having started as a way to learn, Beat Runner carried the marks of that journey: about 16,000 lines of Kotlin, 112 XML layouts (half of them duplicated for the dark theme), 10 Fragments and around fifteen dialogs. Communication went through EventBus, there was no dependency injection and no tests. The map screen alone was over 1,900 lines.

To take it to the store I rebuilt its foundations. I didn't rewrite it from scratch: I migrated it **screen by screen**, with the app working at every step.

- **Clean Architecture + MVI**: immutable `State` in a `StateFlow`, a single entry point for `Intent`s, one-shot `Effect`s and pure reducers.
- **11 Gradle modules** (`core:domain` in pure Kotlin, `core:data`, `core:designsystem`, `feature:*`) with shared convention plugins.
- **Navigation 3** and a single Activity: in the end no Fragments and no `nav_graph.xml`.
- Each migrated screen lives in its own feature module, hosted by a "shell" Fragment until everything is Compose. Then the shells disappear in one go.

## The run engine

The most delicate part. Segments, pauses, active time and calories are computed in the domain layer as pure, tested code. A `RunTracker` tied to the process rather than the screen keeps the run alive even if the map is destroyed. It saves a cache every 10 seconds, so if the app closes mid-run you pick up where you left off.

## A "neon glass" design system

I built a `core:designsystem` module with frosted-glass surfaces (Haze and BlurView, even over the map), neon borders and glow, `StatTile`, `ProgressRing` and segmented tabs. The theme uses **Material 3 Expressive** with the spring animations of the `MotionScheme`. The accent is the user's choice or taken from the phone's wallpaper.

> Glass can't be tested on Robolectric: the blur has to be checked on a real device.

## The details that make the difference

- Weekly **widget** built with Glance: kilometers, running days and the playlist for your next run, with Play to start right away.
- **Sharing**: an image with the map or a photo and the run's figures drawn on top with canvas.
- A month-by-month run diary, with the soundtrack of the month.
- Every permission explained before it's requested, encrypted preferences kept out of backups, and a **Baseline Profile** for faster startup.
