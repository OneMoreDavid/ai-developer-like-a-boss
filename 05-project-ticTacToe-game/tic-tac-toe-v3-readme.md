# Now to add an AI opponent

    Please update the code to include an AI opponent

---

Sure, here's an updated version of the Tic Tac Toe game with an AI opponent. We'll use a simple AI algorithm that checks for the best move based on the current state of the board. The AI will try to win if possible, or block the opponent's winning move, or choose a random available cell.

```python
import random

def initialize_board():
    """Initialize an empty 3x3 board."""
    return [['-' for _ in range(3)] for _ in range(3)]

def display_board(board):
    """Display the current state of the board."""
    for row in board:
        print(' '.join(row))
    print()

def get_player_move(player, board):
    """Get the next move from the player."""
    while True:
        row = int(input(f"Player {player}, enter row (0-2): "))
        col = int(input(f"Player {player}, enter column (0-2): "))

        if row < 0 or row > 2 or col < 0 or col > 2:
            print("Invalid move, try again.")
            continue

        if board[row][col] != '-':
            print("That cell is already occupied, try again.")
            continue

        return row, col

def make_move(board, row, col, player):
    """Make a move on the board."""
    board[row][col] = player

def check_winner(board, player):
    """Check if a player has won the game."""
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True

    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    # Check diagonals
    if all(board[i][i] == player for i in range(3)):
        return True
    if all(board[i][2 - i] == player for i in range(3)):
        return True

    return False

def check_tie(board):
    """Check if the game has ended in a tie."""
    for row in board:
        if '-' in row:
            return False
    return True

def get_ai_move(board, player):
    """Get the next move for the AI player."""
    # Check if the AI can win
    for row in range(3):
        for col in range(3):
            if board[row][col] == '-':
                board[row][col] = player
                if check_winner(board, player):
                    board[row][col] = '-'
                    return row, col
                board[row][col] = '-'

    # Check if the opponent can win and block their move
    opponent = 'O' if player == 'X' else 'X'
    for row in range(3):
        for col in range(3):
            if board[row][col] == '-':
                board[row][col] = opponent
                if check_winner(board, opponent):
                    board[row][col] = '-'
                    return row, col
                board[row][col] = '-'

    # Choose a random available cell
    available_cells = [(row, col) for row in range(3) for col in range(3) if board[row][col] == '-']
    if available_cells:
        return random.choice(available_cells)

def play_game():
    """Play the Tic Tac Toe game."""
    board = initialize_board()
    current_player = 'X'
    is_ai_turn = False

    while True:
        display_board(board)

        if current_player == 'X':
            row, col = get_player_move(current_player, board)
        else:
            row, col = get_ai_move(board, current_player)
            print(f"AI move: row={row}, col={col}")
            is_ai_turn = True

        make_move(board, row, col, current_player)

        if check_winner(board, current_player):
            display_board(board)
            if is_ai_turn:
                print("AI wins!")
            else:
                print(f"Player {current_player} wins!")
            break
        elif check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        current_player = 'O' if current_player == 'X' else 'X'
        is_ai_turn = not is_ai_turn

if __name__ == "__main__":
    play_game()
```

Here's how the AI opponent works:

1. The `get_ai_move(board, player)` function implements the AI algorithm.
2. The AI first checks if it can win in the next move by iterating through all available cells and simulating the move. If a winning move is found, it returns that move.
3. If the AI cannot win, it checks if the opponent can win in the next move. If a potential winning move for the opponent is found, the AI blocks that move by returning the corresponding cell.
4. If neither the AI nor the opponent can win in the next move, the AI chooses a random available cell.
5. In the `play_game()` function, we added a new boolean variable `is_ai_turn` to track whether it's the AI's turn or the human player's turn.
6. When it's the human player's turn (`current_player == 'X'`), we get the move using `get_player_move()`.
7. When it's the AI's turn (`current_player == 'O'`), we get the move using `get_ai_move()` and print the AI's move.
8. After each move, we update the `is_ai_turn` variable to keep track of whose turn it is next.

Now, when you run the game, you'll be playing against the AI opponent. The AI will try to win or block your winning move, or choose a random available cell if neither of those conditions is met.

Note that this is a simple AI implementation, and more advanced algorithms can be used to improve the AI's decision-making process.

---

### This worked fine! Now for a webpage version, see readme 4