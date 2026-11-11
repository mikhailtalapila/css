function Person(name) {
  this.name = name;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Person.prototype.sayHello = function () {
  console.log(`Hello from ${this.name}`);
};

Player.prototype.getMarker = function () {
  console.log(`My marker is ${this.marker}`);
};
const player1 = new Player("mike", "x");
const player2 = new Player("steve", "o");
Object.setPrototypeOf(Player.prototype, Person.prototype);
