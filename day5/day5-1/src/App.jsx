import React, { useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";


function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const AddTask = (task) => {
    setTasks([...tasks, task])
  }

  const DeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i != index)
    setTasks(newTasks)
  }

    const completeTask = (index) => {
    const taskToComplete = tasks[index];
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  return (
    <>
      <h1>Todo List App</h1>
      <AddTasks onAdd={AddTask} />
      <div className="app">
      <TaskList tasks={tasks} onDelete={DeleteTask} onComplete={completeTask} />
      <CompletedTaskList tasks={completedTasks} />
    </div>
    </>
  );
}

export default App;
