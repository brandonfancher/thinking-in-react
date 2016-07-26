import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';
import logo from './images/logo.svg';
import './styles/App.css';

const mockState = {
  todos: [
    { desc: 'Clean the garage', status: 'open' },
    { desc: 'Do the taxes', status: 'open' },
    { desc: 'Take a nap', status: 'complete'},
  ],
  filter: 'all', // open, all, or complete
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Barebones Todo - Thinking in React</h2>
        </div>
        <AddTodo />
        <TodoList todos={mockState.todos} />
        <Filter filter={mockState.filter} />
      </div>
    );
  }
}

export default App;
