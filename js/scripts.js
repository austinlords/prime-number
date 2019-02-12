//back-end logic

var allNumbers = [];
var primeNumbers = [2];
var userNumber;

var findPrime = function(number) {

}

//front-end logic
$(function() {
  $("#primeNumbersFinder").submit(function(event) {
    event.preventDefault();
    userNumber = parseInt($("#userNumberInput").val());
    if (userNumber < 2) {
      $("#primeNumbers").append("<p>Please enter a positive integer than 1</p>");
      $("#primeNumbers").show();
    } else if (userNumber >= 2) {
      var i;
      for (i = 2; i <= userNumber; ++i) {
        allNumbers.push(i);
      }
    }; //end else if statement
    console.log(allNumbers);
  }); //end of submit function
}); //end of front-end logic
