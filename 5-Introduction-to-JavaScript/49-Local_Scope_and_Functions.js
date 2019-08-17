// I demonstrated that a variable defined in a function block has no meaning outside of that block.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();
