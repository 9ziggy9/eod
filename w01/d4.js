// 2D arrays

// let subarr1 = [1,2,3];
// let subarr2 = [4,5,6];
// let subarr3 = [7,8,9];

// let arr = [subarr1, subarr2, subarr3];

// for (let y = 0; y < arr.length; y++) console.log(arr[y]);
// for (let x = 0; x < arr[0].length; x++) console.log(arr[0][x]);
// for (let x = 0; x < arr[1].length; x++) console.log(arr[1][x]);
// for (let x = 0; x < arr[2].length; x++) console.log(arr[2][x]);

// for (let y = 0; y < arr.length; y++) {
//   for (let x = 0; x < arr[y].length; x++) {
//     console.log(arr[y][x]);
//   }
// }

matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]];

// What is the largest value in the matrix? (2D array). AKA the max.

// STRATEGY: as we "traverse" the matrix, store the largest value!
// i.e., if we find a value which is bigger than our stored one,
// reassign that variable!

function maxInMatrix(matrix) {
  // let max = -Infinity; // ALL NUMBERS ARE BIGGER THAN NEGATIVE INFINITY!
  // I only don't like this because you need to know what  - infinity is.
  let max = matrix[0][0];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] > max) max = matrix[y][x];
    }
  }
  return max;
}

function maxInColumns(matrix) {
  let maxs = [];
  for (let x = 0; x < matrix[0].length; x++) {
    let colMax = matrix[0][x];
    for (let y = 1; y < matrix.length; y++) {
      if (matrix[y][x] > colMax) colMax = matrix[y][x];
    }
    maxs.push(colMax);
  }
  return maxs;
}

console.log(maxInMatrix(matrix));
console.log(maxInColumns(matrix));
