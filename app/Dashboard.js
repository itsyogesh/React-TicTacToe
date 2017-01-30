import React from 'react'

function Dashboard (props) {
  return (
    <div className='dashboard'>
      <h3>Someone cheated! Let's reset this thing.</h3>
      <a href='' onClick={props.reset}>Reset</a>
    </div>
  )
}

export default Dashboard
