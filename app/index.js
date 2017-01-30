import React, { Component } from 'react'
import { render } from 'react-dom'
import Game from './Game'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Welcome to Tic Tac Toe</h1>
        </div>
        <Game />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
