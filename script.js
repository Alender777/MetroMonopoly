// Metro Monopoly Lucky Wheel
// -----------------------------------

const metroLines = [
  {
    id: "R",
    name: "淡水信義線",
    provider: "台北捷運",
    color: "#ef4444",
    accent: "#fecaca",
    stations: [
      "象山",
      "台北101/世貿",
      "信義安和",
      "大安",
      "大安森林公園",
      "東門",
      "中正紀念堂",
      "台大醫院",
      "台北車站",
      "中山",
      "雙連",
      "民權西路",
      "圓山",
      "劍潭",
      "士林",
      "芝山",
      "明德",
      "石牌",
      "唭哩岸",
      "奇岩",
      "北投",
      "復興崗",
      "忠義",
      "關渡",
      "竹圍",
      "紅樹林",
      "淡水"
    ]
  },
  {
    id: "G",
    name: "松山新店線",
    provider: "台北捷運",
    color: "#22c55e",
    accent: "#bbf7d0",
    stations: [
      "松山",
      "南京三民",
      "台北小巨蛋",
      "南京復興",
      "松江南京",
      "中山",
      "北門",
      "西門",
      "小南門",
      "中正紀念堂",
      "古亭",
      "台電大樓",
      "公館",
      "萬隆",
      "景美",
      "大坪林",
      "七張",
      "小碧潭",
      "新店區公所",
      "新店"
    ]
  },
  {
    id: "O",
    name: "中和新蘆線",
    provider: "台北捷運",
    color: "#f59e0b",
    accent: "#fde68a",
    stations: [
      "南勢角",
      "景安",
      "永安市場",
      "頂溪",
      "古亭",
      "東門",
      "忠孝新生",
      "松江南京",
      "行天宮",
      "中山國小",
      "民權西路",
      "大橋頭",
      "台北橋",
      "菜寮",
      "三重",
      "先嗇宮",
      "頭前庄",
      "新莊",
      "輔大",
      "丹鳳",
      "迴龍"
    ]
  },
  {
    id: "BL",
    name: "板南線",
    provider: "台北捷運",
    color: "#3b82f6",
    accent: "#bfdbfe",
    stations: [
      "頂埔",
      "永寧",
      "土城",
      "海山",
      "亞東醫院",
      "府中",
      "板橋",
      "新埔",
      "江子翠",
      "龍山寺",
      "西門",
      "台北車站",
      "善導寺",
      "忠孝新生",
      "忠孝復興",
      "忠孝敦化",
      "國父紀念館",
      "市政府",
      "永春",
      "後山埤",
      "昆陽",
      "南港",
      "南港展覽館"
    ]
  },
  {
    id: "BR",
    name: "文湖線",
    provider: "台北捷運",
    color: "#a855f7",
    accent: "#e9d5ff",
    stations: [
      "動物園",
      "木柵",
      "萬芳社區",
      "萬芳醫院",
      "辛亥",
      "麟光",
      "六張犁",
      "科技大樓",
      "大安",
      "忠孝復興",
      "南京復興",
      "中山國中",
      "松山機場",
      "大直",
      "劍南路",
      "西湖",
      "港墘",
      "文德",
      "內湖",
      "大湖公園",
      "葫洲",
      "東湖",
      "南港軟體園區",
      "南港展覽館"
    ]
  },
  {
    id: "Y",
    name: "環狀線",
    provider: "新北捷運",
    color: "#eab308",
    accent: "#fef3c7",
    stations: [
      "大坪林",
      "十四張",
      "秀朗橋",
      "景平",
      "景安",
      "中和",
      "橋和",
      "中原",
      "板新",
      "板橋",
      "新埔民生",
      "頭前庄",
      "幸福",
      "新北產業園區"
    ]
  },
  {
    id: "V",
    name: "淡海輕軌",
    provider: "新北捷運",
    color: "#0ea5e9",
    accent: "#bae6fd",
    stations: [
      "紅樹林",
      "竿蓁林",
      "淡金鄧公",
      "淡江大學",
      "淡金北新",
      "新市一路",
      "淡水行政中心",
      "濱海義山",
      "濱海沙崙",
      "淡海新市鎮",
      "崁頂",
      "淡水漁人碼頭",
      "沙崙",
      "台北海洋大學"
    ]
  },
  {
    id: "K",
    name: "安坑輕軌",
    provider: "新北捷運",
    color: "#14b8a6",
    accent: "#a5f3fc",
    stations: [
      "雙城",
      "玫瑰中國城",
      "台北小城",
      "耕莘安康院區",
      "景文科大",
      "安康",
      "陽光運動公園",
      "新和國小",
      "十四張"
    ]
  },
  {
    id: "A",
    name: "機場捷運",
    provider: "桃園捷運",
    color: "#6366f1",
    accent: "#c7d2fe",
    stations: [
      "台北車站",
      "三重",
      "新北產業園區",
      "泰山",
      "泰山貴和",
      "體育大學",
      "長庚醫院",
      "林口",
      "山鼻",
      "坑口",
      "大園",
      "機場旅館",
      "機場第一航廈",
      "機場第二航廈",
      "高鐵桃園",
      "桃園體育園區",
      "興南",
      "環北",
      "領航",
      "老街溪"
    ]
  }
];

