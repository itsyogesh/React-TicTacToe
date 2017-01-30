import React from 'react'

function Dashboard (props) {
  return (
    <div className='dashboard'>
      <h3>Someone cheated! You need to restart.</h3>
      <a href='' onClick={props.reset}>Restart</a>
    </div>
  )
}

export default Dashboard
