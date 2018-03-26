import React from 'react';
import store from '../assets/store';

let globalId = 0;
let input;

const AddTodo = () => (
  <form
    onSubmit={ (e) => {
        e.preventDefault();
        store.getStore().dispatch({ type: 'ADD_TODO', text: input.value, id: globalId++ });
        input.value = '';
      }
    }
  >
    <input
      type="text"
      ref={node => input = node}
    />
    <input
      type="submit"
      value="Add Todo"
    />
  </form>
);

export default AddTodo;