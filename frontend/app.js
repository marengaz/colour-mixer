// === PALETTE ===
const PALETTE_ORDER = [
  'red', 'blue', 'yellow', 'green', 'orange',
  'purple', 'cyan', 'magenta', 'pink', 'black', 'white'
];

const PALETTE = {
  red:     { name: 'red',     rgb: [220, 20, 20] },
  blue:    { name: 'blue',    rgb: [30, 60, 200] },
  yellow:  { name: 'yellow',  rgb: [255, 225, 0] },
  green:   { name: 'green',   rgb: [0, 160, 60] },
  orange:  { name: 'orange',  rgb: [255, 140, 0] },
  purple:  { name: 'purple',  rgb: [100, 0, 140] },
  cyan:    { name: 'cyan',    rgb: [0, 195, 215] },
  magenta: { name: 'magenta', rgb: [200, 0, 120] },
  pink:    { name: 'pink',    rgb: [255, 180, 200] },
  black:   { name: 'black',   rgb: [25, 25, 25] },
  white:   { name: 'white',   rgb: [255, 255, 255] },
};

// Equal-mix lookup (keys alphabetically sorted, joined with +)
const EQUAL_MIX = {
  'blue+red':       [100, 0, 140],
  'red+yellow':     [255, 120, 0],
  'blue+yellow':    [0, 140, 60],
  'blue+green':     [0, 110, 130],
  'green+red':      [130, 80, 20],
  'green+yellow':   [100, 200, 0],
  'orange+red':     [240, 60, 0],
  'blue+orange':    [110, 70, 50],
  'blue+purple':    [50, 0, 170],
  'orange+yellow':  [255, 185, 0],
  'purple+red':     [180, 0, 80],
  'green+purple':   [60, 60, 60],
  'orange+purple':  [150, 40, 60],
  'green+orange':   [140, 140, 10],
  'purple+yellow':  [140, 70, 40],
  'cyan+magenta':   [40, 60, 170],
  'cyan+yellow':    [0, 200, 80],
  'magenta+yellow': [230, 70, 30],
  'cyan+red':       [110, 90, 90],
  'blue+cyan':      [0, 100, 200],
  'cyan+green':     [0, 185, 140],
  'blue+magenta':   [100, 0, 165],
  'magenta+red':    [220, 0, 60],
  'green+magenta':  [100, 80, 70],
  'magenta+orange': [230, 60, 50],
  'cyan+orange':    [110, 160, 80],
  'magenta+purple': [160, 0, 130],
  'cyan+purple':    [40, 50, 160],
  'blue+pink':      [130, 90, 180],
  'green+pink':     [130, 160, 110],
  'orange+pink':    [255, 160, 100],
  'pink+purple':    [180, 70, 160],
  'pink+red':       [240, 80, 90],
  'pink+yellow':    [255, 210, 100],
  'cyan+pink':      [130, 190, 210],
  'magenta+pink':   [230, 80, 155],
};

