//VARIABLES
let gameStart = document.querySelector('.g-start');
let start = document.getElementById('start');
let choosePlayer = document.querySelector('.choosePlayer');
let xplayer = document.getElementById('xPlayer');
let oPlayer = document.getElementById('oPlayer');
let gameContainer = document.querySelector('.g-container');
let gameRestart = document.querySelector('.g-restart');
let nPbtn = document.querySelector('.nextPrevious');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let boardCell = document.querySelectorAll('.cell');
let gameStatus = document.querySelector('.g-status');
let gameActive = false;
let currentPlayer = "";
let gameState = ["", "", "", "", "", "", "", "", ""];
let nextHistory = [];
let previousHistory = [];

const statusDisplay = document.querySelector('.g-status');
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//game start
start.addEventListener('click', () => {
    gameState = ["", "", "", "", "", "", "", "", ""];
    choosePlayer.style.display = 'flex';
    gameStart.style.display = 'none';
})

//Choose your player

oPlayer.addEventListener('click', () => {
    gameActive = true;
    currentPlayer = "O";
    choosePlayer.style.display = 'none';
    gameStatus.style.display = 'block';
    
    statusDisplay.innerHTML = currentPlayerTurn();
    gameContainer.style.display = 'grid';
    gameRestart.style.display = 'flex';
})

xPlayer.addEventListener('click', () => {
    gameActive = true;
    currentPlayer = "X";
    choosePlayer.style.display = 'none';
    gameStatus.style.display = 'block';

    statusDisplay.innerHTML = currentPlayerTurn();
    gameContainer.style.display = 'grid';
    gameRestart.style.display = 'flex';
})

// current player played cell
function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// change player
function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


//result validation function
function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            document.querySelector(`[data-cell-index="${winCondition[0]}"]`).style.color = 'green';
            document.querySelector(`[data-cell-index="${winCondition[1]}"]`).style.color = 'green';
            document.querySelector(`[data-cell-index="${winCondition[2]}"]`).style.color = 'green';
            break
        }
    }
    
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        nPbtn.style.display = 'flex';
        next.style.visibility = 'hidden';
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        nPbtn.style.display = 'flex';
        next.style.visibility = 'hidden';
        return;
    }
    

    playerChange();
}


//clicked cell function
function cellClick(clickedCellEvent) {
        
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    
    let gameMoves = {};
    gameMoves.cell = clickedCell;
    gameMoves.players = currentPlayer;
    nextHistory.push(gameMoves);

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}


//game restart
function restartGame() {
    gameActive = false;
    currentPlayer = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
    boardCell.forEach(cell => cell.innerHTML = "");
    boardCell.forEach(cell => cell.style.color = "black");
    gameStart.style.display = 'flex';
    gameContainer.style.display = 'none';
    gameStatus.style.display = 'none';
    gameRestart.style.display = 'none';
    nPbtn.style.display = 'none';
    nextHistory.length = 0;
    previousHistory.length = 0;
}

boardCell.forEach(cell => cell.addEventListener('click', cellClick));
gameRestart.addEventListener('click', restartGame);


//history button(next & previous)

//next button
next.addEventListener('click', () => {
    gameActive = false;
    if(previousHistory.length === 1){
        next.style.visibility = 'hidden';
        previous.style.visibility = 'visible';
    } 

    if(previousHistory.length != 0){
        previous.style.visibility = 'visible';
        let nextMove = previousHistory[previousHistory.length - 1];
        let nextCell = nextMove.cell;
        let nextPlayer = nextMove.players;
        nextCell.innerHTML = nextPlayer;
        nextHistory.push(nextMove);
        previousHistory.pop();
    }
})

//previous button
previous.addEventListener('click', () => {
    gameActive = false;
    if(nextHistory.length === 1){
        previous.style.visibility = 'hidden';
        next.style.visibility = 'visible';
    } 
    
    if(nextHistory.length != 0){
        next.style.visibility = 'visible';
        let lastMove = nextHistory[nextHistory.length - 1];
        let lastCell = lastMove.cell;
        lastCell.innerHTML = "";
        previousHistory.push(lastMove);
        nextHistory.pop();
    }
})

//mouse hover
gameContainer.addEventListener('mouseover', (e) => {
    if(currentPlayer === 'X' && e.target.innerHTML === "") {
        e.target.style.backgroundImage = 'url(./assets/x-player.png)';
    } 
    if(currentPlayer === 'O' && e.target.innerHTML === "") {
        e.target.style.backgroundImage = 'url(./assets/o-player.png)';
    }
    if(gameActive === false){
        e.target.style.backgroundImage = 'none';
    }
    

    setTimeout(function() {
        e.target.style.backgroundImage = "";
      }, 325);
}, false);
    