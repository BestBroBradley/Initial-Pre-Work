// I learned that you can add a default switch statement if no specified case exists.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
 switch(val){
   case "a":
    return "apple";
    break;
  case "b":
    return "bird";
    break;
  case "c":
    return "cat";
    break;
  default:
    return "stuff";
    break;
 }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