// === NAMED COLOURS for nearest-match ===
const NAMED_COLOURS = [
  { name: 'red', rgb: [220, 20, 20] },
  { name: 'dark red', rgb: [130, 0, 0] },
  { name: 'light red', rgb: [235, 110, 110] },
  { name: 'blue', rgb: [30, 60, 200] },
  { name: 'dark blue', rgb: [0, 0, 110] },
  { name: 'light blue', rgb: [130, 175, 235] },
  { name: 'yellow', rgb: [255, 225, 0] },
  { name: 'dark yellow', rgb: [190, 165, 0] },
  { name: 'light yellow', rgb: [255, 245, 150] },
  { name: 'green', rgb: [0, 160, 60] },
  { name: 'dark green', rgb: [0, 85, 0] },
  { name: 'light green', rgb: [140, 225, 140] },
  { name: 'orange', rgb: [255, 140, 0] },
  { name: 'dark orange', rgb: [190, 90, 0] },
  { name: 'light orange', rgb: [255, 195, 110] },
  { name: 'purple', rgb: [100, 0, 140] },
  { name: 'dark purple', rgb: [50, 0, 75] },
  { name: 'light purple', rgb: [175, 130, 200] },
  { name: 'pink', rgb: [255, 180, 200] },
  { name: 'hot pink', rgb: [240, 80, 120] },
  { name: 'light pink', rgb: [255, 220, 230] },
  { name: 'black', rgb: [0, 0, 0] },
  { name: 'white', rgb: [255, 255, 255] },
  { name: 'grey', rgb: [128, 128, 128] },
  { name: 'dark grey', rgb: [64, 64, 64] },
  { name: 'light grey', rgb: [192, 192, 192] },
  { name: 'brown', rgb: [130, 80, 20] },
  { name: 'dark brown', rgb: [65, 30, 0] },
  { name: 'light brown', rgb: [190, 150, 100] },
  { name: 'cyan', rgb: [0, 195, 215] },
  { name: 'magenta', rgb: [200, 0, 120] },
  { name: 'teal', rgb: [0, 128, 128] },
  { name: 'navy', rgb: [0, 0, 80] },
  { name: 'maroon', rgb: [128, 0, 0] },
  { name: 'olive', rgb: [128, 128, 0] },
  { name: 'coral', rgb: [255, 120, 80] },
  { name: 'salmon', rgb: [250, 128, 114] },
  { name: 'peach', rgb: [255, 200, 150] },
  { name: 'cream', rgb: [255, 250, 200] },
  { name: 'lavender', rgb: [175, 150, 220] },
  { name: 'turquoise', rgb: [0, 200, 180] },
  { name: 'gold', rgb: [255, 200, 0] },
  { name: 'lime', rgb: [100, 210, 0] },
  { name: 'indigo', rgb: [50, 0, 170] },
  { name: 'crimson', rgb: [180, 0, 50] },
  { name: 'sky blue', rgb: [100, 175, 255] },
  { name: 'mint', rgb: [140, 240, 170] },
  { name: 'plum', rgb: [140, 60, 120] },
  { name: 'rust', rgb: [180, 60, 10] },
  { name: 'amber', rgb: [255, 190, 0] },
];

// Pre-compute LAB values for named colours
const NAMED_COLOURS_LAB = NAMED_COLOURS.map(c => ({
  ...c,
  lab: rgbToLab(c.rgb[0], c.rgb[1], c.rgb[2])
}));

// === COLOUR MATH ===

function rgbToLab(r, g, b) {
  let rl = r / 255, gl = g / 255, bl = b / 255;
  rl = rl > 0.04045 ? Math.pow((rl + 0.055) / 1.055, 2.4) : rl / 12.92;
  gl = gl > 0.04045 ? Math.pow((gl + 0.055) / 1.055, 2.4) : gl / 12.92;
  bl = bl > 0.04045 ? Math.pow((bl + 0.055) / 1.055, 2.4) : bl / 12.92;

  let x = (rl * 0.4124564 + gl * 0.3575761 + bl * 0.1804375) / 0.95047;
  let y = rl * 0.2126729 + gl * 0.7151522 + bl * 0.0721750;
  let z = (rl * 0.0193339 + gl * 0.1191920 + bl * 0.9503041) / 1.08883;

  const f = t => t > 0.008856 ? Math.cbrt(t) : (903.3 * t + 16) / 116;
  return [116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z))];
}

function labDistance(lab1, lab2) {
  return Math.sqrt(
    (lab1[0] - lab2[0]) ** 2 +
    (lab1[1] - lab2[1]) ** 2 +
    (lab1[2] - lab2[2]) ** 2
  );
}

function nameColour(rgb) {
  const lab = rgbToLab(rgb[0], rgb[1], rgb[2]);
  let best = NAMED_COLOURS_LAB[0], bestDist = Infinity;
  for (const nc of NAMED_COLOURS_LAB) {
    const dist = labDistance(lab, nc.lab);
    if (dist < bestDist) {
      bestDist = dist;
      best = nc;
    }
  }
  return best.name;
}

function contrastColour(rgb) {
  const lum = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return lum > 0.5 ? '#222' : '#fff';
}

function isLightColour(rgb) {
  return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255 > 0.55;
}

