// ─── Lingue del sito ────────────────────────────────────────────────
// Italiano alla radice (/), inglese sotto /en/. Ogni testo dell'interfaccia vive qui, nelle due lingue.
import { url } from './utils';

export const langs = ['it', 'en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'it';

/** Percorso interno nella lingua indicata: lpath('/projects/x/', 'en') → /en/projects/x/ (con il base). */
export function lpath(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return url(lang === 'en' ? `/en${clean}` : clean);
}

type Pillar = { title: string; text: string; tag: string };

const it = {
  meta: {
    htmlLang: 'it',
    ogLocale: 'it_IT',
    skip: 'Vai al contenuto',
    caseStudy: 'Case study',
  },
  langSwitch: { label: 'Lingua', current: 'Italiano', other: 'English' },
  anchors: { projects: 'progetti', approach: 'approccio', about: 'chi-sono', contact: 'contatti' },
  nav: {
    projects: 'Progetti',
    approach: 'Approccio',
    about: 'Chi sono',
    contact: 'Contatti',
    cta: 'Parliamone',
    ctaAria: 'Parliamone: vai ai contatti',
    main: 'Principale',
    home: 'home',
  },
  view: {
    toggle: 'Dettagli tecnici',
    title: 'Mostra i dettagli tecnici: architettura, stack e scelte di codice',
  },
  hero: {
    available: 'Disponibile per nuovi progetti',
    line1: 'Creo app che',
    line2: 'si sentono native.',
    intro: {
      plain:
        "Progetto e realizzo app Android e siti web, dall'idea alla pubblicazione sugli store, e ho esperienza con Flutter per le app multipiattaforma. Unisco solide competenze tecniche a una grande attenzione per il design.",
      tech: "App Android native, Flutter cross-platform ed esperienze web che lasciano il segno. Dal pixel all'architettura, ogni dettaglio è una scelta.",
    },
    seeProjects: 'Guarda i progetti',
    contactMe: 'Contattami',
    stats: { projects: 'Progetti', platforms: 'Piattaforme', solo: 'In autonomia' },
  },
  mockup: {
    open: (name: string) => `Apri il progetto ${name}`,
    hail: { rows: ['Campo', 'Serra', 'Auto'], risks: ['Elevato', 'Moderato', 'Nessuno'] },
    week: { title: 'Questa settimana', km: '12,4 km', runs: '3 corse', days: ['L', 'M', 'M', 'G', 'V', 'S', 'D'], playlist: 'Force your way' },
    phoneAria: 'Telefono con le app e i siti dei miei progetti',
    themed: 'Colori da',
  },
  marquee: {
    skillsLabel: 'Competenze',
    stackLabel: 'Tecnologie',
    skills: [
      'App Android', 'App multipiattaforma con Flutter', 'Siti web', 'Design delle interfacce',
      'Esperienza utente', 'Pubblicazione sugli store', 'Manutenzione nel tempo', 'Lavoro in autonomia',
      'Dialogo con il cliente', 'Accessibilità', 'App veloci e affidabili', 'Italiano e inglese',
    ],
  },
  projects: {
    eyebrow: 'Lavori selezionati',
    title1: 'Progetti realizzati',
    title2: "dall'idea allo store.",
    all: 'Tutti',
    filterAria: 'Filtra per piattaforma',
    featured: '★ In evidenza',
    coverAlt: (title: string) => `Anteprima di ${title}`,
  },
  approach: {
    eyebrow: 'Approccio',
    title1: 'Sviluppo con',
    title2: 'occhio da designer.',
    text: "Lavoro in autonomia end-to-end: dall'analisi con il cliente fino alla pubblicazione sugli store. Codice e design sono la stessa conversazione.",
    steps: ['Ascolto', 'Prototipo', 'Sviluppo', 'Rilascio', 'Evoluzione'],
    pillars: [
      {
        plain: { title: "Dall'idea allo store", text: "Seguo il progetto dall'inizio alla fine: ascolto le esigenze, disegno l'esperienza, sviluppo l'app e la pubblico. Un solo interlocutore, nessun passaggio di mano.", tag: 'Autonomia · Comunicazione' },
        tech: { title: 'Architettura solida', text: 'Clean Architecture, moduli separati e flussi di dati unidirezionali. Codice testabile, che regge la crescita del prodotto.', tag: 'MVVM · MVI · DI' },
      },
      {
        plain: { title: 'Cura per il design', text: 'Interfacce belle e intuitive, con animazioni che aiutano a capire invece di distrarre. Le persone devono sapere cosa fare senza pensarci.', tag: 'Esperienza utente · Interfacce' },
        tech: { title: 'UI curata al pixel', text: 'Interfacce in Jetpack Compose e Flutter fedeli al design, con motion design significativo e Material 3 usato con criterio.', tag: 'Compose · Motion' },
      },
      {
        plain: { title: 'App veloci e affidabili', text: 'Si aprono in un attimo, non si bloccano e funzionano anche quando la connessione è debole. La qualità si misura, non si promette.', tag: 'Qualità · Stabilità' },
        tech: { title: 'Performance reali', text: 'Avvio rapido, liste fluide a 120Hz, consumi sotto controllo. Misuro con profiler e baseline profile, non a sensazione.', tag: 'Profiling · R8' },
      },
      {
        plain: { title: 'Pensate per tutti', text: "Testi leggibili, colori a contrasto e piena compatibilità con le funzioni di accessibilità del telefono. Un'app accessibile è un'app fatta meglio.", tag: 'Accessibilità · Più lingue' },
        tech: { title: 'Accessibile a tutti', text: "Contrasto, TalkBack, dimensioni del testo dinamiche. Un'app accessibile è semplicemente un'app fatta meglio.", tag: 'a11y · i18n' },
      },
    ] as { plain: Pillar; tech: Pillar }[],
  },
  about: {
    eyebrow: 'Chi sono',
    title1: (n: number) => `Da ${n} anni`,
    title2: 'costruisco app Android.',
    text: [
      "Sono Davide, Senior Android Developer a Torino. Ho iniziato nel 2016 con Java e oggi lavoro in Kotlin e Jetpack Compose, come consulente e freelance per realtà come Reply e Accenture.",
      "Ho lavorato su pagamenti digitali, moto connesse via Bluetooth, app per editoria, turismo e banche, fino alle app di sport in diretta. Nel tempo libero creo app mie, come quelle qui sopra, e corro con la musica nelle orecchie.",
    ],
    stats: { years: 'Anni di esperienza', companies: 'Aziende e clienti', apps: 'App sul Play Store' },
    journey: 'Percorso',
    now: 'oggi',
    education: 'Formazione',
    cv: 'Scarica il CV',
    cvOther: 'English CV',
  },
  contact: {
    eyebrow: 'Contatti',
    title1: "Hai un'idea?",
    title2: "Rendiamola un'app.",
    text: 'Raccontami il tuo progetto: ti rispondo al più presto.',
    email: 'Scrivimi una email',
    copied: 'Copiata ✓',
    location: 'Italia · Remote',
  },
  footer: { built: 'Realizzato con Astro' },
  project: {
    back: '← Tutti i progetti',
    meta: { client: 'Cliente', year: 'Anno', platform: 'Piattaforma', role: 'Ruolo' },
    inBrief: 'In breve',
    story: { challenge: 'La sfida', solution: 'Cosa ho fatto', result: 'Il risultato' },
    techCta: {
      title: 'Ti interessa il lato tecnico?',
      text: 'Architettura, stack e scelte di codice di questo progetto.',
      button: 'Mostra i dettagli tecnici',
    },
    keyPoints: 'Punti chiave',
    stack: 'Stack',
    highlights: 'Highlights',
    next: 'Prossimo progetto →',
    gallery: { phone: 'Schermate', art: 'Le opere' },
    reviews: { title: 'Cosa dicono i fan', aria: 'Recensioni degli utenti. Scorrono da sole: passa sopra o scorri per fermarle.', stars: (n: number) => `${n} stelle su 5`, locale: 'it-IT' },
  },
  beatrunner: { tagline1: 'La colonna sonora', tagline2: 'della tua corsa' },
};

type Dict = typeof it;

const en: Dict = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    skip: 'Skip to content',
    caseStudy: 'Case study',
  },
  langSwitch: { label: 'Language', current: 'English', other: 'Italiano' },
  anchors: { projects: 'projects', approach: 'approach', about: 'about', contact: 'contact' },
  nav: {
    projects: 'Projects',
    approach: 'Approach',
    about: 'About',
    contact: 'Contact',
    cta: "Let's talk",
    ctaAria: "Let's talk: go to contact",
    main: 'Main',
    home: 'home',
  },
  view: {
    toggle: 'Technical details',
    title: 'Show the technical details: architecture, stack and code decisions',
  },
  hero: {
    available: 'Available for new projects',
    line1: 'I build apps',
    line2: 'that feel native.',
    intro: {
      plain:
        'I design and build Android apps and websites, from the first idea to release on the stores, and I have experience with Flutter for cross-platform apps. I pair solid engineering with a strong eye for design.',
      tech: 'Native Android apps, cross-platform Flutter and web experiences that leave a mark. From pixel to architecture, every detail is a decision.',
    },
    seeProjects: 'See the projects',
    contactMe: 'Contact me',
    stats: { projects: 'Projects', platforms: 'Platforms', solo: 'Built solo' },
  },
  mockup: {
    open: (name: string) => `Open the ${name} project`,
    hail: { rows: ['Field', 'Greenhouse', 'Car'], risks: ['High', 'Moderate', 'None'] },
    week: { title: 'This week', km: '12.4 km', runs: '3 runs', days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], playlist: 'Force your way' },
    phoneAria: 'A phone with the apps and websites of my projects',
    themed: 'Colors from',
  },
  marquee: {
    skillsLabel: 'Skills',
    stackLabel: 'Technologies',
    skills: [
      'Android apps', 'Cross-platform apps with Flutter', 'Websites', 'Interface design',
      'User experience', 'Store releases', 'Long-term maintenance', 'Working independently',
      'Working with clients', 'Accessibility', 'Fast, reliable apps', 'Italian and English',
    ],
  },
  projects: {
    eyebrow: 'Selected work',
    title1: 'Projects I built',
    title2: 'from idea to store.',
    all: 'All',
    filterAria: 'Filter by platform',
    featured: '★ Featured',
    coverAlt: (title: string) => `Preview of ${title}`,
  },
  approach: {
    eyebrow: 'Approach',
    title1: 'Engineering with',
    title2: "a designer's eye.",
    text: "I work end to end on my own: from the first talk with the client to the release on the stores. Code and design are the same conversation.",
    steps: ['Listen', 'Prototype', 'Build', 'Release', 'Evolve'],
    pillars: [
      {
        plain: { title: 'From idea to store', text: 'I follow the project from start to finish: I listen to the needs, design the experience, build the app and publish it. One point of contact, no hand-offs.', tag: 'Ownership · Communication' },
        tech: { title: 'Solid architecture', text: 'Clean Architecture, separate modules and unidirectional data flow. Testable code that holds up as the product grows.', tag: 'MVVM · MVI · DI' },
      },
      {
        plain: { title: 'Care for design', text: 'Beautiful, intuitive interfaces, with animations that help people understand instead of distracting them. People should know what to do without thinking.', tag: 'User experience · Interfaces' },
        tech: { title: 'Pixel-perfect UI', text: 'Interfaces in Jetpack Compose and Flutter faithful to the design, with meaningful motion and Material 3 used with judgement.', tag: 'Compose · Motion' },
      },
      {
        plain: { title: 'Fast and reliable apps', text: "They open in an instant, don't freeze and keep working when the connection is weak. Quality is measured, not promised.", tag: 'Quality · Stability' },
        tech: { title: 'Real performance', text: 'Fast startup, smooth 120Hz lists, battery under control. I measure with profilers and baseline profiles, not by feel.', tag: 'Profiling · R8' },
      },
      {
        plain: { title: 'Built for everyone', text: "Readable text, contrasting colors and full support for the phone's accessibility features. An accessible app is a better app.", tag: 'Accessibility · Languages' },
        tech: { title: 'Accessible to all', text: 'Contrast, TalkBack, dynamic text sizes. An accessible app is simply a better-made app.', tag: 'a11y · i18n' },
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title1: (n: number) => `For ${n} years`,
    title2: "I've been building Android apps.",
    text: [
      "I'm Davide, a Senior Android Developer based in Turin, Italy. I started in 2016 with Java and today I work with Kotlin and Jetpack Compose, as a consultant and freelancer for companies such as Reply and Accenture.",
      "I've worked on digital payments, Bluetooth-connected motorbikes, apps for publishing, tourism and banking, and live sport apps. In my spare time I build my own apps, like the ones above, and I run with music in my ears.",
    ],
    stats: { years: 'Years of experience', companies: 'Companies and clients', apps: 'Apps on Google Play' },
    journey: 'Experience',
    now: 'now',
    education: 'Education',
    cv: 'Download my CV',
    cvOther: 'CV in Italian',
  },
  contact: {
    eyebrow: 'Contact',
    title1: 'Got an idea?',
    title2: "Let's make it an app.",
    text: "Tell me about your project and I'll get back to you soon.",
    email: 'Send me an email',
    copied: 'Copied ✓',
    location: 'Italy · Remote',
  },
  footer: { built: 'Built with Astro' },
  project: {
    back: '← All projects',
    meta: { client: 'Client', year: 'Year', platform: 'Platform', role: 'Role' },
    inBrief: 'In brief',
    story: { challenge: 'The challenge', solution: 'What I did', result: 'The result' },
    techCta: {
      title: 'Curious about the technical side?',
      text: "This project's architecture, stack and code decisions.",
      button: 'Show the technical details',
    },
    keyPoints: 'Key points',
    stack: 'Stack',
    highlights: 'Highlights',
    next: 'Next project →',
    gallery: { phone: 'Screens', art: 'The artworks' },
    reviews: { title: 'What the fans say', aria: 'User reviews. They scroll on their own: hover or scroll to stop them.', stars: (n: number) => `${n} out of 5 stars`, locale: 'en-GB' },
  },
  beatrunner: { tagline1: 'The soundtrack', tagline2: 'of your run' },
};

export const ui: Record<Lang, Dict> = { it, en };
export const t = (lang: Lang) => ui[lang];
