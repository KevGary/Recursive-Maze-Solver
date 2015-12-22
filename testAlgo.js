//WRITE CODE HERE
//necessary parameters included where startingIndex 
//can be [row, column] or [column, row]

//helper
// function coloringTimeout(solutions, time) {
//   var length = 0;
//   for(var i = 0; i < solutions.length; i++) {
//     for(var j = 0; j < solutions[i].length; j++) {
//       setTimeout()
//       $('#' + String(solutions[i][j][0]) + String(solutions[i][j][1])).css("background-color", "green");
//     }
//   }
// }
var solvable = [
  [0,0,0,0,1,0],
  [0,0,0,0,1,0],
  [0,1,1,1,1,0],
  [0,1,0,0,1,1],
  [0,1,0,0,0,0],
  [0,1,0,0,0,0],
]
//main
function solveMaze(mazeArray, startingIndex, flag, path, solutions) {
  var rowIndex = startingIndex[0];
  var columnIndex = startingIndex[1];
  var flag = flag || '';
  var path = path || [];
  var solutions = solutions || [];

  if(mazeArray[rowIndex][columnIndex] == 1) {
    path.push([rowIndex, columnIndex])
    if(rowIndex == 0){
      return true;
    }
    if(rowIndex == mazeArray.length-1) {
      return true;
    }    
    if(columnIndex == mazeArray[rowIndex].length-1) {
      return true;
    }
    if(columnIndex == 0){
      return true;
    }
  }
  
  if(mazeArray[rowIndex-1][columnIndex] == 1 && (flag == '' || flag != 'down')) {
    function goUp() {
      return solveMaze(mazeArray, [rowIndex-1, columnIndex], 'up', path, solutions);
    }
    if(goUp() == true) {
      solutions.push(path)
    } else {
      path = [];
    }
  }
  if(mazeArray[rowIndex+1][columnIndex] == 1 && (flag == '' || flag != 'up')) {
    function goDown() {
      return solveMaze(mazeArray, [rowIndex+1, columnIndex], 'down', path, solutions);
    }
    if(goDown() == true) {
      solutions.push(path);
    } else {
      path = [];
    }
  }
  if(mazeArray[rowIndex][columnIndex+1] == 1 && (flag == '' || flag != 'left')) {
    function goRight() {
      return solveMaze(mazeArray, [rowIndex, columnIndex+1], 'right', path, solutions);
    }
    if(goRight() == true) {
      solutions.push(path);
    } else {
      path = [];
    }
  }
  if(mazeArray[rowIndex][columnIndex-1] == 1 && (flag == '' || flag != 'right')) {
    function goLeft() {
      return solveMaze(mazeArray, [rowIndex, columnIndex-1], 'left', path, solutions);
    }
    if(goLeft() == true) {
      solutions.push(path);
    } else {
      path = [];
    }
  }
  return solutions;
}

// console.log(solveMaze(solvable, [1, 1]));
// var x = solveMaze(solvable, [1,1]);
// console.log('-------')
// console.log(x)
// console.log(x[0])
// console.log(x[0][0][0])
// console.log(x[0][0][1])
// console.log(x[0][1][0])
// console.log(x[0][1][1])
// console.log(solveMaze(solvable, [1,1]))

