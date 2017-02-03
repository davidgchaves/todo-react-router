import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer, TodoForm, TodoList } from './components/todo'
import { addTodo, findById, filterTodos, generateId, removeTodo, toggleTodo, updateTodo } from './lib/todoHelpers'
import { partial, pipe } from './lib/utils'
import { createTodo, destroyTodo, loadTodos, saveTodo } from './lib/todoService'

class App extends Component {
  state = {
    todos: [],
    currentTodo: '',
    errorMessage: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount () {
    loadTodos()
      .then(todos => this.setState({ todos }))
  }

  handleRemove = (id, event) => {
    event.preventDefault()
    this.setState({
      todos: removeTodo(id, this.state.todos),
      errorMessage: ''
    })
    destroyTodo(id)
      .then(() => this.showTempMessage('Todo Removed'))
  }

  handleToggle = id => {
    const updateTodoPipeline = pipe(findById, toggleTodo)
    const updateTodosWith = partial(updateTodo, this.state.todos)
    const editedTodo = updateTodoPipeline(id, this.state.todos)

    this.setState({
      todos: updateTodosWith(editedTodo),
      errorMessage: ''
    })
    saveTodo(editedTodo)
      .then(() => this.showTempMessage('Todo Updated'))
  }

  handleSubmit = event => {
    event.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(newTodo, this.state.todos)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo Added'))
  }

  showTempMessage = message => {
    this.setState({ message })
    setTimeout(
      () => this.setState({ message: '' }),
      2500
    )
  }

  handleEmptySubmit = event => {
    event.preventDefault()
    this.setState({ errorMessage: 'Please enter a TODO'})
  }

  handleInputChange = event => {
    this.setState({ currentTodo: event.target.value })
  }

  render () {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    const todos = filterTodos(this.context.route, this.state.todos)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todos React Router</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            todo={this.state.currentTodo} />
          <TodoList
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
            todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
