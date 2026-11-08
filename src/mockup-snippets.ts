// Frammenti di codice veri dei progetti, mostrati nella finestra accanto al telefono (modalità tecnica).
// Righe corte (≤ 34 caratteri): la parte destra della finestra resta dietro al telefono.
// Il colore della sintassi è applicato al build con un evidenziatore minimo.

export type Snippet = {
  file: string;
  lang: 'kotlin' | 'java' | 'js';
  note: { it: string; en: string };
  code: string;
};

export const snippets: Record<string, Snippet> = {
  home: {
    file: 'WeekWidget.kt',
    lang: 'kotlin',
    note: { it: 'Widget Glance di Beat Runner', en: 'Beat Runner Glance widget' },
    code: [
      'Text(',
      '  context.getString(',
      '    R.string.widget_week_distance,',
      '    summary.distanceMeters /',
      '      METERS_PER_KM,',
      '  ),',
      '  style = TextStyle(',
      '    color = ColorProvider(TEXT),',
      '    fontSize = 30.sp,',
      '    fontWeight = FontWeight.Bold,',
      '  ),',
      ')',
    ].join('\n'),
  },
  beatrunner: {
    file: 'PlaylistTempo.kt',
    lang: 'kotlin',
    note: { it: 'A tempo con la cadenza?', en: 'In time with the cadence?' },
    code: [
      'fun matches(cadence: Int): Boolean {',
      '  val target = band?.let {',
      '    (it.first + it.last) / 2.0',
      '  } ?: bpm',
      '  val tolerance = band?.let {',
      '    (it.last - it.first) / 2.0 /',
      '      target + TEMPO_TOLERANCE',
      '  } ?: TEMPO_TOLERANCE',
      '  val c = foldTo(',
      '    cadence.toDouble(), target)',
      '  return abs(c / target - 1) <=',
      '    tolerance',
      '}',
    ].join('\n'),
  },
  hailguard: {
    file: 'ForecastScheduler.kt',
    lang: 'kotlin',
    note: { it: 'Modalità dinamica', en: 'Dynamic mode' },
    code: [
      'return when {',
      '  imminentRisk -> ScheduleResult(',
      '    delayHours = 0,',
      '    tier = Tier.IMMINENT)',
      '  highRisk -> ScheduleResult(',
      '    delayHours = 2,',
      '    tier = Tier.HIGH)',
      '  mediumRisk -> ScheduleResult(',
      '    delayHours = 6,',
      '    tier = Tier.MEDIUM)',
      '  lowRisk -> ScheduleResult(',
      '    delayHours = 12,',
      '    tier = Tier.LOW)',
      '  else -> ScheduleResult(',
      '    delayHours = 18,',
      '    tier = Tier.CLEAR)',
      '}',
    ].join('\n'),
  },
  soundboard: {
    file: 'SoundFileHelper.java',
    lang: 'java',
    note: { it: 'Il brano come suoneria', en: 'A track as ringtone' },
    code: [
      'Uri collection = MediaStore',
      '  .Audio.Media.getContentUri(',
      '    MediaStore',
      '      .VOLUME_EXTERNAL_PRIMARY);',
      'uri = saveToMediaStore(',
      '  context, rawRes, fileName);',
      'RingtoneManager',
      '  .setActualDefaultRingtoneUri(',
      '    context,',
      '    RingtoneManager',
      '      .TYPE_NOTIFICATION,',
      '    uri);',
    ].join('\n'),
  },
  athanor: {
    file: '11_il_genio.html',
    lang: 'js',
    note: { it: 'Il bordo è la timeline', en: 'The border is the timeline' },
    code: [
      'pathLength =',
      '  progressPath.getTotalLength();',
      'const p = audio.duration',
      '  ? audio.currentTime /',
      '    audio.duration',
      '  : 0;',
      'progressPath.style',
      '  .strokeDasharray =',
      '  `${pathLength * p} ${pathLength}`;',
      'window.addEventListener(',
      "  'resize', updateProgressPath);",
    ].join('\n'),
  },
  cavagliato: {
    file: 'fab-scroll-handler.js',
    lang: 'js',
    note: { it: 'Il pulsante evita il footer', en: 'Button avoids the footer' },
    code: [
      'function computeShift() {',
      '  var footerRect =',
      '    footer.getBoundingClientRect();',
      '  var vh = window.innerHeight;',
      '  var visible = Math.max(0,',
      '    vh - Math.max(0,',
      '      footerRect.top));',
      '  if (visible <= 0) return 0;',
      '  return visible + gap;',
      '}',
    ].join('\n'),
  },
};

const keywords: Record<Snippet['lang'], string[]> = {
  kotlin: ['fun', 'val', 'var', 'return', 'when', 'else', 'if', 'by', 'it'],
  java: ['return', 'new', 'if', 'else', 'final', 'static', 'private'],
  js: ['const', 'var', 'let', 'function', 'return', 'if', 'else', 'new'],
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** HTML con classi .c (commento) .s (stringa) .k (parola chiave) .f (funzione) .t (tipo) .n (numero). */
export function highlight({ lang, code: body, note }: Snippet, ui: 'it' | 'en' = 'it') {
  const code = `// ${note[ui]}\n${body}`;
  const kw = new Set(keywords[lang]);
  const token = /(\/\/.*$)|(`[^`]*`|'[^']*'|"[^"]*")|\b([A-Za-z_][A-Za-z0-9_]*)\b(\s*\()?|\b(\d+(?:\.\d+)?)\b/gm;
  let out = '';
  let last = 0;
  for (const m of code.matchAll(token)) {
    out += esc(code.slice(last, m.index));
    const [all, comment, str, word, call, num] = m;
    if (comment) out += `<span class="c">${esc(comment)}</span>`;
    else if (str) out += `<span class="s">${esc(str)}</span>`;
    else if (num) out += `<span class="n">${num}</span>`;
    else if (word && kw.has(word)) out += `<span class="k">${word}</span>${call ?? ''}`;
    else if (word && call) out += `<span class="f">${word}</span>${call}`;
    else if (word && /^[A-Z]/.test(word)) out += `<span class="t">${word}</span>`;
    else out += esc(all);
    last = (m.index ?? 0) + all.length;
  }
  return out + esc(code.slice(last));
}
