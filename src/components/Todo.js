import React from 'react';
import store from '../assets/storeHelper';

const Todo = ({
  text,
  completed,
  id,
  removeTodo,
  toggleTodoCompleted
}) => (
  <li>
    <span
      onClick={() => toggleTodoCompleted(id)}
      style={ { textDecoration: completed ? 'line-through': 'none' } }
    >
      {text}
    </span>
    {' '}
    <button 
      onClick={() => removeTodo(id)}
      value="Delete"
    >
      Delete
    </button>
  </li>
);

export default Todo;