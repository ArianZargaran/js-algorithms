
// 02. Build an array of prime numbers
var myChoice = 1800;  
function prime(p,n){
  if (n === 1 || n===2) return 1;
  if (p%(n-1) === 0) return 0;
  return (prime(p,(n-1)));
  }
function primeNums(myChoice){
var arr = [];
  for(var i = 0; i <= myChoice ; i++){
    if (prime(i,i)){
      arr.push(i);
    }
  }
     console.log(arr);
}
primeNums(myChoice);
