// numRows =>
// [
// [1],
// [1,1],
// [1,2,1]
// ]

function generatePascal(numRows) {
  let result = [];
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  // This is for the case of provided input
  // logic necessary in for loop still!
  for (let y = 1; y <= numRows; y++) {
    let level = [];
    for (let x = 0; x < y; x++) {
      if (x === 0) {
	level.push(1);
      } else if (x === y - 1) {
	level.push(1);
      } else {
	level.push(result[y-2][x-1] + result[y-2][x]);
      }
    }
    result.push(level);
    console.log("pushed level", y);
    console.table(result);
  }
  return result;
}

console.log(generatePascal(3));
