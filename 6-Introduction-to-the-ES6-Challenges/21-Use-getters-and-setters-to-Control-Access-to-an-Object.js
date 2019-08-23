// I learned that you can use "get" and "set" functions to extract values from objects and to set values to objects.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor (Fahrenheit) {
      this.Fahrenheit = Fahrenheit;
    }
    get temperature (){
      return 5/9 * (this.Fahrenheit - 32);
    }
    set temperature (celcius){
      this.Fahrenheit = celcius * 9.0 / 5 + 32;
    }
  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
