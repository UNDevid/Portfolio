---
title: Beat Runner
summary: The running app with music at its heart. Playlists curated for atmosphere or for rhythm, modes that tie the music to your stride and suggestions based on your average cadence. Plus goals, a natural voice that works offline, Health Connect, and live GPS, pace and steps per minute.
platform: android
year: 2026
client: Personal project
role: Concept, design and development
status: Coming soon to Google Play
stack: [Kotlin, Jetpack Compose, MVI, Hilt, Navigation 3, Coroutines & Flow, Firebase, Google Maps, Health Connect, Glance, Baseline Profile]
accent: '#C1EF00'
cover: ../../assets/projects/beatrunner/cover-photo.jpg
coverEffect: beatrunner-neon
coverPosition: right
featured: true
order: 1
highlights:
  - Playlists with their tempo measured track by track
  - Free and Metronome modes based on cadence
  - Goals, an offline natural voice and auto pause
  - Health Connect, GPX/TCX/FIT import and GPX export
  - From ~16k lines of XML and Fragments to 100% Compose, in 12 modules
links:
  - label: "The study on music and exercise (2020)"
    href: https://pubmed.ncbi.nlm.nih.gov/31804098/
gallery:
  - src: ../../assets/projects/beatrunner/en/music.jpg
    caption: Playlists and music modes
  - src: ../../assets/projects/beatrunner/en/modes.jpg
    caption: How the music goes with your run
  - src: ../../assets/projects/beatrunner/en/tempo.jpg
    caption: Tempo, track by track
  - src: ../../assets/projects/beatrunner/en/goal.jpg
    caption: Goal of the run
  - src: ../../assets/projects/beatrunner/en/detail.jpg
    caption: Cadence, splits and elevation
  - src: ../../assets/projects/beatrunner/en/diary.jpg
    caption: Diary with the soundtrack of the month
  - src: ../../assets/projects/beatrunner/en/health.jpg
    caption: Health Connect and runs from other apps
plain:
  summary: An app for people who run with music in their ears. It suggests playlists that set the right atmosphere or keep time with your stride, records your route, times and steps per minute, and keeps you company with a natural voice. I conceived, designed and built it on my own.
  tags: [Android app, Sport and music, Coming soon to Google Play]
  challenge: "It started in 2021 as a way to learn Kotlin, coming from Java, and it brings together my three passions: running, music and building apps. Music really does make you run better, as many studies show. I wanted an app that put it at the center, not in the background."
  solution: "Playlists curated in families: Atmosphere playlists immerse you in a world, from video games to anime; Rhythmic playlists keep a steady beat; workout playlists change tempo in blocks. You can run in Free or Metronome mode, where the music sets your pace. The app counts your steps per minute, suggests playlists that match your cadence, helps you reach your goals and connects to other running apps through Health Connect."
  result: An app crafted down to the details, fast, in Italian and English, ready for release on Google Play. Along the way it has become my playground for every modern Android technique.
  highlights:
    - Conceived, designed and built on my own
    - Music chosen to match your stride
    - Goals for the run and for the week
    - A natural voice that works without a connection
    - Runs imported from Strava and other apps
    - Available in Italian and English
---

## The idea

Beat Runner started in 2021 as a personal project to learn **Kotlin**, coming from Java. I picked a theme that brought together my three passions: running, music and building apps.

People who run with music don't think about kilometers, they think about the playlist. Beat Runner starts from there: pick the soundtrack, press Play and run. Playlists open in the music app you already use (Spotify, SoundCloud, YouTube Music). The app records your route and tells you how much music is left. While running you see time, distance, current and average pace, the last kilometer's time, calories and **cadence**, the steps per minute read from the phone's step counter.

## Why music matters

It isn't just a feeling. In 2020 a [meta-analysis published in *Psychological Bulletin*](https://pubmed.ncbi.nlm.nih.gov/31804098/) (Terry, Karageorghis and colleagues) brought together **139 studies and almost 3,600 participants**. The finding: listening to music during exercise improves mood, performance and oxygen efficiency, and makes the effort feel lighter. The effect on performance is stronger with **fast-tempo music**.

So **tempo** matters, not just the song you like. That's where the idea came from: give every playlist a measured tempo and tie it to the runner's stride.

Beat Runner works on both fronts, emotion and rhythm.

- **Atmosphere playlists**: curated for mood and imagery, from video game soundtracks to anime and epic orchestral tracks. The tempo changes from track to track, and that's fine: their value is the emotional journey, the push that carries you past the kilometer where you'd want to stop.
- **Rhythmic playlists**: built on a steady BPM, a cadence band such as "165–170 steps/min".
- **Workout playlists**: a sequence of tempo bands. The app splits them into blocks from the tracks' tempo, announces and shows each block as you reach it, and shades them on the cadence chart.

To tell them apart I measured the BPM of every track in the catalog with tools I wrote in Python. They listen to the system audio while the playlist plays (WASAPI loopback) and estimate the tempo with an onset envelope and autocorrelation. Only measured BPM values go into the catalog, and the report suggests the label: Rhythmic when at least 80% of the tracks fall within ±4% of the median BPM. Each playlist's sheet shows the tempo **track by track**, as a step chart.

The covers come from the data too: the emblem of the music family, the tempo chart in the shape of its category and a neon color set by the pace. Runners can also give a run's playlist a thumbs up or down: the ones voted down are no longer suggested, and the anonymous totals help curate the catalog.

