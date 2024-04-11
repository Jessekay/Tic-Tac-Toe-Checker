function isSolved(board) {
  // TODO: Check if the board is solved!
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
      return board[i][0];
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
      return board[0][i];
    }
  }
  //Check diagonals
  if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
    if (board[1][1] !== 0) {
      return board[1][1];
    }
  }
  // Check if the board is full
  let isFull =true;
  for (let i = 0; i < 3; i ++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        isFull = false;
        break;
      }
    }
  }
  if (isFull) {
    return 0;
  }
  // If nne of the above conditions met, return -1
  return -1;
}