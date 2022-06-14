/*
Write a function that takes in an array, a string representing the name of a method,
and three optional parameters. The function should be written to handle these methods:
* pop
    - Mutate the array by popping off the last element
    - Return the mutated array
* shift
    - Mutate the array by removing the 0th element in the array
    - Return the mutated array
* push 
    - Utilize the first optional parameter to specify something to be pushed into the array
    - After pushing into said array, return mutated array
* unshift
    - Utilize the first optional paramter to specify something to be unshifted into the array
    - After inserting something in as the new 0th element, return mutated array
* slice
    - Utilize the first and second optional parameters to specify a beginning and ending index
    - return the result of calling slice on the given array with the specified indices
    *** NOTE: this will return a new array and not mutate the original
* splice
    - Utilize all optional parameters to specify:
        - start index
        - how many things to remove
        - what to add in
    - Return the result of calling the splice operation with the supplied arguments
If an invalid method has been passed as an argument, return "INVALID METHOD"
*/

function dynamicMutator(arr, method, opt1, opt2, opt3) {
  if (method === "pop") {
    arr.pop();
  } else if (method === "shift") {
    arr.shift();
  } else if (method === "push") {
    arr.push(opt1);
  } else if (method === "unshift") {
    arr.unshift(opt1);
  } else if (method === "slice") {
    arr = arr.slice(opt1,opt2);
  } else if (method === "splice") {
    arr.splice(opt1,opt2,opt3);
  } else {
    return "INVALID METHOD";
  }
  return arr;
}

let array1 = [1,2,3,4];

console.log(dynamicMutator(array1, "pop")); // [1,2,3]
console.log(dynamicMutator(array1, "shift")); // [2,3]
console.log(dynamicMutator(array1, "push", 1)); // [2,3,1]
console.log(dynamicMutator(array1, "unshift", 4)); // [4,2,3,1]
console.log(dynamicMutator(array1, "slice", 1, 3)); // [2,3]
console.log(dynamicMutator(array1, "splice", 0, 4, "You've been spliced!"));
//["You've been spliced!"]
