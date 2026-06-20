import {
  CATEGORIES,
  DIFFICULTIES,
  QUIZ_DATA,
  RANKS,
  MANIA_TITLES,
} from "./quizData.js";
import { initPWA } from "./pwa.js";

const STORAGE_KEY = "densha-mania-quiz";

const state = {
  screen: "home",
  category: null,
  difficulty: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  correct: 0,
  wrong: 0,
  timeLeft: 30,
  timerId: null,
  answered: false,
  selectedOption: null,
  stats: loadStats(),
};

function loadStats() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return {
    totalScore: 0,
    gamesPlayed: 0,
    bestStreak: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    categoryScores: {},
  };
}

function saveStats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
}

function getRank(score) {
  let rank = RANKS[0];
  for (const r of RANKS) {
    if (score >= r.min) rank = r;
  }
  return rank;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions(category, difficulty) {
  let pool = QUIZ_DATA;
  if (category) pool = pool.filter((q) => q.category === category);
  if (difficulty) pool = pool.filter((q) => q.difficulty === difficulty);
  return shuffle(pool).slice(0, 10);
}

function startQuiz(category, difficulty) {
  state.category = category;
  state.difficulty = difficulty;
  state.questions = pickQuestions(category, difficulty);
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.correct = 0;
  state.wrong = 0;
  state.answered = false;
  state.selectedOption = null;
  state.screen = "quiz";
  clearTimer();
  startTimer();
  render();
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  state.timeLeft = 30;
  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function updateTimerUI() {
  const el = document.querySelector(".timer-bar-fill");
  const text = document.querySelector(".timer-text");
  if (el) el.style.width = `${(state.timeLeft / 30) * 100}%`;
  if (text) text.textContent = state.timeLeft;
  if (el) {
    el.classList.toggle("urgent", state.timeLeft <= 10);
  }
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;
  state.streak = 0;
  state.wrong++;
  clearTimer();
  render();
}

function selectAnswer(index) {
  if (state.answered) return;
  state.answered = true;
  state.selectedOption = index;
  clearTimer();

  const q = state.questions[state.currentIndex];
  const isCorrect = index === q.answer;
  const diff = DIFFICULTIES[state.difficulty || q.difficulty];
  const basePoints = isCorrect ? 100 : 0;

  if (isCorrect) {
    state.correct++;
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    const timeBonus = Math.floor(state.timeLeft * 3);
    const streakBonus = Math.min(state.streak - 1, 5) * 20;
    const diffBonus = Math.floor(basePoints * (diff.multiplier - 1));
    state.score += basePoints + timeBonus + streakBonus + diffBonus;
  } else {
    state.wrong++;
    state.streak = 0;
  }

  render();
}

function nextQuestion() {
  state.currentIndex++;
  state.answered = false;
  state.selectedOption = null;

  if (state.currentIndex >= state.questions.length) {
    finishQuiz();
    return;
  }

  clearTimer();
  startTimer();
  render();
}

function finishQuiz() {
  clearTimer();
  state.screen = "result";

  state.stats.totalScore += state.score;
  state.stats.gamesPlayed++;
  state.stats.totalCorrect += state.correct;
  state.stats.totalQuestions += state.questions.length;
  if (state.maxStreak > state.stats.bestStreak) {
    state.stats.bestStreak = state.maxStreak;
  }
  const catKey = state.category || "all";
  state.stats.categoryScores[catKey] =
    (state.stats.categoryScores[catKey] || 0) + state.score;
  saveStats();
  render();
}

function goHome() {
  clearTimer();
  state.screen = "home";
  render();
}

function renderHome() {
  const rank = getRank(state.stats.totalScore);
  const accuracy =
    state.stats.totalQuestions > 0
      ? Math.round((state.stats.totalCorrect / state.stats.totalQuestions) * 100)
      : 0;
  const maniaTitle =
    MANIA_TITLES[state.stats.gamesPlayed % MANIA_TITLES.length];

  return `
    <div class="screen home-screen">
      <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <img class="logo-badge" src="/icons/logo.svg" alt="" width="72" height="72" />
          <h1 class="title">電車マニアクイズ</h1>
          <p class="subtitle">鉄道知識の頂点を目指せ — 車両形式からダイヤまで</p>
          <div class="rank-card" style="--rank-color: ${rank.color}">
            <span class="rank-icon">${rank.icon}</span>
            <div>
              <div class="rank-name">${rank.name}</div>
              <div class="rank-score">${state.stats.totalScore.toLocaleString()} pt</div>
            </div>
          </div>
        </div>
      </header>

      <section class="stats-bar">
        <div class="stat-item">
          <span class="stat-value">${state.stats.gamesPlayed}</span>
          <span class="stat-label">プレイ回数</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${accuracy}%</span>
          <span class="stat-label">正答率</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${state.stats.bestStreak}</span>
          <span class="stat-label">最高連続</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${QUIZ_DATA.length}</span>
          <span class="stat-label">問題数</span>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">難易度を選択</h2>
        <div class="difficulty-grid">
          ${Object.values(DIFFICULTIES)
            .map(
              (d) => `
            <button class="difficulty-card" data-difficulty="${d.id}">
              <span class="diff-name">${d.name}</span>
              <span class="diff-desc">${d.desc}</span>
              <span class="diff-mult">×${d.multiplier} ボーナス</span>
            </button>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">カテゴリを選択 <span class="optional">（省略で全ジャンル）</span></h2>
        <div class="category-grid">
          <button class="category-card all-cat" data-category="">
            <span class="cat-icon">🎯</span>
            <span class="cat-name">全ジャンル</span>
            <span class="cat-count">${QUIZ_DATA.length}問</span>
          </button>
          ${Object.values(CATEGORIES)
            .map((c) => {
              const count = QUIZ_DATA.filter((q) => q.category === c.id).length;
              return `
              <button class="category-card" data-category="${c.id}" style="--cat-color: ${c.color}">
                <span class="cat-icon">${c.icon}</span>
                <span class="cat-name">${c.name}</span>
                <span class="cat-count">${count}問</span>
              </button>
            `;
            })
            .join("")}
        </div>
      </section>

      <section class="section mania-section">
        <div class="mania-quote">
          <p>「${maniaTitle}」の称号を持つあなたへ</p>
          <p class="quote-text">車両形式も路線も、全部知ってるつもり？ 本当に？</p>
        </div>
      </section>
    </div>
  `;
}

function renderQuiz() {
  const q = state.questions[state.currentIndex];
  const cat = CATEGORIES[q.category];
  const diff = DIFFICULTIES[q.difficulty];
  const progress = ((state.currentIndex + 1) / state.questions.length) * 100;

  let optionsHtml = q.options
    .map((opt, i) => {
      let cls = "option-btn";
      if (state.answered) {
        if (i === q.answer) cls += " correct";
        else if (i === state.selectedOption) cls += " wrong";
        else cls += " dimmed";
      }
      return `
        <button class="${cls}" data-option="${i}" ${state.answered ? "disabled" : ""}>
          <span class="option-letter">${String.fromCharCode(65 + i)}</span>
          <span class="option-text">${opt}</span>
        </button>
      `;
    })
    .join("");

  const streakHtml =
    state.streak >= 2
      ? `<div class="streak-badge">🔥 ${state.streak}連続正解！</div>`
      : "";

  const explanationHtml = state.answered
    ? `
      <div class="explanation ${state.selectedOption === q.answer ? "correct-exp" : "wrong-exp"}">
        <div class="exp-header">
          ${state.selectedOption === q.answer ? "✅ 正解！" : "❌ 不正解"}
        </div>
        <p>${q.explanation}</p>
        <button class="btn-next" id="btn-next">
          ${state.currentIndex < state.questions.length - 1 ? "次の問題へ →" : "結果を見る →"}
        </button>
      </div>
    `
    : "";

  return `
    <div class="screen quiz-screen">
      <div class="quiz-header">
        <button class="btn-back" id="btn-quit">✕ やめる</button>
        <div class="quiz-meta">
          <span class="meta-cat" style="--cat-color: ${cat.color}">${cat.icon} ${cat.name}</span>
          <span class="meta-diff">${diff.name}</span>
        </div>
        <div class="quiz-score">${state.score.toLocaleString()} pt</div>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <div class="progress-text">${state.currentIndex + 1} / ${state.questions.length}</div>

      <div class="timer-container">
        <div class="timer-bar">
          <div class="timer-bar-fill"></div>
        </div>
        <span class="timer-text">30</span>
      </div>

      ${streakHtml}

      <div class="question-card">
        <h2 class="question-text">${q.question}</h2>
        <div class="options-grid">${optionsHtml}</div>
        ${explanationHtml}
      </div>
    </div>
  `;
}

function renderResult() {
  const pct = Math.round((state.correct / state.questions.length) * 100);
  const rank = getRank(state.stats.totalScore);
  let grade, gradeIcon, gradeColor;

  if (pct >= 90) {
    grade = "鉄道博士級";
    gradeIcon = "👑";
    gradeColor = "#fbbf24";
  } else if (pct >= 70) {
    grade = "特急マニア";
    gradeIcon = "⭐";
    gradeColor = "#a78bfa";
  } else if (pct >= 50) {
    grade = "快速マニア";
    gradeIcon = "🚃";
    gradeColor = "#60a5fa";
  } else {
    grade = "各駅停車マニア";
    gradeIcon = "🎫";
    gradeColor = "#94a3b8";
  }

  const catName = state.category
    ? CATEGORIES[state.category].name
    : "全ジャンル";
  const diffName = DIFFICULTIES[state.difficulty].name;

  return `
    <div class="screen result-screen">
      <div class="result-card">
        <div class="result-grade" style="--grade-color: ${gradeColor}">
          <span class="grade-icon">${gradeIcon}</span>
          <h2>${grade}</h2>
        </div>

        <div class="result-score-big">+${state.score.toLocaleString()}</div>
        <p class="result-sub">今回のスコア</p>

        <div class="result-stats">
          <div class="result-stat">
            <span class="rs-value">${state.correct}</span>
            <span class="rs-label">正解</span>
          </div>
          <div class="result-stat">
            <span class="rs-value">${state.wrong}</span>
            <span class="rs-label">不正解</span>
          </div>
          <div class="result-stat">
            <span class="rs-value">${pct}%</span>
            <span class="rs-label">正答率</span>
          </div>
          <div class="result-stat">
            <span class="rs-value">${state.maxStreak}</span>
            <span class="rs-label">最高連続</span>
          </div>
        </div>

        <div class="result-info">
          <span>${catName}</span>
          <span>•</span>
          <span>${diffName}</span>
        </div>

        <div class="total-rank">
          累計 ${state.stats.totalScore.toLocaleString()} pt — ${rank.icon} ${rank.name}
        </div>

        <div class="result-actions">
          <button class="btn-primary" id="btn-retry">もう一度挑戦</button>
          <button class="btn-secondary" id="btn-home">ホームへ</button>
        </div>
      </div>
    </div>
  `;
}

let selectedDifficulty = "beginner";
let selectedCategory = "";

function render() {
  const app = document.getElementById("app");
  switch (state.screen) {
    case "home":
      app.innerHTML = renderHome();
      bindHomeEvents();
      break;
    case "quiz":
      app.innerHTML = renderQuiz();
      bindQuizEvents();
      updateTimerUI();
      break;
    case "result":
      app.innerHTML = renderResult();
      bindResultEvents();
      break;
  }
}

function bindHomeEvents() {
  document.querySelectorAll(".difficulty-card").forEach((btn) => {
    btn.classList.toggle("selected", btn.dataset.difficulty === selectedDifficulty);
    btn.addEventListener("click", () => {
      selectedDifficulty = btn.dataset.difficulty;
      document.querySelectorAll(".difficulty-card").forEach((b) =>
        b.classList.toggle("selected", b.dataset.difficulty === selectedDifficulty)
      );
    });
  });

  document.querySelectorAll(".category-card").forEach((btn) => {
    btn.classList.toggle("selected", btn.dataset.category === selectedCategory);
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      document.querySelectorAll(".category-card").forEach((b) =>
        b.classList.toggle("selected", b.dataset.category === selectedCategory)
      );
      startQuiz(selectedCategory || null, selectedDifficulty);
    });
  });
}

function bindQuizEvents() {
  document.querySelectorAll(".option-btn:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => selectAnswer(Number(btn.dataset.option)));
  });

  const nextBtn = document.getElementById("btn-next");
  if (nextBtn) nextBtn.addEventListener("click", nextQuestion);

  const quitBtn = document.getElementById("btn-quit");
  if (quitBtn) {
    quitBtn.addEventListener("click", () => {
      if (confirm("クイズを中断しますか？スコアは保存されません。")) {
        clearTimer();
        goHome();
      }
    });
  }
}

function bindResultEvents() {
  document.getElementById("btn-retry")?.addEventListener("click", () => {
    startQuiz(state.category, state.difficulty);
  });
  document.getElementById("btn-home")?.addEventListener("click", goHome);
}

initPWA();
render();
