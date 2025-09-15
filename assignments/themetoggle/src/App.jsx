import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark content" : "light content"}>
      <button onClick={() => setDarkMode(!darkMode)}>Switch to {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default App;
