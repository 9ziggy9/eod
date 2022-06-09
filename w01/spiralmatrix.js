let matrix1 = [[ 1, 2, 3],
               [ 4, 5, 6],
               [ 7, 8, 9]];

let matrix2 = [[1, 2, 3, 4],
               [5, 6, 7, 8],
               [9,10,11,12]];

function generateAccessible(matrix) {
  // First calculate the dimensions of our matrix and add 2
  // we add 2 because we need accessible on ALL 4 SIDES
  let Y = matrix.length + 2;
  let X = matrix[0].length + 2;

  // We now construct a 2D array of zeroes.
  // To do this I an going to use "Array construction"
  // This is a slightly OO topic, but easy to understand
  let accessible = new Array(Y);
  for (let y = 0; y < accessible.length; y++) {
    accessible[y] = new Array(X);
  }

  // to mark all elements as accessible, we use bools
  for (let y = 0; y < accessible.length; y++) {
    for (let x = 0; x < accessible[0].length; x++) {
      accessible[y][x] = true;
    }
  }

  // mark boundaries as "false"

  /*TOP*/ for (let x = 0; x < accessible[0].length; x++) accessible[0][x] = false;
  /*BOTTOM*/ for (let x = 0; x < accessible[0].length; x++) accessible[Y-1][x] = false;
  /*LEFT SIDE*/ for (let y = 0; y < accessible.length; y++) accessible[y][0] = false;
  /*RIGHT SIDE*/ for (let y = 0; y < accessible.length; y++) accessible[y][X-1] = false;

  return accessible;
}

let accessible1 = generateAccessible(matrix1);
let accessible2 = generateAccessible(matrix2);

// Let's do a little logging to test this guy.
console.table(accessible1);
console.table(accessible2);

// We now have a mechanism to tell us what cells are accessible!

// Our strategy will now be to turn "clockwise" anytime we encounter
// a cell which is inaccessible.

// The turn function will take our current direction, and give us our
// NEW direction. I will use the characters "L", "D", "R", "U" for
// this.
function turn(direction) {
  if (direction === 'L') return 'U';
  if (direction === 'U') return 'R';
  if (direction === 'R') return 'D';
  if (direction === 'D') return 'L';
  // Let's catch any meaningless input, just in case.
  return null;
}

// We need a "move" function which traverses the spiral.
// This function should take a position (x,y), a direction,
// and return a new position by moving in that direction
// while mutating the "state" of our accessible cells.

function move(x, y, direction, accessible) {
  accessible[y][x] = false; // mark where we're at as inaccessible!
  if (direction === 'L') return [x - 1, y];
  if (direction === 'D') return [x, y + 1];
  if (direction === 'R') return [x + 1, y];
  if (direction === 'U') return [x, y - 1];
  return null;
}

// We are going to need a way to know if a move is even possible!
// This function should take the current position, and check that
// a cell in our viscinity is occupiable!
function moveIsPossible(x,y,accessible) {
  return accessible[y - 1][x] ||
         accessible[y + 1][x] ||
	 accessible[y][x+1]   ||
	 accessible[y][x-1];
}

// Now we just implement the desired function by composing
// our helper functions!
function spiralOrder(matrix) {
  // INITIALIZATION PROCEDURE
  let orderedNumbers = [];
  let accessible = generateAccessible(matrix); // instantiate accessible
  let posX = 1; // set our initial position (always the same! why?)
  let posY = 1;
  let dir = 'R';
  orderedNumbers.push(matrix[posY - 1][posX -1]);
  //
  while (moveIsPossible(posX,posY,accessible)) {
    switch (dir) {
    case 'L':
      if (!accessible[posY][posX-1]) dir = turn(dir);
      break;
    case 'D':
      if (!accessible[posY + 1][posX]) dir = turn(dir);
      break;
    case 'R':
      if (!accessible[posY][posX + 1]) dir = turn(dir);
      break;
    case 'U':
      if (!accessible[posY - 1][posX]) dir = turn(dir);
      break;
    }
    let newPos = move(posX, posY, dir, accessible);
    posX = newPos[0];
    posY = newPos[1];
    orderedNumbers.push(matrix[posY - 1][posX -1]);
  }
  return orderedNumbers;
}

console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));