function rgbStr(rgb) {
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

function mixColours(c1Name, a1, c2Name, a2) {
  const c1 = PALETTE[c1Name];
  const c2 = PALETTE[c2Name];

  if (c1Name === c2Name) return [...c1.rgb];

  const w1 = a1 / (a1 + a2);

  // Black or white: straight RGB interpolation
  if (c1Name === 'black' || c1Name === 'white' || c2Name === 'black' || c2Name === 'white') {
    return c1.rgb.map((v, i) => Math.round(v * w1 + c2.rgb[i] * (1 - w1)));
  }

  // Lookup equal mix
  const key = [c1Name, c2Name].sort().join('+');
  const equalMix = EQUAL_MIX[key];

  if (!equalMix) {
    return c1.rgb.map((v, i) => Math.round(v * w1 + c2.rgb[i] * (1 - w1)));
  }

  if (Math.abs(w1 - 0.5) < 0.01) return [...equalMix];

  if (w1 > 0.5) {
    const factor = (w1 - 0.5) * 2;
    return equalMix.map((v, i) => Math.round(v * (1 - factor) + c1.rgb[i] * factor));
  } else {
    const factor = (0.5 - w1) * 2;
    return equalMix.map((v, i) => Math.round(v * (1 - factor) + c2.rgb[i] * factor));
  }
}

// === AUDIO ===

let currentAudio = null;
const audioCache = new Map();

function speak(text, { interrupt = true } = {}) {
  return new Promise(resolve => {
    if (interrupt && currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    const play = (src) => {
      const audio = new Audio(src);
      currentAudio = audio;
      audio.addEventListener('ended', resolve);
      audio.addEventListener('error', resolve);
      audio.play().catch(resolve);
    };

    const cached = audioCache.get(text.toLowerCase());
    if (cached) {
      play(cached);
      return;
    }

    const url = `/api/tts?text=${encodeURIComponent(text)}`;
    play(url);

    // Cache the blob for faster replay
    fetch(url)
      .then(r => r.blob())
      .then(blob => {
        audioCache.set(text.toLowerCase(), URL.createObjectURL(blob));
      })
      .catch(() => {});
  });
}

function precacheAudio() {
  const phrases = [
    ...PALETTE_ORDER,
    'a little', 'some', 'lots',
    'mix colours', 'test me',
    'correct', 'well done', 'not quite',
    '0 out of 5', '1 out of 5', '2 out of 5',
    '3 out of 5', '4 out of 5', '5 out of 5',
    'amazing', 'great job', 'good try', 'keep going',
  ];
  phrases.forEach(text => {
    fetch(`/api/tts?text=${encodeURIComponent(text)}`)
      .then(r => r.blob())
      .then(blob => audioCache.set(text.toLowerCase(), URL.createObjectURL(blob)))
      .catch(() => {});
  });
}

// === STATE ===

let colour1 = null;
let colour2 = null;
let amount1 = 2;
let amount2 = 2;
let testQuestions = [];
let currentQuestionIndex = 0;
let testLocked = false;
let testDifficulty = null;

const EASY_COLOURS = ['red', 'green', 'blue', 'white', 'cyan', 'magenta', 'yellow', 'black'];

// === UI: PALETTE ===

function buildPalette(gridId, pickerNum) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  PALETTE_ORDER.forEach(name => {
    const c = PALETTE[name];
    const el = document.createElement('div');
    el.className = 'colour-swatch' + (isLightColour(c.rgb) ? ' light-swatch' : '');
    el.style.backgroundColor = rgbStr(c.rgb);
    if (name === 'white') {
      el.style.border = '4px solid #ccc';
    }
    el.dataset.colour = name;

    const label = document.createElement('span');
    label.className = 'swatch-label';
    label.textContent = name;
    el.appendChild(label);

    el.addEventListener('click', () => selectColour(pickerNum, name));
    grid.appendChild(el);
  });
}

function selectColour(pickerNum, name) {
  if (pickerNum === 1) colour1 = name;
  else colour2 = name;

  // Speak colour name only if the other colour isn't set yet;
  // updateResult will announce the full sum when both are selected.
  if ((pickerNum === 1 && !colour2) || (pickerNum === 2 && !colour1)) {
    speak(name);
  }

  // Update selection UI
  const gridId = pickerNum === 1 ? 'grid1' : 'grid2';
  document.querySelectorAll(`#${gridId} .colour-swatch`).forEach(el => {
    el.classList.toggle('selected', el.dataset.colour === name);
  });

  updateResult();
}

function setAmount(pickerNum, value) {
  if (pickerNum === 1) amount1 = value;
  else amount2 = value;

  // Only speak amount if both colours aren't set; updateResult handles the full sum.
  if (!colour1 || !colour2) {
    const labels = { 1: 'a little', 2: 'some', 3: 'lots' };
    speak(labels[value]);
  }

  const barId = `amount-bar-${pickerNum}`;
  document.querySelectorAll(`#${barId} .amount-btn`).forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.amount) === value);
  });

  updateResult();
}

