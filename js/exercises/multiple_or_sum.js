//06. Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

var yourChoice = prompt("Hey user, what's your favorite number?");

function multiSum(num) {
  var finalValue = 1;
  if(isNaN(num)){
    alert("That's not a correct number. Sorry, I need you to reload the page.");
  } else {
    var sumOrMultiply = prompt("Now, what do you prefer, a SUM or a MULTIPLICATION");
    if(sumOrMultiply == "SUM" || sumOrMultiply == "sum"){
      finalValue = 0;
      for(var i = 1; i <= num; i++){
        finalValue += i;
      }
      document.write(finalValue);
    } else if(sumOrMultiply == "MULTIPLICATION" || sumOrMultiply == "multiplication"){
      for(var j = 1; j<= num; j++){
        finalValue *= j;
      }
      document.write(finalValue);
    } else {
      alert("Ouch! Reload the page and start from the begining. I ment SUM or MULTIPLICATION");
    }
  }
}

multiSum(yourChoice);
