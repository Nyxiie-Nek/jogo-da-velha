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
    statusElement.innerHTML = `Vez do jogador **${activePlayer}**`;
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

function processMove(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = activePlayer;
    clickedCell.textContent = activePlayer;
    
    // NOVO: Adiciona classe CSS para cor
    clickedCell.classList.add(activePlayer === 'X' ? 'player-x' : 'player-o');
}

// Verifica vitória ou empate
function validateResult() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const winCondition = winConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            // Destaca as células vencedoras
            winCondition.forEach(index => cellElements[index].classList.add('winner'));
            break;
        }
    }

    if (roundWon) {
        statusElement.innerHTML = `O Jogador **${activePlayer}** venceu!`;
        isGameRunning = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusElement.innerHTML = `**Empate!**`;
        isGameRunning = false;
        return;
    }

    // Se ninguém venceu e não há empate, troca o jogador
    switchPlayer();
}

// Troca o jogador ativo
function switchPlayer() {
    activePlayer = activePlayer === 'X' ? 'O' : 'X';
    updateStatusMessage();
}

// Reinicia o jogo
function restartGame() {
    isGameRunning = true;
    activePlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    updateStatusMessage(); // Atualiza a mensagem
    
    cellElements.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
        // NOVO: Remove as classes de jogador
        cell.classList.remove('player-x');
        cell.classList.remove('player-o');
    });
}

// --- Configuração Inicial ---
cellElements.forEach(cell => cell.addEventListener('click', onCellClick));
restartBtn.addEventListener('click', restartGame);

// Define a mensagem inicial
updateStatusMessage();