import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-4">
      <input
        type="text"
        className="w-full p-2 mb-2 border rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Add Todo</button>
    </form>
  );
}

export default TodoForm;
