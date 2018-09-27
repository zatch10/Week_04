import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "Get boba"]
  };

  addParameter = () => {
    this.setState({
      todos: [...this.state.todos, "Get more boba"]
    })
  };

  deleteParameter = () => {
    this.setState({
      todos:[]
      //remove(...this.state.todos)
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x} />
        ))}
        <button onClick={this.addParameter}> Add todo</button>
        <button onClick={this.deleteParameter}>Remove</button>
      </div>
    );
  }
}

export default App;
