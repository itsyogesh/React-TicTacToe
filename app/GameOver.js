import React, { PropTypes } from 'react'
import constants from './constants'

function GameOver (props) {
  let gameOverText

  if (props.winner === constants.PLAYER_X) {
    gameOverText = 'Player X wins. Congratulations!'
  } else if (props.winner === constants.PLAYER_Y) {
    gameOverText = 'Player Y wins. Amazing!'
  } else {
    gameOverText = `It's a tie. Let's try again.`
  }

  return (
    <div className='game-over'>
      <h1 className='game-over-text'>{gameOverText}</h1>
      <a href='' onClick={props.reset}>Restart</a>
    </div>
  )
}

GameOver.propTypes = {
  winner: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
}

export default GameOver
