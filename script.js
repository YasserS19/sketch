const container = document.querySelector('.container');
const squareCount = 100;

for (let i = 0; i < squareCount * squareCount; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

let color = "black";
const squares = document.querySelectorAll('.square');
const colorButton = document.querySelector('.color');
const eraseButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const colorPicker = document.querySelector(".picker");


colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
});

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = color;
    });
});

colorButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
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
