//Fibonacci

var userNum = prompt("Hey user, what's your favorite number?");

function fibonacci(input){
  var firstNum = 1;
  var secondNum = 1;
  var temp = 0;
  var arr = [];
  for(var i = 0; temp <= input; i++){
    firstNum = secondNum;
    secondNum = temp;
    arr.push(temp);
    temp = firstNum + secondNum;
    }
  document.write(arr);
  return arr;
}

fibonacci(userNum);
