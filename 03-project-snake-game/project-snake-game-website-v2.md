# Posting it to the web

I published the code to the web using [Netlify](https://snake-game-built-by-prompt-engineer.netlify.app/), however, this identified a few areas to improve, first the screen size is too small (at 400x400 but I manually corrected this to 800X600) and the speed is difficult to control in the webpage.

```prompt
reproduce the code for the webpage version but with a reduced speed
```

# Output:

Sure, here's the updated code for the HTML5/JavaScript version of the snake game with a reduced speed:

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="game-container">
        <canvas id="game-canvas"></canvas>
        <div id="score-container">Score: <span id="score">0</span></div>
    </div>
    <script src="game.js"></script>
</body>
</html>
```

**CSS (styles.css):**

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #333;
    font-family: Arial, sans-serif;
    color: #fff;
}

#game-container {
    text-align: center;
}

#game-canvas {
    border: 1px solid #fff;
    background-color: #000;
}

#score-container {
    margin-top: 10px;
    font-size: 18px;
}
```

**JavaScript (game.js):**

```javascript
// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Define game variables
let snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 }
];
let food = { x: 100, y: 100 };
let direction = 'right';
let score = 0;

// Draw the game elements
function drawGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 10, 10);
    });

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 10, 10);
}

// Update the game state
function updateGame() {
    // Move the snake
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case 'up':
            head.y -= 10;
            break;
        case 'down':
            head.y += 10;
            break;
        case 'left':
            head.x -= 10;
            break;
        case 'right':
            head.x += 10;
            break;
    }
    snake.unshift(head);

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('score').textContent = score;
        food = { x: Math.floor(Math.random() * 39) * 10, y: Math.floor(Math.random() * 39) * 10 };
    } else {
        snake.pop();
    }

    // Check for collisions
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        alert(`Game Over! Your score: ${score}`);
        location.reload();
    }
}

// Handle keyboard input
document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (key === 'arrowup' && direction !== 'down') {
        direction = 'up';
    } else if (key === 'arrowdown' && direction !== 'up') {
        direction = 'down';
    } else if (key === 'arrowleft' && direction !== 'right') {
        direction = 'left';
    } else if (key === 'arrowright' && direction !== 'left') {
        direction = 'right';
    }
});

// Game loop
let lastFrameTime = 0;
const frameDelay = 150; // Adjust this value to control the snake's speed (higher value = slower speed)

function gameLoop(currentTime) {
    const timeSinceLastFrame = currentTime - lastFrameTime;

    if (timeSinceLastFrame >= frameDelay) {
        lastFrameTime = currentTime;
        drawGame();
        updateGame();
    }

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
```

In this updated code, the `frameDelay` constant is set to `150` milliseconds, which results in a maximum frame rate of approximately 6.67 frames per second (FPS). This lower frame rate makes the snake move slower compared to the previous version.

You can adjust the `frameDelay` value to further increase or decrease the snake's speed. For example, setting `frameDelay` to `200` will make the snake move even slower (5 FPS), while setting it to `100` will make the snake move faster (10 FPS).

Feel free to experiment with different `frameDelay` values to find the desired speed for your snake game. Keep in mind that lower frame rates may affect the responsiveness and smoothness of the game's movement.

