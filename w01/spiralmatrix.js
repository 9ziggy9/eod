let matrix1 = [[ 1, 2, 3],
               [ 4, 5, 6],
               [ 7, 8, 9]];


let matrix2 = [[1, 2, 3, 4],
               [5, 6, 7, 8],
               [9,10,11,12]];

function setAccessible(matrix) {
  let Y = matrix.length;
  let X = matrix[0].length;
  // TOP
  for (let x = 0; x < X; x++) matrix[0][x] = false;
  // BOTTOM
  for (let x = 0; x < X; x++) matrix[Y-1][x] = false;
  // LEFT
  for (let y = 0; y < Y; y++) matrix[y][0] = false;
  // RIGHT
  for (let y = 0; y < Y; y++) matrix[y][X-1] = false;
}

function generateInitial(matrix) {
  let Y = matrix.length + 2;
  let X = matrix[0].length + 2;
  let initial = new Array(Y);
  for (let y = 0; y < initial.length; y++) {
    initial[y] = new Array(X);
    initial[y].fill(true);
  }
  setAccessible(initial,Y,X);
  return initial;
}

// (direction) => FUNCTION => (new direction)
function turnClockwise(direction) {
  if (direction === 'R') return 'D';
  if (direction === 'D') return 'L';
  if (direction === 'L') return 'U';
  if (direction === 'U') return 'R';
  console.log("From turnClockwise: WHAT WAS THAT?");
  return null;
}

// (x,y,direction)
function move(x,y,direction) {
  if (direction === 'R') return [x+1, y];
  if (direction === 'D') return [x, y+1];
  if (direction === 'L') return [x-1, y];
  if (direction === 'U') return [x, y-1];
  console.log("From move: WHAT WAS THAT?");
  return null;
}

function thereIsMove(x,y,matrix) {
  return matrix[y][x+1] ||
	 matrix[y+1][x] ||
	 matrix[y][x-1] ||
	 matrix[y-1][x];
}

function spiralOrder(matrix) {
  // INITIALIZATION
  let unfolded = [];
  let accessible = generateInitial(matrix);
  let posX = 1;
  let posY = 1;
  let dir = 'R';
  unfolded.push(matrix[posY-1][posX-1]);
  while (thereIsMove(posX,posY,accessible)) { // IMPLEMENT TERMINATING CONDITION
    accessible[posY][posX] = false;
    if (dir === 'R' && !accessible[posY][posX+1]) dir = turnClockwise(dir);
    if (dir === 'D' && !accessible[posY+1][posX]) dir = turnClockwise(dir);
    if (dir === 'L' && !accessible[posY][posX-1]) dir = turnClockwise(dir);
    if (dir === 'U' && !accessible[posY-1][posX]) dir = turnClockwise(dir);
    let newPosition = move(posX, posY, dir);
    posX = newPosition[0];
    posY = newPosition[1];
    unfolded.push(matrix[posY-1][posX-1]);
  }
  return unfolded;
}

