import React, { Component } from 'react';
import './styles/AddTodo.css';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      todoText: '',
    }
  }

  handleTextChange(e) {
    this.setState({ todoText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const addTodo = this.props.addTodo;
    addTodo(this.state.todoText);
    this.setState({ todoText: '' })
  }

  render() {
    const todoText = this.state.todoText;
    return (
      <div className="AddTodo">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleTextChange}
            placeholder="Add a new task"
            value={todoText}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
