I received an error, so sought further input: 

    I receive an error NameError: name 'board' is not defined

### output

Apologies for the oversight. It seems that the `board` variable is not defined within the scope of the `get_player_move` function. Here's the updated code with the necessary change:

```python
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

def play_game():
    """Play the Tic Tac Toe game."""
    board = initialize_board()
    current_player = 'X'

    while True:
        display_board(board)
        row, col = get_player_move(current_player, board)
        make_move(board, row, col, current_player)

        if check_winner(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break
        elif check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        current_player = 'O' if current_player == 'X' else 'X'

if __name__ == "__main__":
    play_game()
```

The only change made is in the `get_player_move` function, where we added `board` as a parameter:

```python
def get_player_move(player, board):
    """Get the next move from the player."""
    ...
```

And in the `play_game` function, we pass the `board` as an argument to `get_player_move`:

```python
row, col = get_player_move(current_player, board)
```

Now the `board` variable should be available within the `get_player_move` function, and the error should be resolved.

---

### this is working, now to add an AI opponent, see v3