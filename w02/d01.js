function getAverage(nums) {
    // Your code here
  	let sum = 0;
  	
  	for (let i = 0; i < nums.length; i++) {
    	num = nums[i];
      	sum += num
    }
  	average = sum / nums.length;
  	return average;
};



function highestAverage(numsList) {
    // Your code here
  	let highestAve = getAverage(numsList[0]);
  	let index = 0;
  	for (let i = 0; i < numsList.length; i++) {
    	average = getAverage(numsList[i]);
      	if (average > highestAve) {
        	highestAve = average;
          	index = i;
        }
    }
  	return index;
}




// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

let score = 0;

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestAverage([arrayA, arrayB]) === 0) score++;
if (highestAverage([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
