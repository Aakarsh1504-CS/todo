import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
