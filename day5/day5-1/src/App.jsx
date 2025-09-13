import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // add new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // delete active task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // mark active task as completed
  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTasks onAdd={addTask} />

      {/* toggle button */}
      <button
        onClick={() => setShowCompleted(!showCompleted)}
        style={{ marginBottom: "20px" }}
      >
        {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
      </button>

      {!showCompleted && (
        <>
          <h2>Active Tasks</h2>
          <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
        </>
      )}

      {showCompleted && (
        <>
          <h2>Completed Tasks</h2>
          <CompletedTaskList tasks={completedTasks} />
        </>
      )}
    </div>
  );
}

export default App;
