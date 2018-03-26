import React    from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';

import TodoList from './components/TodoList';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id, text: action.text, completed: false }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id !== action.id) return todo;
        todo.completed = !todo.completed;
        return todo;
      });
  }
}

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch(action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.visibilityFilter
//   }
// }

const store = createStore(todos);

class App extends React.Component {
  render() {
    return(
      <main>
        <h1>React Redux Todo App</h1>
        <TodoList />
      </main>
    );
  }
}

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();



