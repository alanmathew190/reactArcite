import React, { useState } from "react";

function TaskList({ tasks, onDelete, onComplete, onEdit }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (index, text) => {
    setEditingIndex(index);
    setNewText(text);
  };

  const saveEdit = (index) => {
    onEdit(index, newText);
    setEditingIndex(null);
  };

  return (
    <ul className="space-y-2 w-full max-w-md">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No active tasks.</p>
      ) : (
        tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md border border-gray-200"
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 py-1 mr-2 flex-1"
              />
            ) : (
              <div className="flex flex-col">
                <span className="font-medium">{task.text}</span>
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
            )}

            <div className="flex gap-2">
              {editingIndex === index ? (
                <button
                  onClick={() => saveEdit(index)}
                  className="text-green-600 hover:text-green-800 text-xl"
                >
                  💾
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index, task.text)}
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => onComplete(index)}
                className="text-green-500 hover:text-green-700 text-xl"
              >
                ✅
              </button>
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:text-red-700 text-xl"
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

export default TaskList;
