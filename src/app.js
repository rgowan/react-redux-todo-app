import React    from 'react';
import ReactDOM from 'react-dom';

import store    from './assets/store';
import TodoList from './components/TodoList';
import AddTodo  from './components/AddTodo';

store.initStore();

class App extends React.Component {
  render() {
    return(
      <main>
        <h1>React Redux Todo App</h1>
        <AddTodo 
          store={store}
        />
        <TodoList
          store={store}
          todos={ store.getStore().getState() }
        />
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

store.getStore().subscribe(render);
render();



