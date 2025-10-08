import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  let incrementCount = () => {
  setCount(count+1)
  }
  let decrement = () => {
    setCount(count-1)
  }

  useEffect(() => {
    document.title=`hai ${count}`
  })
    
  
  return (
    <>
      
      <h1>COUNTER</h1>
        <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrement}>-</button>
        
    </>
  )
}

export default App
