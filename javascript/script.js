const startButton = document.getElementById("btnStart");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    this.nextLevel();
  }

  /*
    The bind method is used because we want 'this' to still be the object
    game we created in startGame.
    If we don't use bind(), the 'this' in the function chooseColor() is 
    actually the 'div' element in the HTML
  
  */
  initialize() {
    this.chooseColor = this.chooseColor.bind(this);
    startButton.classList.add("hide");
    this.level = 1;
    this.colors = {
      blue: blueButton,
      red: redButton,
      yellow: yellowButton,
      green: greenButton,
    };
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.turnOnSequence();
    this.addClickEvents();
  }

  convertNameToColor(number) {
    switch (number) {
      case 0:
        return "blue";
      case 1:
        return "red";
      case 2:
        return "yellow";
      case 3:
        return "green";
    }
  }

  turnOnSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.convertNameToColor(this.sequence[i]);
      setTimeout(() => this.turnOnColor(color), 1000 * i);
    }
  }

  turnOnColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.turnOffColor(color), 350);
  }

  turnOffColor(color) {
    this.colors[color].classList.remove("light");
  }

  addClickEvents() {
    this.colors.blue.addEventListener("click", this.chooseColor);
    this.colors.red.addEventListener("click", this.chooseColor);
    this.colors.yellow.addEventListener("click", this.chooseColor);
    this.colors.green.addEventListener("click", this.chooseColor);
  }

  chooseColor(ev) {
    console.log(this);
  }
}

startButton.onclick = startGame;

function startGame() {
  //alert("The game is starting");
  window.game = new Game();
}
