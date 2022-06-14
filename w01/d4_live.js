// EOD D4

let subarr1 = [1,2,3];
let subarr2 = [4,5,6];
let subarr3 = [7,8,9];

let arr = [subarr1, subarr2, subarr3];

for (let row = 0; row < arr.length; row++) {
  for (let col = 0; col < arr[0].length; col++) {
    console.log(arr[row][col]);
  }
}

// GIVEN A MATRIX; give me the largest value
// in said matrix.
matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]];
// 72

// max: "traversing"; is value we are looking at
// bigger than the one we store.

function maxInMatrix(matrix) {
  let max = matrix[0][0]; // initialized our variable
  for (let row = 0; row < matrix.length; row++) {
    let subarr = matrix[row];
    for (let col = 0; col < subarr.length; col++) {
      if (subarr[col] < max) max = subarr[col];
    }
  }
  return max;
}

console.log(maxInMatrix(matrix));
