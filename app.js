const personalityTypes = {
  overthinking: {
    name: "過度解讀型",
    shortName: "過度解讀",
    tagline: "對方少回一句話，你已經在腦中演完整部悲劇。",
    pattern:
      "你很擅長捕捉細節，也很容易把回覆速度、語氣、標點符號都放進心裡反覆推演。",
    blindspot:
      "不確定感會被你快速翻譯成危險訊號。事情還沒有被確認前，你可能已經先讓自己受傷一次。",
    need:
      "你需要更清楚的溝通，也需要一套能讓自己先穩下來的方法，而不是把答案全部交給對方的反應。",
    advice:
      "先把事實和想像分開寫下來。當你想追問前，先問自己：我現在要的是資訊，還是安撫？",
    color: "#904E5B",
  },
  peoplePleaser: {
    name: "討好壓抑型",
    shortName: "討好壓抑",
    tagline: "很怕麻煩對方，所以總是假裝自己沒事。",
    pattern:
      "你習慣先照顧對方的感受，自己的委屈常常被放到很後面，甚至連你自己都差點忘記。",
    blindspot:
      "懂事可以讓衝突暫時變少，但長期壓抑會讓你突然耗盡，或在某一天對關係徹底冷掉。",
    need:
      "你需要練習把需求說出口，也需要相信：被愛的人不是只能表現得好相處。",
    advice:
      "從小句子開始，例如「我其實有一點失落」。不用一次說完全部，但不要一直把自己消音。",
    color: "#A2626E",
  },
  securityHunger: {
    name: "安全感飢餓型",
    shortName: "安全感飢餓",
    tagline: "不是不信任對方，而是太害怕被丟下。",
    pattern:
      "你很在乎關係的穩定感。當對方回應變少、態度變淡，你會立刻感覺到心裡有一塊空掉。",
    blindspot:
      "越不安越想抓緊，反而可能讓你們的互動變得緊繃，連真正想表達的愛都被焦慮蓋過。",
    need:
      "你需要穩定的回應，也需要在關係之外建立能支撐自己的生活節奏。",
    advice:
      "可以直接說出你需要的確認，例如「你忙完跟我說一聲就好」。把需求說清楚，比反覆試探更有效。",
    color: "#7B5E8E",
  },
  avoidantFreeze: {
    name: "冷處理逃避型",
    shortName: "冷處理逃避",
    tagline: "一感覺太靠近，就會本能地想退後。",
    pattern:
      "你不一定是不在乎，而是當情緒太滿、關係太靠近時，你需要先退到一個安全距離。",
    blindspot:
      "你以為冷一下可以降低衝突，但對方收到的訊號常常是被拒絕、被放下、或不被重視。",
    need:
      "你需要保留空間，但也需要讓對方知道你不是要消失，只是需要一點時間整理。",
    advice:
      "先留下一句可預期的訊息，例如「我現在有點亂，晚點 9 點再好好說」。有界線，也不中斷連結。",
    color: "#697D78",
  },
  loveBurner: {
    name: "戀愛腦燃燒型",
    shortName: "戀愛腦燃燒",
    tagline: "愛上之後，生活重心很容易整個被對方拿走。",
    pattern:
      "你愛得很投入，也很容易把對方的狀態放在自己生活的中心，連一天心情都跟著起伏。",
    blindspot:
      "強烈投入不一定等於關係很深。當生活只剩對方，你反而比較容易失去吸引力和安全感。",
    need:
      "你需要保留自己的節奏、朋友、興趣和目標，讓愛情成為生活的一部分，而不是全部。",
    advice:
      "每週固定安排一件完全不為對方而做的事。不是降低愛，而是把自己也放回關係裡。",
    color: "#B55D4C",
  },
  highGuard: {
    name: "高標準防衛型",
    shortName: "高標準防衛",
    tagline: "你不是難搞，而是很怕自己選錯人。",
    pattern:
      "你很會觀察細節，也很在意對方言行是否一致。你不是不想相信，只是很怕再一次判斷失誤。",
    blindspot:
      "高標準能保護你，但也可能讓普通差異被你看成重大風險，讓關係還沒開始就先被審核到疲乏。",
    need:
      "你需要區分真正的紅旗和可以磨合的差異，也需要允許關係用時間證明，而不是一次考完。",
    advice:
      "把你的標準分成三類：不能妥協、可以觀察、只是偏好。這會讓你的判斷更準，也更不累。",
    color: "#4F6674",
  },
  selfDoubt: {
    name: "自我懷疑型",
    shortName: "自我懷疑",
    tagline: "關係出問題時，你第一個懷疑的通常是自己。",
    pattern:
      "你很常反省，也很怕自己造成對方壓力。對方情緒不好時，你容易先想是不是自己不夠好。",
    blindspot:
      "關係是兩個人的互動，不是你一個人的考卷。過度自責會讓你看不見對方也需要負責的部分。",
    need:
      "你需要重新看見自己的價值，也需要把責任放回它真正的位置。",
    advice:
      "當你開始怪自己時，試著補一句：「這件事裡，對方可以負責的是什麼？」這不是推責，而是平衡。",
    color: "#76698E",
  },
  casualMask: {
    name: "假裝灑脫型",
    shortName: "假裝灑脫",
    tagline: "嘴上說沒差，其實心裡已經反覆想了八百遍。",
    pattern:
      "你不喜歡讓自己看起來太在意，所以常用玩笑、冷淡或理性，把真正的失落藏起來。",
    blindspot:
      "你包裝得太好時，對方可能真的以為你沒事，也不知道你其實需要被靠近和安撫。",
    need:
      "你需要一種不失去尊嚴的表達方式，讓在乎被看見，而不是只能躲在反話和沉默後面。",
    advice:
      "把「沒差」換成更準確的一句話，例如「我可以理解，但我其實有點在意」。這已經很夠了。",
    color: "#8B6D5C",
  },
};

