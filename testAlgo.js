//WRITE CODE HERE
//necessary parameters included where startingIndex 
//can be [row, column] or [column, row]

//helper
function coloringTimeout(coordinates, time) {
  setTimeout(function () {
    $('#' + String(coordinates[0]) + String(coordinates[1])).css("background-color", "green");
  }, time);
}

//main
function solveMaze(mazeArray, startingIndex, flag, path) {
  var rowIndex = startingIndex[0];
  var columnIndex = startingIndex[1];
  var flag = flag || '';
  var path = path || [];
  var timeIncrement = timeIncrement || 0;

  if(mazeArray[rowIndex][columnIndex] == 1) {
    if(rowIndex == 0){
      path.push([rowIndex, columnIndex]);
      return true;
    }
    if(rowIndex == mazeArray.length-1) {
      path.push([rowIndex, columnIndex]);
      return true;
    }    
    if(columnIndex == mazeArray[rowIndex].length-1) {
      path.push([rowIndex, columnIndex]);
      return true;
    }
    if(columnIndex == 0){
      path.push([rowIndex, columnIndex]);
      return true;
    }
  }

  if(mazeArray[rowIndex-1][columnIndex] == 1 && (flag == '' || flag != 'down')) {
    path.push([rowIndex, columnIndex]);
    function testUp() {
      return solveMaze(mazeArray, [rowIndex-1, columnIndex], 'up', path);
    }
    if (testUp() == true) {
      for(var i = 0; i < path.length; i++) {
        coloringTimeout(path[i], timeIncrement+=250)
      }
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
      for(var i = 0; i < path.length; i++) {
        coloringTimeout(path[i], timeIncrement+=250)
      }
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
      for(var i = 0; i < path.length; i++) {
        coloringTimeout(path[i], timeIncrement+=250)
      }
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
      for(var i = 0; i < path.length; i++) {
        coloringTimeout(path[i], timeIncrement+=250)
      }
    } else {
      path = [];
    }
  }
  return false;
}