function updateResult() {
  const resultEl = document.getElementById('mix-result');
  if (!colour1 || !colour2) {
    resultEl.classList.add('hidden');
    return;
  }

  const mixed = mixColours(colour1, amount1, colour2, amount2);
  const name = nameColour(mixed);

  const swatch = document.getElementById('result-swatch');
  swatch.style.backgroundColor = rgbStr(mixed);

  const nameEl = document.getElementById('result-name');
  nameEl.textContent = name;
  nameEl.style.color = contrastColour(mixed);

  resultEl.classList.remove('hidden');
  const amountLabels = { 1: 'a little', 2: 'some', 3: 'a lot of' };
  speak(`${amountLabels[amount1]} ${colour1} plus ${amountLabels[amount2]} ${colour2} equals ${name}`);
}

// === UI: TABS ===

function switchMode(mode) {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.mode === mode);
  });

  document.getElementById('mix-mode').classList.toggle('hidden', mode !== 'mix');
  document.getElementById('test-mode').classList.toggle('hidden', mode !== 'test');

  if (mode === 'mix') {
    speak('mix colours');
  } else {
    speak('test me');
    showDifficultyPick();
  }
}

// === UI: TEST MODE ===

function showDifficultyPick() {
  document.getElementById('difficulty-pick').classList.remove('hidden');
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('results-area').classList.add('hidden');
}

function generateQuestion() {
  const isEasy = testDifficulty === 'easy';
  const allNames = isEasy ? [...EASY_COLOURS] : [...PALETTE_ORDER];

  // Pick a combination where the result colour differs from both inputs
  let c1, c2, a1, a2, correctRgb, correctName;
  do {
    c1 = allNames[Math.floor(Math.random() * allNames.length)];
    c2 = allNames[Math.floor(Math.random() * allNames.length)];
    if (isEasy) {
      a1 = 2; a2 = 2;
    } else {
      a1 = [1, 2, 3][Math.floor(Math.random() * 3)];
      a2 = { 1: 3, 2: 2, 3: 1 }[a1];
    }
    correctRgb = mixColours(c1, a1, c2, a2);
    correctName = nameColour(correctRgb);
  } while (c1 === c2 || correctName === c1 || correctName === c2);
  const correctLab = rgbToLab(correctRgb[0], correctRgb[1], correctRgb[2]);

  // Pick 2 wrong answers from named colours, distant from correct
  const candidates = NAMED_COLOURS_LAB
    .filter(nc => nc.name !== correctName)
    .map(nc => ({ ...nc, dist: labDistance(correctLab, nc.lab) }))
    .filter(nc => nc.dist > 25)
    .sort(() => Math.random() - 0.5);

  let wrong1 = candidates[0];
  let wrong2 = null;
  for (let i = 1; i < candidates.length; i++) {
    if (labDistance(wrong1.lab, candidates[i].lab) > 25) {
      wrong2 = candidates[i];
      break;
    }
  }
  if (!wrong2) wrong2 = candidates[1];

  // Fallback if we couldn't find distinct wrongs
  if (!wrong1) wrong1 = NAMED_COLOURS_LAB[0];
  if (!wrong2) wrong2 = NAMED_COLOURS_LAB[1];

  const options = [
    { rgb: correctRgb, name: correctName, correct: true },
    { rgb: wrong1.rgb, name: wrong1.name, correct: false },
    { rgb: wrong2.rgb, name: wrong2.name, correct: false },
  ].sort(() => Math.random() - 0.5);

  return {
    c1, a1, c2, a2,
    correctRgb,
    correctName,
    options,
    userAnswer: null,
  };
}

