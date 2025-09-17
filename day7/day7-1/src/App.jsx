import React, { useState } from 'react'
import Parent from './components/Parent'
import Counter from './components/Counter';
import './App.css'
import ThemeToggle from './components/ThemeToggle';


function App() {  


  return (
    <div className="bg-gray-600 text-white text-center">
      {/* <h1 className="text-4xl font-bold font-">Hello</h1> */}
      {/* <Parent />
      <Counter /> */}
      <ThemeToggle/>

    </div>
  );
}

export default App