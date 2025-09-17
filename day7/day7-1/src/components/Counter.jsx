import React, { useContext } from 'react'
import { userContext } from './Context'

function Counter() {
    // let [count,setCount]=useContext(userContext)
  return (
      <div>
          {/* <p className='font-bold text-2xl'>{count}</p>
          <button className='bg-blue-400 p-5' onClick={() => setCount(count + 1)}>+</button>
          <button className='bg-red-400 p-5' onClick={()=>setCount(count-1)}>-</button> */}
    </div>
  )
}

export default Counter