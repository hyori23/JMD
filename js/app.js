// Lucide icons need to be rendered after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
  initApp();

  // Modal drag functionality
  let isDragging = false;
  let dragStartX, dragStartY;
  let modalStartX, modalStartY;
  let $currentModalContent = null;

  document.addEventListener("mousemove", (e) => {
    if (isDragging && $currentModalContent) {
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      $currentModalContent.style.left = modalStartX + dx + "px";
      $currentModalContent.style.top = modalStartY + dy + "px";
      $currentModalContent.style.transform = "none";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Make modal draggable via X icon
  window.makeModalDraggable = ($modalContent) => {
    $currentModalContent = $modalContent;
    $modalContent.style.position = "absolute";
    $modalContent.style.left = "50%";
    $modalContent.style.top = "50%";
    $modalContent.style.transform = "translate(-50%, -50%)";
  };

  window.startDrag = (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    const rect = $currentModalContent.getBoundingClientRect();
    modalStartX = rect.left;
    modalStartY = rect.top;
    e.preventDefault();
  };

  window.stopDrag = () => {
    $currentModalContent = null;
  };
});

/* --- Data Definitions --- */

const COLORS = {
  bg: "#F4F1EA",
  woodDark: "#3E2723",
  woodBase: "#4E342E",
  dark: "#1A1917",
  gyeongsang: "#C25D4D",
  jeolla: "#D4A045",
  chungcheong: "#6A8D73",
  gyeonggi: "#5B7C99",
};

const INTRO_DATA = {
  title: "제사상, 표준과 파격의 경계",
  subtitle: "100개 종가의 식탁 위에 차려진 지리와 역사의 미식 인문학",
};

const JINSEOL_ROWS = [
  {
    id: 1,
    label: "1열",
    subLabel: "신위 앞",
    desc: "반서갱동: 신위가 계신 가장 안쪽. 밥은 서쪽, 국은 동쪽에 놓습니다",
    items: [
      { name: "메(밥)", image: "jinseol-02.webp" },
      { name: "잔", image: "jinseol-03.webp" },
      { name: "갱(국)", image: "jinseol-04.webp" },
      { name: "시저", image: "jinseol-05.webp" },
      { name: "메(밥)", image: "jinseol-06.webp" },
      { name: "잔", image: "jinseol-07.webp" },
      { name: "갱(국)", image: "jinseol-08.webp" },
    ],
  },
  {
    id: 2,
    label: "2열",
    subLabel: "주요리",
    desc: "국수, 고기구이, 전, 채소구이, 생선구이, 떡 순서로 배치합니다. 전은 보통 3종류를 올립니다.",
    items: [
      { name: "면", image: "jinseol-09.webp" },
      { name: "육전", image: "jinseol-10.webp" },
      { name: "소적", image: "jinseol-11.webp" },
      { name: "어적", image: "jinseol-12.webp" },
      { name: "떡", image: "jinseol-13.webp" },
    ],
  },
  {
    id: 3,
    label: "3열",
    subLabel: "탕류",
    desc: "고기, 두부/채소, 생선으로 만든 탕을 올립니다. 보통 단탕 혹은 3탕을 씁니다.",
    items: [
      { name: "육탕", image: "jinseol-14.webp" },
      { name: "소탕", image: "jinseol-15.webp" },
      { name: "어탕", image: "jinseol-16.webp" },
    ],
  },
  {
    id: 4,
    label: "4열",
    subLabel: "밑반찬",
    desc: "좌포우혜: 포는 왼쪽, 식혜는 오른쪽에 둡니다. 가운데는 삼색 나물을 둡니다.",
    items: [
      { name: "포", image: "jinseol-17.webp" },
      { name: "나물", image: "jinseol-18.webp" },
      { name: "나물", image: "jinseol-19.webp" },
      { name: "나물", image: "jinseol-20.webp" },
      { name: "침채", image: "jinseol-21.webp" },
      { name: "해", image: "jinseol-22.webp" },
      { name: "식혜", image: "jinseol-23.webp" },
    ],
  },
  {
    id: 5,
    label: "5열",
    subLabel: "후식",
    desc: "홍동백서 혹은 조율이시 원칙에 따라 과일을 배치하고, 맨 끝에는 유과나 다식 등 과자류를 놓습니다.",
    items: [
      { name: "대추", image: "jinseol-24.webp" },
      { name: "밤", image: "jinseol-25.webp" },
      { name: "배", image: "jinseol-26.webp" },
      { name: "감", image: "jinseol-27.webp" },
      { name: "사과", image: "jinseol-28.webp" },
      { name: "과자", image: "jinseol-29.webp" },
    ],
  },
];

const REGION_DATA = {
  gyeonggi: {
    id: "gyeonggi",
    name: "경기 · 강원",
    engName: "Gyeonggi & Gangwon",
    slogan: "가장 엄격한 균형의 미학",
    color: COLORS.gyeonggi,
    desc: "한양의 영향으로 유교적 법도가 강하게 적용된 '교과서적' 상차림입니다. 특정 재료에 치우치지 않는 균형이 특징입니다.",
    insight: {
      title: "제물 분포 특징",
      content:
        "육류, 어류, 채소류가 약 3:3:4 비율로 고르게 분포하며, 특히 '명태'와 '북어'의 사용 빈도가 전국에서 가장 높게 나타납니다.",
    },
    caseStudy: {
      familyName: "광주이씨 광원군종가",
      location: "경기도 성남",
      desc: "무를 제기 높이에 맞춰 정교한 '팔각 기둥' 모양으로 깎은 '침채'를 올립니다. 겨울에 동치미가 있을 때는 동치미 무를 팔각모양으로 잘라서 진설합니다. ",
      img: "assets/jongga/gwangjuissi-gg.webp",
      foodName: "침채 (沈菜)",
      foodImg: "assets/food/chimchae.webp",
      hasSpecialDiagram: true,
      diagramTitle: "진설도",
      diagramCells: ["1열", "2열", "3열", "4열 (침채 위치)", "5열"],
    },
  },
  chungcheong: {
    id: "chungcheong",
    name: "충청",
    engName: "Chungcheong",
    slogan: "담백함 속에 깃든 내륙의 맛",
    color: COLORS.chungcheong,
    desc: "바다와 먼 내륙의 특성상 화려함보다는 소박하고 담백한 맛을 추구합니다. 양념을 최소화한 나물과 탕이 특징입니다.",
    insight: {
      title: "내륙의 식재료",
      content:
        "해산물 비중이 낮고, 콩이나 무를 활용한 요리가 발달했습니다. '두부'와 '무나물'이 제사상의 핵심 제물로 등장합니다.",
    },
    caseStudy: {
      familyName: "수안이씨 요산군종가",
      location: "충청북도 보은",
      desc: " 수안이씨 요산군종가의 제사상에는 일반적인 진설과는 다른 특이제물이 올라갑니다. 먼저 해적은 이름 그대로 낙지를 올리는 제물로, 첨작관이 술을 첨작할 때 제사상에 함께 진설됩니다. 어전은 바지락이나 굴을 주재료로 삼으며, 올해는 바지락을 사용하였습니다. 면은 찹쌀을 반죽해 동글납작하게 부친 뒤 돌돌 말아 약 5cm 너비로 썰어 만듭니다. 제기 하단에는 무를 깔아 높이를 맞춘 후, 그 위에 면을 세로로 꽂아 단정하게 진설합니다. 무나물은 무를 가늘게 채 썰어 프라이팬에 볶다가 무가 투명해질 때까지 익힌 뒤, 조갯살과 들기름, 조선간장, 마늘을 넣어 함께 볶아냅니다. 양념을 거의 하지 않고 하얗게 볶아낸 무나물을 고봉으로 쌓아 올려, 재료 본연의 색과 맛을 중시하는 종가 제물의 특징을 보여줍니다. ",
      img: "assets/jongga/suanissi-c.webp",
      foodName: "해적, 어전, 면, 무나물",
      foodImg: [
        "assets/food/octopus.webp",
        "assets/food/eojeok.webp",
        "assets/food/men.webp",
        "assets/food/munamul.webp",
      ],
      hasSpecialDiagram: true,
      diagramTitle: "진설도",
      diagramCells: [
        "1열(면 위치)",
        "2열",
        "3열(해적, 어전 위치)",
        "4열 (무나물 위치)",
        "5열",
      ],
    },
  },
  gyeongsang: {
    id: "gyeongsang",
    name: "경상",
    engName: "Gyeongsang",
    slogan: "날것 그대로, 바다의 생명력",
    color: COLORS.gyeongsang,
    desc: "동해와 남해의 풍부한 어족 자원을 바탕으로, 굽지 않은 '생물' 생선을 그대로 올리는 파격적인 전통을 고수합니다.",
    insight: {
      title: "압도적인 어류 비중",
      content:
        "조사 대상 종가의 90% 이상에서 '고등어'를 올렸으며, 내륙인 안동 지역에서도 염장 생선(간고등어)과 돔배기(상어)가 필수입니다.",
    },
    caseStudy: {
      familyName: "풍산류씨 양진당종가",
      location: "경상북도 안동",
      desc: "닭을 봉황에 비유하여 '봉탕'이라 부릅니다. 닭 한 마리를 삶아 꼬리가 위를 향하게 세워 올리는 독특한 진설법을 가집니다.",
      img: "assets/jongga/pungsallyussi-gs.webp",
      foodName: "봉탕",
      foodImg: "assets/food/bongtang.webp",
      hasSpecialDiagram: true,
      diagramTitle: "진설도",
      diagramCells: ["1열", "2열 (봉탕 위치)", "3열", "4열", "5열"],
    },
  },
  jeolla: {
    id: "jeolla",
    name: "전라",
    engName: "Jeolla",
    slogan: "갯벌이 빚어낸 강렬한 풍미",
    color: COLORS.jeolla,
    desc: "홍어, 꼬막, 낙지 등 갯벌의 산물을 아낌없이 사용합니다. 향이 강하고 맛이 진한 식재료로 조상님을 대접합니다.",
    insight: {
      title: "특산물 데이터",
      content:
        "전라권 종가 10곳 중 8곳에서 '홍어'와 '꼬막'이 등장했습니다. 다른 지역에서는 보기 힘든 '꽃게'를 통째로 올리는 경우도 있습니다.",
    },
    caseStudy: {
      familyName: "죽산박씨 송암종가",
      location: "전라남도 영암",
      desc: "보통 포(건어물)를 놓는 자리에 제철 꽃게를 통째로 쪄서 올리는 파격을 보여줍니다. 홍어 대신 가오리찜을 쓰기도 합니다.",
      img: "assets/jongga/juksanbakssi-j.webp",
      foodName: "꽃게찜, 가오리찜",
      foodImg: ["assets/food/fge.webp", "assets/food/gasami.webp"],
      hasSpecialDiagram: true,
      diagramTitle: "진설도",
      diagramCells: ["1열", "2열 (꽃게찜, 가오리찜 위치)", "3열", "4열", "5열"],
    },
  },
};

const GALLERY_ITEMS = [
  {
    id: 1,
    name: "계란지단 조기",
    region: "경상",
    desc: "조기를 굽지 않고 쪄서 계란 지단으로 감싸 올립니다. 경상도 일부 가문의 정성을 보여줍니다.",
  },
  {
    id: 2,
    name: "가오리찜",
    region: "전라",
    desc: "홍어와 비슷하지만 덜 삭힌 부드러운 맛으로, 전라도 잔칫상과 제사상에 빠지지 않습니다.",
  },
  {
    id: 3,
    name: "삽산적",
    region: "충청",
    desc: "홍합, 두부, 고기를 꼬치에 꿰어 넓적하게 부친 충청도식 산적입니다.",
  },
  {
    id: 4,
    name: "낙지 호롱",
    region: "전라",
    desc: "통낙지를 볏짚이나 나무젓가락에 돌돌 말아 양념을 발라 구워낸 요리입니다.",
  },
  {
    id: 5,
    name: "돔배기",
    region: "경상",
    desc: "상어 고기를 토막 내어 소금에 절인 숙성회로, 경상도 내륙 제사상의 필수품입니다.",
  },
  {
    id: 6,
    name: "봉탕 (닭)",
    region: "경상",
    desc: "삶은 닭의 꼬리가 위를 향하게 세워 봉황의 형상을 본뜬 제물입니다.",
  },
];

/* --- Global State --- */
let activeRegionId = null;
let activeTab = "intro";
let modalItem = null;

/* --- DOM Elements --- */
const $sections = {
  intro: document.getElementById("intro"),
  basics: document.getElementById("basics"),
  map: document.getElementById("map"),
  gallery: document.getElementById("gallery"),
};
const $navLinksContainer = document.getElementById("nav-links");
const $jinseolRowsContainer = document.getElementById("jinseol-rows-container");
const $koreaMapContainer = document.getElementById("korea-map-container");
const $regionDetailContainer = document.getElementById(
  "region-detail-container"
);
const $galleryGrid = document.getElementById("gallery-grid");
const $modal = document.getElementById("gallery-modal");

/* --- Utility Functions --- */

/**
 * 스크롤 위치로 섹션을 이동합니다.
 * @param {string} id - 섹션 ID (intro, basics, map, gallery)
 */
function scrollToSection(id) {
  const target = $sections[id];
  if (target) {
    // Navbar 높이 (64px)만큼 보정하여 스크롤
    window.scrollTo({ top: target.offsetTop - 64, behavior: "smooth" });
  }
}

/**
 * Navbar의 활성 탭을 업데이트합니다.
 * @param {string} newActiveTab
 */
function setActiveTab(newActiveTab) {
  if (activeTab === newActiveTab) return;
  activeTab = newActiveTab;

  document.querySelectorAll(".nav-link").forEach((link) => {
    const targetId = link.getAttribute("data-target");
    if (targetId === activeTab) {
      link.classList.add(
        "text-[var(--color-dark)]",
        "font-bold",
        "border-black"
      );
      link.classList.remove("text-gray-500", "border-transparent");
    } else {
      link.classList.remove(
        "text-[var(--color-dark)]",
        "font-bold",
        "border-black"
      );
      link.classList.add("text-gray-500", "border-transparent");
    }
  });
}

/* --- Rendering Functions --- */

/**
 * 진설 행 HTML을 생성합니다.
 */
function renderJinseolRows() {
  let html = "";
  JINSEOL_ROWS.forEach((row) => {
    const foodItemsHtml = row.items
      .map(
        (item) => `
        <div class="jinseol-item">
          <img
            src="assets/jinseol/${item.image}"
            alt="${item.name}"
            loading="lazy"
          />
          <span>${item.name}</span>
        </div>
      `
      )
      .join("");

    html += `
              <div class="max-w-6xl mx-auto">
                  <div
                      class="jinseol-row flex flex-col md:flex-row items-center gap-6 p-4 md:p-6 rounded-xl shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] border-t border-[#6D4C41] bg-[var(--color-wood-base)]"
                      data-row-id="${row.id}"
                  >
                      <div class="w-full md:w-64 flex-shrink-0 text-center md:text-left space-y-2">
                          <span class="text-amber-200/60 font-mono text-xs md:text-sm block">${row.label}</span>
                          <span class="text-amber-200/60 font-mono text-xs md:text-sm block">${row.subLabel}</span>
                          <p class="text-white text-sm font-light leading-relaxed max-w-[250px] mx-auto md:mx-0">
                              ${row.desc}
                          </p>
                      </div>

                      <div class="flex-1 w-full flex gap-2 md:gap-4 items-center justify-center border-l border-white/20 md:pl-6 pt-4 md:pt-0 overflow-x-auto">
                          ${foodItemsHtml}
                      </div>
                  </div>
              </div>
          `;
  });
  $jinseolRowsContainer.innerHTML = html;
}
async function renderKoreaMap() {
  const res = await fetch("assets/mapp/mapp-01.svg");
  const svgText = await res.text();

  const html = `
    <div class="relative w-full h-full flex items-center justify-center p-4">
      ${svgText}
    </div>
  `;

  $koreaMapContainer.innerHTML = html;

  const svg = $koreaMapContainer.querySelector("svg");
  svg.classList.add("w-full", "h-full", "max-h-[70vh]", "drop-shadow-xl");

  // 지역별 텍스트 좌표
  const regionLabels = {
    gyeonggi: { x: 220, y: 220, text: "경기 · 강원" },
    chungcheong: { x: 150, y: 450, text: "충청" },
    jeolla: { x: 120, y: 660, text: "전라" },
    gyeongsang: { x: 350, y: 550, text: "경상" },
  };

  svg.querySelectorAll("path").forEach((path) => {
    const id = path.id;
    path.setAttribute("data-region-id", id);
    path.setAttribute("stroke", "white");
    path.setAttribute("stroke-width", "2");
    path.classList.add("map-path", `region-${id}`);

    path.addEventListener("click", () => {
      setActiveRegion(id);
    });

    // 텍스트 레이블 추가
    if (regionLabels[id]) {
      const label = regionLabels[id];
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", label.x);
      text.setAttribute("y", label.y);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("id", `map-text-${id}`);
      text.setAttribute("data-region-id", id);
      text.classList.add("map-text", `region-text-${id}`);
      text.textContent = label.text;

      svg.appendChild(text);

      text.addEventListener("click", () => {
        setActiveRegion(id);
      });
    }
  });
}

/**
 * 맵 클릭 시 지역 상세 정보 나오게하기
 * @param {string} id - 지역 ID
 */
function setActiveRegion(id) {
  activeRegionId = id;
  const data = REGION_DATA[id];

  // 1. Update Map Colors and Text
  document.querySelectorAll(".map-path").forEach((path) => {
    const regionId = path.getAttribute("data-region-id");
    const text = document.getElementById(`map-text-${regionId}`);

    path.classList.remove(
      "active-gyeongsang",
      "active-jeolla",
      "active-chungcheong",
      "active-gyeongsang",
      "active-gyeonggi",
      "active"
    );

    if (text) {
      text.classList.remove("active");
    }

    if (regionId === activeRegionId) {
      path.classList.add(`active-${regionId}`, "active");
      if (text) {
        text.classList.add("active");
      }
    }
  });

  // 2. Render Details
  if (data) {
    const detailHtml = `
              <div class="p-6 md:p-12 lg:p-20 space-y-16">

                  <!-- Region Header -->
                  <header class="space-y-4">
                      <div class="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-gray-400">
                          <div class="h-px w-8 bg-current"></div>
                          ${data.engName}
                      </div>
                      <h2 class="text-5xl md:text-7xl font-serif font-black leading-none tracking-tight" style="color: ${
                        data.color
                      };">
                          ${data.name}
                      </h2>
                      <p class="text-xl font-light text-gray-800 break-keep leading-snug">"${
                        data.slogan
                      }"</p>
                      <p class="text-gray-600 leading-relaxed max-w-2xl break-keep">${
                        data.desc
                      }</p>



                  <!-- Case Study Section -->
                  <section class="space-y-8">
                      <div class="flex items-center justify-between border-b border-black pb-3">
                          <h3 class="text-xl font-bold font-serif">종가 사례 연구</h3>
                          <span class="text-xs bg-black text-white px-2 py-0.5 rounded-full">CASE STUDY</span>
                      </div>

                      <div class="space-y-6">
                          <!-- 1. Family Image & Info -->
                          <div>
                              <div class="aspect-[16/9] w-full bg-gray-200 rounded-lg overflow-hidden shadow-md mb-4 relative">
                                  <img src="${
                                    data.caseStudy.img
                                  }" alt="" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/1200x675/A6A6A6/ffffff?text=Image+Placeholder'" />
                                  <div class="absolute top-3 left-3 bg-black/50 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                                      <i data-lucide="map-pin" class="w-3 h-3"></i> ${
                                        data.caseStudy.location
                                      }
                                  </div>
                              </div>
                              <h4 class="text-2xl font-serif font-bold mb-2">${
                                data.caseStudy.familyName
                              }</h4>
                              <p class="text-gray-600 leading-relaxed break-keep">${
                                data.caseStudy.desc
                              }</p>
                          </div>

                          <!-- 2. Unique Food Highlight -->
                          <div class="bg-white border border-[var(--color-paper-border)] rounded-xl p-8 shadow-xl">
                              <div class="flex flex-col gap-6 lg:flex-row ${
                                Array.isArray(data.caseStudy.foodImg) ? "" : ""
                              }">
                                  <div class="${
                                    Array.isArray(data.caseStudy.foodImg)
                                      ? ""
                                      : "flex-1"
                                  }">
                                      <h5 class="text-xl font-serif font-bold mb-2" style="color: ${
                                        data.color
                                      };">${data.caseStudy.foodName}</h5>
                                      ${
                                        Array.isArray(data.caseStudy.foodImg)
                                          ? `<div class="grid ${
                                              data.caseStudy.foodImg.length ===
                                              2
                                                ? "grid-cols-1"
                                                : "grid-cols-2"
                                            } gap-2">${data.caseStudy.foodImg
                                              .map(
                                                (img) =>
                                                  `<img src="${img}" alt="${data.caseStudy.foodName}" class="w-40 h-40 object-contain rounded" />`
                                              )
                                              .join("")}</div>`
                                          : `<img src="${data.caseStudy.foodImg}" alt="${data.caseStudy.foodName}" class="w-full h-64 object-contain rounded-lg mb-4" />`
                                      }
                                  </div>
                                  ${
                                    data.caseStudy.hasSpecialDiagram
                                      ? `
                                      <div class="${
                                        Array.isArray(data.caseStudy.foodImg)
                                          ? "flex-1"
                                          : "flex-1"
                                      } p-5 bg-[#F8F6F2] rounded-xl border border-dashed border-gray-300">
                                          <div class="flex items-center gap-2 mb-3 text-[var(--color-${
                                            data.id
                                          })] font-bold text-sm">
                                              ${data.caseStudy.diagramTitle}
                                          </div>
                                          <div class="diagram-grid flex flex-col">
                                              ${data.caseStudy.diagramCells
                                                .map(
                                                  (cell, index) =>
                                                    `<div class="diagram-cell" style="background-color: ${
                                                      cell.includes("(") &&
                                                      cell.includes(")")
                                                        ? data.color
                                                        : "white"
                                                    }; text-align: center; height: 50px; line-height: 50px; margin-bottom: ${
                                                      index <
                                                      data.caseStudy
                                                        .diagramCells.length -
                                                        1
                                                        ? "4px"
                                                        : "0"
                                                    };">${cell}</div>`
                                                )
                                                .join("")}
                                          </div>
                                      </div>
                                  `
                                      : ""
                                  }
                              </div>
                          </div>
                      </div>
                  </section>

              </div>
          `;
    $regionDetailContainer.innerHTML = detailHtml;
    lucide.createIcons(); // Re-render icons after injecting new HTML
  }
}

