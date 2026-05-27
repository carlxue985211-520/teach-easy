const tools = [
  {
    id: "T01",
    unit: "第一单元",
    title: "1-5 的认识",
    pages: "PDF 3-12 · 教材 14-23",
    objective: "认识 1-5，建立数量和数字的对应，理解比较和第几。",
    tip: "先让学生观察物体数量，再点数验证；A 版偏课件，B 版偏童趣。",
    type: "quantity",
    max: 5,
    target: 4
  },
  {
    id: "T02",
    unit: "第一单元",
    title: "1-5 的加、减法",
    pages: "PDF 13-18 · 教材 24-29",
    objective: "用合起来、去掉来理解加法和减法。",
    tip: "演示前先让学生说图意，再出现算式。",
    type: "builder",
    builder: { modes: ["add", "sub"], boxCount: 2, pool: 5, init: { add: [3, 1], subMinuend: 5 } }
  },
  {
    id: "T03",
    unit: "第一单元",
    title: "0 的认识和加、减法",
    pages: "PDF 19 · 教材 30",
    objective: "理解 0 表示一个也没有，掌握加 0、减 0、减完为 0。",
    tip: "用空盘子和拿走全部帮助学生说出 0 的意思。",
    type: "builder",
    builder: { modes: ["add", "sub"], boxCount: 2, pool: 5, init: { add: [0, 5], subMinuend: 4 }, examples: ["0+5=5", "5+0=5", "5-0=5", "5-5=0"] }
  },
  {
    id: "T04",
    unit: "第一单元",
    title: "5 以内整理和复习",
    pages: "PDF 20-22 · 教材 31-33",
    objective: "整理 0-5 的数序、比较、分合和加减法。",
    tip: "适合课末快速抽问：点一张卡，说一个相关算式。",
    type: "review",
    max: 5
  },
  {
    id: "T05",
    unit: "第二单元",
    title: "6-9 的认识",
    pages: "PDF 25-32 · 教材 36-43",
    objective: "认识 6-9，巩固数序、比较大小和第几。",
    tip: "把数量增大后仍然保留点数和比较的动作。",
    type: "quantity",
    max: 9,
    target: 7
  },
  {
    id: "T06",
    unit: "第二单元",
    title: "6-9 的分与合",
    pages: "PDF 28-32 · 教材 39-43",
    objective: "通过分两堆理解 6、7、8、9 的组成。",
    tip: "拖动滑块时，请学生同步说“几和几组成几”。",
    type: "split",
    total: 8
  },
  {
    id: "T07",
    unit: "第二单元",
    title: "6 和 7 的加、减法",
    pages: "PDF 33-38 · 教材 44-49",
    objective: "根据 6、7 的分合看图列加减算式。",
    tip: "先说左边、右边各有几个，再判断用加法还是减法。",
    type: "builder",
    builder: { modes: ["add", "sub"], boxCount: 2, pool: 7, init: { add: [5, 2], subMinuend: 7 } }
  },
  {
    id: "T08",
    unit: "第二单元",
    title: "8 和 9 的加、减法",
    pages: "PDF 39-42 · 教材 50-53",
    objective: "通过遮住一部分理解减法中的整体、部分和另一部分。",
    tip: "盖住后让学生先猜，再显示算式。",
    type: "hidePart",
    total: 9,
    visible: 6
  },
  {
    id: "T09",
    unit: "第二单元",
    title: "10 的认识和加、减法",
    pages: "PDF 43-47 · 教材 54-58",
    objective: "认识 10，掌握 10 的分合和得数为 10 的加减法。",
    tip: "十格框很适合强调“凑满一排就是 10”。",
    type: "tenFrame",
    total: 10,
    filled: 7
  },
  {
    id: "T10",
    unit: "第二单元",
    title: "连加、连减",
    pages: "PDF 48 · 教材 59",
    objective: "理解连续增加或连续减少，按顺序计算。",
    tip: "每点一步就让学生说当前数量，最后再写完整算式。",
    type: "builder",
    builder: { modes: ["add"], boxCount: 3, pool: 10, init: { add: [5, 2, 1] }, boxLabels: ["第一个数", "第二个数", "第三个数"] }
  },
  {
    id: "T11",
    unit: "第二单元",
    title: "加、减混合",
    pages: "PDF 49-51 · 教材 60-62",
    objective: "理解先加后减或先减后加的动态过程。",
    tip: "把每一次变化分开演示，降低一步到位的负担。",
    type: "builder",
    builder: { modes: ["mix"], boxCount: 2, pool: 10, init: { mix: [4, 3] }, boxLabels: ["第一个数", "第二个数"] }
  },
  {
    id: "T12",
    unit: "第二单元",
    title: "10 以内整理和复习",
    pages: "PDF 52-55 · 教材 63-66",
    objective: "整理 10 以内数、分合、加减法和混合运算。",
    tip: "适合老师口令：找出得数为 10 的卡片。",
    type: "review",
    max: 10
  },
  {
    id: "T13",
    unit: "第三单元",
    title: "认识立体图形",
    pages: "PDF 57-60 · 教材 68-71",
    objective: "认识长方体、正方体、圆柱和球，并按特征分类。",
    tip: "点击图形后引导学生说：能不能滚、有没有平平的面。",
    type: "solids"
  },
  {
    id: "T14",
    unit: "第三单元",
    title: "搭一搭、拼一拼",
    pages: "PDF 59-61 · 教材 70-72",
    objective: "根据立体图形特征搭得稳、搭得高，尝试拼组长方体。",
    tip: "先强调“稳”，再比较“高”。",
    type: "build"
  },
  {
    id: "T15",
    unit: "第四单元",
    title: "10 的再认识",
    pages: "PDF 63-64 · 教材 74-75",
    objective: "理解 10 个一是 1 个十。",
    tip: "先显示 10 根散棒，再一键捆成 1 捆。",
    type: "bundle10"
  },
  {
    id: "T16",
    unit: "第四单元",
    title: "11-20 的认识",
    pages: "PDF 65-69 · 教材 76-80",
    objective: "理解十几由 1 个十和几个一组成，认识十位和个位。",
    tip: "选择数字后，让学生同时读数、说组成、看数位。",
    type: "placeValue",
    number: 15
  },
  {
    id: "T17",
    unit: "第四单元",
    title: "11-20 的数序与比较",
    pages: "PDF 67-69 · 教材 78-80",
    objective: "理解 11-20 的顺序、前后关系和大小比较。",
    tip: "用数轴让学生指出前一个、后一个、相邻数。",
    type: "numberLine",
    min: 0,
    max: 20,
    current: 10
  },
  {
    id: "T18",
    unit: "第四单元",
    title: "10 加几和相应减法",
    pages: "PDF 70 · 教材 81",
    objective: "理解 10 加几、十几减几、十几减 10。",
    tip: "让学生盯住十位的一捆和个位的散棒。",
    type: "tenPlus",
    ones: 3
  },
  {
    id: "T19",
    unit: "第四单元",
    title: "之间有几人",
    pages: "PDF 71-72 · 教材 82-83",
    objective: "借助排队情境理解两个序号之间有几人。",
    tip: "红色是两个端点，中间的人才计入“之间”。",
    type: "between",
    start: 4,
    end: 8
  },
  {
    id: "T20",
    unit: "第四单元",
    title: "11-20 整理和复习",
    pages: "PDF 73-76 · 教材 84-87",
    objective: "整理数位、数序、比较和简单加减。",
    tip: "作为第四单元复习入口，先选数再追问组成。",
    type: "placeValue",
    number: 18
  },
  {
    id: "T21",
    unit: "第五单元",
    title: "9 加几",
    pages: "PDF 78-79 · 教材 89-90",
    objective: "用凑十法计算 9 加几。",
    tip: "重点演示从另一个加数里拿出 1，先把 9 凑成 10。",
    type: "makeTen",
    base: 9,
    add: 4
  },
  {
    id: "T22",
    unit: "第五单元",
    title: "8、7、6 加几",
    pages: "PDF 80-84 · 教材 91-95",
    objective: "继续用凑十法计算 8、7、6 加几。",
    tip: "换底数时，请学生说“还差几到 10”。",
    type: "makeTen",
    base: 8,
    add: 5
  },
  {
    id: "T23",
    unit: "第五单元",
    title: "交换加数位置",
    pages: "PDF 81-84 · 教材 92-95",
    objective: "感受交换两个加数的位置，和不变。",
    tip: "左右交换后，数量没有变，只是观察顺序变了。",
    type: "commutative",
    left: 7,
    right: 8
  },
  {
    id: "T24",
    unit: "第五单元",
    title: "解决问题：一共有多少",
    pages: "PDF 85、87-88 · 教材 96、98-99",
    objective: "从不同角度观察情境，用进位加法求总数。",
    tip: "同一个图可以按男生女生分，也可以按前后排分。",
    type: "problem",
    mode: "total"
  },
  {
    id: "T25",
    unit: "第五单元",
    title: "解决问题：原来有多少",
    pages: "PDF 86-88 · 教材 97-99",
    objective: "理解领走的和剩下的合起来就是原来的。",
    tip: "虽然题里出现“领走”，但求原来有多少要用加法。",
    type: "problem",
    mode: "original"
  },
  {
    id: "T26",
    unit: "第五单元",
    title: "20 以内进位加法整理复习",
    pages: "PDF 89-90 · 教材 100-101",
    objective: "整理 20 以内进位加法表，按和分组说算式。",
    tip: "适合快速口算和发现算式排列规律。",
    type: "review",
    max: 20,
    plusOnly: true
  }
];

