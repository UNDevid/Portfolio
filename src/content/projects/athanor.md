---
title: L'Athanor dell'Alchimista
summary: L'anima digitale della mostra di Elisa Aiassa. Ogni opera ha la sua pagina, con la musica composta per lei e una versione mindfulness guidata.
platform: web
year: 2026
client: Elisa Aiassa · mostra «L'alfabeto numerico dell'esistenza»
role: Design e sviluppo web
stack: [HTML5, CSS3, JavaScript, SVG, Canvas API, Media Session API]
accent: '#E8A33D'
monogram: Au
cover: ../../assets/projects/athanor/cover.jpg
coverEffect: athanor-breath
order: 4
galleryStyle: art
galleryTitle: Le opere di Elisa Aiassa
gallery:
  - { src: ../../assets/projects/athanor/opera-1.jpg, label: '1', caption: Io sono }
  - { src: ../../assets/projects/athanor/opera-2.jpg, label: '2', caption: La dualità }
  - { src: ../../assets/projects/athanor/opera-3.jpg, label: '3', caption: La triade celeste }
  - { src: ../../assets/projects/athanor/opera-4.jpg, label: '4', caption: Io creo }
  - { src: ../../assets/projects/athanor/opera-5.jpg, label: '5', caption: Io esploro }
  - { src: ../../assets/projects/athanor/opera-6.jpg, label: '6', caption: Io sento }
  - { src: ../../assets/projects/athanor/opera-7.jpg, label: '7', caption: 'Perfezione, studio, ricerca' }
  - { src: ../../assets/projects/athanor/opera-8.jpg, label: '8', caption: Equilibrio cosmico }
  - { src: ../../assets/projects/athanor/opera-9.jpg, label: '9', caption: Compimento e rinascita }
  - { src: ../../assets/projects/athanor/opera-11.jpg, label: '11', caption: Il genio }
  - { src: ../../assets/projects/athanor/opera-22.jpg, label: '22', caption: Il creatore }
  - { src: ../../assets/projects/athanor/opera-33.jpg, label: '33', caption: Il maestro }
  - { src: ../../assets/projects/athanor/opera-44.jpg, label: '44', caption: Lo sciamano }
highlights:
  - 13 opere, ognuna con la sua pagina
  - Zero framework, zero build step
  - Palette dinamica estratta dalla copertina
  - Controlli audio nativi del sistema
links:
  - label: "Ascolta un'opera: Il genio"
    href: https://undevid.github.io/athanor/11_il_genio.html
  - label: Codice su GitHub
    href: https://github.com/UNDevid/athanor
plain:
  summary: Il sito che accompagna la mostra d'arte di Elisa Aiassa. Davanti a ogni opera il visitatore apre la sua pagina con lo smartphone e ascolta la musica composta per lei.
  tags: [Sito web, Arte e musica, Online]
  challenge: Portare in una mostra d'arte un'esperienza d'ascolto immersiva, da vivere con lo smartphone davanti a ogni quadro, senza app da installare.
  solution: 13 pagine leggere, una per opera. Ognuna si colora con i toni del quadro e funziona come un piccolo lettore musicale, con in più una versione di meditazione guidata.
  result: Un'esperienza elegante e immediata per i visitatori, che dà voce alle opere di Elisa Aiassa e alla musica del trio Armonie di Gran Classe.
  highlights:
    - 13 opere, ognuna con la sua pagina
    - Nessuna app da installare
    - Musica e meditazione guidata
    - Si apre all'istante, anche con poca rete
---

## Il contesto

*«L'alfabeto numerico dell'esistenza»* è una mostra di opere di **Elisa Aiassa** costruita sulla numerologia. Ci sono i numeri dall'1 al 9 (*Io sono*, *La dualità*, *La triade celeste*…) e i numeri maestri 11, 22, 33 e 44 (*Il genio*, *Il creatore*, *Il maestro*, *Lo sciamano*). Ogni opera è accompagnata da un brano del trio **Armonie di Gran Classe**.

Il mio compito era dare a ogni opera una pagina web da aprire in mostra con lo smartphone: un'esperienza d'ascolto immersiva e senza distrazioni.

## Le scelte

Il pubblico apre la pagina in piedi davanti al quadro, spesso con una connessione mobile qualsiasi. Per questo ho scelto **HTML, CSS e JavaScript vanilla**: niente framework, niente build step, caricamento istantaneo.

- **Atmosfera dalla copertina**: i colori dominanti dell'opera vengono estratti con la Canvas API e alimentano tre livelli di luce sfocata che "respirano" sullo sfondo, in `mix-blend-mode: screen`.
- **Il bordo è la timeline**: un tracciato SVG percorre il perimetro dello schermo e si riempie con l'avanzare del brano. Si ricalcola a ogni rotazione del telefono.
- **Play che si trasforma**: l'icona passa da play a pausa animando un `clip-path`, con ripple e indicatore di caricamento.
- **Media Session API**: titolo, artista e controlli compaiono nella schermata di blocco e nelle notifiche, come in un'app nativa.

## La modalità mindfulness

Le opere dei numeri maestri hanno una seconda traccia: una meditazione guidata. Un interruttore passa da una versione all'altra con una rotazione 3D della copertina, che cambia immagine a metà del giro. Due chip di capitolo ("Intro" e "Mindfulness") permettono di saltare al punto giusto.

> Il design si adatta al contenuto: ogni opera colora la sua pagina.

## Il risultato

13 pagine leggere e coerenti tra loro, pensate per il portrait ma curate anche in landscape, con `dvh` e safe-area per gli schermi con il notch. Si aggiornano con un semplice push su GitHub Pages.