/**
 * 기본 지도 상태(누르기 전)
 */
function renderDefaultMapState() {
  $regionDetailContainer.innerHTML = `
          <div class="h-full flex flex-col items-center justify-center p-10 text-center opacity-50 min-h-[50vh] lg:min-h-0 lg:h-[calc(100vh-64px)]">
              <i data-lucide="map-pin" class="w-12 h-12 text-gray-400 mb-4"></i>
              <h3 class="text-2xl font-serif font-bold text-[var(--color-dark)] mb-2">지도를 선택해주세요</h3>
              <p class="text-gray-500">좌측 지도에서 권역을 클릭하면<br/>상세한 종가 기록이 나타납니다.</p>
          </div>
      `;
  lucide.createIcons();
}

/**
 * 갤러리 그리드를 렌더링하고 이벤트 리스너를 추가합니다.
 */
function renderGallery() {
  $galleryGrid.innerHTML = GALLERY_ITEMS.map(
    (item) => `
          <div
              class="bg-white rounded-lg p-6 border border-gray-100 shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.01] transition-all flex flex-col items-center text-center gallery-item"
              data-item-id="${item.id}"
          >
              <div class="text-xs font-bold text-gray-500 mb-4 w-full flex justify-between">
                  <span>${item.region}</span>
                  <span>#0${item.id}</span>
              </div>
              <h4 class="text-xl font-serif font-bold mb-2">${item.name}</h4>
              <p class="text-gray-500 text-sm line-clamp-2">${item.desc}</p>

              <div class="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gray-700 transition-colors">
                  상세 보기 <i data-lucide="arrow-right" class="w-[10px] h-[10px]"></i>
              </div>
          </div>
      `
  ).join("");

  document.querySelectorAll(".gallery-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-item-id"));
      const item = GALLERY_ITEMS.find((i) => i.id === id);
      if (item) showModal(item);
    });
  });

  lucide.createIcons();
}
/**
 * 갤러리 모달 열기
 */
