// I got practice using the "class" function in ES6 to write more concise "constructor functions" (functions which create a new item)

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
