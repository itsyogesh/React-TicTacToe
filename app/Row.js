import React from 'react'
import Square from './Square'

export default (props) => {
  let columns = []
  for (let i = 0; i < props.columns; i++) {
    columns.push(<Square key={i} player={props.currentPlayer} />)
  }
  return (
    <div className='row'>
      {columns}
    </div>
  )
}
