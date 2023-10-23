document.addEventListener("DOMContentLoaded", function() 
{
    const squares = document.querySelectorAll("#board > div");
    const statusMessage = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    squares.forEach(square => {
        square.classList.add("square");
    })



    
}); 
    
