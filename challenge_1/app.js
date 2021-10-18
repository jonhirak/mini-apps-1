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
  turn: 'X'
}



var cellClickHandler = (id) => {
  var cell = document.getElementById(id)

  console.log(JSON.stringify(translator))
  // console.log(cell.innerHTML)
  if (!cell.innerHTML) {
    cell.innerHTML = tracker.turn;

    var indeces = translator[id];
    console.log('TEST1: ' + board[indeces[0]][indeces[1]])
    board[indeces[0]][indeces[1]] = tracker.turn;
    console.log('TEST2: ' + board[indeces[0]][indeces[1]])


    tracker.turn === 'X' ? tracker.turn = 'O': tracker.turn = 'X';

    console.log(board)
    //check if won or tied
    // debugger;
    rowChecker()
    columnChecker()
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
}

var rowChecker = () => {
  //check for rows
  // debugger;
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
      break;
    }

    first = null;
  }
  // if (board)
}

var columnChecker = () => {
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

  console.log(JSON.stringify(columns))

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
      alert(`${first} wins!`)
      break;
    }

    first = null;
  }
}

var tieChecker = () => {
  // debugger;
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
