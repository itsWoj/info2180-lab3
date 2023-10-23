document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    const statusMessage = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    squares.forEach(square => {
        square.classList.add("square");
    });

    
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    function handleCellClick(index) {
        if (gameBoard[index] === "" && gameActive) {
            gameBoard[index] = currentPlayer;
            squares[index].classList.add(currentPlayer);
            squares[index].innerText = currentPlayer;
            squares.forEach(square => square.classList.remove("hover"));

            if (checkWin()) {
                gameActive = false;
                statusMessage.innerText = `${currentPlayer} wins!`;
            } else if (gameBoard.every(cell => cell !== "")) {
                gameActive = false;
                statusMessage.innerText = "It's a draw!";
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                statusMessage.innerText = `It's ${currentPlayer}'s turn.`;
            }
        }
    }

    squares.forEach((square, index) => {
        square.addEventListener("click", () => handleCellClick(index));
        square.addEventListener("mouseover", () => handleCellHover(index));
        square.addEventListener("mouseleave", () => handleCellLeave(index));
    });

    
    function handleCellHover(index) {
        if (gameBoard[index] === "" && gameActive) {
            squares[index].classList.add("hover");
        }
    }
    
    function handleCellLeave(index) {
        if (gameBoard[index] === "" && gameActive) {
            squares[index].classList.remove("hover");
        }
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }


    function handleNewGameClick() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        currentPlayer = "X";
        statusMessage.innerText = "Move your mouse over a square and click to play an X or an O.";

        squares.forEach(square => {
            square.classList.remove("X", "O");
            square.innerText = "";
        });
    }

    newGameButton.addEventListener("click", handleNewGameClick);
});

