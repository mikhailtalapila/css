function Person(name) {
  this.name = name;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Person.prototype.sayName = function () {
  console.log(`hello my name is ${this.name}`);
};

Object.setPrototypeOf(Player.prototype, Person.prototype);

function Enemy(name) {
  this.name = name;
}

Enemy.prototype.sayName = function () {
  console.log(`hahahaha`);
};

Object.setPrototypeOf(Enemy.prototype, Person.prototype);

const carl = new Player("carl", "x");
carl.sayName();

const carlEnemy = new Enemy("CARL");
carlEnemy.sayName();
