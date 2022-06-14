/*

  Write a function luckyNumbers(matrix) that takes in a
  2-dimensional array (matrix) and returns all lucky numbers
  in any order. A lucky number is the minimum element in its
  row and the maximum in its column.

*/
function findMinsInRow(matrix) {
  let minimums = [];
  for (let j = 0; j < matrix.length; j++) {
    let row = matrix[j];
    let rowMinimum = row[0];
    for (let i = 0; i < row.length; i++) {
      if (row[i] < rowMinimum) rowMinimum = row[i];
    }
    minimums.push(rowMinimum);
  }
  return minimums;
}

function findMaxsInCol(matrix) {
  let maximums = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let max = matrix[0][i];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > max) max = matrix[j][i];
    }
    maximums.push(max);
  }
  return maximums;
}

function luckyNumbers(matrix) {
  let luckyNumbers = [];
  let minsInRows = findMinsInRow(matrix);
  let maxInCols = findMaxsInCol(matrix);
  for (let i = 0; i < minsInRows.length; i++) {
    if (maxInCols.includes(minsInRows[i])) luckyNumbers.push(minsInRows[i]);
  }
  return luckyNumbers
}

// TEST CONDITIONS
matrix1 = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]];

console.log(luckyNumbers(matrix1)); // [12]

matrix2 = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]];

console.log(luckyNumbers(matrix2)); // [10]
