import React, { Component, PropTypes } from 'react'
import constants from './constants'

class Square extends Component {

  getSquareClass (player) {
    if (player.selected) {
      if (player.value === constants.PLAYER_X) return 'square-player-x'
      else return 'square-player-y'
    } else {
      return 'square-pure'
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.value.selected) return false
    else return true
  }

  render () {
    return (
      <div
        className={`square ${this.getSquareClass(this.props.value)}`}
        onClick={() => this.props.onMove()} />
    )
  }
}

Square.propTypes = {
  value: PropTypes.shape({
    selected: PropTypes.bool,
    value: PropTypes.string
  }).isRequired,
  onMove: PropTypes.func.isRequired
}

export default Square
