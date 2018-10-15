//Option 1 - works any time you call result
var fahrenheit = parseInt(prompt("enter a tempature in degrees Fahrenheit"));

var calculate = function(fahrenheitP) {
return fahrenheit * 1.8 + 32;
}

var result = calculate(fahrenheit);

alert(result);

//option 2 - one time only
/* var fahrenheit = parseInt(prompt("enter a tempature in degrees Fahrenheit"));

var calculate = function(fahrenheitP) {
alert(fahrenheit * 1.8 + 32);
}

calculate(fahrenheit);
 */
