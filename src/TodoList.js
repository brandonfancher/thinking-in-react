import React, { Component } from 'react';
import Todo from './Todo.js';
import './styles/TodoList.css';

class TodoList extends Component {

  filterOut(todo) {
    const filter = this.props.filter;
    if (filter === 'open' && todo.complete) {
      return true;
    } else if (filter === 'complete' && !todo.complete) {
      return true;
    }
    return false;
  }

  render() {
    const { deleteTodo, todos, toggleTodo } = this.props;

    return (
      <div className="TodoList">
        {todos
          .map((todo, index) => (
            <Todo
              key={`todo-${index}`}
              hidden={this.filterOut(todo)}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
      </div>
    );
  }
}

export default TodoList;