function amountLabel(a) {
  return { 1: 'a little', 2: 'some', 3: 'lots of' }[a];
}

function questionText(q) {
  if (testDifficulty === 'easy') return `${q.c1} + ${q.c2}`;
  return `${amountLabel(q.a1)} ${q.c1} + ${amountLabel(q.a2)} ${q.c2}`;
}

function createMiniSwatch(colourName, size) {
  const c = PALETTE[colourName];
  const el = document.createElement('div');
  el.className = 'q-swatch';
  if (size) el.style.width = el.style.height = size;
  el.style.backgroundColor = rgbStr(c.rgb);
  if (colourName === 'white') el.style.border = '3px solid #ccc';
  el.addEventListener('click', () => speak(colourName));
  return el;
}

function colourPairKey(c1, c2) {
  return [c1, c2].sort().join('+');
}

function startTest(difficulty) {
  testDifficulty = difficulty;
  testQuestions = [];
  const usedPairs = new Set();
  for (let i = 0; i < 5; i++) {
    let q;
    do {
      q = generateQuestion();
    } while (usedPairs.has(colourPairKey(q.c1, q.c2)));
    usedPairs.add(colourPairKey(q.c1, q.c2));
    testQuestions.push(q);
  }
  currentQuestionIndex = 0;

  document.getElementById('difficulty-pick').classList.add('hidden');
  document.getElementById('quiz-area').classList.remove('hidden');
  document.getElementById('results-area').classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  testLocked = false;
  const q = testQuestions[currentQuestionIndex];

  document.getElementById('question-counter').textContent =
    `Question ${currentQuestionIndex + 1} of 5`;

  const qText = document.getElementById('question-text');
  qText.innerHTML = '';

  const text = questionText(q);

  const isEasy = testDifficulty === 'easy';

  const part1 = document.createElement('span');
  part1.className = 'q-part';
  part1.appendChild(createMiniSwatch(q.c1));
  const label1 = document.createElement('span');
  label1.textContent = isEasy ? ` ${q.c1} ` : ` ${amountLabel(q.a1)} ${q.c1} `;
  part1.appendChild(label1);

  const plus = document.createElement('span');
  plus.className = 'q-plus';
  plus.textContent = ' + ';

  const part2 = document.createElement('span');
  part2.className = 'q-part';
  part2.appendChild(createMiniSwatch(q.c2));
  const label2 = document.createElement('span');
  label2.textContent = isEasy ? ` ${q.c2}` : ` ${amountLabel(q.a2)} ${q.c2}`;
  part2.appendChild(label2);

  qText.appendChild(part1);
  qText.appendChild(plus);
  qText.appendChild(part2);

  qText.onclick = () => speak(text);

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('div');
    btn.className = 'option-btn';
    btn.style.backgroundColor = rgbStr(opt.rgb);

    const label = document.createElement('span');
    label.className = 'option-label';
    label.textContent = opt.name;
    label.style.color = contrastColour(opt.rgb);
    if (!isLightColour(opt.rgb)) {
      label.style.textShadow = '0 1px 3px rgba(0,0,0,0.5)';
    }
    btn.appendChild(label);

    btn.addEventListener('click', () => answerQuestion(idx));
    grid.appendChild(btn);
  });

  const feedback = document.getElementById('feedback');
  feedback.classList.add('hidden');

  // Speak the question
  setTimeout(() => speak(questionText(q)), 400);
}

function answerQuestion(idx) {
  if (testLocked) return;
  testLocked = true;

  const q = testQuestions[currentQuestionIndex];
  q.userAnswer = idx;
  const chosen = q.options[idx];
  const feedback = document.getElementById('feedback');
  const optionBtns = document.querySelectorAll('#options-grid .option-btn');

  // Announce the chosen colour first, then give feedback
  speak(chosen.name).then(() => {
    if (chosen.correct) {
      optionBtns[idx].classList.add('correct');
      feedback.textContent = 'Well Done!';
      feedback.className = 'correct-feedback';
      speak('well done');
    } else {
      optionBtns[idx].classList.add('wrong');
      q.options.forEach((opt, i) => {
        if (opt.correct) optionBtns[i].classList.add('reveal');
      });
      feedback.textContent = `Not quite! It was ${q.correctName}`;
      feedback.className = 'wrong-feedback';
      speak(`not quite. it was ${q.correctName}`);
    }

    feedback.classList.remove('hidden');
  });

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
      showQuestion();
    } else {
      showResults();
    }
  }, 4000);
}

