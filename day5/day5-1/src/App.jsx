import React, { useState, useEffect } from "react";
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

  // delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // complete task
  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  // edit task
  const editTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">To-Do List</h1>

      <AddTasks onAdd={addTask} />

      <button
        onClick={() => setShowCompleted(!showCompleted)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
      >
        {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
      </button>

      {!showCompleted && (
        <>
          <h2 className="text-2xl mt-6 mb-2 text-gray-700">Active Tasks</h2>
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onComplete={completeTask}
            onEdit={editTask}
          />
        </>
      )}

      {showCompleted && (
        <>
          <h2 className="text-2xl mt-6 mb-2 text-gray-700">Completed Tasks</h2>
          <CompletedTaskList
            tasks={completedTasks}
            onDelete={(index) => {
              setCompletedTasks(completedTasks.filter((_, i) => i !== index));
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
