import React    from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider }    from 'react-redux';

import reducers from './assets/reducers';
import TodoList from './components/TodoList';
import AddTodo  from './components/AddTodo';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>React Redux Todo App</h1>
        <AddTodo />
        <TodoList />
      </main>
    );
  }
}

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


