const activityMeta = {
  count: {
    unit: "活动一",
    title: "数一数，认识 1～5",
    prompt: "点一点花园里的花，再选择它表示的数。"
  },
  compare: {
    unit: "活动二",
    title: "比大小，认识 >、=、<",
    prompt: "调节两边数量，选出中间合适的符号。"
  },
  ordinal: {
    unit: "活动三",
    title: "从方向里理解“第几”",
    prompt: "看清从哪边数，再点中对应的小鸟。"
  },
  split: {
    unit: "活动四",
    title: "5 的分与合",
    prompt: "拖动滑块，把 5 分成两堆。"
  }
};

const countPositions = [
  [18, 74],
  [36, 69],
  [55, 76],
  [72, 66],
  [85, 78]
];

let activeActivity = "count";
let stars = 0;
let countTarget = 4;
let countedFlowers = new Set();
let leftValue = 3;
let rightValue = 2;
let selectedSign = null;
let ordinalDirection = "left";
let ordinalTarget = 4;
let splitLeft = 2;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const elements = {
  tabs: $$(".tab"),
  views: $$(".activity-view"),
  unitTag: $("#unitTag"),
  title: $("#activityTitle"),
  prompt: $("#activityPrompt"),
  feedback: $("#feedback"),
  starCount: $("#starCount"),
  countScene: $("#countScene"),
  numberChoices: $("#numberChoices"),
  leftObjects: $("#leftObjects"),
  rightObjects: $("#rightObjects"),
  leftCount: $("#leftCount"),
  rightCount: $("#rightCount"),
  chosenSign: $("#chosenSign"),
  birdLine: $("#birdLine"),
  ordinalText: $("#ordinalText"),
  splitSlider: $("#splitSlider"),
  basketA: $("#basketA"),
  basketB: $("#basketB"),
  splitFormula: $("#splitFormula")
};

function setFeedback(text, type = "good") {
  elements.feedback.textContent = text;
  elements.feedback.className = `feedback ${type}`;
}

function addStar() {
  stars += 1;
  elements.starCount.textContent = String(stars);
}

function switchActivity(next) {
  activeActivity = next;
  elements.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.activity === next));
  elements.views.forEach((view) => view.classList.toggle("active", view.id === next));
  const meta = activityMeta[next];
  elements.unitTag.textContent = meta.unit;
  elements.title.textContent = meta.title;
  elements.prompt.textContent = meta.prompt;
  setFeedback("先观察，再动手。", "good");
}

