//SELECTION SORT

var arr = [5,3,6,6,999,2,10];
var arraylength = arr.length;
function findSmallest(arr){
  var smallestIndex = 0;
  var smallestNum = arr[0];
  for(var i = 1; i <= arr.length ; i++){
    if(arr[i] < smallestNum){
     smallestIndex = i;
     smallestNum = arr[i];   
    }
  }
   arr.splice(smallestIndex,1);
   return smallestNum;
}

function selectionSort(arr){
  var newArr = [];
  for(var i = 0 ; i <= arraylength-1 ; i ++){
    var smallestNum = findSmallest(arr);
    newArr.push(smallestNum);
  }
  console.log(newArr);
  return newArr;
}

selectionSort(arr);
