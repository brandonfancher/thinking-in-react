import React, { Component } from 'react';
import Todo from './Todo.js';
import './styles/TodoList.css';

class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <div className="TodoList">
        {todos.map((todo, index) => <Todo todo={todo} key={`todo-${index}`} />)}
      </div>
    );
  }
}

export default TodoList;
