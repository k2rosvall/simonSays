const startButton = document.getElementById("btnStart");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
  }

  initialize() {
    startButton.classList.add("hide");
    this.level = 1;
    this.colors = {
        blue : blueButton,
        red : redButton,
        yellow : yellowButton,
        green: greenButton,
    }
  }

  generateSequence() {
    this.sequence = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4));
  }
}

startButton.onclick = startGame;

function startGame() {
  //alert("The game is starting");
  window.game = new Game();
}
