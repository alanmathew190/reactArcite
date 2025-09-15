import React, { useState,useEffect } from "react";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import "./App.css";

function App() {
 const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
 });
  
  const [completedTasks, setCompletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTasks")) || [];
  });

  const [showCompleted, setShowCompleted] = useState(false);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);


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
