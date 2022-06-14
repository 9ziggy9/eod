// Do we need an if in rotate()?
// Can we coerce num into always being > 0?

let test = ['a','b','c','d','e'];

let rotateRight = (arr, num) => {
  let rotated = arr.slice();
  let removed = rotated.splice(-num, num < 0 ? Math.abs(num - arr.length) : num);
  return removed.concat(rotated);
};

console.log(rotateRight(test, 3));
// [c,d,e,a,b];
// [a,b,c,d,e]
// R: [c,d,e,a,b]
// L: [d,e,a,b,c]
