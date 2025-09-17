import React from 'react'
import Child from './Child'

function Parent({user1}) {
  return (
    <div>
      <p>{user1.age }</p>
      <Child user1={ user1} />
    </div>
  )
}

export default Parent