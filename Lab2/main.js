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

let userStatus = true;
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


TicTacToeBox1.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("one");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(1);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        currentPlayer = "X"
        console.log(userStatus);
        currentY.push(1);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
})

TicTacToeBox2.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("two");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(2);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(2);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner()
})

TicTacToeBox3.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("three");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(3);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(3);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner()
})

TicTacToeBox4.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("four");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(4);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(4);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
})

TicTacToeBox5.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("five");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(5);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(5);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
})

TicTacToeBox6.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("six");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(6);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(6);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
})

TicTacToeBox7.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("seven");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(7);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(7);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
})

TicTacToeBox8.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("eight");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(8);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(8);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
})

TicTacToeBox9.addEventListener('click', e => {
    console.log("Place mark");
    var element = document.getElementById("nine");
    if (userStatus) {
        element.classList.add("markX");
        userStatus = false;
        document.getElementById("currentPlayer").innerHTML = "O";
        console.log(userStatus);
        currentX.push(9);
    } else { 
        element.classList.add("markCircle");
        userStatus = true;
        document.getElementById("currentPlayer").innerHTML = "X";
        console.log(userStatus);
        currentY.push(9);
    }
    currentX.sort(function(a, b){return a - b});
    currentY.sort(function(a, b){return a - b});
    console.log(currentX);
    console.log(currentY);
    isWinner();
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
    userStatus = true;
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
    if (movesMade == 9) {
        console.log("Draw, starting new game.");
        newGame();
    } else {
        for (var i = 0; i < winningCombinations.length; i++) {
            console.log("Iterate through combinations!");
            if (checkArrayEqual(currentX, winningCombinations[i])) {
                console.log("Player X wins!");
                playerX++;
                document.getElementById("scoreX").innerHTML = "X: " + playerX;
                newGame();
            } else if (checkArrayEqual(currentY, winningCombinations[i])) {
                console.log("Player O wins!");
                playerY++;
                document.getElementById("scoreY").innerHTML = "Y: " + playerY;
                newGame();
            } 
        }    
    }
}

// const equalsIgnoreOrder = (a, b) => {
//     if (a.length !== b.length) return false;
//     const uniqueValues = new Set([...a, ...b]);
//     for (const v of uniqueValues) {
//         const aCount = a.filter(e => e === v).length;
//         const bCount = b.filter(e => e === v).length;
//         if (aCount !== bCount) return false;
//     }
//     return true;
// }
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
// function placeMark() {
//     console.log("hello");
//     var element = document.getElementById("one");
//     if (userStatus) {
//         element.classList.add("markX");
//         console.log("1");
//     } else { 
//         element.classList.add("markCircle");
//         console.log("2");
//     }
//     console.log("3");
// }
