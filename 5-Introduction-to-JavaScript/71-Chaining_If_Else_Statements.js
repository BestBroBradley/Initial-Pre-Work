// I learned that you can use any number of "else if" statements

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num < 20) {
    return "Large";
  }
  else if (num >= 20) {
    return "Huge";
  }

  // Only change code above this line
}

// Change this value to test
testSize(7);
