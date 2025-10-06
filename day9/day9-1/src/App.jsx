import React from 'react'
import './App.css'
import { decrement, increment } from './components/redux/CounterSlice';
import { useDispatch, useSelector } from 'react-redux' 

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <p>{count }</p>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App