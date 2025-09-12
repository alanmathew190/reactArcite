import React from "react";

function TaskList({ tasks, onDelete }) {
    return (
        <>
            <ul className="task-list">
                {tasks.map((item, index) => (
          <><h2>Completed Tasks</h2>
        <li>
          {item}
          <div>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
                </li>
                </>
      ))}
            </ul>
        </>
  );
}

export default TaskList;
