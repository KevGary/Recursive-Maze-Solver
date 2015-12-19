# Recursive-Maze-Solver
Simple GUI displaying recursive solution to any and all solutions of a M x N maze, given in the form of a 2D array.

## Git clone or download and open/run index.html locally to view GUI


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


###Good test cases to start with testing with:


start with [2,1] for testing up
```
var solvable = [
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,0,0,0],
];
```
start with [1,1] for testing down
```
var solvable = [
  [0,0,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
];
```
start with [1,1] for testing right
```
var solvable = [
  [0,0,0,0],
  [0,1,1,1],
  [0,0,0,0],
  [0,0,0,0],
];
```
start with [2,2] for testing left
```
var solvable = [
  [0,0,0,0],
  [0,0,0,0],
  [1,1,1,0],
  [0,0,0,0],
];
```
start with [2,1] or [2,2] for testing up and down
```
var solvable = [
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
];
```
start with [1,1] or [1,2] for testing up and down
```
var solvable = [
  [0,0,0,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0],
];
```
start with [1,1] for testing all directions
```
var solvable = [
  [0,1,0,0],
  [1,1,1,1],
  [0,1,0,0],
  [0,1,0,0],
];
```

####Now for changes in your path:

start with [1,1] for testing right then down
```
var solvable = [
  [0,0,0,0,0,0],
  [0,1,1,1,0,0],
  [0,0,0,1,0,0],
  [0,0,0,1,0,0],
];
```

Do the same for other combinations of turns.  You should solve or refactor to a way that can handle X number of turns.

###Now for divergence:
start with [3,1]
```
var solvable = [
  [0,0,0,1,0,0],
  [0,0,0,1,0,0],
  [0,0,0,1,0,0],
  [0,1,1,1,0,0],
  [0,0,0,1,1,0],
  [0,0,0,0,0,0],
];
```
And with divergence for multiple solutions:
start with [3,1]
```
var solvable = [
  [0,0,0,1,0,0],
  [0,0,0,1,1,1],
  [0,0,0,1,0,0],
  [0,1,1,1,0,0],
  [0,0,0,1,1,0],
  [0,0,0,0,0,0],
];
```

If you're here you probably have everything you need to solve for any and all solutions for any given [x,y] maze.  Known pitfalls 
are getting stuck in an infitie loop and exceeding maximum stack call time.  Often the problem is, for example, you'll move up one
and hit dead end, then move on to checking downwards- however when you make the recursive call you're rechecking to see if ones above you
and then repointing to it, going down, up, dead-end, down, up, dead-end forever.  Obviously same thing can happen right to left, left to
right, and down to up. 

