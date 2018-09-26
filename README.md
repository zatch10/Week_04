# Week_04
Intro to React

# react-bootcamp-fa18

### Components
As you saw in the last example, manually writing each item in the TODO list quickly
became a hassle. Furthermore, simply having an HTML list item means that there's
nothing much else that can be done with the TODO list or the list items themselves.
However, with a React Component, which are essentially the same as functions and
take a parameter called props, additional dynamic features can be added to your list
items. In addition, the code that's in the component can also be reused by
using the component in a similar manner to using HTML tags, leading to modular,
maintainable, and more readable code.

In React, components can also be written as a function:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

This is a valid component since it takes a single parameter `props` and returns
a React element (remember that the HTML isn't actually HTML with JSX)

However, another way to write components in React involves creating a class:
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

This is equivalent to the functional method and the props parameter is still passed in.
Also note that the `this` keyword is used with classes, indicating that multiple
instances of Welcome can be rendered with different props - leading to the same
element having different behaviors.

### What are properties (props)?
Every component created in React can be customized when they're created through
receiving creation parameters. These parameters are called props, and are passed
into a React component through specifying the property and its value. For example:

```javascript
class App extends React.Component {
  render() {
    return (
      <Welcome name='Aria'/>
      <Welcome name='Roy'/>
      <Welcome name='Megha'/>
    )
  }
}
```

Each rendering of the Welcome component will receive a different value of the
name property, and thus will output a different Hello message accordingly.
