import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo'
import { addTodo, findById, generateId, removeTodo, toggleTodo, updateTodo } from './lib/todoHelpers'
import { partial, pipe } from './lib/utils'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn JSX', isComplete: false },
      { id: 2, name: 'Learn to Route', isComplete: false },
      { id: 3, name: 'Copy TODOMVC styles', isComplete: true }
    ],
    currentTodo: '',
    errorMessage: ''
  }

  handleRemove = (id, event) => {
    event.preventDefault()
    this.setState({
      todos: removeTodo(id, this.state.todos),
      errorMessage: ''
    })
  }

  handleToggle = (id) => {
    const updateTodoPipeline = pipe(
      findById,
      toggleTodo,
      partial(updateTodo, this.state.todos)
    )
    this.setState({
      todos: updateTodoPipeline(id, this.state.todos),
      errorMessage: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(newTodo, this.state.todos)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({ errorMessage: 'Please enter a TODO'})
  }

  handleInputChange = (event) => {
    this.setState({ currentTodo: event.target.value })
  }

  render () {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todos React Router</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            todo={this.state.currentTodo} />
          <TodoList
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
            todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
