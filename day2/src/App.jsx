import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // let incrementCount = () => {
  //   setCount(count + 1)
  // }
  // let decrementCount = () => {
  //   setCount(count-1)
  // }
  useEffect(() => {
  document.title=`${count}`
  })
  
  return (
    <>
    
      <h1>counter app</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{count}
      </h1>
      <button onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default App