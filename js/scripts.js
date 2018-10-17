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

    var inputadd1 = parseInt($("#number1Add").val());
    var inputadd2 = parseInt($("#number2Add").val());

var finalsum = add(inputadd1, inputadd2);

$("#addSum").text(finalsum);
  });
$(".subtract").submit(function(event){
  event.preventDefault();
  var subtract1 = parseInt($("#subtract1").val());
  var subtract2 = parseInt($("#subtract2").val());
  var finalsub = subtract(subtract1, subtract2);
  $("#subsum").text(finalsub);
});
$(".multiply").submit(function(event){
  event.preventDefault();
var multiply1 = parseInt($("#multiply1").val());
var multiply2 = parseInt($("#multiply2").val());
var finalans = multiply(multiply1, multiply2);
$("#mult").text(finalans)
});




});
