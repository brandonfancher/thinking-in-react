import React, { Component } from 'react';
import './styles/AddTodo.css';

class AddTodo extends Component {
  render() {
    return (
      <div className="AddTodo">
        <form>
          <input type="text" placeholder="Add a new task" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