const $ = (selector) => document.querySelector(selector);

const SITE_ID = "teach-easy";
const SUPABASE_URL = "https://aobochkirbskwucttsmm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvYm9jaGtpcmJza3d1Y3R0c21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNDIyMzMsImV4cCI6MjA5MzkxODIzM30.eLNV2yXJ29tRoxu2GUcKbAWvnDccaGD6I1e1aAdawis";
const REVIEW_TABLE = "teaching_aid_reviews";
const REVIEW_STORAGE_KEY = "teach-easy-reviewer";

// 安全访问 localStorage：隐私模式或禁用存储时不抛错、不白屏。
function safeStorageGet(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch (error) {
    return "";
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    /* 忽略：存储不可用时仅退化为内存态 */
  }
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    /* 忽略 */
  }
}

// 认识数量教具的物体图标：水果、动物、交通工具等，每答对一组换一种。
const COUNT_ICONS = [
  "🍎", "🐰", "🚗", "⭐", "🍊", "🐱", "🚌", "🌸", "🍓", "🐶",
  "🚲", "🎈", "🍌", "🐤", "✈️", "🍇", "🐻", "🚂", "🍭", "🐞"
];

const els = {
  select: $("#chapterSelect"),
  versionButtons: [...document.querySelectorAll(".version")],
  reset: $("#resetTool"),
  code: $("#toolCode"),
  unit: $("#unitName"),
  title: $("#lessonTitle"),
  tip: $("#teacherTip"),
  stage: $("#toolStage")
};

let selectedToolId = tools[0].id;
let version = "A";
let state = {};
let reviewPanelOpen = true;
let reviewer = safeStorageGet(REVIEW_STORAGE_KEY);
let reviewState = {
  key: "",
  loading: false,
  loaded: false,
  error: "",
  items: []
};

function currentTool() {
  return tools.find((tool) => tool.id === selectedToolId) || tools[0];
}

function resetState(tool = currentTool()) {
  state = {
    countChoice: null,
    quantityTarget: tool.target || Math.min(tool.max || 5, 5),
    quantityIcon: 0,
    left: tool.left ?? 3,
    right: tool.right ?? 2,
    mode: tool.mode || "add",
    splitLeft: Math.max(1, Math.floor((tool.total || 8) / 2)),
    splitTotal: tool.total || 8,
    splitFound: [],
    onesValue: tool.ones || 3,
    visible: tool.visible || 6,
    filled: tool.filled || 7,
    chainStep: 0,
    bundled: false,
    number: tool.number || 15,
    lineCurrent: tool.current || 16,
    betweenStart: tool.start || 4,
    betweenEnd: tool.end || 8,
    base: tool.base || 9,
    add: tool.add || 4,
    swap: false,
    builder: null,
    review: null,
    feedback: "选择一个动作，开始课堂演示。"
  };
}

function init() {
  tools.forEach((tool) => {
    const option = document.createElement("option");
    option.value = tool.id;
    option.textContent = `${tool.id} ${tool.unit}｜${tool.title}`;
    els.select.appendChild(option);
  });

  els.select.addEventListener("change", () => {
    selectedToolId = els.select.value;
    resetState();
    render();
    ensureReviews();
  });

  els.versionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      version = button.dataset.version;
      els.versionButtons.forEach((item) => item.classList.toggle("active", item === button));
      render();
      ensureReviews();
    });
  });

  els.reset.addEventListener("click", () => {
    resetState();
    render();
  });

  resetState();
  render();
  ensureReviews();
}

function render() {
  const tool = currentTool();
  document.body.dataset.version = version.toLowerCase();
  els.select.value = tool.id;
  els.code.textContent = `${tool.id}-${version}`;
  els.unit.textContent = tool.unit;
  els.title.textContent = tool.title;
  els.tip.textContent = tool.tip;
  els.stage.className = `tool-stage version-${version.toLowerCase()}`;

  const versionNote = version === "A"
    ? {
        title: "A 版：板书演示",
        text: "画面更克制，突出数量、符号和算式，适合老师一步步讲。"
      }
    : {
        title: "B 版：情境活动",
        text: "颜色更明快，物件更圆润，适合先吸引学生观察再提问。"
      };
  const body = renderByType(tool);
  els.stage.innerHTML = `
    <article class="tool-card">
      <div class="tool-head">
        <h3>${tool.id}-${version} ${tool.title}</h3>
        <span class="tool-badge">${version === "A" ? "课件版" : "儿童版"}</span>
      </div>
      <div class="version-note">
        <strong>${versionNote.title}</strong>
        <span>${versionNote.text}</span>
      </div>
      ${body}
      <div class="feedback ${escapeHtml(state.feedbackType || "")}" id="feedback">${escapeHtml(state.feedback)}</div>
      ${renderReviewPanel(tool)}
    </article>
  `;

  bindByType(tool);
  bindReviewPanel(tool);
}

