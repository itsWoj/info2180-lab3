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
});

