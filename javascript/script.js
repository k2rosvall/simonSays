
const startButton = document.getElementById("btnStart");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");

class Game {
    constructor(){
        this.initialize();
    }

    initialize() {
        startButton.classList.add("hide");
    }
}

startButton.onclick = startGame;

function startGame() {
    //alert("The game is starting");
    var game = new Game();
}