function renderByType(tool) {
  const renderers = {
    quantity: renderQuantity,
    builder: renderBuilder,
    review: renderReview,
    split: renderSplit,
    hidePart: renderHidePart,
    tenFrame: renderTenFrame,
    solids: renderSolids,
    build: renderBuild,
    bundle10: renderBundle10,
    placeValue: renderPlaceValue,
    numberLine: renderNumberLine,
    tenPlus: renderTenPlus,
    between: renderBetween,
    makeTen: renderMakeTen,
    commutative: renderCommutative,
    problem: renderProblem
  };
  return renderers[tool.type](tool);
}

function setFeedback(text, type = "good") {
  state.feedback = text;
  state.feedbackType = type;
  render();
}

function reviewKey(tool = currentTool()) {
  return `${tool.id}-${version}`;
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    ...extra
  };
}

function reviewUrl(query = "") {
  return `${SUPABASE_URL}/rest/v1/${REVIEW_TABLE}${query}`;
}

function encodeFilter(value) {
  return encodeURIComponent(value);
}

async function ensureReviews() {
  const tool = currentTool();
  const key = reviewKey(tool);
  if (reviewState.key === key && (reviewState.loading || reviewState.loaded)) {
    return;
  }
  await loadReviews(tool);
}

async function loadReviews(tool = currentTool()) {
  const key = reviewKey(tool);
  reviewState = {
    key,
    loading: true,
    loaded: false,
    error: "",
    items: reviewState.key === key ? reviewState.items : []
  };
  render();

  const query = [
    "?select=id,tool_id,tool_title,version,reviewer_id,content,created_at",
    `&site_id=eq.${encodeFilter(SITE_ID)}`,
    `&tool_id=eq.${encodeFilter(tool.id)}`,
    `&version=eq.${encodeFilter(version)}`,
    "&order=created_at.desc"
  ].join("");

  try {
    const response = await fetch(reviewUrl(query), {
      headers: supabaseHeaders()
    });
    if (!response.ok) throw new Error(await response.text());
    const items = await response.json();
    reviewState = { key, loading: false, loaded: true, error: "", items };
  } catch (error) {
    reviewState = {
      key,
      loading: false,
      loaded: true,
      error: "评价读取失败。请确认已在 Supabase 执行 supabase-reviews.sql。",
      items: []
    };
    console.warn(error);
  }
  render();
}

async function submitReview(tool, content) {
  const trimmed = content.trim();
  if (!reviewer) {
    setReviewError("请先在评价区登录。");
    return;
  }
  if (!trimmed || trimmed.length > 500) {
    setReviewError("评价内容需要 1-500 字。");
    return;
  }

  try {
    const response = await fetch(reviewUrl(""), {
      method: "POST",
      headers: supabaseHeaders({ Prefer: "return=minimal" }),
      body: JSON.stringify({
        site_id: SITE_ID,
        tool_id: tool.id,
        tool_title: tool.title,
        version,
        reviewer_id: reviewer,
        content: trimmed
      })
    });
    if (!response.ok) throw new Error(await response.text());
    state.feedback = "评价已提交。";
    state.feedbackType = "good";
    await loadReviews(tool);
  } catch (error) {
    setReviewError("评价提交失败。请检查 Supabase 表和 RLS 策略。");
    console.warn(error);
  }
}

async function deleteReview(tool, reviewId) {
  if (!reviewer) {
    setReviewError("请先登录后再删除自己的评价。");
    return;
  }
  const confirmed = window.confirm("确定删除这条评价吗？");
  if (!confirmed) return;

  const query = [
    `?id=eq.${encodeFilter(reviewId)}`,
    `&reviewer_id=eq.${encodeFilter(reviewer)}`
  ].join("");

  try {
    const response = await fetch(reviewUrl(query), {
      method: "DELETE",
      headers: supabaseHeaders({ "x-reviewer-id": reviewer })
    });
    if (!response.ok) throw new Error(await response.text());
    state.feedback = "评价已删除。";
    state.feedbackType = "good";
    await loadReviews(tool);
  } catch (error) {
    setReviewError("删除失败。只能删除当前登录账号自己的评价。");
    console.warn(error);
  }
}

function setReviewError(message) {
  reviewState = { ...reviewState, error: message, loading: false, loaded: true };
  render();
}

function loginReviewer(account, password) {
  if ((account === "1" && password === "1") || (account === "2" && password === "2")) {
    reviewer = account;
    safeStorageSet(REVIEW_STORAGE_KEY, reviewer);
    reviewState = { ...reviewState, error: "" };
    render();
    return;
  }
  setReviewError("账号或密码不对。当前只支持 1/1 和 2/2。");
}

function logoutReviewer() {
  reviewer = "";
  safeStorageRemove(REVIEW_STORAGE_KEY);
  render();
}

function renderReviewPanel(tool) {
  const count = reviewState.items.length;
  const loadingText = reviewState.loading ? `<div class="review-empty">正在读取评价...</div>` : "";
  const errorText = reviewState.error ? `<div class="review-error">${escapeHtml(reviewState.error)}</div>` : "";
  const body = reviewPanelOpen ? `
    <div class="review-body">
      ${renderReviewLogin()}
      <form class="review-form" id="reviewForm">
        <textarea id="reviewContent" maxlength="500" placeholder="写下对 ${escapeHtml(tool.id)}-${version} 的评价，最多 500 字。"></textarea>
        <button type="submit">提交评价</button>
      </form>
      ${errorText}
      ${loadingText}
      <div class="review-list">
        ${reviewState.items.length ? reviewState.items.map(renderReviewItem).join("") : (!reviewState.loading ? `<div class="review-empty">当前版本还没有评价。</div>` : "")}
      </div>
    </div>
  ` : "";

  return `
    <section class="review-panel">
      <button type="button" class="review-toggle" id="reviewToggle" aria-expanded="${reviewPanelOpen}">
        <span>评价面板（${count} 条）</span>
        <strong>${tool.id}-${version}</strong>
      </button>
      ${body}
    </section>
  `;
}

function renderReviewLogin() {
  if (reviewer) {
    return `
      <div class="review-login logged-in">
        <span>当前评审人：${escapeHtml(reviewer)}</span>
        <button type="button" id="reviewLogout">退出</button>
      </div>
    `;
  }
  return `
    <form class="review-login" id="reviewLoginForm">
      <input id="reviewAccount" inputmode="numeric" autocomplete="username" placeholder="账号" />
      <input id="reviewPassword" type="password" autocomplete="current-password" placeholder="密码" />
      <button type="submit">登录后评价</button>
    </form>
  `;
}

function renderReviewItem(item) {
  const canDelete = reviewer && item.reviewer_id === reviewer;
  const time = new Date(item.created_at).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  return `
    <article class="review-item">
      <header>
        <strong>评审人 ${escapeHtml(item.reviewer_id)}</strong>
        <span>${escapeHtml(time)}</span>
      </header>
      <p>${escapeHtml(item.content)}</p>
      ${canDelete ? `<button type="button" data-delete-review="${escapeHtml(item.id)}">删除</button>` : ""}
    </article>
  `;
}

