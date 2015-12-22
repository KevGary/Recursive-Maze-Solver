//change i < (insert number of rows)
//change j < (insert number of columns)

var htmlMazeArray = [];

function coloringTimeout(solutions, time) {
  var length = 0;
  for(var i = 0; i < solutions.length; i++) {
    for(var j = 0; j < solutions[i].length; j++) {
      // setTimeout(function() {
        $('#' + String(solutions[i][j][0]) + String(solutions[i][j][1])).css("background-color", "green");
      // }, t);
    }
  }
}

$(document).on('DOMContentLoaded', function() {
  $( '.maze' ).append("<tbody>")
  for(var i = 0; i < 10; i++) {
    htmlMazeArray.push([]);
    $( '.maze' ).append("<tr class='row" + String(i) + "'>" )
    for(var j = 0; j < 10; j++) {
      htmlMazeArray[i].push(0);
      $( '.row' + String(i)).append("<td id=" + String(i) + String(j) + "></td>")
    }
    $( '.maze' ).append("</tr>")
  }  
  $( '.maze' ).append( "</tbody>")
  var startingPoint;
  $('.maze td').mousedown(function(e) {
    var coordinatesArray = this.id.split('').map(function(elem) {
      return parseInt(elem);
    });
    if(e.which == 1) {
      $(this).css("background-color") == "rgb(128, 128, 128)" ? 
        ($(this).css("background-color", "white"), htmlMazeArray[coordinatesArray[0]][coordinatesArray[1]] = 1): 
        ($(this).css("background-color", "gray"), htmlMazeArray[coordinatesArray[0]][coordinatesArray[1]] = 0); 
    }
    if(e.ctrlKey || e.metaKey) {
      $(this).css("background-color") != "rgb(128, 128, 128)" ?
        ($(this).css("background-color", "red"), htmlMazeArray[coordinatesArray[0]][coordinatesArray[1]] = 1, startingPoint = [coordinatesArray[0], coordinatesArray[1]]): 
        ($(this).css("background-color", "gray"), htmlMazeArray[coordinatesArray[0]][coordinatesArray[1]] = 0); 
    }
  })
  var x = solveMaze(solvable, [2,1]);
  console.log(x);

  var startButton = document.querySelector('.start');
  startButton.addEventListener('click', function() {
    console.log(solveMaze(htmlMazeArray, [2,1]));
    coloringTimeout(solveMaze(htmlMazeArray, startingPoint), 200);
  })
});


