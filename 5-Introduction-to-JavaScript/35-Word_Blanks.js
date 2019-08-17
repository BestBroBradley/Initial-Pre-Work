// I got more practice using concatenation to combine strings.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line

    result+= "It really was an obscenely "+myAdjective+" weasel.  Much more in line with a "+myNoun+". It also "+myVerb+" disturbingly "+myAdverb+".";

    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("cat", "little", "hit", "slowly");
