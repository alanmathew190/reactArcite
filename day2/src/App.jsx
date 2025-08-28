
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  let incrementCount = () => {
  setCount(count+1)
  }

  let decrementCount=() => {
  setCount(count-1)
  }
  
  return (
    <>
      
      <h1>COUNTER</h1>
      <div class="one">

        <button onClick={decrementCount}>-</button>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+</button>
        
        </div>
    </>
  )
}

export default App
