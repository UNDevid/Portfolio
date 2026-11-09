// ─── Dati personali: modifica qui ───────────────────────────────────
// I testi del sito, in italiano e in inglese, sono in src/i18n.ts.
export const site = {
  handle: 'UNDevid',
  name: 'Davide Valentino',
  role: 'Senior Android Developer',
  email: 'davide_valentino@outlook.it',
  available: true,
  /**
   * Statistiche delle visite con GoatCounter (gratuito, senza cookie, nessun banner necessario).
   * Crea un account su https://www.goatcounter.com e scrivi qui il codice scelto (es. 'davidevalentino').
   * Vuoto = nessuna statistica.
   */
  goatcounter: 'ildevid',
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

export const platforms = {
  android: { label: 'Android', color: '#3DDC84' },
  flutter: { label: 'Flutter', color: '#4FC3F7' },
  web: { label: 'Web', color: '#C084FC' },
} as const;

export type Platform = keyof typeof platforms;
