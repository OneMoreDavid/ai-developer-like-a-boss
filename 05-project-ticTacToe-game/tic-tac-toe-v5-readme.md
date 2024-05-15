# Adding an AI to the webpage game for Tic Tac Toe

    can you add an AI player to the web version of this game

---

Sure, I can add an AI player to the web version of the Tic Tac Toe game. Here's the updated code with the AI player implementation:

**script.js**

```javascript
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
        return winner === 'O' ? 10 - depth : depth - 10;
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

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => makeMove(index));
});

initializeBoard();
```

Here are the changes made to include the AI player:

1. A new variable `isAiTurn` is added to keep track of whether it's the AI's turn or the human player's turn.
2. In the `makeMove()` function, after switching the current player, we check if it's the AI's turn (`isAiTurn`). If it is, we call the `getAiMove()` function after a short delay (500ms) to simulate the AI's "thinking" process.
3. The `getAiMove()` function uses the Minimax algorithm to determine the best move for the AI player. It iterates through all available cells, simulates the move, and evaluates the score using the `minimax()` function. The cell with the highest score is chosen as the AI's move.
4. The `minimax()` function is a recursive function that implements the Minimax algorithm. It evaluates the score for the current board state and player. The algorithm tries to maximize the score for the AI player ('O') and minimize the score for the human player ('X'). The score is based on the game outcome: +10 for a win, -10 for a loss, and 0 for a tie, adjusted by the depth of the recursion to prioritize shorter winning paths.

To play the game with the AI player, follow these steps:

1. Open the `index.html` file in a web browser.
2. You will be playing as 'X', and the AI player will be 'O'.
3. Make your move by clicking on an empty cell.
4. After a short delay, the AI player will make its move.
5. Continue taking turns with the AI player until the game ends with a winner or a tie.

Note that the Minimax algorithm is a more advanced AI implementation than the one used in the previous Python example. It explores all possible move sequences and chooses the optimal move based on the evaluation scores. This implementation should provide a more challenging AI opponent for the game.

---

### this works fine, but can we make the AI player a harder opponent? See Readme 6