function showModal(item) {
  modalItem = item;

  $modal.innerHTML = `
    <div
      class="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl relative"
      onclick="event.stopPropagation()"
    >
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
        onclick="hideModal(event)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="w-6 h-6">
          <path d="M18 6 6 18"></path>
          <path d="M6 6 18 18"></path>
        </svg>
      </button>

      <div class="text-center">
        <div class="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-4">
          ${item.region}
        </div>
        <h3 class="text-2xl font-serif font-bold text-[var(--color-dark)] mb-3">
          ${item.name}
        </h3>
        <p class="text-gray-600 leading-relaxed break-keep">
          ${item.desc}
        </p>
      </div>
    </div>
  `;

  $modal.classList.remove("hidden");
  $modal.classList.add("flex");
}

/**
 * 갤러리 모달 닫기
 */
function hideModal(e) {
  if (e) e.stopPropagation();

  modalItem = null;
  $modal.classList.remove("flex");
  $modal.classList.add("hidden");
}

/* --- Intersection Observer & Event Handlers --- */

/**
 * 스크롤 시 섹션에 따라 Navbar 활성 탭을 업데이트합니다.
 */
function setupSectionObserver() {
  const observerOptions = {
    rootMargin: "-30% 0px -60% 0px", // 화면 상단 30% ~ 40% 지점 통과 시 활성화
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  }, observerOptions);

  Object.values($sections).forEach((section) => {
    if (section) observer.observe(section);
  });
}

