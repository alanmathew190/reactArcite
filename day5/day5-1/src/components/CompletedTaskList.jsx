import React from "react";

function CompletedTaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((item, index) => (
        <li key={index} className="task-item completed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CompletedTaskList;
