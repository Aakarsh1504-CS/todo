import React, { useState } from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between p-2 bg-white rounded shadow w-full">
      <span className={`flex-grow truncate ${todo.completed ? 'text-gray-500' : ''}`}>{todo.text}</span>
      <div className="flex flex-wrap items-center space-x-2 mt-2 sm:mt-0">
        {todo.completed && (
          <>
            {showDelete ? (
              <>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
                <button
                  className="px-2 py-1 bg-gray-500 text-white rounded"
                  onClick={() => setShowDelete(false)}
                >
                  Undo
                </button>
              </>
            ) : (
              <button
                className="px-2 py-1 bg-yellow-500 text-white rounded"
                onClick={() => setShowDelete(true)}
              >
                Delete?
              </button>
            )}
          </>
        )}
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => toggleTodo(index)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