function showResults() {
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('results-area').classList.remove('hidden');

  const score = testQuestions.filter(q =>
    q.userAnswer !== null && q.options[q.userAnswer].correct
  ).length;

  const messages = [
    'Keep going!', 'Good try!', 'Not bad!', 'Well done!', 'Great job!', 'Amazing!'
  ];
  const message = messages[score];

  const scoreEl = document.getElementById('score-display');
  scoreEl.textContent = `${score} out of 5 — ${message}`;

  speak(`${score} out of 5. ${message}`);

  const list = document.getElementById('results-list');
  list.innerHTML = '';

  testQuestions.forEach((q, i) => {
    const row = document.createElement('div');
    row.className = 'result-row';

    const isCorrect = q.userAnswer !== null && q.options[q.userAnswer].correct;
    const icon = document.createElement('span');
    icon.className = 'result-icon';
    icon.textContent = isCorrect ? '\u2705' : '\u274C';

    const swatches = document.createElement('div');
    swatches.className = 'result-swatches';

    const s1 = document.createElement('div');
    s1.className = 'mini-swatch';
    s1.style.backgroundColor = rgbStr(PALETTE[q.c1].rgb);
    if (q.c1 === 'white') s1.style.border = '3px solid #ccc';
    s1.addEventListener('click', () => speak(q.c1));

    const plus = document.createElement('span');
    plus.className = 'result-plus';
    plus.textContent = '+';

    const s2 = document.createElement('div');
    s2.className = 'mini-swatch';
    s2.style.backgroundColor = rgbStr(PALETTE[q.c2].rgb);
    if (q.c2 === 'white') s2.style.border = '3px solid #ccc';
    s2.addEventListener('click', () => speak(q.c2));

    const eq = document.createElement('span');
    eq.className = 'result-plus';
    eq.textContent = '=';

    const sOut = document.createElement('div');
    sOut.className = 'mini-swatch result-swatch-out';
    sOut.style.backgroundColor = rgbStr(q.correctRgb);
    sOut.addEventListener('click', () => speak(q.correctName));

    swatches.appendChild(s1);
    swatches.appendChild(plus);
    swatches.appendChild(s2);
    swatches.appendChild(eq);
    swatches.appendChild(sOut);

    const detail = document.createElement('span');
    detail.className = 'result-detail';
    detail.textContent = `${questionText(q)} = ${q.correctName}`;

    row.appendChild(icon);
    row.appendChild(swatches);
    row.appendChild(detail);
    list.appendChild(row);
  });
}

// === INIT ===

function init() {
  buildPalette('grid1', 1);
  buildPalette('grid2', 2);

  // Amount button listeners
  document.querySelectorAll('#amount-bar-1 .amount-btn').forEach(btn => {
    btn.addEventListener('click', () => setAmount(1, parseInt(btn.dataset.amount)));
  });
  document.querySelectorAll('#amount-bar-2 .amount-btn').forEach(btn => {
    btn.addEventListener('click', () => setAmount(2, parseInt(btn.dataset.amount)));
  });

  // Tab listeners
  document.getElementById('tab-mix').addEventListener('click', () => switchMode('mix'));
  document.getElementById('tab-test').addEventListener('click', () => switchMode('test'));

  // Result tap to speak
  document.getElementById('result-swatch').addEventListener('click', () => {
    const name = document.getElementById('result-name').textContent;
    if (name) speak(name);
  });

  // Difficulty buttons
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const diff = btn.dataset.difficulty;
      speak(diff).then(() => startTest(diff));
    });
  });

  // Play again - go back to difficulty pick
  document.getElementById('play-again-btn').addEventListener('click', () => showDifficultyPick());

  // Pre-cache common audio
  precacheAudio();
}

document.addEventListener('DOMContentLoaded', init);
