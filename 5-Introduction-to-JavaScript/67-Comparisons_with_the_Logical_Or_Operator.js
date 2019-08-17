// I learned that you can use || to return true if either statement is true.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20){
    return "Outside"
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
