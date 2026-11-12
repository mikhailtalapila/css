function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero("Oliver", 2);

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

Warrior.prototype.attack = function () {
  return `${this.name} attacks with his ${this.weapon}`;
};

Healer.prototype.heal = function () {
  return `${this.name} heals with his ${this.spell}`;
};

let healer1 = new Healer("Dr Jon", 1, "Abracadabra");
let warrior1 = new Warrior("Fighter", 3, "sword");
