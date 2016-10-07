/*
Write a function that splits an array (first argument) into groups,
the length of size (second argument) and returns them as a two-dimensional array.
*/



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrayChunk = [];
  for(var i =0; i < arr.length; i+=size){
    var tempArr = arr.slice(i, i+size);
    arrayChunk.push(tempArr);
  }
  
  return arrayChunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
