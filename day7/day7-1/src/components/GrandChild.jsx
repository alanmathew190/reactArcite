import React, { useContext } from 'react'
import { userContext } from './Context'

function GrandChild() {
    let user =useContext(userContext)
  return (
    <div>
      <h1 className="text-2xl mt-2">{user.name}</h1>
      <h1 className="text-2xl mt-2">{user.age}</h1>
    </div>
  );
}

export default GrandChild