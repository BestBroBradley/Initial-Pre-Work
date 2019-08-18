// I learned that you can add a second number after a string in parseInt to indicate which base the string is in (ex: binary)

function convertToInteger(str) {
return parseInt(str, 2);
}

convertToInteger("10011");
