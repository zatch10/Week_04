# Week_04
Intro to React


## What is state?

Every react component has a state is a set of variables that determines how a component renders and behaves. It is scoped so that only the component has access to those variables. To share variables betweeen componenets, you would use props. 

Here's an analogy to explain it. You can think of a thermometer is a component, where the state is the temperapture it shows. If you stick it in a freezer, the temperature will go down. If you stick it on the stove, the temperature will go up. The component will never change, its still a thermomemeter, but its state will change depending on where you put it. 

## How to get items from state to display. 

The first thing you would do is define the elements in state. Inside your compoenent, add these lines

```Javascript
 state = {
    todoListTitle: "My Todo List"
  };
```

This defines the title of the todo list in state. Insider the render method, in the jsx, you can execute commands as long as they are in curly braces. So if I wanted to access the title from state, I would say ```{this.state.todoListTitle}``` inside of the render method. Look at the example below. 
```Javascript
render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
      </div>
    );
  }
```

The nice thing about react is that you can modify the state without rerendering the entire page. Let's add a button to add more to you todo list. The button can call a function on click, which in this case is add parameter. 

```Javascript
 <button onClick={this.addParameter}> Add todo</button>
```

## Modifying State

Once we have defined the button, we have to write the function that handles what to do. We want to take the previous list of todos, add the new todo, and then update the state. This is written below. 

```Javascript
addParameter = () => {
    this.setState({
      todos: [...this.state.todos, "Get more boba"]
    })
  };
```  

The synatax ```...this.state.todos``` gets the list of todos currently in the state. The synatax ```[...this.state.todos, "Get more boba"]``` will add the todo ```"Get more boba"``` to the todo list, and return it as a new list. 

By wrapping this in  ``` this.setState({ })```, it tells react to rerender the parts of the code that depend on the state so your website reloads in real time. 