function bindReviewPanel(tool) {
  const toggle = document.querySelector("#reviewToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      reviewPanelOpen = !reviewPanelOpen;
      render();
    });
  }

  const loginForm = document.querySelector("#reviewLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginReviewer(
        document.querySelector("#reviewAccount").value.trim(),
        document.querySelector("#reviewPassword").value
      );
    });
  }

  const logout = document.querySelector("#reviewLogout");
  if (logout) {
    logout.addEventListener("click", logoutReviewer);
  }

  const form = document.querySelector("#reviewForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitReview(tool, document.querySelector("#reviewContent").value);
    });
  }

  document.querySelectorAll("[data-delete-review]").forEach((button) => {
    button.addEventListener("click", () => deleteReview(tool, button.dataset.deleteReview));
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function objectHtml(count, options = {}) {
  const shape = options.shape || (version === "A" ? "square" : "");
  const label = options.label || "";
  const empty = options.empty || false;
  let html = "";
  for (let i = 0; i < count; i += 1) {
    html += `<span class="obj ${shape}" style="animation-delay:${i * 35}ms">${label}</span>`;
  }
  if (empty) {
    html += `<span class="obj empty">0</span>`;
  }
  return html;
}

function renderQuantity(tool) {
  const target = state.quantityTarget;
  const icon = COUNT_ICONS[state.quantityIcon % COUNT_ICONS.length];
  const items = Array.from({ length: target }, (_, i) =>
    `<span class="count-item" style="animation-delay:${i * 45}ms">${icon}</span>`
  ).join("");
  const choices = Array.from({ length: tool.max }, (_, index) => index + 1)
    .map((num) => `<button data-choice="${num}">${num}</button>`)
    .join("");
  return `
    <div class="board count-board">
      <div class="count-grid" style="grid-template-columns: repeat(${target}, minmax(0, auto))">${items}</div>
    </div>
    <div class="formula-line">
      <span>这里有</span>
      <span class="formula-box">?</span>
      <span>个，数一数。</span>
    </div>
    <div class="number-row">${choices}</div>
  `;
}

function launchCelebration() {
  const anchor = els.stage.querySelector(".count-board") || els.stage;
  const rect = anchor.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const emojis = ["🎉", "✨", "🎊", "⭐", "🌟"];
  for (let i = 0; i < 14; i += 1) {
    const piece = document.createElement("span");
    piece.className = "celebrate";
    piece.textContent = emojis[i % emojis.length];
    piece.style.left = `${cx}px`;
    piece.style.top = `${cy}px`;
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 130;
    piece.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1000);
  }
}

function bindQuantity(tool) {
  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const chosen = Number(button.dataset.choice);
      if (chosen === state.quantityTarget) {
        const next = state.quantityTarget >= tool.max ? 1 : state.quantityTarget + 1;
        state.quantityTarget = next;
        state.quantityIcon += 1;
        launchCelebration();
        setFeedback(`答对了，是 ${chosen} 个！要不要再试试新的一组？`, "good");
      } else {
        setFeedback(`再数一遍。可以从左到右一个一个点数。`, "try");
      }
    });
  });
}

// ===== 通用方块拖放 / 叉掉组件（加减法统一交互）=====
// 加法：把方块拖进多个方框，算式自动相加。
// 减法：在一个方框里放好方块，点方块打 × 表示去掉（始终不会出现负数）。
// 混合：多个方框相加 + 点叉减去。
function builderConfig(tool) {
  return tool.builder || {};
}

function initBuilderTokens(tool, mode) {
  const cfg = builderConfig(tool);
  const poolSize = cfg.pool || 10;
  const tokens = Array.from({ length: poolSize }, () => ({ loc: "pool", crossed: false }));
  const place = (count, box) => {
    let placed = 0;
    for (const token of tokens) {
      if (placed >= count) break;
      if (token.loc === "pool") {
        token.loc = box;
        placed += 1;
      }
    }
  };
  const init = cfg.init || {};
  if (mode === "sub") {
    place(init.subMinuend ?? 4, "box0");
  } else if (mode === "mix") {
    const arr = init.mix || init.add || [4, 3];
    arr.forEach((count, index) => place(count, `box${index}`));
  } else {
    const arr = init.add || [3, 2];
    arr.forEach((count, index) => place(count, `box${index}`));
  }
  return tokens;
}

function ensureBuilder(tool) {
  const cfg = builderConfig(tool);
  if (!state.builder) {
    const mode = (cfg.modes && cfg.modes[0]) || "add";
    state.builder = { mode, tokens: initBuilderTokens(tool, mode) };
  }
  return state.builder;
}

function builderBoxCount(tool) {
  if (state.builder && state.builder.mode === "sub") return 1;
  return builderConfig(tool).boxCount || 2;
}

function builderCounts(tool) {
  const boxes = builderBoxCount(tool);
  const counts = Array.from({ length: boxes }, () => 0);
  let crossed = 0;
  for (const token of state.builder.tokens) {
    if (token.loc === "pool") continue;
    const index = Number(token.loc.slice(3));
    if (index < boxes) {
      counts[index] += 1;
      if (token.crossed) crossed += 1;
    }
  }
  return { counts, crossed };
}

function builderFormula(tool) {
  const mode = state.builder.mode;
  const { counts, crossed } = builderCounts(tool);
  const sum = counts.reduce((acc, value) => acc + value, 0);
  if (mode === "sub") {
    const c0 = counts[0] || 0;
    return { left: `${c0} − ${crossed}`, result: c0 - crossed };
  }
  if (mode === "mix") {
    return { left: `${counts.join(" + ")} − ${crossed}`, result: sum - crossed };
  }
  return { left: counts.join(" + "), result: sum };
}

function builderTokenHtml(index, token) {
  const cls = ["builder-token", version === "A" ? "square" : "", token.crossed ? "crossed" : ""]
    .filter(Boolean)
    .join(" ");
  return `<span class="${cls}" data-token="${index}"></span>`;
}

function renderBuilder(tool) {
  ensureBuilder(tool);
  const cfg = builderConfig(tool);
  const mode = state.builder.mode;
  const boxes = builderBoxCount(tool);
  const { counts } = builderCounts(tool);
  const formula = builderFormula(tool);
  const labels = mode === "sub" ? ["一共"] : (cfg.boxLabels || ["第一部分", "第二部分", "第三部分"]);

  let boxesHtml = "";
  for (let i = 0; i < boxes; i += 1) {
    const tokens = state.builder.tokens
      .map((token, index) => ({ token, index }))
      .filter((item) => item.token.loc === `box${i}`)
      .map((item) => builderTokenHtml(item.index, item.token))
      .join("");
    boxesHtml += `
      <div class="builder-box" data-zone="box${i}">
        <h4>${escapeHtml(labels[i] || "方框 " + (i + 1))}：${counts[i] || 0}</h4>
        <div class="builder-slot">${tokens}</div>
      </div>`;
  }

  const poolTokens = state.builder.tokens
    .map((token, index) => ({ token, index }))
    .filter((item) => item.token.loc === "pool")
    .map((item) => builderTokenHtml(item.index, item.token))
    .join("");

  const modeToggle = cfg.modes && cfg.modes.length > 1
    ? `<div class="action-row">
        ${cfg.modes.includes("add") ? `<button class="${mode === "add" ? "primary" : ""}" data-bmode="add">演示加法</button>` : ""}
        ${cfg.modes.includes("sub") ? `<button class="${mode === "sub" ? "primary" : ""}" data-bmode="sub">演示减法</button>` : ""}
      </div>`
    : "";

  const examples = cfg.examples
    ? `<div class="symbol-row">${cfg.examples.map((expr) => `<button data-bexample="${escapeHtml(expr)}">${escapeHtml(expr.replaceAll("+", " + ").replaceAll("-", " − ").replaceAll("=", " = "))}</button>`).join("")}</div>`
    : "";

  const hint = (mode === "sub" || mode === "mix")
    ? "拖动方块进出方框改变数量；点方框里的方块打 × 表示去掉。"
    : "把下面仓库里的方块拖进方框，算式会自动变化。";

  return `
    <div class="board builder-board">
      <div class="builder-boxes" style="grid-template-columns: repeat(${boxes}, 1fr)">${boxesHtml}</div>
      <div class="builder-pool" data-zone="pool">
        <span class="builder-pool-label">方块仓库（拖出 / 拖回）</span>
        <div class="builder-slot">${poolTokens}</div>
      </div>
    </div>
    <div class="formula-line">
      <span>${formula.left}</span><span>=</span><span class="formula-box">${formula.result}</span>
    </div>
    ${modeToggle}
    ${examples}
    <p class="builder-hint">${hint}</p>
  `;
}

