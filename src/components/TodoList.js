import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const mapStateToProps = (
  state
) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (
  dispatch
) => {
  return {
    toggleTodoCompleted: (id) => dispatch({ type: 'TOGGLE_TODO', id }),
    deleteTodo: (id) => dispatch({ type: 'REMOVE_TODO', id })
  }
}

class TodoList extends React.Component {
  render() {
    const { todos, toggleTodoCompleted, deleteTodo } = this.props;

    return(
      <ul>
        { todos.map(todo => 
          <Todo 
            key={todo.id}
            {...todo}
            toggleTodoCompleted={toggleTodoCompleted}
            deleteTodo={deleteTodo}
          />
        )}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)