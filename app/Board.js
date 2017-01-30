import React, { Component, PropTypes } from 'react'
import Square from './Square'

class Board extends Component {

  renderSquare (i) {
    return (
      <Square
        key={i}
        value={this.props.gameMatrix[i]}
        onMove={() => this.props.onMove(i)}
      />
    )
  }
  render () {
    return (
      <div className='board'>
        <div className='row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  gameMatrix: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    value: PropTypes.string
  })).isRequired,
  onMove: PropTypes.func.isRequired
}

export default Board
