import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddTodo extends Component {
  render() { 
    const { dispatch } = this.props;
    let globalId = 0;
    
    return (
      <form
        onSubmit={ (e) => {
            e.preventDefault();
            if(this.input.value !== '') dispatch({ type: 'ADD_TODO', text: this.input.value, id: globalId++ });
            this.input.value = '';
          }
        }
      >
        <input type="text" ref={node => this.input = node} />
        <input type="submit" value="Add Todo" />
      </form>      
    );
  }
}

export default connect()(AddTodo);