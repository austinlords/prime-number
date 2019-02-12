//back-end logic

var allNumbers = [];
var primeNumbers = [];
var userNumber;

var findPrime = function(number) {

}

//front-end logic
$(function() {
  $("#primeNumbersFinder").submit(function(event) {
    event.preventDefault();
    userNumber = parseInt($("#userNumberInput").val());
    var i;
    for (i = 2; i <= userNumber; ++i) {
      allNumbers.push(i);
    }
    allNumbers.forEach(function(number) {
      var smallestMultiple = number;
      allNumbers.forEach(function(number2) {
        console.log(number2/smallestMultiple);
        if ((number2%smallestMultiple) === 0) {
          allNumbers.splice(allNumbers.indexOf(number2 - 2), 1)
          console.log(allNumbers);
        } //else console.log("didn't work");
      });
    });
    $("#primeNumbers").html(allNumbers);
    $(".userNumber").html(userNumber);
    $(".hidden").show();
  }); //end of submit function
}); //end of front-end logic
