const layout = document.querySelector(".layout");
const button = document.querySelector("button");

let currentPlayer = "X";
let gameActive = true;

// board state (9 boxes)
let board = ["", "", "", "", "", "", "", "", ""];

// click event on layout
layout.addEventListener("click", (e) => {
    if (!gameActive) return;

    const rect = layout.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / (rect.width / 3));
    const row = Math.floor(y / (rect.height / 3));

    const index = row * 3 + col;

    if (board[index] !== "") return;

    board[index] = currentPlayer;

    drawMark(index);

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
});

// draw X or O
function drawMark(index) {
    const cellSize = layout.clientWidth / 3;

    const row = Math.floor(index / 3);
    const col = index % 3;

    const mark = document.createElement("div");
    mark.textContent = currentPlayer;

    mark.style.position = "absolute";
    mark.style.fontSize = "50px";
    mark.style.fontWeight = "bold";
    mark.style.left = col * cellSize + cellSize / 2 - 15 + "px";
    mark.style.top = row * cellSize + cellSize / 2 - 30 + "px";

    layout.appendChild(mark);
}

// check winner
function checkWinner() {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(board[a] + " Wins!");
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        alert("Draw!");
        gameActive = false;
    }
}

// restart button
button.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";

    // remove all marks
    const marks = layout.querySelectorAll("div:not(#hl1):not(#hl2):not(#vl1):not(#vl2)");
    marks.forEach(m => m.remove());
});