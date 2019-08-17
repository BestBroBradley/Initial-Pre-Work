// I learned that you can also use === to compare two elements, but in order for it to be true the elements must be the same data type.

// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
