function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use new operator to call this constructor");
  }
  this.name = name;
  this.marker = marker;

  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = Player("steve", "x");
const player2 = new Player("also steven", "o");

player1.sayName();
player2.sayName();
