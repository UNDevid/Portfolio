// ─── Dati personali: modifica qui ───────────────────────────────────
export const site = {
  handle: 'UNDevid',
  name: 'Davide Valentino',
  role: 'Senior Android Developer',
  tagline:
    'App Android native, Flutter cross-platform ed esperienze web che lasciano il segno.',
  /** Il racconto per tutti (modalità predefinita) e la versione per sviluppatori. */
  intro: {
    plain:
      "Progetto e realizzo app per Android e iPhone e siti web, dall'idea alla pubblicazione sugli store. Unisco solide competenze tecniche a una grande attenzione per il design.",
    tech:
      "App Android native, Flutter cross-platform ed esperienze web che lasciano il segno. Dal pixel all'architettura, ogni dettaglio è una scelta.",
  },
  location: 'Italia · Remote',
  email: 'davide_valentino@outlook.it',
  available: true,
  socials: [
    { label: 'GitHub', href: 'https://github.com/UNDevid' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davide-valentino-984543109/' },
  ],
};

export const stack = [
  'Kotlin', 'Jetpack Compose', 'Coroutines & Flow', 'Hilt', 'Room', 'Retrofit',
  'Clean Architecture', 'MVVM / MVI', 'Gradle KTS', 'Firebase', 'Flutter', 'Dart',
  'TypeScript', 'HTML / CSS', 'Material 3', 'CI/CD',
];

/** Cosa so fare, in parole semplici: la fascia scorrevole nella modalità per tutti. */
export const skills = [
  'App Android', 'App per iPhone con Flutter', 'Siti web', 'Design delle interfacce',
  'Esperienza utente', 'Pubblicazione sugli store', 'Manutenzione nel tempo', 'Lavoro in autonomia',
  'Dialogo con il cliente', 'Accessibilità', 'App veloci e affidabili', 'Italiano e inglese',
];

export const platforms = {
  android: { label: 'Android', color: '#3DDC84' },
  flutter: { label: 'Flutter', color: '#4FC3F7' },
  web: { label: 'Web', color: '#C084FC' },
} as const;

export type Platform = keyof typeof platforms;
