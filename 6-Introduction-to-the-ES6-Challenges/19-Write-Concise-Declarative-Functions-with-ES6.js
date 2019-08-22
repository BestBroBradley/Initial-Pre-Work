// I learned that you can remove the function keyword in certain functions in ES6.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  ({ name, age, gender });
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
