import React, { Component } from 'react'
import Row from './Row'

class Board extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPlayer: null,
      winner: null
    }
  }

  getRows (number) {
    let rows = []
    for (let i = 0; i < number; i++) {
      rows.push(<Row key={i} columns={this.props.columns} currentPlayer={this.state.currentPlayer} />)
    }
    return rows
  }
  render () {
    console.log(this.props)
    return (
      <div className='board'>
        {this.getRows(this.props.rows) }
      </div>
    )
  }
}

export default Board
