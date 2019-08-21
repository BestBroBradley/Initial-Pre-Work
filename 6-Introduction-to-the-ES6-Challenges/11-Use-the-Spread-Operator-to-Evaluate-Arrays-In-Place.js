// I learned that you can use the spread operator (...) (note, looks same as rest op) to copy the contents of one array into another.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
