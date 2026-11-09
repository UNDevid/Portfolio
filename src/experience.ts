// Percorso professionale e formazione (dal CV), nelle due lingue.
// Usati dalla sezione "Chi sono" e dal CV generato (src/pages/cv/).

type L = { it: string; en: string };

export type Job = {
  from: string; // AAAA-MM
  to?: string; // assente = in corso
  company: string;
  role: L;
  what: L;
  stack: string[];
};

export const jobs: Job[] = [
  {
    from: '2026-09',
    company: 'Synesthesia',
    role: { it: 'Android Developer · freelance', en: 'Android Developer · freelance' },
    what: { it: 'App white-label per lo sport in diretta, guidate dalla configurazione.', en: 'White-label live sport apps, driven by configuration.' },
    stack: ['Kotlin', 'Clean Architecture'],
  },
  {
    from: '2024-02',
    to: '2026-07',
    company: 'Connect Reply',
    role: { it: 'Android Developer · freelance', en: 'Android Developer · freelance' },
    what: { it: 'Progetto IoT per moto connesse via Bluetooth.', en: 'IoT project for Bluetooth-connected motorbikes.' },
    stack: ['Kotlin', 'Java', 'Bluetooth', 'Clean Architecture'],
  },
  {
    from: '2022-07',
    to: '2024-01',
    company: 'Accenture',
    role: { it: 'Android e Flutter Developer', en: 'Android and Flutter Developer' },
    what: { it: 'App per editoria, turismo e servizi bancari.', en: 'Apps for publishing, tourism and banking.' },
    stack: ['Kotlin', 'Jetpack Compose', 'Flutter', 'Dart'],
  },
  {
    from: '2021-09',
    to: '2022-07',
    company: 'Greenext · Viasat Group',
    role: { it: 'Android Developer', en: 'Android Developer' },
    what: { it: 'App per la gestione della raccolta rifiuti.', en: 'Waste collection management app.' },
    stack: ['Kotlin', 'Room'],
  },
  {
    from: '2017-10',
    to: '2021-08',
    company: 'Ulixe Touch · PAY Reply',
    role: { it: 'Android Developer · consulente', en: 'Android Developer · consultant' },
    what: { it: 'App di pagamenti digitali.', en: 'Digital payments app.' },
    stack: ['Java', 'REST', 'MVP'],
  },
  {
    from: '2016-10',
    to: '2017-10',
    company: 'Take Off Strategies · Alyt',
    role: { it: 'Android Developer', en: 'Android Developer' },
    what: { it: 'App IoT per la domotica.', en: 'IoT home automation app.' },
    stack: ['Java'],
  },
];

export const education = [
  {
    from: '2014',
    to: '2016',
    school: 'ITS-ICT Piemonte',
    title: { it: 'Tecnico superiore per lo sviluppo di app mobile · 91/100', en: 'Higher technician in mobile app development · 91/100' },
  },
  {
    from: '2013',
    to: '2014',
    school: { it: 'Università', en: 'University' },
    title: { it: 'Dipartimento di Informatica', en: 'Department of Computer Science' },
  },
  {
    from: '2013',
    school: 'Liceo scientifico "A. Monti", Chieri',
    title: { it: 'Diploma di maturità scientifica', en: 'Scientific high school diploma' },
  },
];

/** Anni di esperienza da Android Developer, calcolati dal primo lavoro. */
export const yearsOfExperience = () => {
  const first = new Date(`${jobs[jobs.length - 1].from}-01`);
  return Math.floor((Date.now() - first.getTime()) / (365.25 * 24 * 3600 * 1000));
};
