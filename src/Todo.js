import React, { Component } from 'react';
import complete from './images/complete.svg';
import undo from './images/undo.svg';
import del from './images/del.svg';
import './styles/TodoList.css';

class Todo extends Component {
  render() {
    const { deleteTodo, hidden, index, todo, toggleTodo } = this.props;

    return (
      <div className="Todo" style={hidden ? { display: 'none' } : null}>
        <p className={`Todo-text Todo-${todo.complete ? 'complete' : 'open'}`}>{todo.desc}</p>
        <div className="Todo-buttons">
          <img
            src={todo.complete ? undo : complete}
            className="Todo-button"
            alt="status-action"
            onClick={() => toggleTodo(index)}
          />
          <img
            src={del}
            className="Todo-button"
            alt="del"
            onClick={() => deleteTodo(index)}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
