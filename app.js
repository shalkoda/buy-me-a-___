const fallbackIcons = [
  {
    id: "gpu",
    label: "GPU",
    keywords: ["gpu", "graphics card", "ai", "compute", "cluster"],
    titleMatches: ["Buy Me A GPU", "Fund My GPU Cluster"],
    file: "gpu.svg",
    license: "MIT",
    provider: "SVG Repo",
    providerUrl: "https://www.svgrepo.com",
  },
  {
    id: "taco",
    label: "Taco",
    keywords: ["taco", "food", "snack", "lunch"],
    titleMatches: ["Buy Me A Taco"],
    file: "taco.svg",
    license: "MIT",
    provider: "SVG Repo",
    providerUrl: "https://www.svgrepo.com",
  },
];

const phraseInput = document.querySelector("#phrase");
const creatorInput = document.querySelector("#creator");
const previewPhrase = document.querySelector("#previewPhrase");
const previewCreator = document.querySelector("#previewCreator");
const previewIcon = document.querySelector("#previewIcon");
const iconOptions = document.querySelector("#iconOptions");
const vectorGrid = document.querySelector("#vectorGrid");

let selectedIcon = fallbackIcons[0];

function vectorPath(file) {
  return `public/vectors/${file}`;
}

function normalizeValue(value, fallback) {
  const trimmed = value.trim().replace(/\s+/g, " ");
  return trimmed || fallback;
}

function renderPreview() {
  previewPhrase.textContent = normalizeValue(phraseInput.value, "Buy Me A ___");
  previewCreator.textContent = normalizeValue(creatorInput.value, "Creator");
  previewIcon.innerHTML = `<img src="${vectorPath(selectedIcon.file)}" alt="" />`;
}

function selectIcon(icon, icons) {
  selectedIcon = icon;
  for (const button of iconOptions.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button.dataset.iconId === icon.id));
  }
  renderPreview();
}

function renderIconOptions(icons) {
  iconOptions.innerHTML = "";

  for (const icon of icons) {
    const button = document.createElement("button");
    button.className = "icon-option";
    button.type = "button";
    button.dataset.iconId = icon.id;
    button.setAttribute("aria-pressed", String(icon.id === selectedIcon.id));
    button.innerHTML = `
      <img src="${vectorPath(icon.file)}" alt="" />
      <span>${icon.label}</span>
    `;
    button.addEventListener("click", () => selectIcon(icon, icons));
    iconOptions.append(button);
  }
}

function renderVectorGrid(icons) {
  vectorGrid.innerHTML = "";

  for (const icon of icons) {
    const keywords = icon.keywords.join(", ");
    const titleMatches = icon.titleMatches || [];
    const provider = icon.provider || "Unknown provider";
    const providerUrl = icon.providerUrl || "#";
    const card = document.createElement("article");
    card.className = "vector-card";
    card.innerHTML = `
      <img src="${vectorPath(icon.file)}" alt="" />
      <h3>${icon.label}</h3>
      <p>${keywords}</p>
      <p class="title-matches">${titleMatches.join(" / ")}</p>
      <small>${icon.license}</small>
      <a class="provider-credit" href="${providerUrl}" rel="noopener">
        Vectors and icons by ${provider}
      </a>
    `;
    vectorGrid.append(card);
  }
}

async function loadIcons() {
  try {
    const response = await fetch("public/vectors/icons.json");
    if (!response.ok) {
      throw new Error(`Icon metadata request failed: ${response.status}`);
    }
    return await response.json();
  } catch {
    return fallbackIcons;
  }
}

async function init() {
  const icons = await loadIcons();
  selectedIcon = icons[0] || fallbackIcons[0];

  renderIconOptions(icons);
  renderVectorGrid(icons);
  renderPreview();

  phraseInput.addEventListener("input", renderPreview);
  creatorInput.addEventListener("input", renderPreview);
}

init();
