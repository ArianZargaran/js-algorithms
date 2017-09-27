//Take the biggest number from the array;

var arr = [10, 55, 22, 87, 14];
var biggest = arr[0];

for(var i = 0; i < arr.length-1; i++){
  if(biggest < arr[i]){
    biggest = arr[i];
  }
}
  console.log(biggest);
