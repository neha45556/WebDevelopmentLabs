var winningCombinations = [
    // Column Wins
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // Row Wins
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // Diagonal Wins
    [1, 5, 9],
    [3, 5, 7]
];


let possibleSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let illegalSquares = new Array();

let checkAiGame = false; 
let userStatus = true;
let gameOver = false;
let defaultPlayer = "X";  
// If userStatus is true place X
// If userStatus is false place Circle

let playerX = 0;
let playerY = 0;

let currentX = new Array();
let currentY = new Array();

document.getElementById("scoreX").innerHTML = "X: " + playerX;
document.getElementById("scoreY").innerHTML = "Y: " + playerY;
document.getElementById("currentPlayer").innerHTML = defaultPlayer;

var TicTacToeBox1 = document.getElementById('one');
var TicTacToeBox2 = document.getElementById('two');
var TicTacToeBox3 = document.getElementById('three');
var TicTacToeBox4 = document.getElementById('four');
var TicTacToeBox5 = document.getElementById('five');
var TicTacToeBox6 = document.getElementById('six');
var TicTacToeBox7 = document.getElementById('seven');
var TicTacToeBox8 = document.getElementById('eight');
var TicTacToeBox9 = document.getElementById('nine');

function randomMove() {
    for (var i = 0; i < possibleSquares.length; i++) {
        if (illegalSquares.includes(possibleSquares[i])) {
            possibleSquares.splice(i, 1);
        }
    }
    let aiMove = possibleSquares[Math.floor(Math.random()*possibleSquares.length)];
    return aiMove;
}

function toString(num) {
    if (num == 1) {
        return "one";
    }
    else if (num == 2) {
        return "two";
    }
    else if (num == 3) {
        return "three";
    }
    else if (num == 4) {
        return "four";
    }
    else if (num == 5) {
        return "five";
    }   
    else if (num == 6) {
        return "six";
    }
    else if (num == 7) {
        return "seven";
    }
    else if (num == 8) {
        return "eight";
    }
    else {
        return "nine";
    }
}
function placeX(location, id) {
    var element = document.getElementById(id);
    element.classList.add("markX");
    userStatus = false;
    document.getElementById("currentPlayer").innerHTML = "O";
    console.log(userStatus);
    currentX.push(location);
    illegalSquares.push(location);
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    illegalSquares.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
}

function placeCircle(location, id) {
    var element = document.getElementById(id);
    element.classList.add("markCircle");
    userStatus = true;
    document.getElementById("currentPlayer").innerHTML = "X";
    console.log(userStatus);
    currentY.push(location);
    illegalSquares.push(location);
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    illegalSquares.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
}
function aiGame() {
    if (illegalSquares.length == 0) {
        console.log("Set aiGame to true");
        checkAiGame = true; 
        console.log(checkAiGame);
    }
    else {
        console.log("Game in progress. Please restart or start a new game to play against AI.");
    }
 
}
TicTacToeBox1.addEventListener('click', e => {
    if (illegalSquares.includes(1)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(1, "one");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(1, "one");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }   
})

TicTacToeBox2.addEventListener('click', e => {
    if (illegalSquares.includes(2)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(2, "two");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(2, "two");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }   
})

TicTacToeBox3.addEventListener('click', e => {
    if (illegalSquares.includes(3)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(3, "three");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(3, "three");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})

TicTacToeBox4.addEventListener('click', e => {
    if (illegalSquares.includes(4)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(4, "four");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(4, "four");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})

TicTacToeBox5.addEventListener('click', e => {
    if (illegalSquares.includes(5)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(5, "five");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(5, "five");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})

TicTacToeBox6.addEventListener('click', e => {
    if (illegalSquares.includes(6)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(6, "six");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(6, "six");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})

TicTacToeBox7.addEventListener('click', e => {
    if (illegalSquares.includes(7)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(7, "seven");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(7, "seven");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})

TicTacToeBox8.addEventListener('click', e => {
    if (illegalSquares.includes(8)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(8, "eight");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(8, "eight");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})

TicTacToeBox9.addEventListener('click', e => {
    if (illegalSquares.includes(9)) {
        console.log("Illegal Square choose again.");
    }
    else {
        console.log("Place mark");
        if (userStatus) {
            placeX(9, "nine");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeCircle(move, id);
            }
        } else { 
            placeCircle(9, "nine");
            if (checkAiGame && !gameOver) {
                let move = randomMove();
                let id = toString(move);
                placeX(move, id);
            }
        }
    }
})


function newGame() {
    console.log("Clearing for a new board");
    
    TicTacToeBox1.classList.remove("markX");
    TicTacToeBox2.classList.remove("markX");
    TicTacToeBox3.classList.remove("markX");
    TicTacToeBox4.classList.remove("markX");
    TicTacToeBox5.classList.remove("markX");
    TicTacToeBox6.classList.remove("markX");
    TicTacToeBox7.classList.remove("markX");
    TicTacToeBox8.classList.remove("markX");
    TicTacToeBox9.classList.remove("markX");

    TicTacToeBox1.classList.remove("markCircle");
    TicTacToeBox2.classList.remove("markCircle");
    TicTacToeBox3.classList.remove("markCircle");
    TicTacToeBox4.classList.remove("markCircle");
    TicTacToeBox5.classList.remove("markCircle");
    TicTacToeBox6.classList.remove("markCircle");
    TicTacToeBox7.classList.remove("markCircle");
    TicTacToeBox8.classList.remove("markCircle");
    TicTacToeBox9.classList.remove("markCircle");

    currentX = [];
    currentY = [];
    illegalSquares= [];
    possibleSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    userStatus = true;
    checkAiGame = false; 
    gameOver = false;
    document.getElementById("currentPlayer").innerHTML = defaultPlayer;
}

function resetGame() {
    console.log("Resetting both players' scores");
    playerX = 0;
    playerY = 0;
    document.getElementById("scoreX").innerHTML = "X: " + playerX;
    document.getElementById("scoreY").innerHTML = "Y: " + playerY;
    console.log(playerX);
    console.log(playerY);
    newGame();
}

function isWinner() {
    console.log("Checking for winner");
    let movesMade = currentX.length + currentY.length;
    if (movesMade != 9) {
        checkSolution();
    }   else {
            checkSolution();
            console.log("Draw, starting new game.");
            newGame();
    }
   
}

function checkSolution() { 
    for (var i = 0; i < winningCombinations.length; i++) {
        console.log("Iterate through combinations!");
        if (checkArrayEqual(currentX, winningCombinations[i])) {
            console.log("Player X wins!");
            playerX++;
            document.getElementById("scoreX").innerHTML = "X: " + playerX;
            gameOver = true;
            newGame();
        } else if (checkArrayEqual(currentY, winningCombinations[i])) {
            console.log("Player O wins!");
            playerY++;
            document.getElementById("scoreY").innerHTML = "Y: " + playerY;
            gameOver = true;
            newGame();
        } 
    }    
}

function checkArrayEqual(playerMoves, winningCombination) {
    if (playerMoves === winningCombination) return true;
    if (playerMoves == null || winningCombination == null) return false;
    var numMatches = 0; 
    for (var i = 0; i < playerMoves.length; ++i) {
        for (var j = 0; j < winningCombination.length; ++j) {
            if (playerMoves[i] === winningCombination[j]) {
                numMatches++;
            }
        }
        if (numMatches == 3) {
            return true;
        }
    }
    return false;
}
