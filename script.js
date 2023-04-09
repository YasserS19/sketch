const theme = window.matchMedia("(prefers-color-scheme: dark)");
if (theme.matches === true) {
    setFavicons("./public/assets/pen-light.svg")
} else {
    setFavicons("./public/assets/pen-dark.svg")
}

let container = document.querySelector('.container');
let squareNum = 8;

const root = document.documentElement;
root.style.setProperty('--n', squareNum);

let squares = genSquares(squareNum);


const colors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"]
let color = "black";


const colorButton = document.querySelector('.color');
const eraseButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');
const colorPicker = document.querySelector(".picker");
const slider = document.querySelector(".slider");


squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = color;
    });
});

slider.addEventListener("input", () => {
    squares = genSquares(Number(slider.value));
    root.style.setProperty('--n', Number(slider.value));
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
    });
});


colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
});

colorButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
    });
});

rainbowButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor(colors);
        });
    });
});

resetButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});
eraseButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "white";
        });
    });
});
function setFavicons(path) {
    const head = document.querySelector('head');
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('type', 'image/x-icon');
    favicon.setAttribute('href', path);
    head.appendChild(favicon);
    console.log(head);
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * 7)];
}
function genSquares(num) {
    container.innerHTML = "";
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    container = document.querySelector('.container');
    return document.querySelectorAll('.square');
}