function applyBuilderExample(tool, expr) {
  const match = expr.match(/^(\d+)\s*([+\-−])\s*(\d+)/);
  if (!match) return;
  const a = Number(match[1]);
  const op = match[2];
  const b = Number(match[3]);
  state.builder.tokens.forEach((token) => {
    token.loc = "pool";
    token.crossed = false;
  });
  const place = (count, box, cross = false) => {
    let placed = 0;
    for (const token of state.builder.tokens) {
      if (placed >= count) break;
      if (token.loc === "pool") {
        token.loc = box;
        token.crossed = cross;
        placed += 1;
      }
    }
  };
  if (op === "+") {
    state.builder.mode = "add";
    place(a, "box0");
    place(b, "box1");
  } else {
    state.builder.mode = "sub";
    place(a, "box0");
    let crossed = 0;
    for (const token of state.builder.tokens) {
      if (crossed >= b) break;
      if (token.loc === "box0") {
        token.crossed = true;
        crossed += 1;
      }
    }
  }
  setFeedback(`按算式 ${expr} 摆好了方块，请学生对照画面说一说。`, "good");
}

function bindBuilder(tool) {
  document.querySelectorAll("[data-bmode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.builder.mode = button.dataset.bmode;
      state.builder.tokens = initBuilderTokens(tool, state.builder.mode);
      setFeedback(
        state.builder.mode === "add"
          ? "把方块拖进两个方框，再数一数合起来是多少。"
          : "先在方框里放好方块，再点方块打 × 表示去掉，看看还剩几个。",
        "good"
      );
    });
  });

  document.querySelectorAll("[data-bexample]").forEach((button) => {
    button.addEventListener("click", () => applyBuilderExample(tool, button.dataset.bexample));
  });

  bindBuilderDrag();
}

// 指针事件实现拖放：同时支持鼠标和触摸屏（教室一体机）。
function bindBuilderDrag() {
  let drag = null;
  els.stage.querySelectorAll("[data-token]").forEach((el) => {
    el.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      drag = { idx: Number(el.dataset.token), sx: event.clientX, sy: event.clientY, moved: false, ghost: null, el };
      if (el.setPointerCapture) el.setPointerCapture(event.pointerId);
    });

    el.addEventListener("pointermove", (event) => {
      if (!drag || drag.el !== el) return;
      const dx = event.clientX - drag.sx;
      const dy = event.clientY - drag.sy;
      if (!drag.moved && Math.hypot(dx, dy) > 6) {
        drag.moved = true;
        const ghost = document.createElement("span");
        ghost.className = "builder-token dragging-ghost" + (version === "A" ? " square" : "");
        ghost.style.position = "fixed";
        ghost.style.pointerEvents = "none";
        ghost.style.zIndex = "9999";
        ghost.style.margin = "0";
        ghost.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(ghost);
        drag.ghost = ghost;
        el.style.opacity = "0.3";
      }
      if (drag.ghost) {
        drag.ghost.style.left = event.clientX + "px";
        drag.ghost.style.top = event.clientY + "px";
      }
    });

    el.addEventListener("pointerup", (event) => {
      if (!drag || drag.el !== el) return;
      const token = state.builder.tokens[drag.idx];
      if (drag.moved) {
        if (drag.ghost) drag.ghost.remove();
        const target = document.elementFromPoint(event.clientX, event.clientY);
        const zone = target && target.closest("[data-zone]");
        if (zone) {
          token.loc = zone.dataset.zone;
          if (token.loc === "pool") token.crossed = false;
        }
      } else if (token.loc !== "pool") {
        if (state.builder.mode === "sub" || state.builder.mode === "mix") token.crossed = !token.crossed;
      } else {
        token.loc = "box0";
      }
      drag = null;
      render();
    });
  });
}

// ===== 复习卡片：随机抽问 / 找得数挑战 / 一键整理 / 拖动排序 =====
function reviewCardPool(tool) {
  const max = tool.max;
  const cards = [];
  const seen = new Set();
  const add = (expr, result) => {
    if (!seen.has(expr)) {
      seen.add(expr);
      cards.push({ expr, result, status: "" });
    }
  };
  if (tool.plusOnly) {
    for (let a = 2; a <= 9; a += 1) {
      for (let b = a; b <= 9; b += 1) {
        const sum = a + b;
        if (sum > 10 && sum <= 20) add(`${a}+${b}`, sum);
      }
    }
  } else {
    for (let c = 2; c <= max; c += 1) {
      for (let a = 1; a <= Math.floor(c / 2); a += 1) add(`${a}+${c - a}`, c);
    }
    for (let b = 1; b < max; b += 1) add(`${max}-${b}`, max - b);
  }
  return cards.slice(0, 24);
}

function ensureReview(tool) {
  if (!state.review) {
    state.review = { mode: "browse", cards: reviewCardPool(tool), quizIndex: -1, revealed: false, target: null };
  }
  return state.review;
}

function renderReview(tool) {
  const r = ensureReview(tool);
  let prompt = "点一张卡片说说它的得数；也可以随机抽问或做找得数挑战。";
  if (r.mode === "quiz" && r.quizIndex >= 0) {
    const card = r.cards[r.quizIndex];
    prompt = r.revealed
      ? `${card.expr} = ${card.result}。`
      : `请算一算：${card.expr} = ？（点放大的卡片揭晓答案）`;
  } else if (r.mode === "challenge") {
    prompt = `找出所有得数是 ${r.target} 的算式，点一点卡片：对的变绿，错的变红。`;
  }
  const cards = r.cards.map((card, index) => {
    const cls = ["choice-chip", card.status, index === r.quizIndex ? "quiz-active" : ""].filter(Boolean).join(" ");
    const text = (r.mode === "quiz" && index === r.quizIndex && r.revealed) ? `${card.expr}=${card.result}` : card.expr;
    return `<button class="${cls}" data-card-index="${index}" style="animation-delay:${index * 18}ms">${escapeHtml(text)}</button>`;
  }).join("");
  return `
    <div class="board review-board">
      <div class="review-cards">${cards}</div>
    </div>
    <div class="formula-line review-prompt"><span>${escapeHtml(prompt)}</span></div>
    <div class="action-row">
      <button class="${r.mode === "quiz" ? "primary" : ""}" data-review="quiz">随机抽问</button>
      <button class="${r.mode === "challenge" ? "primary" : ""}" data-review="challenge">找得数挑战</button>
      <button data-review="sort">一键整理（按得数）</button>
      <button data-review="reset">重新摆放</button>
    </div>
    <p class="builder-hint">卡片可以拖动排序整理。</p>
  `;
}

