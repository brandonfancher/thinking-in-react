import React, { Component } from 'react';
import Todo from './Todo.js';
import './styles/TodoList.css';

class TodoList extends Component {
  render() {
    const { filter, todos } = this.props;

    return (
      <div className="TodoList">
        {todos
          .filter(todo => {
            if (filter !== 'all') {
              return todo.status === filter;
            }
            return todo;
          })
          .map((todo, index) => <Todo todo={todo} key={`todo-${index}`} />)}
      </div>
    );
  }
}

export default TodoList;
