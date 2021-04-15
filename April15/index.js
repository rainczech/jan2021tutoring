//How to empty an array in JavaScript 
//there are multiple ways: 

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];


arrayList = [];
arrayList.splice(0, arrayList.length);
arrayList.length = 0

while(arrayList.length){
  arrayList.pop()
}

//push = adds to end of array
//pop = removes from end of array
//shift = adds to the front of the array
//unshift = removes from the front of the array
