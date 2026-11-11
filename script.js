function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

Player.prototype.sayHello = function () {
  console.log("hello , i'm a player");
};

const player1 = new Player("Mike", "x");
console.log(player1.name);

player1.sayHello();

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const audi = new Car("Audi", "S3");
Car.prototype.drive = function () {
  console.log("zoom - zoom");
};

audi.drive();
