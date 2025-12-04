let gameState = ['','','','','','','','',''];
let activePlayer = 'X';
let isGameRunning = true

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const statusElement = document.querySelector('.status-display');
const cellElements = document.querySelector('.cell');
const restart = document.querySelector('#restart-btn');

function updateStatusMessage() {
    statusElement.innerHTML = ```Vez do jogador **${activePlayer}**```;
}

function onCellClick(clickedCellEvent) {
    const clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.GetAttribute('data-index'));

    if (gameState[clickedCellIndex] !== ''|| !isGameRunning) {
        return;
    }

    processMove(clickedCell, clickedCellIndex);
    validResult();
}