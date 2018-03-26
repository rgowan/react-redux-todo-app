import React, { Component, Fragment } from 'react';
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

class TodoList extends Component {
  render() {
    const { todos, toggleTodoCompleted, deleteTodo } = this.props;

    return(
      <Fragment>
        <p>You have { todos.filter(todo => !todo.completed).length } todos left to do.</p>

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
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)