const quizQuestions = [
  {
    text: "對方已讀你 3 小時，你最接近哪一種反應？",
    options: [
      {
        text: "開始回想自己是不是說錯話，連上一句標點符號都想檢查。",
        scores: { overthinking: 2, selfDoubt: 1 },
      },
      {
        text: "表面說他可能在忙，但心裡需要一點確認才放得下。",
        scores: { securityHunger: 2, overthinking: 1 },
      },
      {
        text: "先把自己抽離一點，等他回來也不想表現得太熱情。",
        scores: { casualMask: 2, avoidantFreeze: 1 },
      },
      {
        text: "先觀察這是不是常態，如果一直這樣就會重新評估。",
        scores: { highGuard: 2, avoidantFreeze: 1 },
      },
    ],
  },
  {
    text: "約會前一晚，對方臨時說明天可能不行，你會？",
    options: [
      {
        text: "馬上說沒關係，還幫他找理由，但其實有點失落。",
        scores: { peoplePleaser: 2, selfDoubt: 1 },
      },
      {
        text: "想知道他是真的有事，還是其實沒有那麼想見你。",
        scores: { securityHunger: 2, overthinking: 1 },
      },
      {
        text: "回得很冷靜，心裡默默把期待值調低。",
        scores: { casualMask: 2, highGuard: 1 },
      },
      {
        text: "會看他有沒有主動補時間，這比取消本身更重要。",
        scores: { highGuard: 2, securityHunger: 1 },
      },
    ],
  },
  {
    text: "對方突然比平常更熱情，你第一個念頭是？",
    options: [
      {
        text: "太好了，今天可以多黏一點，整個人都被點亮。",
        scores: { loveBurner: 2, securityHunger: 1 },
      },
      {
        text: "他是不是做了什麼虧心事，才突然變這樣？",
        scores: { highGuard: 2, overthinking: 1 },
      },
      {
        text: "終於比較安心，但也會希望這種狀態可以維持。",
        scores: { securityHunger: 2, peoplePleaser: 1 },
      },
      {
        text: "有點開心，但太突然的靠近會讓你想退半步。",
        scores: { avoidantFreeze: 2, casualMask: 1 },
      },
    ],
  },
  {
    text: "你很想跟對方說一個需求，但怕自己太麻煩，你會？",
    options: [
      {
        text: "先忍著，告訴自己這應該不是什麼大事。",
        scores: { peoplePleaser: 2, selfDoubt: 1 },
      },
      {
        text: "在訊息框寫了又刪，擔心每個字看起來都太重。",
        scores: { overthinking: 2, selfDoubt: 1 },
      },
      {
        text: "希望他能自己發現，這樣你就不用主動開口。",
        scores: { securityHunger: 2, peoplePleaser: 1 },
      },
      {
        text: "乾脆說沒事，因為承認自己需要他有點丟臉。",
        scores: { casualMask: 2, avoidantFreeze: 1 },
      },
    ],
  },
  {
    text: "你們吵架後，最容易出現的狀態是？",
    options: [
      {
        text: "反覆回放整段對話，想知道哪一句開始不對。",
        scores: { overthinking: 2, selfDoubt: 1 },
      },
      {
        text: "先道歉或緩和氣氛，不想讓衝突繼續擴大。",
        scores: { peoplePleaser: 2, securityHunger: 1 },
      },
      {
        text: "暫時不想說話，因為一開口可能更亂。",
        scores: { avoidantFreeze: 2, casualMask: 1 },
      },
      {
        text: "會記住這次衝突暴露出的價值觀差異。",
        scores: { highGuard: 2, overthinking: 1 },
      },
    ],
  },
  {
    text: "對方稱讚一個你覺得很有魅力的人，你心裡會？",
    options: [
      {
        text: "有點不安，想確認自己在他心裡是不是仍然特別。",
        scores: { securityHunger: 2, selfDoubt: 1 },
      },
      {
        text: "忍不住比較，開始覺得自己是不是不夠好。",
        scores: { selfDoubt: 2, overthinking: 1 },
      },
      {
        text: "表面開玩笑帶過，心裡其實默默記下來。",
        scores: { casualMask: 2, highGuard: 1 },
      },
      {
        text: "觀察他的稱讚尺度，看看有沒有越界。",
        scores: { highGuard: 2, securityHunger: 1 },
      },
    ],
  },
  {
    text: "關係越來越穩定時，你最容易？",
    options: [
      {
        text: "開始把很多安排都跟對方綁在一起。",
        scores: { loveBurner: 2, securityHunger: 1 },
      },
      {
        text: "突然想保留一點距離，怕自己失去自由。",
        scores: { avoidantFreeze: 2, casualMask: 1 },
      },
      {
        text: "檢查這段穩定是不是可靠，而不是只有一時熱度。",
        scores: { highGuard: 2, overthinking: 1 },
      },
      {
        text: "想要更多承諾，因為不確定的地方還是會讓你慌。",
        scores: { securityHunger: 2, peoplePleaser: 1 },
      },
    ],
  },
  {
    text: "當你開始想像兩個人的未來，你通常會？",
    options: [
      {
        text: "腦中已經有很多畫面，連週末和旅行都想好了。",
        scores: { loveBurner: 2, securityHunger: 1 },
      },
      {
        text: "先評估現實條件，怕感覺很好但最後不適合。",
        scores: { highGuard: 2, overthinking: 1 },
      },
      {
        text: "擔心自己是不是不夠好，撐不起他想要的關係。",
        scores: { selfDoubt: 2, peoplePleaser: 1 },
      },
      {
        text: "不敢想太遠，太快談未來會讓你想逃。",
        scores: { avoidantFreeze: 2, casualMask: 1 },
      },
    ],
  },
  {
    text: "對方問你「你怎麼了？」你最常怎麼回？",
    options: [
      {
        text: "沒事啦，真的沒事，然後換個話題。",
        scores: { peoplePleaser: 2, casualMask: 1 },
      },
      {
        text: "先確認自己是不是想太多，才敢說出口。",
        scores: { overthinking: 2, selfDoubt: 1 },
      },
      {
        text: "用玩笑帶過，避免氣氛突然變得太認真。",
        scores: { casualMask: 2, avoidantFreeze: 1 },
      },
      {
        text: "希望他可以多問幾次，讓你感覺自己真的被在乎。",
        scores: { securityHunger: 2, peoplePleaser: 1 },
      },
    ],
  },
  {
    text: "對方說「我想要一點空間」，你會怎麼理解？",
    options: [
      {
        text: "心裡一沉，覺得是不是快要不喜歡你了。",
        scores: { securityHunger: 2, overthinking: 1 },
      },
      {
        text: "開始想是不是自己太黏、太煩、太有壓力。",
        scores: { selfDoubt: 2, peoplePleaser: 1 },
      },
      {
        text: "覺得剛好，你也需要時間恢復自己的節奏。",
        scores: { avoidantFreeze: 2, highGuard: 1 },
      },
      {
        text: "表面說好，心裡先把自己收回來一點。",
        scores: { casualMask: 2, securityHunger: 1 },
      },
    ],
  },
  {
    text: "你發現自己非常在意對方時，第一反應是？",
    options: [
      {
        text: "想更靠近，想多知道他的生活和想法。",
        scores: { loveBurner: 2, securityHunger: 1 },
      },
      {
        text: "提醒自己不要太明顯，免得看起來輸了。",
        scores: { casualMask: 2, highGuard: 1 },
      },
      {
        text: "開始擔心這份在意會不會變成自己的弱點。",
        scores: { overthinking: 2, avoidantFreeze: 1 },
      },
      {
        text: "更努力表現得好，希望他也能更珍惜你。",
        scores: { peoplePleaser: 2, selfDoubt: 1 },
      },
    ],
  },
  {
    text: "朋友說你在這段關係裡好像不太快樂，你會？",
    options: [
      {
        text: "先想是不是自己太敏感，明明對方也沒有那麼糟。",
        scores: { selfDoubt: 2, peoplePleaser: 1 },
      },
      {
        text: "幫對方解釋，覺得朋友可能不了解完整狀況。",
        scores: { peoplePleaser: 2, securityHunger: 1 },
      },
      {
        text: "開始整理這段關係的優缺點，看看值不值得繼續。",
        scores: { highGuard: 2, overthinking: 1 },
      },
      {
        text: "嘴上說還好，但心裡知道自己其實已經累了。",
        scores: { casualMask: 2, avoidantFreeze: 1 },
      },
    ],
  },
];

