import React from "react";

function TaskList({tasks,onDelete,onComplete}) {
  return (
    <ul className="task-list">
          {tasks.map((item, index) =>(
              <li>{item}
                  <button onClick={() => onDelete(index)}>Delete</button>
                  <button onClick={()=>onComplete(index)}>Complete</button>
              </li>
              
          ))}
          
    </ul>
  );
}

export default TaskList;
