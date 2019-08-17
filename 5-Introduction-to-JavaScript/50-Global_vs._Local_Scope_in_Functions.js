// I learned that when there is a global variable and a local variable with the same name, the local definition will take precedence.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit(); 
