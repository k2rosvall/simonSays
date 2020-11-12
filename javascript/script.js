const startButton = document.getElementById("btnStart");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");
const LAST_LEVEL = 3;

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    setTimeout(this.nextLevel(), 500);
  }

  /*
    The bind method is used because we want 'this' to still be the object
    game we created in startGame.
    If we don't use bind(), the 'this' in the function chooseColor() is 
    actually the 'div' element in the HTML

    If we don't use bind(), the 'this' in the function nextLevel() is
    actually the window, because setTimeout() is the one calling nextLevel
  
  */
  initialize() {
    this.nextLevel = this.nextLevel.bind(this);
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
    this.sequence = new Array(LAST_LEVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.subLevel = 0;
    this.turnOnSequence();
    this.addClickEvents();
  }

  convertNumberToColor(number) {
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

  convertColorToNumber(color) {
    switch (color) {
      case "blue":
        return 0;
      case "red":
        return 1;
      case "yellow":
        return 2;
      case "green":
        return 3;
    }
  }

  turnOnSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.convertNumberToColor(this.sequence[i]);
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

  removeClickEvents() {
    this.colors.blue.removeEventListener("click", this.chooseColor);
    this.colors.red.removeEventListener("click", this.chooseColor);
    this.colors.yellow.removeEventListener("click", this.chooseColor);
    this.colors.green.removeEventListener("click", this.chooseColor);
  }
  chooseColor(ev) {
    const nameColor = ev.target.dataset.color;
    const numberColor = this.convertColorToNumber(nameColor);
    this.turnOnColor(nameColor);
    if (numberColor === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.removeClickEvents();
        if (this.level === LAST_LEVEL + 1) {
          //win
        } else {
          setTimeout(this.nextLevel, 1500);
        }
      }
    } else {
      //lost
    }
  }
}

startButton.onclick = startGame;

function startGame() {
  //alert("The game is starting");
  window.game = new Game();
}