function reviewCardTap(r, index) {
  const card = r.cards[index];
  if (r.mode === "quiz") {
    if (index === r.quizIndex) {
      r.revealed = true;
      state.feedback = `${card.expr} = ${card.result}。答对了吗？`;
      state.feedbackType = "good";
    } else {
      r.quizIndex = index;
      r.revealed = false;
      state.feedback = `抽到了 ${card.expr}，请学生先算一算。`;
      state.feedbackType = "good";
    }
  } else if (r.mode === "challenge") {
    if (card.result === r.target) {
      card.status = "correct";
      state.feedback = `对！${card.expr} 的得数就是 ${r.target}。`;
      state.feedbackType = "good";
    } else {
      card.status = "wrong";
      state.feedback = `再试一试，${card.expr} 的得数不是 ${r.target}。`;
      state.feedbackType = "try";
    }
  } else {
    state.feedback = `${card.expr} 的得数是 ${card.result}。请学生说一说。`;
    state.feedbackType = "good";
  }
}

function bindReview(tool) {
  const r = state.review;
  document.querySelectorAll("[data-review]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.review;
      if (action === "quiz") {
        r.mode = "quiz";
        r.quizIndex = Math.floor(Math.random() * r.cards.length);
        r.revealed = false;
        r.cards.forEach((card) => { card.status = ""; });
        setFeedback("随机抽到一张卡片（已放大），请学生算出得数。", "good");
      } else if (action === "challenge") {
        r.mode = "challenge";
        r.cards.forEach((card) => { card.status = ""; });
        const results = [...new Set(r.cards.map((card) => card.result))];
        r.target = results[Math.floor(Math.random() * results.length)];
        setFeedback(`挑战开始：找出所有得数是 ${r.target} 的算式。`, "good");
      } else if (action === "sort") {
        r.cards.sort((a, b) => a.result - b.result || a.expr.localeCompare(b.expr));
        setFeedback("已按得数从小到大整理好卡片。", "good");
      } else {
        state.review = null;
        setFeedback("卡片已重新摆放。", "good");
      }
    });
  });

  // 卡片：拖动排序 + 轻点（抽问揭晓 / 挑战判对错 / 说得数）
  let drag = null;
  els.stage.querySelectorAll("[data-card-index]").forEach((el) => {
    el.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      drag = { idx: Number(el.dataset.cardIndex), sx: event.clientX, sy: event.clientY, moved: false, el };
      if (el.setPointerCapture) el.setPointerCapture(event.pointerId);
    });
    el.addEventListener("pointermove", (event) => {
      if (!drag || drag.el !== el) return;
      if (!drag.moved && Math.hypot(event.clientX - drag.sx, event.clientY - drag.sy) > 6) {
        drag.moved = true;
        el.style.opacity = "0.4";
      }
    });
    el.addEventListener("pointerup", (event) => {
      if (!drag || drag.el !== el) return;
      if (drag.moved) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        const targetCard = target && target.closest("[data-card-index]");
        if (targetCard) {
          const to = Number(targetCard.dataset.cardIndex);
          const moved = r.cards.splice(drag.idx, 1)[0];
          r.cards.splice(to, 0, moved);
        }
      } else {
        reviewCardTap(r, drag.idx);
      }
      drag = null;
      render();
    });
  });
}

function recordSplit() {
  if (
    state.splitLeft >= 1 &&
    state.splitLeft <= state.splitTotal - 1 &&
    !state.splitFound.includes(state.splitLeft)
  ) {
    state.splitFound.push(state.splitLeft);
  }
}

function renderSplit() {
  const total = state.splitTotal;
  state.splitLeft = clamp(state.splitLeft, 1, total - 1);
  recordSplit();
  const left = state.splitLeft;
  const right = total - left;
  const ways = total - 1;

  const numbers = [6, 7, 8, 9]
    .map((n) => `<button class="${n === total ? "primary" : ""}" data-split-num="${n}">${n}</button>`)
    .join("");
  const dots = Array.from({ length: total }, (_, i) =>
    `<button class="split-dot ${i < left ? "left" : "right"}" data-split-pos="${i + 1}"></button>`
  ).join("");
  const foundList = Array.from({ length: ways }, (_, i) => {
    const a = i + 1;
    const b = total - a;
    const hit = state.splitFound.includes(a);
    return `<span class="split-way ${hit ? "hit" : ""}">${a} 和 ${b}</span>`;
  }).join("");

  return `
    <div class="board split-board-v">
      <div class="number-row">${numbers}</div>
      <div class="split-row">${dots}</div>
      <div class="split-heaps">
        <div class="bin"><h4>第一堆：${left}</h4><div class="objects-grid">${objectHtml(left)}</div></div>
        <div class="bin"><h4>第二堆：${right}</h4><div class="objects-grid">${objectHtml(right)}</div></div>
      </div>
    </div>
    <div class="formula-line">
      <span class="formula-box">${total}</span><span>分成</span><span class="formula-box">${left}</span><span>和</span><span class="formula-box">${right}</span>
    </div>
    <div class="split-found">
      <strong>已找到 ${state.splitFound.length} / ${ways} 种分法：</strong>
      <div class="split-ways">${foundList}</div>
    </div>
    <div class="action-row"><button data-split-all>显示全部分法</button></div>
    <p class="builder-hint">先选要分的数，再点上面一排圆点：在第几个后面分开。下面会记录你发现过的分法。</p>
  `;
}

function bindSplit() {
  document.querySelectorAll("[data-split-num]").forEach((button) => {
    button.addEventListener("click", () => {
      state.splitTotal = Number(button.dataset.splitNum);
      state.splitLeft = clamp(state.splitLeft, 1, state.splitTotal - 1);
      state.splitFound = [];
      setFeedback(`现在分 ${state.splitTotal}，点圆点试试不同的分法。`, "good");
    });
  });
  document.querySelectorAll("[data-split-pos]").forEach((button) => {
    button.addEventListener("click", () => {
      state.splitLeft = Number(button.dataset.splitPos);
      setFeedback(`${state.splitLeft} 和 ${state.splitTotal - state.splitLeft} 组成 ${state.splitTotal}。`, "good");
    });
  });
  const showAll = document.querySelector("[data-split-all]");
  if (showAll) {
    showAll.addEventListener("click", () => {
      state.splitFound = Array.from({ length: state.splitTotal - 1 }, (_, i) => i + 1);
      setFeedback(`${state.splitTotal} 一共有 ${state.splitTotal - 1} 种分法，都列出来了。`, "good");
    });
  }
}