const state = {
  currentQuestion: 0,
  answers: Array(quizQuestions.length).fill(null),
  resultId: null,
  scores: {},
};

const nodes = {
  home: document.querySelector("#home"),
  quiz: document.querySelector("#quiz"),
  result: document.querySelector("#result"),
  start: document.querySelector("[data-start]"),
  homeButton: document.querySelector("[data-home]"),
  jumpResult: document.querySelector("[data-jump-result]"),
  progress: document.querySelector("[data-progress]"),
  questionCount: document.querySelector("[data-question-count]"),
  questionKicker: document.querySelector("[data-question-kicker]"),
  questionTitle: document.querySelector("[data-question-title]"),
  options: document.querySelector("[data-options]"),
  prev: document.querySelector("[data-prev]"),
  restart: document.querySelector("[data-restart]"),
  retake: document.querySelector("[data-retake]"),
  resultName: document.querySelector("[data-result-name]"),
  resultTagline: document.querySelector("[data-result-tagline]"),
  resultPattern: document.querySelector("[data-result-pattern]"),
  resultBlindspot: document.querySelector("[data-result-blindspot]"),
  resultNeed: document.querySelector("[data-result-need]"),
  resultAdvice: document.querySelector("[data-result-advice]"),
  scoreList: document.querySelector("[data-score-list]"),
  download: document.querySelector("[data-download]"),
  share: document.querySelector("[data-share]"),
  shareStatus: document.querySelector("[data-share-status]"),
  typeGrid: document.querySelector("[data-type-grid]"),
};

