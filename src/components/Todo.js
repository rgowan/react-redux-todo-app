import React from 'react';

const Todo = ({
  id,
  text,
  completed,
  toggleTodoCompleted,
  deleteTodo
}) => (
  <li>
    <span
      style={ { textDecoration: completed ? 'line-through': 'none' } }
      onClick={() => toggleTodoCompleted(id)}
    >
      {text}
    </span>
    {' '}
    <button onClick={() => deleteTodo(id)}>Delete</button>
  </li>
)
export default Todo;