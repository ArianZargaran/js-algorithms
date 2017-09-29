// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// 4. Write a JavaScript program to compute the sum of an array of integers

var arr = [1,2,3,4,5,6];
function sum(arr){
 if(arr.length - 1 === 0){
    return arr[0]
    }
    return arr.pop() + sum(arr)
}
console.log(sum(arr))
