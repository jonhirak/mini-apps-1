var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

var translator = {
  A1: [0, 0],
  A2: [0, 1],
  A3: [0, 2],
  B1: [1, 0],
  B2: [1, 1],
  B3: [1, 2],
  C1: [2, 0],
  C2: [2, 1],
  C3: [2, 2]
}

var tracker = {
  turn: 'X',
  gameover: false
}



var cellClickHandler = (id) => {
  var cell = document.getElementById(id)

  if (!cell.innerHTML) {
    cell.innerHTML = tracker.turn;

    var indeces = translator[id];
    board[indeces[0]][indeces[1]] = tracker.turn;

    tracker.turn === 'X' ? tracker.turn = 'O': tracker.turn = 'X';

    rowChecker()
    columnChecker()
    diagonalChecker()
    tieChecker()
  }
}

var newGameHandler = () => {
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  var cells = document.getElementsByClassName('cell')
  // console.log('CELLS!!' + JSON.stringify(cells))
  for (var key in cells) {
    cells[key].innerHTML = null;
  }

  tracker.gameover = false;
}

var rowChecker = () => {
  if (!tracker.gameover) {
    for (var i = 0; i < board.length; i ++) {
      var row = board[i];
      var consecutive = true;
      var first;
      for (var j = 0; j < row.length; j ++) {
        var cell = row[j];

        if (cell !== null) {
          if (!first) {
            first = cell;
          } else if (cell !== first) {
            consecutive = false;
        }
        } else {
          consecutive = false;
          break;
        }
      }

      if (consecutive === true) {
        alert(`${first} wins!`)
        tracker.gameover = true;
        break;
      }

      first = null;
    }
  }
}

var columnChecker = () => {

  if (!tracker.gameover) {
    var columns = {
      1: [],
      2: [],
      3: []
    }

    for (var i = 0; i < board.length; i ++) {
      var row = board[i];
      for (var j = 0; j < board.length; j ++) {
        var cell = row[j];

        columns[j + 1].push(cell)
      }
    }

    for (var key in columns) {
      var column = columns[key];
      var consecutive = true;
      var first;

      for (var i = 0; i < column.length; i ++) {
        var cell = column[i];

        if (cell !== null) {
          if (!first) {
            first = cell;
          } else if (cell !== first) {
            consecutive = false;
        }
        } else {
          consecutive = false;
          break;
        }
      }
      if (consecutive === true) {
        tracker.gameover = true;
        alert(`${first} wins!`)
        break;
      }

      first = null;
    }
  }
}

var diagonalChecker = () => {
  if (!tracker.gameover) {
    var diagonals = {
      major: [],
      minor: []
    }

    for (var i = 0; i < board.length; i ++) {
      var row = board[i];
      var consecutive = true;
      var first;
      for (var j = 0; j < row.length; j ++) {
        var cell = row[j];

        if ((i === 0 && j === 0) || (i === 2 && j === 2)) {
          diagonals.major.push(cell);
        } else if ((i === 0 && j === 2) || (i === 2 && j === 0)) {
          diagonals.minor.push(cell);
        } else if (i === 1 && j === 1) {
          diagonals.major.push(cell);
          diagonals.minor.push(cell);
        }
      }
    }

    if (JSON.stringify(diagonals.major) === JSON.stringify(['X', 'X', 'X']) || JSON.stringify(diagonals.minor) === JSON.stringify(['X', 'X', 'X'])) {
      tracker.gameover = true;
      alert('X wins!')
    } else if (JSON.stringify(diagonals.major) === JSON.stringify(['O', 'O', 'O']) || JSON.stringify(diagonals.minor) === JSON.stringify(['O', 'O', 'O'])) {
      tracker.gameover = true;
      alert('O wins!')
    }
  }
}

var tieChecker = () => {
  if (!tracker.gameover) {
    var tied = true;

    for (var i = 0; i < board.length; i ++) {
      var row = board[i];
      for (var j = 0; j < row.length; j ++) {
        var cell = row[j];
        if (cell === null) {
          tied = false;
          break;
        }
      }
    }

    if (tied === true) {
      alert('Tied! Try Again!')
    }
  }
}
