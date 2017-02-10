# Notes on *Andrew Van Slaars' Course: Build Your First Production Quality React App*

## Setup and Running Locally

``` console
❯ npm install
❯ npm run server
❯ npm start
```

## ES2015 Modules

Let's say we have multiple components related to the same piece of functionality that live in the same directory:

- the `TodoForm` component from `./components/todo/`,
- the `TodoList` component from `./components/todo/`.

Both are related to the `Todo` functionality.

### One per line

We can import them **one per line** anywhere

`App.js`

``` js
import { TodoForm } from './components/todo/TodoForm'
import { TodoList } from './components/todo/TodoList'
```

### One single line

...Or we could:

- place an `index.js` file at `./components/todo`, and
- re-export them from a single place.

`components/todo/index.js`

``` js
export { TodoForm } from './TodoForm'
export { TodoList } from './TodoList'
```

So now we can import them in **one single line** anywhere

`App.js`

``` js
import { TodoForm, TodoList } from './components/todo'
```


## ES2016 Property Initializer Syntax in Classes

### Using ES2015 Classes

``` js
class App extends Component {
  constructor () {
    super()

    this.state = {
      todos: [ ... ],
      currentTodo: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit      = this.handleSubmit.bind(this)
  }

  handleSubmit      (event) { ... }
  handleInputChange (event) { ... }

  render () { ... }
}
```

### Using ES2016 Property Initializer Syntax

- [Property Initializer Syntax in Babel Docs](https://babeljs.io/docs/plugins/transform-class-properties/)

``` js
class App extends Component {
  state = {
    todos: [ ... ],
    currentTodo: ''
  }

  handleSubmit      = (event) => { ... }
  handleInputChange = (event) => { ... }

  render () { ... }
}
```


## ES2016 `static` Class Properties

### Using ES2015 Classes

``` js
class Link extends Component {
  render () { ... }
}

Link.contextTypes = {
  route:       React.PropTypes.string,
  linkHandler: React.PropTypes.func
}
```

### Using ES2016 `static` Class Properties

- [Context in React Docs](https://facebook.github.io/react/docs/context.html)
- [static Class Properties in Babel Docs](https://babeljs.io/docs/plugins/transform-class-properties/)

``` js
class Link extends Component {
  static contextTypes = {
    route:       React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  render () { ... }
}
```


## Hand-Rolled Router

### About `props.children`

`props.children` gives us the ability to:

- specify content inbetween component tags, and
- render it out in a `render` method.

### Specify content inbetween component tags

`Link.js`

``` js
class Link extends Component {
  render () {
    return <a href="#">{this.props.children}</a>
  }
}
```

### Render out children of a component

Using `Link` from `Footer.js`

``` js
const Footer = () => {
  return (
    <footer>
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Complete</Link>
    </footer>
  )
}
```

Through `this.props.children`, `Link` is able to access to `"All"`, `"Active"` and `"Complete"`, an render them out in `<a href="#">{this.props.children}</a>`


## About OnPopState Event

- [WindowEventHandlers.onpopstate on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate)

`window.onpopstate` fires every time we use the **back** or **forward** buttons in the browser.


## Where to go from here

Some possible additions / modifications / experiments:

- Switch to `flow`.
- Adapt CSS.
- Switch to `inline-css`.
- Use `ESLint` `standard`.
- Export state to `redux`.
- Try with `elm-architecture`.
