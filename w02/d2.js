// Polya's Problem Solving Framework
// 1. Understand the problem.
// What are you being asked to do? Do you have all the info
// that you need? Constraints or edge cases?

// 2. Make a plan.
// Break the problem down into steps or smaller problems,
// look for patterns, work backwards if needed or test,
// expected inputs/outputes. Write pseudocode.

// 3. Carry out the plan
// Write your code based off of your plan / pseudocod

// 4. Look back and improve your solution.
// Review what you wrote, test the code, refactor.

function isPrime(number) {
  if (number < 2) return false; // by convention 1, is not prime
  let i = 2;
  while (i < number) if (number % i++ === 0) return false;
  return true;
}

// input [3, 6, 7, 9, 11]
function choosePrimes(arr) {
  let primes = []; // talk about const?
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) prime.push(arr[i]);
  }
  return primes;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function generatePrime(min, max) {
  // just let myPrime; no work. :)
  let myPrime = -1;
  while (!isPrime(myPrime)) {
    myPrime = randomInteger(min,max);
  }
  console.assert(isPrime(myPrime), "why no prime?");
  return myPrime;
}

function generatePrimeArr(min, max) {
  let primes = [];
  for (let i = min; i <= max; i++) {
    primes.push(generatePrime(min, max));
  }
  return primes;
}

let generatedPrimes = generatePrimeArr(1,100);
console.log(generatedPrimes);