## Music modes

On the playlists screen you choose how the music goes with your run. You can change it before every run.

- **Free**: you pick the playlist, the tempo doesn't count. It works with every playlist and every account.
- **Metronome**: the music sets your pace. Beat Runner suggests a rhythmic playlist with every track in the same cadence band, yours. Nothing to touch while running: you run on the music.
- Coming soon: **One-tap switch**, which tells you when your pace changes and suggests the right playlist from the notification, and **Automatic**, which skips the tracks off your pace on its own.

Modes your account can't support are shown, but disabled and with the reason. Automatic mode, for example, needs a Premium subscription to the music platform.

## Cadence as the common thread

On every run the app records your steps per minute, minute by minute, from the phone's step counter; without the sensor it estimates them from speed and height. From your recent runs it works out your **average cadence**, and that drives the suggestions: at the top of the list you find the rhythmic playlist that keeps time with your stride, counting tracks at half or double tempo too. For every playlist the app tells you how much of it plays on your cadence. The same cadence appears on your profile, on every run's detail and in the image you share.

## Goals, voice and auto pause

- **Run goal**, by time or distance, picked with a slider before you start. The app suggests a playlist that lasts as long, shows a progress bar, and the voice tells you at halfway and at the end.
- **Weekly goal**, in kilometers or runs. You see it on the widget and at the end of each run; a dedicated screen shows your streak of weeks and the last twelve against the goal.
- A **voice coach** that speaks in natural sentences: distance and time, pace, calories, every few kilometers or minutes. While it talks the music goes down, then comes back. Besides the system voices there are **natural voices** (Piper models) that you download once and that work offline.
- **Auto pause**: when you stop, the run stops too, music included.
- Kilometers or miles across the app, voice included. Settings follow your account to every phone.

## Health Connect and other apps

Beat Runner doesn't want to be an island. Every run is saved to **Health Connect** with route, distance, calories and steps, and the heart rate from a watch or chest strap shows up in the detail.

It works the other way too: runs recorded by Strava, adidas Running and other apps come into the diary, once and without duplicates. You can also import **GPX, TCX and FIT** files, zipped ones and Strava's full data export included. Every run can be exported as GPX.

## The diary, the shoes and the year in music

- Every run's detail has pace, cadence and elevation charts, per-kilometer splits and a **full-screen map** with a slider to replay the run.
- **Shoes**, with a photo, kilometers worked out from your runs and a warning when it's time to replace them.
- A month-by-month diary with the **soundtrack of the month**, and in December and January the **year in music**: totals, best month, playlist and cadence, each one shareable.

## From learning project to product

Having started as a way to learn, Beat Runner carried the marks of that journey: about 16,000 lines of Kotlin, 112 XML layouts (half of them duplicated for the dark theme), 10 Fragments and around fifteen dialogs. Communication went through EventBus, there was no dependency injection and no tests. The map screen alone was over 1,900 lines.

To take it to the store I rebuilt its foundations. I didn't rewrite it from scratch: I migrated it **screen by screen**, with the app working at every step.

- **Clean Architecture + MVI**: immutable `State` in a `StateFlow`, a single entry point for `Intent`s, one-shot `Effect`s and pure reducers.
- **12 Gradle modules** (`core:domain` in pure Kotlin, `core:data`, `core:designsystem`, `core:ui`, six `feature:*` modules, the Baseline Profile module and the app) with shared convention plugins.
- **Navigation 3** and a single Activity: in the end no Fragments and no `nav_graph.xml`.
- Each migrated screen lives in its own feature module, hosted by a "shell" Fragment until everything is Compose. Then the shells disappear in one go.

## The run engine

The most delicate part. Segments, pauses, active time and calories are computed in the domain layer as pure, tested code. A `RunTracker` tied to the process rather than the screen keeps the run alive even if the map is destroyed. It saves a cache every 10 seconds, so if the app closes mid-run you pick up where you left off. The heading on the map comes from the track, not the compass: with the phone in your pocket, the compass tells where the phone is facing, not where you're running.

## A "neon glass" design system

I built a `core:designsystem` module with **liquid glass** surfaces (Haze and BlurView, even over the map), neon borders and glow, `StatTile`, `ProgressRing`, segmented tabs and sheets that blur the screen behind them. The theme uses **Material 3 Expressive** with the spring animations of the `MotionScheme`.

The interface takes on the chosen **playlist's mood**: a soft light in its colors behind the screens and over the map. The accent can be Volt, Cyan, Magenta, Orange, the phone's wallpaper color or the playlist's; the light theme works out its greys from the accent's hue.

> Glass can't be tested on Robolectric: the blur has to be checked on a real device. Everything else is covered by Roborazzi screenshot tests.

## Performance

- A **Baseline Profile**, generated and measured by a dedicated module, for faster startup.
- Compose without wasted work: immutable collections in the states, domain classes declared stable, remembered computations and charts drawn with `drawWithCache`, so labels aren't measured again on every frame. The Compose compiler reports turn on with a flag.

## The details that make the difference

- Weekly **widget** built with Glance: kilometers, goal and the playlist for your next run, with Play to start right away.
- **Sharing**: an image with the map or a photo and the run's figures drawn on top with canvas, in the playlist's colors.
- The run notification shows on the lock screen and tells you how far the goal still is.
- Every permission explained before it's requested, encrypted preferences kept out of backups.
