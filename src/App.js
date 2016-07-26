import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';
import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.setFilter = this.setFilter.bind(this);
    this.state = {
      todos: [
        { desc: 'Clean the garage', status: 'open' },
        { desc: 'Do the taxes', status: 'open' },
        { desc: 'Take a nap', status: 'complete'},
      ],
      filter: 'all', // open, all, or complete
    };
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Barebones Todo - Thinking in React</h2>
        </div>
        <AddTodo />
        <TodoList filter={filter} todos={todos} />
        <Filter filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
