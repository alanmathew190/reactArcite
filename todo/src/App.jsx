import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks,setCompletedTasks]=useState([])

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !==index));
  }
  const completedToggle = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
    setCompletedTasks([...completedTasks,tasks[index]])
  };
 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}           
        placeholder="Enter task"
      />
      <button onClick={ addTask}>Add</button>

      {tasks.map((task, index) => (
        <div>
          <p>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
            {/* <button onClick={() => completedToggle(index)}>completed</button> */}
          </p>
          {/* <button onClick={()=>}></button> */}
          {/* <h1>completedTasks</h1> */}

          {/* <p>{completedTasks}</p> */}
        </div>
      ))}
    </div>
  );
}

export default App;
