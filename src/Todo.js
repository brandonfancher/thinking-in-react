import React, { Component } from 'react';
import complete from './images/complete.svg';
import undo from './images/undo.svg';
import del from './images/del.svg';
import './styles/TodoList.css';

class Todo extends Component {
  render() {
    const todo = this.props.todo;

    return (
      <div className="Todo">
        <p className={`Todo-text Todo-${todo.status}`}>{todo.desc}</p>
        <div className="Todo-buttons">
          <img src={todo.status === 'complete' ? undo : complete} className="Todo-button" alt="status-action" />
          <img src={del} className="Todo-button" alt="del" />
        </div>
      </div>
    );
  }
}

export default Todo;
