import React, { Component } from 'react'
import { render } from 'react-dom'
import Board from './Board'

class App extends Component {
  render () {
    return (
      <Board rows={3} columns={3} />
    )
  }
}

render(<App />, document.getElementById('app'))
