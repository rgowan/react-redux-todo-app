import React from 'react';
import store from '../assets/store';

const Todo = ({
  text,
  completed,
  id
}) => (
  <li>
    <span
      onClick={ () => store.getStore().dispatch({ type: 'TOGGLE_TODO', id }) }
      style={ {textDecoration: completed ? 'line-through': 'none' } }
    >
      {text}
    </span>
    {' '}
    <button 
      onClick={ () => store.getStore().dispatch({ type: 'REMOVE_TODO', id }) }
    >
      Delete
    </button>
  </li>
);

export default Todo;