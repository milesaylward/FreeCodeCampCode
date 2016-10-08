/*
You will be provided with an initial array 
(the first argument in the destroyer function),
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/



function destroyer(arr) {
  // Remove all the values
  var fullArr = arr.slice.call(arguments);
  fullArr.splice(0,1);
  var destroyedArr = arr.filter(function(element){
    return fullArr.indexOf(element) === -1;
  });
  return destroyedArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);