import React from "react";

function CompletedTaskList({ tasks, onDelete }) {
  return (
    <ul className="space-y-2 w-full max-w-md">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No completed tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-green-50 p-3 rounded-lg shadow-sm border border-green-200"
          >
            <div className="flex flex-col">
              <span className="line-through text-gray-600 font-medium">
                {task.text}
              </span>
              <span
                className={`text-xs ${
                  task.priority === "High"
                    ? "text-red-600"
                    : task.priority === "Medium"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Priority: {task.priority}
              </span>
              {task.dueDate && (
                <span className="text-xs text-gray-500">
                  Due: {task.dueDate}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <span className="text-green-500 text-xl">✅</span>
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:text-red-600 text-xl"
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default CompletedTaskList;