function renderCountActivity() {
  elements.countScene.innerHTML = "";
  countedFlowers = new Set();

  countPositions.slice(0, countTarget).forEach(([left, top], index) => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${left}%`;
    flower.style.top = `${top}%`;
    flower.style.animationDelay = `${index * 80}ms`;
    flower.innerHTML = `
      <button aria-label="第 ${index + 1} 朵花"></button>
      <span class="stem"></span>
      <span class="count-badge">${index + 1}</span>
    `;
    flower.querySelector("button").addEventListener("click", () => {
      countedFlowers.add(index);
      flower.classList.add("counted");
      setFeedback(`已经点数到 ${countedFlowers.size}。`, "good");
    });
    elements.countScene.appendChild(flower);
  });

  elements.numberChoices.innerHTML = "";
  for (let number = 1; number <= 5; number += 1) {
    const button = document.createElement("button");
    button.textContent = number;
    button.addEventListener("click", () => {
      $$(".number-row button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      if (number === countTarget && countedFlowers.size === countTarget) {
        setFeedback(`对，${countTarget} 朵花可以用数字 ${countTarget} 表示。`, "good");
        addStar();
        countTarget = countTarget === 5 ? 1 : countTarget + 1;
        window.setTimeout(renderCountActivity, 900);
      } else if (number === countTarget) {
        setFeedback("数字选对了，再把每朵花点数一遍。", "good");
      } else {
        setFeedback("再数一数，看看是不是这个数。", "try");
      }
    });
    elements.numberChoices.appendChild(button);
  }
}

function makeObjects(container, count) {
  container.innerHTML = "";
  for (let index = 0; index < count; index += 1) {
    const object = document.createElement("span");
    object.className = "pinecone";
    object.style.animationDelay = `${index * 45}ms`;
    container.appendChild(object);
  }
}

function renderCompareActivity() {
  elements.leftCount.textContent = String(leftValue);
  elements.rightCount.textContent = String(rightValue);
  makeObjects(elements.leftObjects, leftValue);
  makeObjects(elements.rightObjects, rightValue);
  elements.chosenSign.textContent = selectedSign || "?";
  $$(".sign-buttons button").forEach((button) => {
    button.classList.toggle("active", button.dataset.sign === selectedSign);
  });
}

function correctSign() {
  if (leftValue > rightValue) return ">";
  if (leftValue < rightValue) return "<";
  return "=";
}

function updateSide(side, delta) {
  if (side === "left") {
    leftValue = clamp(leftValue + delta, 1, 5);
  } else {
    rightValue = clamp(rightValue + delta, 1, 5);
  }
  selectedSign = null;
  renderCompareActivity();
  setFeedback("数量变了，重新判断中间的符号。", "good");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function chooseSign(sign) {
  selectedSign = sign;
  renderCompareActivity();
  if (sign === correctSign()) {
    setFeedback(`${leftValue} ${sign} ${rightValue}，判断正确。`, "good");
    addStar();
  } else {
    setFeedback("先一一对应比一比，再选符号。", "try");
  }
}

function renderBirds() {
  elements.birdLine.innerHTML = "";
  for (let index = 0; index < 5; index += 1) {
    const button = document.createElement("button");
    const order = ordinalDirection === "left" ? index + 1 : 5 - index;
    button.className = "bird";
    button.setAttribute("aria-label", `${ordinalDirection === "left" ? "从左边" : "从右边"}数第 ${order} 只`);
    button.innerHTML = `<span class="head"></span><span class="order">第 ${order} 只</span>`;
    button.addEventListener("click", () => {
      $$(".bird").forEach((bird) => bird.classList.remove("selected", "correct"));
      button.classList.add("selected");
      if (order === ordinalTarget) {
        button.classList.add("correct");
        setFeedback(`找到了，这就是第 ${ordinalTarget} 只。`, "good");
        addStar();
      } else {
        setFeedback("方向很关键，再从指定的一边数一遍。", "try");
      }
    });
    elements.birdLine.appendChild(button);
  }
  elements.ordinalText.textContent = `请找出第 ${ordinalTarget} 只小鸟`;
}

function newOrdinalQuestion() {
  ordinalTarget = ordinalTarget === 5 ? 1 : ordinalTarget + 1;
  renderBirds();
  setFeedback("新题来了，先确认从哪边数。", "good");
}

function setDirection(direction) {
  ordinalDirection = direction;
  $$(".direction").forEach((button) => {
    button.classList.toggle("active", button.dataset.direction === direction);
  });
  renderBirds();
  setFeedback(direction === "left" ? "现在从左边开始数。" : "现在从右边开始数。", "good");
}

function renderSplitActivity() {
  const right = 5 - splitLeft;
  elements.basketA.innerHTML = "";
  elements.basketB.innerHTML = "";
  for (let index = 0; index < splitLeft; index += 1) {
    elements.basketA.appendChild(makeApple(index));
  }
  for (let index = 0; index < right; index += 1) {
    elements.basketB.appendChild(makeApple(index));
  }
  elements.splitFormula.textContent = `5 可以分成 ${splitLeft} 和 ${right}`;
  elements.splitSlider.value = String(splitLeft);
}

function makeApple(index) {
  const apple = document.createElement("span");
  apple.className = "apple";
  apple.style.animationDelay = `${index * 45}ms`;
  return apple;
}

function shuffleSplit() {
  splitLeft = splitLeft === 4 ? 1 : splitLeft + 1;
  renderSplitActivity();
  setFeedback(`也可以说 ${splitLeft} 和 ${5 - splitLeft} 组成 5。`, "good");
  addStar();
}

elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchActivity(tab.dataset.activity));
});

$$(".stepper button").forEach((button) => {
  button.addEventListener("click", () => {
    updateSide(button.dataset.side, Number(button.dataset.delta));
  });
});

$$(".sign-buttons button").forEach((button) => {
  button.addEventListener("click", () => chooseSign(button.dataset.sign));
});

$$(".direction").forEach((button) => {
  button.addEventListener("click", () => setDirection(button.dataset.direction));
});

$("#newOrdinal").addEventListener("click", newOrdinalQuestion);

elements.splitSlider.addEventListener("input", (event) => {
  splitLeft = Number(event.target.value);
  renderSplitActivity();
  setFeedback(`${splitLeft} 和 ${5 - splitLeft} 合起来是 5。`, "good");
});

$("#splitShuffle").addEventListener("click", shuffleSplit);

renderCountActivity();
renderCompareActivity();
renderBirds();
renderSplitActivity();
