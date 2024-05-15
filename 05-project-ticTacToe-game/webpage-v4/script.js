const cells = document.querySelectorAll('.cell');
const messageElement = document.querySelector('.message');
let currentPlayer = 'X';
let board = Array(9).fill('');
let gameOver = false;
let isAiTurn = false;

function initializeBoard() {
    board = Array(9).fill('');
    cells.forEach(cell => cell.textContent = '');
    gameOver = false;
    isAiTurn = false;
    messageElement.textContent = '';
}

function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            messageElement.textContent = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkTie()) {
            messageElement.textContent = "It's a tie!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            isAiTurn = !isAiTurn;
            if (isAiTurn) {
                setTimeout(getAiMove, 500);
            }
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function checkTie() {
    return board.every(cell => cell !== '');
}

function getAiMove() {
    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            const score = minimax(board, 0, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    makeMove(bestMove);
}

function minimax(board, depth, isMaximizing) {
    const winner = checkWinner();
    if (winner) {
        return winner === 'O' ? 10 : -10;
    }

    if (checkTie()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                const score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(bestScore, score);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(bestScore, score);
            }
        }
        return bestScore;
    }
}

function evaluateBoard(board) {
    const player = currentPlayer === 'X' ? 'O' : 'X';
    let score = 0;

    // Check rows
    for (let i = 0; i < 9; i += 3) {
        const row = [board[i], board[i + 1], board[i + 2]];
        score += evaluateRow(row, player);
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        const col = [board[i], board[i + 3], board[i + 6]];
        score += evaluateRow(col, player);
    }

    // Check diagonals
    const diagonal1 = [board[0], board[4], board[8]];
    const diagonal2 = [board[2], board[4], board[6]];
    score += evaluateRow(diagonal1, player);
    score += evaluateRow(diagonal2, player);

    return score;
}

function evaluateRow(row, player) {
    let score = 0;
    let emptyCount = 0;

    for (const cell of row) {
        if (cell === player) {
            score += 1;
        } else if (cell === '') {
            emptyCount += 1;
        }
    }

    if (score === 3) {
        return 100; // Winning combination
    } else if (score === 2 && emptyCount === 1) {
        return 10; // Two in a row with one empty cell
    } else if (score === 1 && emptyCount === 2) {
        return 5; // One in a row with two empty cells
    }

    return 0;
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => makeMove(index));
});

initializeBoard();