import './App.css'
import Greeting1 from './components/Greeting'


function App() {
  let name = "Alan J Mathew"
  let age = 21;
  let person = {
    name1: "John",
    age1: 40,
    place1:"Kollam"
  }
  return (
    <>
      <Greeting1 name={name} />
    </>
  )
}

export default App
