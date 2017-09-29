
//01. Count the elements on an array
function count(list){
  if (!("0" in list)) {
    return 0;
  }
  return 1 + count(list.slice(0, -1));
}
console.log(count([1, 3, 5, 7, 11]))
