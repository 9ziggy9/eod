// "new"
matrix1 = [[ 1, 2, 3],
           [ 4, 5, 6],
           [ 7, 8, 9]];

matrix2 = [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9,10,11,12]];

function generateAccessible(matrix) {
  let Y = matrix.length + 2;
  let X = matrix[0].length + 2;
  let accessible = new Array(Y);

  for (let y = 0; y < accessible.length; y++) {
    accessible[y] = new Array(X);
  }

  // initialized 2D array as TOTALLY accessible
  for (let y = 0; y < accessible.length; y++) {
    for (let x = 0; x < accessible[0].length; x++) {
      accessible[y][x] = true;
    }
  }

  /*TOP*/ for (let x = 0; x < accessible[0].length; x++) accessible[0][x] = false;
  /*BOTTOM*/ for (let x = 0; x < accessible[0].length; x++) accessible[Y - 1][x] = false;
  /*LEFT*/ for (let y = 0; y < accessible.length; y++) accessible[y][0] = false;
  /*RIGHT*/ for (let y = 0; y < accessible.length; y++) accessible[y][X-1] = false;

  return accessible;
}

// turn, (direction) => direction, 'L' => 'U'
function turn(direction) {
  if (direction === 'L') return 'U';
  if (direction === 'U') return 'R';
  if (direction === 'R') return 'D';
  if (direction === 'D') return 'L';
  return null;
}

// move --- (x,y), direction => new position
// mutate the accessibility array (we dont want to go back to the same spot)
function move(x,y,direction,accessible) {
  accessible[y][x] = false;
  if (direction === 'L') return [x-1, y];
  if (direction === 'U') return [x, y-1];
  if (direction === 'R') return [x+1, y];
  if (direction === 'D') return [x, y+1];
  return null;
}

function moveIsPossible(x,y,accessible) {
  return accessible[y-1][x] ||
	 accessible[y+1][x] ||
	 accessible[y][x+1] ||
	 accessible[y][x-1];
}

function spiralOrder(matrix) {
  // INITIALIZING
  let orderedNumbers = []; // array we push into, as we traverse
  let accessible = generateAccessible(matrix);
  let posX = 1; // upper left hand corner
  let posY = 1;
  let dir = 'R';
  orderedNumbers.push(matrix[posY-1][posX-1]);
  while (moveIsPossible(posX,posY,accessible)) { // COME BACK
    if (dir === 'R')
      if (!accessible[posY][posX+1]) dir = turn(dir); // RIGHT
    if (dir === 'L')
      if (!accessible[posY][posX-1]) dir = turn(dir); // LEFT
    if (dir === 'D')
      if (!accessible[posY+1][posX]) dir = turn(dir); // DOWN
    if (dir === 'U')
      if (!accessible[posY-1][posX]) dir = turn(dir); // UP
    let updatedPosition = move(posX,posY,dir,accessible); // [x,y]
    posX = updatedPosition[0];
    posY = updatedPosition[1];
    orderedNumbers.push(matrix[posY-1][posX-1]);
  }
  return orderedNumbers;
}


console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));
