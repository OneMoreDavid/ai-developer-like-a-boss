const cells = document.querySelectorAll('.cell');
const messageElement = document.querySelector('.message');
let currentPlayer = 'X';
let board = Array(9).fill('');
let gameOver = false;

function initializeBoard() {
    board = Array(9).fill('');
    cells.forEach(cell => cell.textContent = '');
    gameOver = false;
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

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => makeMove(index));
});

initializeBoard();