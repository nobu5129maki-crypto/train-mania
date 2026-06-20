(function () {
  'use strict';

  const STORAGE_KEY = 'densha-mania-quiz';

  const RANKS = [
    { name: '見習い', minScore: 0 },
    { name: '駅弁食い', minScore: 500 },
    { name: '撮り鉄', minScore: 1500 },
    { name: '車両マニア', minScore: 3000 },
    { name: '時刻表マスター', minScore: 5000 },
    { name: '鉄道博士', minScore: 8000 },
    { name: '伝説の車掌', minScore: 12000 },
  ];

  const MODE_CONFIG = {
    normal: { questions: 10, timer: null },
    speed: { questions: 10, timer: 15 },
    survival: { questions: 999, timer: null },
  };

  const state = {
    category: 'all',
    difficulty: 'all',
    mode: 'normal',
    questions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    streak: 0,
    maxStreak: 0,
    answered: false,
    timerId: null,
    timeLeft: 15,
    playerData: loadPlayerData(),
  };

  function loadPlayerData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { highScore: 0, totalScore: 0, playCount: 0 };
    } catch {
      return { highScore: 0, totalScore: 0, playCount: 0 };
    }
  }

  function savePlayerData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.playerData));
  }

  function getRank(totalScore) {
    let rank = RANKS[0];
    for (const r of RANKS) {
      if (totalScore >= r.minScore) rank = r;
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

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  function getCategoryName(id) {
    if (id === 'all') return '全カテゴリ';
    return QUIZ_DATA.categories.find(c => c.id === id)?.name || id;
  }

  function getDifficultyInfo(id) {
    if (id === 'all') return { name: '全難易度', color: '#94a3b8', multiplier: 1 };
    return QUIZ_DATA.difficulties.find(d => d.id === id) || { name: id, color: '#94a3b8', multiplier: 1 };
  }

  function filterQuestions() {
    let pool = [...QUIZ_DATA.questions];
    if (state.category !== 'all') {
      pool = pool.filter(q => q.category === state.category);
    }
    if (state.difficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === state.difficulty);
    }
    return shuffle(pool);
  }

  function calcPoints(question, timeBonus) {
    const diff = getDifficultyInfo(question.difficulty);
    let base = 100 * diff.multiplier;
    if (timeBonus && state.timeLeft > 0) {
      base += state.timeLeft * 10;
    }
    if (state.streak >= 3) base = Math.floor(base * 1.5);
    if (state.streak >= 5) base = Math.floor(base * 2);
    return base;
  }

  function showStreakPopup(text) {
    const el = document.createElement('div');
    el.className = 'streak-popup';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  // --- UI Builders ---

  function renderTitleStats() {
    document.getElementById('high-score').textContent = state.playerData.highScore.toLocaleString();
    document.getElementById('play-count').textContent = state.playerData.playCount;
    document.getElementById('player-rank').textContent = getRank(state.playerData.totalScore).name;
  }

  function renderCategories() {
    const grid = document.getElementById('category-grid');
    const allCard = `
      <button class="category-card all ${state.category === 'all' ? 'selected' : ''}" data-category="all">
        <span class="category-icon">🎯</span>
        <span class="category-name">全カテゴリ</span>
        <span class="category-desc">すべての分野から出題</span>
      </button>`;

    const cards = QUIZ_DATA.categories.map(c => `
      <button class="category-card ${state.category === c.id ? 'selected' : ''}" data-category="${c.id}">
        <span class="category-icon">${c.icon}</span>
        <span class="category-name">${c.name}</span>
        <span class="category-desc">${c.desc}</span>
      </button>`).join('');

    grid.innerHTML = allCard + cards;

    grid.querySelectorAll('.category-card').forEach(btn => {
      btn.addEventListener('click', () => {
        state.category = btn.dataset.category;
        renderCategories();
      });
    });
  }

  function renderDifficulties() {
    const grid = document.getElementById('difficulty-grid');
    const allBtn = `
      <button class="difficulty-btn ${state.difficulty === 'all' ? 'selected' : ''}"
              data-difficulty="all" style="color: #94a3b8">
        全て
      </button>`;

    const btns = QUIZ_DATA.difficulties.map(d => `
      <button class="difficulty-btn ${state.difficulty === d.id ? 'selected' : ''}"
              data-difficulty="${d.id}" style="color: ${d.color}">
        ${d.name}
      </button>`).join('');

    grid.innerHTML = allBtn + btns;

    grid.querySelectorAll('.difficulty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.difficulty = btn.dataset.difficulty;
        renderDifficulties();
      });
    });
  }

  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    const config = MODE_CONFIG[state.mode];
    const total = state.mode === 'survival'
      ? state.currentIndex + 1
      : Math.min(config.questions, state.questions.length);

    document.getElementById('question-number').textContent = state.currentIndex + 1;
    document.getElementById('question-total').textContent = state.mode === 'survival' ? '∞' : config.questions;
    document.getElementById('current-score').textContent = state.score.toLocaleString();
    document.getElementById('progress-fill').style.width =
      `${((state.currentIndex) / total) * 100}%`;

    document.getElementById('q-category').textContent = getCategoryName(q.category);
    const diff = getDifficultyInfo(q.difficulty);
    const diffBadge = document.getElementById('q-difficulty');
    diffBadge.textContent = diff.name;
    diffBadge.style.color = diff.color;
    diffBadge.style.background = `${diff.color}22`;

    document.getElementById('question-text').textContent = q.question;

    const labels = ['A', 'B', 'C', 'D'];
    const choicesGrid = document.getElementById('choices-grid');
    choicesGrid.innerHTML = q.choices.map((choice, i) => `
      <button class="choice-btn" data-index="${i}">
        <span class="choice-label">${labels[i]}</span>
        <span class="choice-text">${choice}</span>
      </button>`).join('');

    choicesGrid.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });

    document.getElementById('explanation-panel').classList.add('hidden');
    state.answered = false;

    const timerEl = document.getElementById('quiz-timer');
    if (config.timer) {
      timerEl.classList.remove('hidden');
      startTimer(config.timer);
    } else {
      timerEl.classList.add('hidden');
      stopTimer();
    }
  }

  function startTimer(seconds) {
    stopTimer();
    state.timeLeft = seconds;
    updateTimerDisplay();

    state.timerId = setInterval(() => {
      state.timeLeft--;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        stopTimer();
        if (!state.answered) handleAnswer(-1);
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function updateTimerDisplay() {
    const el = document.getElementById('timer-value');
    const container = document.getElementById('quiz-timer');
    el.textContent = Math.max(0, state.timeLeft);
    container.classList.toggle('urgent', state.timeLeft <= 5);
  }

  function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;
    stopTimer();

    const q = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === q.answer;
    const isTimeout = selectedIndex === -1;

    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === selectedIndex) btn.classList.add('wrong');
      else if (!isCorrect && i === q.answer) btn.classList.add('reveal-correct');
    });

    const panel = document.getElementById('explanation-panel');
    const header = document.getElementById('explanation-header');
    const text = document.getElementById('explanation-text');

    if (isCorrect) {
      state.correctCount++;
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;

      const points = calcPoints(q, MODE_CONFIG[state.mode].timer !== null);
      state.score += points;

      header.textContent = `✅ 正解！ +${points}pt`;
      header.className = 'explanation-header correct';

      if (state.streak === 3) showStreakPopup('🔥 3連続正解！');
      if (state.streak === 5) showStreakPopup('⚡ 5連続正解！！');
      if (state.streak === 10) showStreakPopup('🚄 10連続正解！！！');
    } else {
      state.streak = 0;
      header.textContent = isTimeout ? '⏰ 時間切れ…' : '❌ 不正解…';
      header.className = 'explanation-header wrong';
    }

    text.textContent = q.explanation;
    panel.classList.remove('hidden');
    document.getElementById('current-score').textContent = state.score.toLocaleString();

    if (!isCorrect && state.mode === 'survival') {
      document.getElementById('btn-next').textContent = '結果を見る →';
    } else {
      document.getElementById('btn-next').textContent = '次の問題 →';
    }
  }

  function nextQuestion() {
    const config = MODE_CONFIG[state.mode];
    const q = state.questions[state.currentIndex];
    const wasWrong = state.answered && state.streak === 0 &&
      document.getElementById('explanation-header').classList.contains('wrong');

    if (state.mode === 'survival' && wasWrong) {
      showResult();
      return;
    }

    state.currentIndex++;

    if (state.currentIndex >= config.questions || state.currentIndex >= state.questions.length) {
      if (state.mode === 'survival' && state.currentIndex >= state.questions.length) {
        const more = filterQuestions();
        state.questions = [...state.questions, ...more];
      }
      if (state.currentIndex >= config.questions ||
          (state.mode !== 'survival' && state.currentIndex >= state.questions.length)) {
        showResult();
        return;
      }
    }

    if (state.currentIndex >= state.questions.length) {
      const more = filterQuestions();
      state.questions = [...state.questions, ...more];
    }

    renderQuestion();
  }

  function showResult() {
    stopTimer();
    showScreen('screen-result');

    const actualTotal = state.mode === 'survival'
      ? state.currentIndex + 1
      : MODE_CONFIG[state.mode].questions;
    const accuracy = actualTotal > 0 ? Math.round((state.correctCount / actualTotal) * 100) : 0;

    document.getElementById('final-score').textContent = state.score.toLocaleString();
    document.getElementById('correct-count').textContent =
      `${state.correctCount} / ${actualTotal}`;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('max-streak').textContent = state.maxStreak;

    state.playerData.playCount++;
    state.playerData.totalScore += state.score;
    if (state.score > state.playerData.highScore) {
      state.playerData.highScore = state.score;
    }
    savePlayerData();

    const rank = getRank(state.playerData.totalScore);
    document.getElementById('result-rank').textContent = `称号: ${rank.name}`;

    let icon = '🚃';
    let title = 'お疲れさまでした！';
    let message = 'また挑戦して知識を深めましょう。';

    if (accuracy === 100) {
      icon = '🏆';
      title = 'パーフェクト！';
      message = '全問正解！君は真の電車マニアだ！';
    } else if (accuracy >= 80) {
      icon = '🌟';
      title = '素晴らしい！';
      message = '高い正答率！あと一歩で頂点だ。';
    } else if (accuracy >= 50) {
      icon = '🚄';
      title = '及第点！';
      message = '基礎はバッチリ。もう少しで上級者の仲間入り。';
    } else if (state.mode === 'survival' && state.correctCount >= 5) {
      icon = '💪';
      title = 'サバイバル記録更新！';
      message = `${state.correctCount}問連続正解！本当の実力はここからだ。`;
    }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-message').textContent = message;
  }

  function startQuiz() {
    const pool = filterQuestions();
    if (pool.length === 0) {
      alert('選択した条件に該当する問題がありません。カテゴリや難易度を変更してください。');
      return;
    }

    state.questions = pool;
    state.currentIndex = 0;
    state.score = 0;
    state.correctCount = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.answered = false;

    showScreen('screen-quiz');
    renderQuestion();
  }

  // --- Event Listeners ---

  document.getElementById('btn-start').addEventListener('click', () => {
    renderCategories();
    renderDifficulties();
    showScreen('screen-category');
  });

  document.getElementById('btn-back-category').addEventListener('click', () => {
    showScreen('screen-title');
    renderTitleStats();
  });

  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.mode = card.dataset.mode;
    });
  });

  document.getElementById('btn-begin-quiz').addEventListener('click', startQuiz);

  document.getElementById('btn-next').addEventListener('click', nextQuestion);

  document.getElementById('btn-retry').addEventListener('click', () => {
    showScreen('screen-category');
  });

  document.getElementById('btn-home').addEventListener('click', () => {
    renderTitleStats();
    showScreen('screen-title');
  });

  document.getElementById('btn-howto').addEventListener('click', () => {
    document.getElementById('modal-howto').classList.remove('hidden');
  });

  document.getElementById('btn-close-howto').addEventListener('click', () => {
    document.getElementById('modal-howto').classList.add('hidden');
  });

  document.getElementById('modal-howto').addEventListener('click', (e) => {
    if (e.target.id === 'modal-howto') {
      document.getElementById('modal-howto').classList.add('hidden');
    }
  });

  // Init
  renderTitleStats();
})();
