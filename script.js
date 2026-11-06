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

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("You must call this constructor with new word");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead === true ? "is read" : " not read yet"}`;
  };
}

const player1 = new Player("steve", "x");
const player2 = new Player("also steven", "o");

player1.sayName();
player2.sayName();

const hobbitBook = new Book("The Hobbit", "J.R.R. Tolkien", 255, true);
console.log(hobbitBook.isRead);
console.log(hobbitBook.info());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const mike = new Person("Mike", 29);
const ike = new Person("Ike", 32);

Player.prototype.sayWhatup = function () {
  console.log("whats up");
};
