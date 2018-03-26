import React from 'react';

import store from '../assets/storeHelper';
import Todo  from './Todo';

const removeTodo = (id) => {
  return store.getStore().dispatch({ type: 'REMOVE_TODO', id });
}

const toggleTodoCompleted = (id) => {
  return store.getStore().dispatch({ type: 'TOGGLE_TODO', id });
}

const TodosList = () => (
  <ul>
    { store.getStore().getState().map(todo => 
      <Todo 
        key={todo.id}
        {...todo}
        removeTodo={removeTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    )}
  </ul>
); 

export default TodosList;