import { useEffect, useState } from 'react'
import './App.css'
import EventHandling from './components/EventHandling'

function App() {

  let [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
    console.log(users)
  }, [])

  return (
    <>
      {/* {users.map((user) => (   
        <div>
          <h2 key={user.id}>{user.name}</h2>
          <p>{ user.email}</p>
          </div>
      ))} */}
      <h1 className='bg-emerald-500'>Type here</h1>
      <EventHandling/>
    </>
  )
}

export default App

