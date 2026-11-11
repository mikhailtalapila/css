function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use new operator to call this");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("mike", "x");
const player2 = new Player("steve", "o");
player1.sayName();
player2.sayName();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author} with ${this.pages} pages is ${read ? "read" : "not read"}`;
  };
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
console.log(theHobbit.info());

console.log(Object.getPrototypeOf(player1));

console.log(Player.prototype);

console.log(Object.getPrototypeOf(player2) === Player.prototype);

Player.prototype.sayHi = function () {
  console.log(`${this.name} says Hi`);
};

player1.sayHi();
player2.sayHi();
