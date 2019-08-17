// I learned that when you don't have a return statement, the returned value will be undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5
}


// Only change code above this line
var returnedValue = addFive(5);
