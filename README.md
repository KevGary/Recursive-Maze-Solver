# Recursive-Maze-Solver
Simple GUI displaying recursive solution to any and all solutions of a M x N maze, given in the form of a 2D array.

The original recursive solution can be found below.  The one in testAlgo.js is the same sans a few extra lines of jQuery calls for coloring purposes.

```
function solveMaze(mazeArray, startingIndex) {
  var rowIndex = startingIndex[0];
  var columnIndex = startingIndex[1];
  var flag = flag || '';
  var path = path || [];

  if(mazeArray[rowIndex-1][columnIndex] == 1 && (flag == '' || flag != 'down')) {
    path.push([rowIndex, columnIndex]);
    function testUp() {
      return solveMaze(mazeArray, [rowIndex-1, columnIndex], 'up', path);
    }
    if (testUp() == true) {
      console.log('escaped from the top!')
    } else {
      path = [];
    }
  }
  if(mazeArray[rowIndex+1][columnIndex] == 1 && (flag == '' || flag != 'up')) {
    path.push([rowIndex, columnIndex]);
    function testDown() {
      return solveMaze(mazeArray, [rowIndex+1, columnIndex], 'down', path);
    }
    if (testDown() == true) {
      console.log('escaped from the bottom!')
    } else {
      path = [];
    }
  }
  if(mazeArray[rowIndex][columnIndex+1] == 1 && (flag == '' || flag != 'left')) {
    path.push([rowIndex, columnIndex]);
    function testRight() {
      return solveMaze(mazeArray, [rowIndex, columnIndex+1], 'right', path);
    }
    if (testRight() == true) {
      console.log('escaped from the right!')
    } else {
      path = [];
    }
  }
  if(mazeArray[rowIndex][columnIndex-1] == 1 && (flag == '' || flag != 'right')) {
    path.push([rowIndex, columnIndex]);
    function testLeft() {
      return solveMaze(mazeArray, [rowIndex, columnIndex-1], 'left', path);
    }
    if (testLeft() == true) {
      console.log('escaped from the left!')
    } else {
      path = [];
    }
  }
  return false;
}
```