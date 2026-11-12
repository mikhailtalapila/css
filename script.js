let head = {
  glasses: 1,
};
let table = {
  __proto__: head,
  pen: 3,
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};
let pockets = {
  __proto__: bed,
  money: 2000,
};

console.log(pockets.pen);
console.log(bed.glasses);
console.log(pockets);