/**
 * Jinseol Row 애니메이션을 위한 Observer를 설정합니다.
 */
function setupJinseolRowObserver() {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const row = entry.target;
          const index = parseInt(row.getAttribute("data-row-id")) - 1;

          // 순차적인 등장 효과
          const delay = index * 200;
          setTimeout(() => {
            row.classList.add("is-visible");
          }, delay);
          observer.unobserve(row); // 한 번만 실행
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".jinseol-row").forEach((row) => {
    observer.observe(row);
  });
}

/**
 * Navbar 링크를 렌더링하고 이벤트를 연결합니다.
 */
function setupNavbar() {
  const navItems = [
    { id: "intro", label: "홈" },
    { id: "basics", label: "진설 구조" },
    { id: "map", label: "지역별 분포" },
    { id: "gallery", label: "특이 제물" },
  ];

  $navLinksContainer.innerHTML = navItems
    .map(
      (item) => `
          <button
              data-target="${item.id}"
              class="nav-link hover:text-[var(--color-dark)] transition-colors pb-1 border-b-2 border-transparent ${
                item.id === "intro"
                  ? "text-[var(--color-dark)] font-bold border-black"
                  : "text-gray-500"
              }"
              onclick="scrollToSection('${item.id}')"
          >
              ${item.label}
          </button>
      `
    )
    .join("");

  // Intro Subtitle
  document.getElementById("intro-subtitle").innerHTML = INTRO_DATA.subtitle
    .split("\n")
    .map((line) => `<span>${line}</span><br/>`)
    .join("");
}

/**
 * 전체 애플리케이션을 초기화합니다.
 */
function initApp() {
  setupNavbar();
  renderJinseolRows();
  renderKoreaMap();
  renderDefaultMapState(); // 초기에는 기본 상태 표시
  renderGallery();
  setupSectionObserver();
  setupJinseolRowObserver();
  setActiveTab("intro"); // 초기 탭 설정
}
