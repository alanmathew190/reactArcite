import React from 'react'
import GrandChild from './GrandChild'

function Child({user1}) {
  return (
    <div>
      <p>{ user1.name}</p>
          <GrandChild  />
    </div>
  )
}

export default Child