// I learned that you can use a similar method of deconstruction and object to deconstruct an array, which allows you to assign specific array elements to a variable

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
