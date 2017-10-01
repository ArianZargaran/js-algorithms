//04. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

var yourChoice = prompt("Hey user, what's your favorite number?");

function favNum(num){
  if(isNaN(num)){
    alert("That's not a number. Reload the page and try again");
  } else {
  var sum = 0;
  for(var i = 1; i <= num; i++){
    sum += i;
    }
    document.write(sum);
    return sum;
   }
}

favNum(yourChoice);
