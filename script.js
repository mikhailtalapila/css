function show() {
  "use strict";
  console.log(this === undefined);
  function display() {
    console.log(this === undefined);
  }
  display();
}
show();

let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

let bike = {
  brand: "Harley",
};

let brand = car.getBrand.bind(bike);
console.log(brand());

function Car(brand) {
  if (!new.target) {
    throw Error("must use the new operator to call the function");
  }
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

let merc = new Car("Merc");
console.log(merc.getBrand());

function getBrandName(prefix) {
  console.log(prefix + " " + this.brand);
}

let bmw = {
  brand: "bmw",
};
let audi = {
  brand: "audi",
};

getBrandName.call(bmw, "It's a ");
getBrandName.call(audi, "It's an ");

getBrandName.apply(bmw, ["it's a "]);
getBrandName.apply(audi, ["it's an "]);

let getThis = () => this;
console.log(getThis() === window);

function Kar() {
  this.speed = 120;
}

Kar.prototype.getSpeed = () => {
  return this.speed;
};

let c = new Kar();
console.log(c.getSpeed()); //this causes an issue as arrow function doesn't have it's own exec. context
