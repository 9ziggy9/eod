/*
  Write a function `chainMap` that accepts a
  value and any number of callbacks as arguments. The function should return the final result of passing the value through all of the given callbacks. In other words, if three callbacks are given
  then:
  - the value is given to the first
  callback
  - the result of the first callback is
  given to the second callback
  - the result of the second callback is given to the third callback
  - the result of the third callback is the final result 
*/

function add5 (num) {
  return num + 5;
}

function squareNumber (num) {
  return num ** 2;
}

function flipSign(num) {
  return num *= -1;
}

let chainMap = (val, ...cb) => {
  for (let fn of cb) val = fn(val);
  return val;
};

console.log(chainMap(1,add5,squareNumber,flipSign));
