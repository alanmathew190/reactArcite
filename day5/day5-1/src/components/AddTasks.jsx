import React, { useState } from "react";

function AddTasks({onAdd}) {
    const [task, setTask] = useState("");

    const handleAdd = (e) => {
        if (task.trim() != "") {
            onAdd(task);
            setTask("")
        }
    }

  return (
    <div className="input-section">
          <input type="text" name="" id="" value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="enter your task"
          />
          <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default AddTasks;
