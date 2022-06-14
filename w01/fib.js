/*
  Write a function fibonacciSequence that accepts a number as
  an argument.
  The function should return an array representing the fibonacci
  sequence up to the given length. The first and second numbers
  of the sequence are 1 and 1. To generate subsequent numbers of
  the sequence, we take the sum of the previous two numbers of the
  sequence.
*/
// 0  1 
// 1, 1, 2, 3, 5, 8, etc...

function fibonacciSequence(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    if (i < 2) result.push(1);
    else result.push(result[i-1] + result[i-2]);
  }
  return result;
}

// TEST CONDITIONS
// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(0));  // [ ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]

/*
  Write a function fib that accepts a number n as an argument.
  The function should return the "n-th" number of the Fibonacci
  sequence.
  The first two numbers of the Fibonacci sequence are 1;
  to generate subsequent numbers of the Fibonacci sequence,
  we take the sum of the previous two numbers of the sequence.
 */

function nthFib(number) {
  let fibSeq = fibonacciSequence(number);
  return fibSeq[number-1];
}

function fib(number) {
  if (number <= 2) return 1;
  return fib(number - 1) + fib(number - 2);
}

// STACK FRAMES


// TEST CONDITIONS
console.log(fib(3));    // 2
