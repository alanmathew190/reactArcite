import React, { useState } from 'react'
import Parent from './components/Parent'
import Counter from './components/Counter';
import './App.css'
import ThemeToggle from './components/ThemeToggle';


function App() {  

   let [user, setUser] = useState({
     name: "Alan",
     age: 22,
   });

  return (
    <div className="bg-gray-900 text-white text-center">
      {/* <h1 className="text-4xl font-bold font-">Hello</h1> */}
      {/* <Parent />
      <Counter /> */}
      {/* <Parent user1={ user} /> */}
      <ThemeToggle/>

    </div>
  );
}

export default App