// I learned that you can use .hasOwnProperty to check whether a property exists in a given object

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true)
  return myObj[checkProp];
  else if (myObj.hasOwnProperty(checkProp) == false)
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
