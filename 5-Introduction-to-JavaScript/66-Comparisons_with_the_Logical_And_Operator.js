// I learned that you can use && to return true only if two separate statments are true of your variable

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
