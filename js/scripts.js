//back-end logic

function findPrime(number) {
  var numbers = [];
  for (i=2; i<number; i++) {
    numbers.push(i);
  }
  numbers.forEach(function(element1) {
    numbers.forEach(function(element2) {
      if (element2 > element1 && element2 % element1 === 0) {
        i = numbers.indexOf(element2);
        numbers.splice(i,1);
      }
    })
  });
  return numbers
}

//front-end logic
$(function() {
  $("#primeForm").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userInput").val());
    var primeList = findPrime(userNumber);
    primeStr = primeList.join(', ');
    $("#primeNumbers").html(primeStr);
    $(".userNumber").html(userNumber);
    $(".hidden").show();
  }); 
});
