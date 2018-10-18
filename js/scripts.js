var add = function(number1, number2){
return number1 + number2;
};

var multiply = function(number1, number2){
return number1 * number2;
};


var subtract = function(number1, number2){
return number1 - number2;
};


var divide = function(number1, number2){
return number1 / number2;
};



$(document).ready(function() {
  $(".add").submit(function(event) {
    event.preventDefault();
    var numberOne = parseInt($("input#inputOne").val());
    var numberTwo = parseInt($("input#inputTwo").val());
    var operation = $("input:radio[name=operation]:checked").val();
    var result;

    if (operation === "add") {
      result = add(numberOne, numberTwo);
    } else if (operation === "subtract") {
      result = subtract(numberOne, numberTwo);
    } else if (operation === "multiply") {
      result = multiply(numberOne, numberTwo);
    } else if (opoeration === divide) {
      result = divide(numberOne, numberTwo);
    }
    
    $("#output").text(result);
  });
});
