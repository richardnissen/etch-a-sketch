function initDrawingArea(sqrs) {
    sqrs = Math.min(sqrs, 100)
    const drawingArea = document.querySelector('.drawing-area');
    drawingArea.style.display = "grid";
    drawingArea.style.gridTemplateColumns = `repeat(${sqrs}, 1fr)`;
    drawingArea.style.gridTemplateRows = `repeat(${sqrs}, 1fr)`;
    drawingArea.style.gap = "0px";
    drawingArea.style.height = "700px";
    drawingArea.style.width = "700px";
    drawingArea.style.border = "2px solid black"
    let squaresSquared = sqrs ** 2
    for (let i = 0; i < squaresSquared; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-square')
        drawingArea.appendChild(square)
    }
}

function initGridSquareEventListeners(color) {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
    });
}

function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
        square.style.backgroundColor = "white"
    })
}

const clearButton = document.querySelector('button.clear')
clearButton.addEventListener('click', () => {
    clearGrid()
    initDrawingArea(Number(prompt("Please enter how many squares")));
    initGridSquareEventListeners("black");
})

initDrawingArea(16);
initGridSquareEventListeners("black");