function renderHidePart(tool) {
  const hidden = tool.total - state.visible;
  return `
    <div class="board">
      <div class="split-board">
        <div class="bin">
          <h4>看得见：${state.visible}</h4>
          <div class="objects-grid">${objectHtml(state.visible)}</div>
        </div>
        <div class="bin">
          <h4>被遮住：?</h4>
          <div class="objects-grid">${objectHtml(hidden, { label: "?" })}</div>
        </div>
      </div>
    </div>
    <div class="formula-line">
      <span class="formula-box">${state.visible}</span><span>+</span><span class="formula-box">${hidden}</span><span>=</span><span class="formula-box">${tool.total}</span>
    </div>
    <div class="formula-line">
      <span class="formula-box">${tool.total}</span><span>-</span><span class="formula-box">${state.visible}</span><span>=</span><span class="formula-box">${hidden}</span>
    </div>
    <input type="range" min="1" max="${tool.total - 1}" value="${state.visible}" data-visible />
  `;
}

function bindHidePart(tool) {
  document.querySelector("[data-visible]").addEventListener("input", (event) => {
    state.visible = Number(event.target.value);
    setFeedback(`整体是 ${tool.total}，看见 ${state.visible}，遮住 ${tool.total - state.visible}。`, "good");
  });
}

function tenCells(filled) {
  return Array.from({ length: 10 }, (_, index) => `<span class="ten-cell ${index < filled ? "filled" : ""}"></span>`).join("");
}

function renderTenFrame(tool) {
  const missing = tool.total - state.filled;
  return `
    <div class="board">
      <div class="ten-frame">${tenCells(state.filled)}</div>
    </div>
    <div class="formula-line">
      <span class="formula-box">${state.filled}</span><span>+</span><span class="formula-box">${missing}</span><span>=</span><span class="formula-box">10</span>
    </div>
    <input type="range" min="0" max="10" value="${state.filled}" data-ten-frame />
  `;
}

function bindTenFrame() {
  document.querySelector("[data-ten-frame]").addEventListener("input", (event) => {
    state.filled = Number(event.target.value);
    setFeedback(`还差 ${10 - state.filled} 个就凑成 10。`, "good");
  });
}

function renderSolids() {
  const cards = [
    ["长方体", "box", "有平平的面，像盒子。"],
    ["正方体", "cube", "每个面大小一样，像小方块。"],
    ["圆柱", "cylinder", "可以滚，也可以立起来。"],
    ["球", "ball", "能向四面八方滚动。"]
  ];
  return `
    <div class="solid-grid">
      ${cards.map(([name, cls, text]) => `
        <button class="solid-card" data-solid="${text}">
          <span class="solid-shape ${cls}">${name[0]}</span>
          <strong>${name}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function bindSolids() {
  document.querySelectorAll("[data-solid]").forEach((button) => {
    button.addEventListener("click", () => setFeedback(button.dataset.solid, "good"));
  });
}

function renderBuild() {
  const height = state.left || 4;
  return `
    <div class="board">
      <div class="blocks">${Array.from({ length: height * 2 }, () => `<span class="block"></span>`).join("")}</div>
    </div>
    <div class="formula-line"><span>用了</span><span class="formula-box">${height * 2}</span><span>个小正方体</span></div>
    <input type="range" min="2" max="8" value="${height}" data-build />
  `;
}

function bindBuild() {
  document.querySelector("[data-build]").addEventListener("input", (event) => {
    state.left = Number(event.target.value);
    setFeedback(`现在用了 ${state.left * 2} 个小正方体。比较一下：稳不稳？高不高？`, "good");
  });
}

function renderBundle10() {
  return `
    <div class="place-board">
      <div class="place-column">
        <h4>10 个一</h4>
        <div class="objects-grid">${state.bundled ? "" : objectHtml(10, { shape: "rod" })}</div>
      </div>
      <div class="place-column">
        <h4>1 个十</h4>
        <div class="objects-grid">${state.bundled ? `<span class="bundle"></span>` : ""}</div>
      </div>
    </div>
    <div class="formula-line"><span class="formula-box">10 个一</span><span>=</span><span class="formula-box">1 个十</span></div>
    <div class="action-row">
      <button class="primary" data-bundle="toggle">${state.bundled ? "拆成 10 根" : "捆成 1 捆"}</button>
    </div>
  `;
}

function bindBundle10() {
  document.querySelector("[data-bundle]").addEventListener("click", () => {
    state.bundled = !state.bundled;
    setFeedback(state.bundled ? "10 根小棒捆在一起，就是 1 个十。" : "把 1 个十拆开，又是 10 个一。", "good");
  });
}

function renderPlaceValue() {
  const tens = Math.floor(state.number / 10);
  const ones = state.number % 10;
  const buttons = Array.from({ length: 10 }, (_, i) => {
    const n = 11 + i;
    return `<button data-place="${n}" class="${state.number === n ? "active" : ""}">${n}</button>`;
  }).join("");
  return `
    <div class="place-board">
      <div class="place-column">
        <h4>十位：${tens}</h4>
        <div class="objects-grid">${Array.from({ length: tens }, () => `<span class="bundle"></span>`).join("")}</div>
      </div>
      <div class="place-column">
        <h4>个位：${ones}</h4>
        <div class="objects-grid">${objectHtml(ones)}</div>
      </div>
    </div>
    <div class="formula-line">
      <span class="formula-box">${state.number}</span><span>=</span><span>${tens} 个十和 ${ones} 个一</span>
    </div>
    <div class="number-row">${buttons}</div>
  `;
}

function bindPlaceValue() {
  document.querySelectorAll("[data-place]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.number = Number(btn.dataset.place);
      const tens = Math.floor(state.number / 10);
      const ones = state.number % 10;
      setFeedback(`${state.number} 里面有 ${tens} 个十和 ${ones} 个一。`, "good");
    });
  });
}

function renderNumberLine(tool) {
  const ticks = [];
  for (let num = tool.min; num <= tool.max; num += 1) {
    const left = 4 + ((num - tool.min) / (tool.max - tool.min)) * 92;
    ticks.push(`<span class="tick ${num === state.lineCurrent ? "active" : ""}" style="left:${left}%">${num}</span>`);
  }
  const prevStr = state.lineCurrent > tool.min ? String(state.lineCurrent - 1) : "无";
  const nextStr = state.lineCurrent < tool.max ? String(state.lineCurrent + 1) : "无";
  return `
    <div class="board">
      <div class="number-line">${ticks.join("")}</div>
    </div>
    <div class="formula-line">
      <span>当前数</span><span class="formula-box">${state.lineCurrent}</span>
      <span>前一个是 ${prevStr}，后一个是 ${nextStr}</span>
    </div>
    <input type="range" min="${tool.min}" max="${tool.max}" value="${state.lineCurrent}" data-line />
  `;
}

function bindNumberLine() {
  document.querySelector("[data-line]").addEventListener("input", (event) => {
    state.lineCurrent = Number(event.target.value);
    setFeedback(`${state.lineCurrent} 在数轴上的位置已经标出。`, "good");
  });
}

