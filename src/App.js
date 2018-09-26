import React, { Component } from 'react'
import ToDoListItem from './components/toDoListItem'

class App extends Component {
  render() {
    return(
      <div> 
      <h1>Hello World!</h1>
      <h1>Todo List</h1>
        <ol>
          <ToDoListItem todo="Walk into latea"></ToDoListItem>
          <ToDoListItem todo="Get boba"></ToDoListItem>
          <ToDoListItem todo="Get more boba"></ToDoListItem>
          
        </ol>
      </div>
    );
  }
}

export default App