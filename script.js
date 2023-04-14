setFavicons();
let container = document.querySelector(".container");
let gridSize = 8;

const root = document.documentElement;
root.style.setProperty("--gridSize", gridSize);

let grid = createGrid(gridSize);

const rainbowColors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];
let color = "black";

const colorBtn = document.querySelector(".color");
const eraseBtn = document.querySelector(".eraser");
const resetBtn = document.querySelector(".reset");
const rainbowBtn = document.querySelector(".rainbow");
const colorPicker = document.querySelector(".color-picker");
const slider = document.querySelector(".slider");

colorPicker.addEventListener("input", () => {
  setEventListeners(colorPicker.value);
});

colorBtn.addEventListener("click", () => {
  setEventListeners(color);
});

slider.addEventListener("change", () => {
  grid = createGrid(slider.value);
  root.style.setProperty("--gridSize", slider.value);
  setEventListeners(color);
});

rainbowBtn.addEventListener("click", () => {
  grid.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = getRainbowColor(rainbowColors);
    });
  });
});

resetBtn.addEventListener("click", () => {
  grid.forEach((cell) => {
    cell.style.backgroundColor = null;
  });
});
eraseBtn.addEventListener("click", () => {
  setEventListeners(null);
});

function setFavicons() {
  const head = document.querySelector("head");
  const favicon = document.createElement("link");
  favicon.setAttribute("rel", "icon");
  favicon.setAttribute("type", "image/x-icon");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
    favicon.setAttribute("href", "/assets/pen-light.svg");
  } else {
    favicon.setAttribute("href", "/assets/pen-dark.svg");
  }
  head.appendChild(favicon);
}

function setEventListeners(color) {
  grid.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = color;
    });
  });
}

function getRainbowColor(rainbowColors) {
  return rainbowColors[Math.floor(Math.random() * 7)];
}

function createGrid(num) {
  container.innerHTML = "";
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute("draggable", "false");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = color;
    });
    container.appendChild(div);
  }
  container = document.querySelector(".container");
  return document.querySelectorAll(".cell");
}