const wheelEl = document.getElementById("wheel");
const wheelCenterEl = document.querySelector(".wheel-center");
const spinButton = document.getElementById("spinButton");
const resetButton = document.getElementById("resetButton");
const resultEl = document.getElementById("result");
const statusEl = document.getElementById("status");
const lineFiltersEl = document.getElementById("lineFilters");
const toggleAllLinesBtn = document.getElementById("toggleAllLines");
const yearEl = document.getElementById("year");
const dialogEl = document.getElementById("resultDialog");
const dialogResultTextEl = document.getElementById("dialogResultText");
const dialogSubTextEl = document.getElementById("dialogSubText");
const dialogCloseButton = document.getElementById("dialogCloseButton");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

let isSpinning = false;
let currentRotation = 0;
const removedStations = new Set();

function makeStationKey(lineId, stationName) {
  return `${lineId}::${stationName}`;
}

function getActiveStations() {
  const checkboxes = lineFiltersEl.querySelectorAll(
    'input[type="checkbox"][data-line-id]'
  );
  const activeLineIds = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.dataset.lineId);

  const activeLines = metroLines.filter((line) =>
    activeLineIds.includes(line.id)
  );

  const stations = [];
  activeLines.forEach((line) => {
    line.stations.forEach((name) => {
      const key = makeStationKey(line.id, name);
      if (!removedStations.has(key)) {
        stations.push({
          key,
          lineId: line.id,
          lineName: line.name,
          lineColor: line.color,
          segmentColor: line.accent || line.color,
          stationName: name,
          provider: line.provider
        });
      }
    });
  });

  return stations;
}

function buildWheelGradient(stations) {
  if (!stations.length) {
    wheelEl.style.backgroundImage = "";
    wheelEl.style.setProperty("--slice-count", "0");
    wheelEl.style.setProperty("--slice-angle", "0");
    return;
  }

  const sliceCount = stations.length;
  const sliceAngle = 360 / sliceCount;

  const segments = stations.map((station, index) => {
    const start = index * sliceAngle;
    const end = (index + 1) * sliceAngle;
    return `${station.segmentColor} ${start}deg ${end}deg`;
  });

  const gradient = `conic-gradient(${segments.join(",")})`;
  wheelEl.style.backgroundImage = "none";
  wheelEl.style.setProperty("--slice-count", String(sliceCount));
  wheelEl.style.setProperty("--slice-angle", String(sliceAngle));
  wheelEl.style.setProperty("--segment-gradient", gradient);
  wheelEl.style.setProperty("background-image", gradient);
  wheelEl.style.setProperty("background", gradient);
  wheelEl.style.setProperty("backgroundColor", "transparent");
}

function closeResultDialog() {
  if (!dialogEl) return;
  dialogEl.classList.remove("dialog-overlay--visible");
  dialogEl.setAttribute("aria-hidden", "true");
}

function renderLineFilters() {
  const fragment = document.createDocumentFragment();

  metroLines.forEach((line) => {
    const label = document.createElement("label");
    label.className = "filter-pill";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.dataset.lineId = line.id;
    checkbox.style.color = line.color;

    const colorDot = document.createElement("span");
    colorDot.className = "filter-pill-color";
    colorDot.style.background = line.color;

    const textWrapper = document.createElement("span");
    textWrapper.className = "filter-pill-text";

    const main = document.createElement("span");
    main.className = "filter-pill-main";
    main.textContent = line.name;

    const sub = document.createElement("span");
    sub.className = "filter-pill-sub";
    sub.textContent = line.provider;

    textWrapper.appendChild(main);
    textWrapper.appendChild(sub);

    label.appendChild(checkbox);
    label.appendChild(colorDot);
    label.appendChild(textWrapper);

    checkbox.addEventListener("change", () => {
      const stations = getActiveStations();
      const hasAny = stations.length > 0;

      buildWheelGradient(stations);
      spinButton.disabled = !hasAny;
      statusEl.textContent = hasAny ? "待開始" : "請先勾選至少一條捷運線";
      statusEl.classList.toggle("info-value-muted", true);
      statusEl.classList.toggle("info-value-accent", false);
    });

    fragment.appendChild(label);
  });

  lineFiltersEl.innerHTML = "";
  lineFiltersEl.appendChild(fragment);

  const initialStations = getActiveStations();
  buildWheelGradient(initialStations);
}

function pickStationIndex(finalRotation, stationCount) {
  if (!stationCount) return -1;
  const sliceAngle = 360 / stationCount;
  const normalized = ((360 - (finalRotation % 360)) + 360) % 360;
  const index = Math.floor(normalized / sliceAngle);
  return index >= stationCount ? stationCount - 1 : index;
}

