import { combineReducers } from 'redux';

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
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.visibilityFilter
    default:
      return state
  }
}

  export default combineReducers({ todos, visibilityFilter });