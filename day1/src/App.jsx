import './App.css'
import DefaultValue from './components/DefaultValue';
import Greeting1 from './components/Greeting'


function App() {
  let name = "Alan J Mathew"
  let name2 = "Alan";
  let age = 21;
  let person = {
    name1: "John",
    age1: 40,
    place1:"Kollam"
  }
  return (
    <>
      <Greeting1 name={name} />
      <DefaultValue name2={person.age } />
    </>
  )
}

export default App
