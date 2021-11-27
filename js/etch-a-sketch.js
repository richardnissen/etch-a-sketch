function initDrawingArea(sqrs) {
    const drawingArea = document.querySelector('.drawing-area');
    drawingArea.style.gridTemplateColumns = `repeat(${sqrs}, 1fr)`;
    drawingArea.style.gridTemplateRows = `repeat(${sqrs}, 1fr)`;
    let squaresSquared = sqrs ** 2
    for (let i = 0; i < squaresSquared; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-square')
        drawingArea.appendChild(square)
    }
}