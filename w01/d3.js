// ROTATE RIGHT

// 1. [a,b,c,d,e] => [e,a,b,c,d]
// but that's not all, if we call rotateRight(2);
// [a,b,c,d,e] => [d,e,a,b,c]
// [a,b,c,d,e] => [e,a,b,c,d] => [d,e,a,b,c]

// 2. We need to remove the last element and add it to the front.
// - .pop()
// - .unshift()
// - If we can implement just rotating right once, we can then implement
//   rotating right an arbitrary number of times.
// - We only need to apply iteration; i.e. a while/for.

// 3. Let's implement the single case first, then use it as a helper fn
//    to the general case.

let letters = ['a', 'b', 'c', 'd', 'e'];
let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];

function rotateRightOnce(arr) {
  let lastElement = arr.pop();
  arr.unshift(lastElement);
} // This function mutates state, so we do not need to return a value.

// rotateRightOnce(letters); works! So let's implement the
// more general case.

function rotateRight(arr, num) {
  num = Math.abs(num); // bad idea
  while (num) {
    rotateRightOnce(arr);
    num--;
  }
}

// What about rotate left?
function rotateLeftOnce(arr) {
  let lastElement = arr.shift();
  arr.push(lastElement);
}

function rotateLeft(arr, num) {
  if (num < 1) return;
  while (num) {
    rotateLeftOnce(arr);
    num--;
  }
}

// MOST GENERAL CASE
function rotate(arr,num,direction) {
  switch (direction) {
  case "right":
    rotateRight(arr,num);
    break;
  case "left":
    rotateLeft(arr,num);
    break;
  default:
    console.error("I dunno what way!");
    break;
  }
}

// GREAT! But we are mutating the array... We are causing
// "side-effects" on the data structure we are given.
// How can we do this immutably? Let's have a look at some
// documentation per our hint ...

function imRotateRight(arr,num) {
  let newArr = arr.slice(0, arr.length); // IDIOMATIC! :)
  rotateRight(newArr, num);
  return newArr;
}

function imRotate(arr,num,direction) {
  let newArr = arr.slice(0, arr.length); // IDIOMATIC! :)
  switch (direction) {
  case "right":
    rotateRight(newArr,num);
    return newArr;
  case "left":
    rotateLeft(newArr,num);
    return newArr;
  default:
    console.error("I dunno what way!");
    return null;
  }
}

let myArr = imRotate(animals,2,"right");

// WAY IN THE FUTURE (recursion, absolutely zero side-effects)
// this would be a purely "functional" approach

let funRotateRight = (arr, num) => {
  if (num <= 0) return arr;
  return funRotateRight([arr[arr.length-1], ...arr.slice(0,arr.length-1)], num-1);
};

let functionalArray = funRotateRight(letters,1);
console.log(functionalArray);
