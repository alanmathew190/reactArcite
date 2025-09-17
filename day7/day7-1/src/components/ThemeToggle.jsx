import React, { useContext } from 'react'
import { userContext } from './Context'

function ThemeToggle() {
    let[darkMode,setDarkMode]=useContext(userContext)
  return (
    <div
      className={
        darkMode
          ? "bg-black w-screen h-screen"
          : "bg-white text-black w-screen h-screen"
      }
    >
      <button onClick={() => setDarkMode(!darkMode)} className='border'>
              Switch to {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default ThemeToggle