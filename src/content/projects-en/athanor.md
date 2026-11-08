---
title: L'Athanor dell'Alchimista
summary: The digital soul of Elisa Aiassa's exhibition. Every artwork has its own page, with the music composed for it and a guided mindfulness version.
platform: web
year: 2026
client: Elisa Aiassa · exhibition «L'alfabeto numerico dell'esistenza»
role: Web design and development
stack: [HTML5, CSS3, JavaScript, SVG, Canvas API, Media Session API]
accent: '#E8A33D'
monogram: Au
cover: ../../assets/projects/athanor/cover.jpg
coverEffect: athanor-breath
order: 4
galleryStyle: art
galleryTitle: The artworks of Elisa Aiassa
gallery:
  - { src: ../../assets/projects/athanor/opera-1.jpg, label: '1', caption: I am }
  - { src: ../../assets/projects/athanor/opera-2.jpg, label: '2', caption: Duality }
  - { src: ../../assets/projects/athanor/opera-3.jpg, label: '3', caption: The celestial triad }
  - { src: ../../assets/projects/athanor/opera-4.jpg, label: '4', caption: I create }
  - { src: ../../assets/projects/athanor/opera-5.jpg, label: '5', caption: I explore }
  - { src: ../../assets/projects/athanor/opera-6.jpg, label: '6', caption: I feel }
  - { src: ../../assets/projects/athanor/opera-7.jpg, label: '7', caption: 'Perfection, study, research' }
  - { src: ../../assets/projects/athanor/opera-8.jpg, label: '8', caption: Cosmic balance }
  - { src: ../../assets/projects/athanor/opera-9.jpg, label: '9', caption: Fulfilment and rebirth }
  - { src: ../../assets/projects/athanor/opera-11.jpg, label: '11', caption: The genius }
  - { src: ../../assets/projects/athanor/opera-22.jpg, label: '22', caption: The creator }
  - { src: ../../assets/projects/athanor/opera-33.jpg, label: '33', caption: The master }
  - { src: ../../assets/projects/athanor/opera-44.jpg, label: '44', caption: The shaman }
highlights:
  - 13 artworks, each with its own page
  - No framework, no build step
  - Dynamic palette extracted from the artwork
  - Native system audio controls
links:
  - label: 'Listen to an artwork: The genius'
    href: https://undevid.github.io/athanor/11_il_genio.html
  - label: Code on GitHub
    href: https://github.com/UNDevid/athanor
plain:
  summary: The website that accompanies Elisa Aiassa's art exhibition. In front of each artwork, visitors open its page on their phone and listen to the music composed for it.
  tags: [Website, Art and music, Online]
  challenge: Bring an immersive listening experience into an art exhibition, to enjoy on a phone in front of each painting, with no app to install.
  solution: 13 lightweight pages, one per artwork. Each one takes on the colors of the painting and works as a small music player, with an added guided meditation version.
  result: An elegant, instant experience for visitors that gives a voice to Elisa Aiassa's artworks and to the music of the trio Armonie di Gran Classe.
  highlights:
    - 13 artworks, each with its own page
    - No app to install
    - Music and guided meditation
    - Opens instantly, even on a weak connection
---

## The context

*«L'alfabeto numerico dell'esistenza»* ("The numerical alphabet of existence") is an exhibition of works by **Elisa Aiassa** built around numerology. There are the numbers from 1 to 9 (*I am*, *Duality*, *The celestial triad*…) and the master numbers 11, 22, 33 and 44 (*The genius*, *The creator*, *The master*, *The shaman*). Each artwork comes with a piece by the trio **Armonie di Gran Classe**.

My job was to give every artwork a web page to open at the exhibition on a phone: an immersive listening experience, free of distractions.

## The choices

Visitors open the page standing in front of the painting, often on whatever mobile connection they have. That's why I chose **vanilla HTML, CSS and JavaScript**: no framework, no build step, instant loading.

- **Atmosphere from the artwork**: the artwork's dominant colors are extracted with the Canvas API and feed three layers of blurred light that "breathe" in the background, in `mix-blend-mode: screen`.
- **The border is the timeline**: an SVG path runs around the edge of the screen and fills up as the track plays. It's recalculated every time the phone rotates.
- **A morphing Play button**: the icon turns from play to pause by animating a `clip-path`, with a ripple and a loading indicator.
- **Media Session API**: title, artist and controls appear on the lock screen and in notifications, just like a native app.

## Mindfulness mode

The master-number artworks have a second track: a guided meditation. A switch moves between the two versions with a 3D flip of the artwork, which swaps the image halfway through the turn. Two chapter chips ("Intro" and "Mindfulness") let you jump to the right point.

> The design adapts to the content: each artwork colors its own page.

## The result

13 lightweight, consistent pages, designed for portrait but polished in landscape too, with `dvh` and safe areas for screens with a notch. They're updated with a simple push to GitHub Pages.
