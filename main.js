const container = document.querySelector('.container');
const squareCount = 16;

for (let i = 0; i < squareCount * squareCount; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
    });
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = '#ccc';
    });
});