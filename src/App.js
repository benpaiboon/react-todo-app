import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    // Global States
    this.state = {
      todos: [],
      title: 'Reactjs Simple Todo App',
      counter: 0
    }
  }

  // Methods
  addTodo = (event) => {
    event.preventDefault();
    // console.log(this.refs);
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;

    let todo = {
      name: name,
      completed: completed,
      counter: counter
    }
    counter += 1;
    let todos = this.state.todos;
    todos.push(todo);

    this.setState({
      todos: todos,
      counter: counter
    });

    this.refs.todoForm.reset();
  }

  removeTodo = (todo) => () => {
    let todos = this.state.todos;
    let index = todos.indexOf(todo);

    if (index > -1) {
      todos.splice(index, 1);
    }

    this.setState({
      todos: todos
    });
  }

  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    let todoList = todos.map(todo =>
      <li key={todo.counter}>
        {todo.name} {todo.completed} <button onClick={this.removeTodo(todo)}>Remove</button>
      </li>
    );

    return (
      <div className="App">
        <h1>{title}</h1>
        <form ref="todoForm">
          <input type="text" ref="name" placeholder="name" />
          <input type="text" ref="completed" placeholder="completed" />
          <button onClick={this.addTodo}>Add</button>
        </form>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

export default App;
