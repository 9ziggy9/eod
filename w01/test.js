let letters = ['a','b','c','d','e'];

let rotateRight = function(arr,num) {
  if (num < 1) {
    return arr;
  }
  arr = arr.slice();
  let position = arr.length - num;
  let cutArr = arr.splice(position);
  let newArray = cutArr.concat(arr);
  return newArray;
};

let myArr = rotateRight(letters, 2);
console.log(letters);
console.log(myArr);
