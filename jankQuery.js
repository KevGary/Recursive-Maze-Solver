//change i < (insert number of rows)
//change j < (insert number of columns)

var htmlMazeArray = [];

$(document).on('DOMContentLoaded', function() {
  $( '.maze' ).append("<tbody>")
  for(var i = 0; i < 8; i++) {
    htmlMazeArray.push([]);
    $( '.maze' ).append("<tr class='row" + String(i) + "'>" )
    for(var j = 0; j < 8; j++) {
      htmlMazeArray[i].push(0);
      $( '.row' + String(i)).append("<td id=" + String(i) + String(j) + "></td>")
    }
    $( '.maze' ).append("</tr>")
  }  
  $( '.maze' ).append( "</tbody>")
  $('.maze td').on('click', function() {
    var coordinatesArray = this.id.split('').map(function(elem) {
      return parseInt(elem);
    });
    $(this).css("background-color") == "rgb(128, 128, 128)" ? 
      ($(this).css("background-color", "white"), htmlMazeArray[coordinatesArray[0]][coordinatesArray[1]] = 1): 
      ($(this).css("background-color", "gray"), htmlMazeArray[coordinatesArray[0]][coordinatesArray[1]] = 0); 
  })
  var startButton = document.querySelector('.start');
  startButton.addEventListener('click', function() {
    solveMaze(htmlMazeArray, [2,1]);
  })
});


