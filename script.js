const root = document.documentElement;
const colorBtn = document.querySelector(".color");
const eraseBtn = document.querySelector(".eraser");
const resetBtn = document.querySelector(".reset");
const rainbowBtn = document.querySelector(".rainbow");
const colorPicker = document.querySelector(".color-picker");
const slider = document.querySelector(".slider");

let gridContainer = document.querySelector(".gridContainer");
let gridSize = 8;
let penColor = "black";

root.style.setProperty("--gridSize", gridSize);
let grid = createGrid(gridSize);

setFavicons();

colorPicker.addEventListener("input", () => {
  penColor = colorPicker.value;
  setEventListeners(penColor);
});

slider.addEventListener("change", () => {
  grid = createGrid(slider.value);
  root.style.setProperty("--gridSize", slider.value);
  setEventListeners(penColor);
});

colorBtn.addEventListener("click", () => {
  setEventListeners(penColor);
});

rainbowBtn.addEventListener("click", () => {
  grid.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = getRainbowColor();
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

function getRainbowColor() {
  const rainbowColors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee",
  ];
  const newLocal =
    rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  return newLocal;
}

function createGrid(num) {
  gridContainer.innerHTML = "";

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute("draggable", "false");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = penColor;
    });
    gridContainer.appendChild(div);
  }
  gridContainer = document.querySelector(".gridContainer");
  return document.querySelectorAll(".cell");
}
