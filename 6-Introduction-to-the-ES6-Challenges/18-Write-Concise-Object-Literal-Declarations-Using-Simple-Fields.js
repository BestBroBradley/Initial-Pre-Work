// I eanred that you can use shorthand to write a function when the objects in that function are their own value.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  ({ name, age, gender });
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
