let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps);
delete rabbit.jumps;
alert(rabbit.jumps);
delete animal.jumps;
alert(animal.jumps);
