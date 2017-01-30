import constants from './constants'

export function nestedArrayDeepCopy (array) {
  let newArray = []
  array.forEach(function (elem) {
    newArray.push(Object.assign({}, elem))
  })
  return array
}

export function checkWinner (gameMatrix, moves) {
  let winner = null
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  winningMoves.forEach((line, i) => {
    const a = winningMoves[i][0]
    const b = winningMoves[i][1]
    const c = winningMoves[i][2]

    if (gameMatrix[a] &&
      gameMatrix[a].value === gameMatrix[b].value &&
      gameMatrix[a].value === gameMatrix[c].value) {
      winner = gameMatrix[a].value
    }
  })

  if (!winner & moves > 8) {
    winner = constants.DRAW
  }
  return winner
}