function spinWheel() {
  if (isSpinning) return;

  closeResultDialog();

  const stations = getActiveStations();
  if (!stations.length) {
    statusEl.textContent = "目前沒有可抽的站，請重置或變更路線";
    statusEl.classList.remove("info-value-muted");
    statusEl.classList.remove("info-value-accent");
    return;
  }

  isSpinning = true;
  spinButton.disabled = true;

  statusEl.textContent = "轉盤旋轉中…";
  statusEl.classList.remove("info-value-muted");
  statusEl.classList.remove("info-value-accent");

  const count = stations.length;
  const sliceAngle = 360 / count;
  const targetIndex = Math.floor(Math.random() * count);
  // 讓轉盤多轉幾圈，看起來更隨機（約 7～10 圈）
  const baseTurns = 7 + Math.floor(Math.random() * 4); // 7,8,9,10
  const baseAngle = 360 * baseTurns;
  const targetSliceAngle = targetIndex * sliceAngle + sliceAngle / 2;
  const randomOffset =
    (Math.random() - 0.5) * (sliceAngle * 0.4);

  const targetRotation =
    baseAngle + (360 - targetSliceAngle) + randomOffset;

  // 累積實際旋轉角度，讓畫面上真的多轉好幾圈
  currentRotation = currentRotation + targetRotation;
  if (wheelEl) {
    wheelEl.style.transition =
      "transform 3.8s cubic-bezier(0.16, 0.8, 0.12, 1)";
    wheelEl.style.setProperty("--wheel-rotation", `${currentRotation}deg`);
    wheelEl.classList.add("wheel--spinning");
    wheelEl.style.transform = `rotate(${currentRotation}deg)`;
  }

  const duration = 3800;
  window.setTimeout(() => {
    const finalIndex = pickStationIndex(currentRotation, count);
    const chosen =
      finalIndex >= 0 && finalIndex < stations.length
        ? stations[finalIndex]
        : stations[targetIndex];

    const resultText = `${chosen.stationName}（${chosen.lineName}）`;
    resultEl.textContent = resultText;
    statusEl.textContent = "抽獎完成";
    statusEl.classList.remove("info-value-muted");
    statusEl.classList.add("info-value-accent");

    // 把抽到的站點從之後的抽選池中剔除
    if (chosen.key) {
      removedStations.add(chosen.key);
    } else {
      removedStations.add(makeStationKey(chosen.lineId, chosen.stationName));
    }

    const remaining = getActiveStations();
    buildWheelGradient(remaining);
    const hasAnyRemaining = remaining.length > 0;
    spinButton.disabled = !hasAnyRemaining;
    if (!hasAnyRemaining) {
      statusEl.textContent = "所有站都已抽完，可以重置或調整路線";
      statusEl.classList.remove("info-value-accent");
      statusEl.classList.add("info-value-muted");
    }

    if (wheelEl) {
      wheelEl.classList.remove("wheel--spinning");
    }

    if (dialogEl && dialogResultTextEl) {
      dialogResultTextEl.textContent = resultText;
      if (dialogSubTextEl) {
        dialogSubTextEl.textContent = chosen.provider
          ? `${chosen.provider} · ${chosen.lineName}`
          : chosen.lineName;
      }
      dialogEl.classList.add("dialog-overlay--visible");
      dialogEl.setAttribute("aria-hidden", "false");
    }

    isSpinning = false;
    spinButton.disabled = false;
  }, duration + 80);
}

function resetWheel() {
  if (isSpinning) return;
  resultEl.textContent = "尚未抽獎";
  statusEl.textContent = "待開始";
  statusEl.classList.remove("info-value-accent");
  statusEl.classList.add("info-value-muted");

  // 重置已抽過的站點，恢復完整抽選列表
  removedStations.clear();
  const stations = getActiveStations();
  buildWheelGradient(stations);
  spinButton.disabled = !stations.length;
}

function toggleAllLines() {
  const checkboxes = lineFiltersEl.querySelectorAll(
    'input[type="checkbox"][data-line-id]'
  );
  const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
  const newChecked = !allChecked;
  checkboxes.forEach((cb) => {
    cb.checked = newChecked;
  });

  const stations = getActiveStations();
  const hasAny = stations.length > 0;
  buildWheelGradient(stations);
  spinButton.disabled = !hasAny;
  statusEl.textContent = hasAny ? "待開始" : "請先勾選至少一條捷運線";
  statusEl.classList.toggle("info-value-muted", true);
  statusEl.classList.toggle("info-value-accent", false);

  toggleAllLinesBtn.textContent = newChecked ? "全不選" : "全選";
}

if (spinButton && wheelEl && lineFiltersEl) {
  renderLineFilters();
  spinButton.addEventListener("click", spinWheel);
  resetButton?.addEventListener("click", resetWheel);
  toggleAllLinesBtn?.addEventListener("click", toggleAllLines);

  if (wheelCenterEl) {
    wheelCenterEl.addEventListener("click", spinWheel);
    wheelCenterEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        spinWheel();
      }
    });
  }

  if (dialogCloseButton && dialogEl) {
    dialogCloseButton.addEventListener("click", closeResultDialog);
    dialogEl.addEventListener("click", (event) => {
      if (event.target === dialogEl) {
        closeResultDialog();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeResultDialog();
      }
    });
  }
}

