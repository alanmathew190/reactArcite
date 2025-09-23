
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div className="bg-amber-200 p-10  w-100 text-center m-auto">
      <h1>{count}</h1>
      <button className="bg-red-600 p-4" onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <button className="bg-blue-600 p-4" onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      
    </div>
  );
}

export default App