function showView(view) {
  nodes.home.classList.toggle("hidden", view !== "home");
  nodes.quiz.classList.toggle("hidden", view !== "quiz");
  nodes.result.classList.toggle("hidden", view !== "result");

  if (view === "quiz") {
    nodes.quiz.scrollIntoView({ block: "start" });
  } else if (view === "result") {
    nodes.result.scrollIntoView({ block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function startQuiz() {
  state.currentQuestion = 0;
  showView("quiz");
  renderQuestion();
}

function restartQuiz() {
  state.currentQuestion = 0;
  state.answers = Array(quizQuestions.length).fill(null);
  state.resultId = null;
  state.scores = {};
  nodes.shareStatus.textContent = "";
  showView("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[state.currentQuestion];
  const selectedIndex = state.answers[state.currentQuestion];
  const progressPercent = (state.currentQuestion / quizQuestions.length) * 100;

  nodes.progress.style.width = `${progressPercent}%`;
  nodes.questionCount.textContent = `${state.currentQuestion + 1} / ${quizQuestions.length}`;
  nodes.questionKicker.textContent = `情境 ${String(state.currentQuestion + 1).padStart(2, "0")}`;
  nodes.questionTitle.textContent = question.text;
  nodes.prev.disabled = state.currentQuestion === 0;

  nodes.options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${selectedIndex === index ? " is-selected" : ""}`;
    button.innerHTML = `
      <span class="option__letter">${String.fromCharCode(65 + index)}</span>
      <span class="option__text"></span>
    `;
    button.querySelector(".option__text").textContent = option.text;
    button.addEventListener("click", () => selectOption(index));
    nodes.options.appendChild(button);
  });
}

function selectOption(index) {
  state.answers[state.currentQuestion] = index;
  renderQuestion();

  window.setTimeout(() => {
    if (state.currentQuestion < quizQuestions.length - 1) {
      state.currentQuestion += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 180);
}

function calculateScores() {
  const scores = Object.fromEntries(Object.keys(personalityTypes).map((id) => [id, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const option = quizQuestions[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([id, value]) => {
      scores[id] += value;
    });
  });

  return scores;
}

function getWinningType(scores) {
  const typeOrder = Object.keys(personalityTypes);
  return typeOrder
    .map((id, index) => ({ id, score: scores[id], index }))
    .sort((a, b) => b.score - a.score || a.index - b.index)[0].id;
}

function finishQuiz() {
  state.scores = calculateScores();
  state.resultId = getWinningType(state.scores);
  nodes.progress.style.width = "100%";
  renderResult();
  showView("result");
}

function renderResult() {
  const result = personalityTypes[state.resultId];
  nodes.resultName.textContent = result.name;
  nodes.resultTagline.textContent = result.tagline;
  nodes.resultPattern.textContent = result.pattern;
  nodes.resultBlindspot.textContent = result.blindspot;
  nodes.resultNeed.textContent = result.need;
  nodes.resultAdvice.textContent = result.advice;
  nodes.result.style.background = result.color;
  nodes.shareStatus.textContent = "";

  const sortedScores = Object.entries(state.scores)
    .map(([id, score]) => ({ id, score, type: personalityTypes[id] }))
    .sort((a, b) => b.score - a.score);

  const maxScore = Math.max(...sortedScores.map((item) => item.score), 1);
  nodes.scoreList.innerHTML = "";
  sortedScores.forEach((item) => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <span></span>
      <div class="score-track"><div class="score-fill"></div></div>
      <strong></strong>
    `;
    row.querySelector("span").textContent = item.type.shortName;
    row.querySelector(".score-fill").style.width = `${(item.score / maxScore) * 100}%`;
    row.querySelector(".score-fill").style.background = item.type.color;
    row.querySelector("strong").textContent = item.score;
    nodes.scoreList.appendChild(row);
  });
}

function renderTypeGrid() {
  nodes.typeGrid.innerHTML = "";
  Object.values(personalityTypes).forEach((type) => {
    const article = document.createElement("article");
    article.className = "type-card";
    article.style.borderTop = `5px solid ${type.color}`;
    article.innerHTML = `
      <h3></h3>
      <p></p>
    `;
    article.querySelector("h3").textContent = type.name;
    article.querySelector("p").textContent = type.tagline;
    nodes.typeGrid.appendChild(article);
  });
}

function buildShareText() {
  const result = personalityTypes[state.resultId];
  return `我測出來是「${result.name}」：${result.tagline}\n\n你也來測測看：你是哪種內耗戀愛人格？`;
}

async function copyShareText() {
  if (!state.resultId) return;
  const text = buildShareText();

  try {
    if (navigator.share) {
      await navigator.share({
        title: "你是哪種內耗戀愛人格？",
        text,
      });
      nodes.shareStatus.textContent = "已開啟系統分享。";
      return;
    }

    await navigator.clipboard.writeText(text);
    nodes.shareStatus.textContent = "分享文案已複製。";
  } catch (error) {
    nodes.shareStatus.textContent = text;
  }
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines = 99) {
  const chars = Array.from(text);
  let line = "";
  let lines = [];

  chars.forEach((char) => {
    const nextLine = line + char;
    if (context.measureText(nextLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = nextLine;
    }
  });
  if (line) lines.push(line);

  lines = lines.slice(0, maxLines);
  lines.forEach((lineText, index) => {
    context.fillText(lineText, x, y + index * lineHeight);
  });
  return y + lines.length * lineHeight;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function downloadResultImage() {
  if (!state.resultId) return;
  const result = personalityTypes[state.resultId];
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");

  context.fillStyle = "#F7F1ED";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = result.color;
  context.fillRect(0, 0, canvas.width, 270);

  context.fillStyle = "#FFFAF5";
  context.font =
    '700 34px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  context.fillText("你是哪種內耗戀愛人格？", 76, 105);
  context.font =
    '900 78px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  wrapCanvasText(context, result.name, 76, 200, 900, 88, 2);

  context.fillStyle = "#FFFAF5";
  roundRect(context, 68, 320, 944, 900, 24);
  context.fill();
  context.strokeStyle = "#DDCEC9";
  context.lineWidth = 3;
  context.stroke();

  context.fillStyle = result.color;
  context.font =
    '900 38px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  let y = wrapCanvasText(context, result.tagline, 110, 400, 860, 54, 3);

  context.fillStyle = "#332B33";
  context.font =
    '700 30px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  y += 52;
  context.fillText("內耗模式", 110, y);
  context.fillStyle = "#6D6168";
  context.font =
    '400 29px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  y = wrapCanvasText(context, result.pattern, 110, y + 50, 860, 46, 4);

  context.fillStyle = "#332B33";
  context.font =
    '700 30px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  y += 50;
  context.fillText("給你的建議", 110, y);
  context.fillStyle = "#6D6168";
  context.font =
    '400 29px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  wrapCanvasText(context, result.advice, 110, y + 50, 860, 46, 4);

  context.fillStyle = "#332B33";
  context.font =
    '700 28px "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif';
  context.fillText("測驗不是診斷，是一次關係模式觀察。", 76, 1292);

  const link = document.createElement("a");
  link.download = `${result.name}-測驗結果.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

nodes.start.addEventListener("click", startQuiz);
nodes.homeButton.addEventListener("click", () => showView("home"));
nodes.jumpResult.addEventListener("click", () => {
  document.querySelector("#types").scrollIntoView({ block: "start" });
});
nodes.prev.addEventListener("click", () => {
  if (state.currentQuestion === 0) return;
  state.currentQuestion -= 1;
  renderQuestion();
});
nodes.restart.addEventListener("click", restartQuiz);
nodes.retake.addEventListener("click", restartQuiz);
nodes.share.addEventListener("click", copyShareText);
nodes.download.addEventListener("click", downloadResultImage);

renderTypeGrid();
