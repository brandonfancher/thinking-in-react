import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';
import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.state = {
      todos: [
        { desc: 'Clean the garage', complete: false },
        { desc: 'Do the taxes', complete: false },
        { desc: 'Take a nap', complete: true},
      ],
      filter: 'all', // open, all, or complete
    };
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  addTodo(desc) {
    const todos = this.state.todos;
    const newTodo = { desc, complete: false };
    this.setState({ todos: [...todos, newTodo] })
  }

  toggleTodo(index) {
    const todos = this.state.todos.slice(); // copy the array to avoid mutating state directly
    todos[index].complete = !todos[index].complete; // change complete status of target todo
    this.setState({ todos });
  }

  deleteTodo(index) {
    const todos = this.state.todos.slice(); // copy the array to avoid mutating state directly
    todos.splice(index, 1); // remove the item from todos
    this.setState({ todos });
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Barebones Todo - Thinking in React</h2>
        </div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          filter={filter}
          todos={todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
        <Filter
          filter={filter}
          setFilter={this.setFilter}
        />
      </div>
    );
  }
}

export default App;
