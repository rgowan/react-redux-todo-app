import React    from 'react';
import ReactDOM from 'react-dom';

import store    from './assets/storeHelper';
import TodoList from './components/TodoList';
import AddTodo  from './components/AddTodo';

store.initStore();

const App = () =>  (
  <main>
    <h1>React Redux Todo App</h1>
    <AddTodo />
    <TodoList />
  </main>
);

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

store.getStore().subscribe(render);
render();



