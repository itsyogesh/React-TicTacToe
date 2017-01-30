import React, { Component } from 'react'
import Board from './Board'
import Dashboard from './Dashboard'
import GameOver from './GameOver'
import constants from './constants'
import { nestedArrayDeepCopy, checkWinner } from './utils'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      currentPlayer: constants.PLAYER_Y,
      moves: 0,
      winner: null,
      playerXWins: 0,
      playerYWins: 0,
      gameMatrix: Array(9).fill({value: null, selected: false})
    }
    this.reset = this.reset.bind(this)
  }

  onMove (position) {
    let gameMatrix = nestedArrayDeepCopy(this.state.gameMatrix)
    let { moves, winner, currentPlayer, playerXWins, playerYWins } = this.state
    if (gameMatrix[position] && gameMatrix[position].selected) {
      return
    }
    gameMatrix[position] = {value: currentPlayer, selected: true}
    moves++
    currentPlayer = (currentPlayer === constants.PLAYER_X) ? constants.PLAYER_Y : constants.PLAYER_X
    winner = checkWinner(gameMatrix, moves)
    console.log('checking winner', (winner && winner !== constants.DRAW))
    if (winner && winner !== constants.DRAW) {
      console.log('player x wins')
      if (winner === constants.PLAYER_X) {
        console.log('player x wins')
        ++playerXWins
      } else if (winner === constants.PLAYER_Y) {
        ++playerYWins
      }
    }
    console.log(winner, playerXWins, playerYWins)

    this.setState({
      moves,
      gameMatrix,
      winner,
      currentPlayer,
      playerXWins,
      playerYWins
    })
  }

  reset (e) {
    e.preventDefault()
    this.setState({
      currentPlayer: constants.PLAYER_Y,
      moves: 0,
      winner: null,
      gameMatrix: Array(9).fill({value: null, selected: false})
    })
  }

  render () {
    return (
      <div>
        {
          (this.state.winner) ? <GameOver winner={this.state.winner} reset={this.reset} /> : <Board gameMatrix={this.state.gameMatrix} onMove={(position) => this.onMove(position)} />
        }
        <Dashboard xWins={this.state.playerXWins} yWins={this.state.playerYWins} />
      </div>
    )
  }
}

export default Game
