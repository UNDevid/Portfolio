// ─── Dati personali: modifica qui ───────────────────────────────────
export const site = {
  handle: 'UNDevid',
  name: 'UNDevid', // ← il tuo nome e cognome
  role: 'Senior Android Developer',
  tagline:
    'App Android native, Flutter cross-platform ed esperienze web che lasciano il segno.',
  location: 'Italia · Remote',
  email: 'hello@example.com', // ← la tua email di contatto
  available: true,
  socials: [
    { label: 'GitHub', href: 'https://github.com/UNDevid' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' }, // ← il tuo profilo
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
