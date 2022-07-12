function binarySearch(arr,target) {
  let stepNum = 0;
  let left = 0; // start at first
  let right = arr.length - 1; // start at end
  // If left pointer ever passes right pointer, then we have determined
  // that the target value does not exist in the array.
  while (left <= right) { 
    // Greatest integer less than or equal to average of left and right.
    stepNum++;
    console.log(JSON.stringify(arr.slice(left,right+1)),
		`s = ${stepNum},`,
		`effective length: ${arr.slice(left,right+1).length}`);
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) {
      // If value of array in current middle is smaller than target,
      // We want to disregard all elements smaller than it.
      left = middle + 1;
    } 
    else if (arr[middle] > target) {
      // If value of array in current middle is larger than target,
      // we want to disregard all elements larger than it.
      right = middle - 1; 
    }
    else {
      // Only thing possible is we found it!
      console.log(`Theoretical: ${Math.ceil(Math.log(arr.length))}`);
      return middle;
    }
  }
  return -1; // <--- Typical to indicate failure.
}
// Since middle effectively cuts the array in half at each step,
// This is similar to divide and conquer; maybe we should simply call
// it "conquer";

// So why is it that cutting array in half at each stage implies O(log(n))?
// Notice that at each step, we make only one comparison.
// So the time complexity is actually O(s) where s is the number
// of steps.

// Well, how can we calculate the number s? We know that we have our solution
// When the array has EXACTLY 3 or 1 element. 1 element is WORST CASE.

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

console.log(binarySearch(arr1,9));
console.log(binarySearch(arr2,9));

// So the question becomes, how many times do I have to divide by 2 in order
// to reduce the array down to 1 element?
// Solve n/(2**s) = 1; <--- trivial algebra with logarithms
