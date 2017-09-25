//BINARY SEARCH

var array = [3,7,9,12,15,21,25,29,33,47,57,59,70,73,81];

function binary_search(item){
  var low = 0;
  var high = array.length-1;
  while (low <= high){
    var mid = Math.floor((low + high) / 2);
    var guess = array[mid];
    if (guess == item){
      return item;
    } else if (guess > item){
      high = mid -1;
    } else {
      low = mid + 1;
      }
   }
}

binary_search(81);
