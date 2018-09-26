# Week_04
Intro to React


## Introduction to React: What is it?
Developed by Facebook, React is an efficient and flexible Javascript library primarily
used for building user interfaces. One of its most powerful features and the source of
React's speed involves the virtual DOM. In addition, the library supports custom elements
called Components, which allows for more modular, reusable code.

# WHat is the DOM ?
The Document Object Model is a programming interface for HTML. It represents a document as 
nodes and objects, allowing you to manipulate them using Javascript. To manipulate it, you would do something like this
```Javascript
var paragraphs = document.getElementsByTagName("P");
```

### Why is React fast?
Normally, web applications would directly build or modify the document object model,
which utilizes expensive operations. However, React builds an additional layer between
the application and the DOM, called the Virtual Document Object Model, or virtual DOM.
This layer increases efficiency by constructing/applying changes to the virtual DOM and then
calculating the minimal difference between the virtual and real document object models, finally
updating the actual DOM in as few steps as possible.

### What is JSX?
JSX stands for Javascript Extension and is a React extension that permits writing
Javascript that looks like HTML. For example, a simple component or the App.js may
have the following code:
```javascript
class App extends Component {
  render() {
    return(
      <h1 className="h1-large">Hello World!</h1>
    );
  }
}
```

Although the Javascript code includes HTML, the HTML code is actually Javascript.
After the code is translated, the Javascript for the App Component will be:
```javascript
class App extends Component {
  render() {
    return(
      React.createElement('h1', {className: 'h1-large'}, 'Hello World!')
    );
  }
}
```

Thus, JSX merely allows us to write Javascript that looks like HTML, which proves to
be beneficial especially with visualizing the DOM and being able to write more familiar
code within our components.

### Piecing together the App
The entry point for React applications is the index.js file. As a result, all of the
code for a single page web application can theoretically be placed in the index.js.
Stylistically, however, I'm sure you understand why thats a very, very bad idea.
Instead, to take full advantage of React's features, especially with components
and reusability, pages and other elements are further split and then synthesized
into a comprehensive application that finally gets injected into the DOM via the root element.