function renderTenPlus() {
  const result = 10 + state.onesValue;
  return `
    <div class="place-board">
      <div class="place-column">
        <h4>10</h4>
        <div class="objects-grid"><span class="bundle"></span></div>
      </div>
      <div class="place-column">
        <h4>${state.onesValue}</h4>
        <div class="objects-grid">${objectHtml(state.onesValue)}</div>
      </div>
    </div>
    <div class="formula-line">
      <span class="formula-box">10</span><span>+</span><span class="formula-box">${state.onesValue}</span><span>=</span><span class="formula-box">${result}</span>
    </div>
    <input type="range" min="1" max="9" value="${state.onesValue}" data-ten-plus />
  `;
}

function bindTenPlus() {
  document.querySelector("[data-ten-plus]").addEventListener("input", (event) => {
    state.onesValue = Number(event.target.value);
    setFeedback(`10 加 ${state.onesValue} 等于 ${10 + state.onesValue}。反过来，${10 + state.onesValue} 减 10 等于 ${state.onesValue}。`, "good");
  });
}

function renderBetween() {
  const low = Math.min(state.betweenStart, state.betweenEnd);
  const high = Math.max(state.betweenStart, state.betweenEnd);
  const people = Array.from({ length: 12 }, (_, index) => {
    const num = index + 1;
    const mark = num === low || num === high ? "mark" : "";
    return `<span class="person ${mark}">${num}</span>`;
  }).join("");
  return `
    <div class="board">
      <div class="people-line">${people}</div>
    </div>
    <div class="formula-line">
      <span>第 ${low} 和第 ${high} 之间有</span><span class="formula-box">${Math.max(0, high - low - 1)}</span><span>人</span>
    </div>
    <div class="action-row">
      <button data-between="-1">端点靠近</button>
      <button class="primary" data-between="1">端点拉开</button>
    </div>
  `;
}

function bindBetween() {
  document.querySelectorAll("[data-between]").forEach((button) => {
    button.addEventListener("click", () => {
      const delta = Number(button.dataset.between);
      state.betweenEnd = clamp(state.betweenEnd + delta, state.betweenStart + 1, 12);
      setFeedback("两个红色端点不算在“之间”里面，只数中间的人。", "good");
    });
  });
}

function renderMakeTen() {
  const need = 10 - state.base;
  const rest = state.add - need;
  const result = state.base + state.add;
  return `
    <div class="board">
      <div class="ten-frame">${tenCells(state.base)}</div>
    </div>
    <div class="formula-line">
      <span class="formula-box">${state.base}</span><span>+</span><span class="formula-box">${state.add}</span><span>=</span><span class="formula-box">${result}</span>
    </div>
    <div class="formula-line">
      <span>把 ${state.add} 分成</span><span class="formula-box">${need}</span><span>和</span><span class="formula-box">${rest}</span><span>，先凑 10</span>
    </div>
    <div class="action-row">
      <button data-make="add-down">加数 -1</button>
      <button class="primary" data-make="add-up">加数 +1</button>
    </div>
  `;
}

function bindMakeTen() {
  document.querySelectorAll("[data-make]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.make === "add-down") state.add = clamp(state.add - 1, 2, 9);
      if (button.dataset.make === "add-up") state.add = clamp(state.add + 1, 2, 9);
      if (state.add < 10 - state.base) state.add = 10 - state.base;
      setFeedback(`${state.base} 还差 ${10 - state.base} 到 10，所以先从 ${state.add} 里拿出 ${10 - state.base}。`, "good");
    });
  });
}

function renderCommutative() {
  const left = state.swap ? state.right : state.left;
  const right = state.swap ? state.left : state.right;
  return `
    <div class="split-board">
      <div class="bin">
        <h4>左边：${left}</h4>
        <div class="objects-grid">${objectHtml(left)}</div>
      </div>
      <div class="bin">
        <h4>右边：${right}</h4>
        <div class="objects-grid">${objectHtml(right)}</div>
      </div>
    </div>
    <div class="formula-line">
      <span class="formula-box">${left}</span><span>+</span><span class="formula-box">${right}</span><span>=</span><span class="formula-box">${left + right}</span>
    </div>
    <div class="action-row">
      <button class="primary" data-swap>交换左右</button>
      <button data-shuffle-comm>换一题</button>
    </div>
  `;
}

function bindCommutative() {
  document.querySelector("[data-swap]").addEventListener("click", () => {
    state.swap = !state.swap;
    setFeedback("两个加数交换位置，合起来的总数不变。", "good");
  });
  const shuffleBtn = document.querySelector("[data-shuffle-comm]");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      // 进位加法范围：两个加数之和 ≥ 11，均在 2-9 之间
      const pairs = [[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[8,3],[8,4],[8,5],[8,6],[8,7],[7,4],[7,5],[7,6],[6,5]];
      const [a, b] = pairs[Math.floor(Math.random() * pairs.length)];
      state.left = a;
      state.right = b;
      state.swap = false;
      setFeedback(`新算式：${a} + ${b} = ${a + b}，交换后 ${b} + ${a} 结果不变。`, "good");
    });
  }
}

function renderProblem(tool) {
  const totalMode = tool.mode === "total";
  const sentence = totalMode
    ? "前排有 7 人，后排有 8 人。一共有多少人？"
    : "领走了 6 个足球，还剩 5 个。原来有多少个足球？";
  const formula = totalMode ? "7 + 8 = 15" : "6 + 5 = 11";
  // T25 B版：用足球 emoji 替换通用方块
  const useFootball = !totalMode && version !== "A";
  const objFn = useFootball
    ? (n) => Array.from({ length: n }, (_, i) =>
        `<span class="count-item" style="font-size:28px;animation-delay:${i * 35}ms">⚽</span>`).join("")
    : objectHtml;
  return `
    <div class="problem-panel">
      <p>${sentence}</p>
      <div class="split-board">
        <div class="bin"><h4>${totalMode ? "前排" : "领走"}</h4><div class="objects-grid">${objFn(totalMode ? 7 : 6)}</div></div>
        <div class="bin"><h4>${totalMode ? "后排" : "还剩"}</h4><div class="objects-grid">${objFn(totalMode ? 8 : 5)}</div></div>
      </div>
      <div class="formula-line"><span>${formula}</span></div>
    </div>
    <div class="action-row">
      <button class="primary" data-problem="read">阅读理解</button>
      <button data-problem="solve">分析解答</button>
      <button data-problem="check">回顾反思</button>
    </div>
  `;
}

function bindProblem(tool) {
  const messages = {
    read: tool.mode === "total" ? "知道两部分人数，要求一共有多少。" : "知道领走的和剩下的，要求原来有多少。",
    solve: "把两部分合起来，用加法计算。",
    check: "结果要回到题目情境里检查，说清单位和意思。"
  };
  document.querySelectorAll("[data-problem]").forEach((button) => {
    button.addEventListener("click", () => setFeedback(messages[button.dataset.problem], "good"));
  });
}

function bindByType(tool) {
  const binders = {
    quantity: bindQuantity,
    builder: bindBuilder,
    review: bindReview,
    split: bindSplit,
    hidePart: bindHidePart,
    tenFrame: bindTenFrame,
    solids: bindSolids,
    build: bindBuild,
    bundle10: bindBundle10,
    placeValue: bindPlaceValue,
    numberLine: bindNumberLine,
    tenPlus: bindTenPlus,
    between: bindBetween,
    makeTen: bindMakeTen,
    commutative: bindCommutative,
    problem: bindProblem
  };
  binders[tool.type](tool);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

init();
