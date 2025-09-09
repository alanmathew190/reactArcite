
import './App.css'

function App() {
  let arr=["Apple","Orange","Grapes","Mango"]
  return (
    <>
      <ul>
        {arr && arr.map((fruit, i) => (
          fruit != "Mango" ? 
          <li key={i}>{ fruit } </li> :""
        ))}
      </ul>
    </>
  )
}

export default App
