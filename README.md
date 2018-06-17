<hr/>
To encourage us and if you like the project then click star(💫)
<hr/>

Below is a list of ReactJS interview questions and answers.
-------------------------------------------------------------------
| No. | Questions |
|---- | ---------
|1  | [What is ReactJS?](#what-is-reactjs) |
|2  | [What are the major features of ReactJS?](#what-are-the-major-features-of-reactjs)|
|3  | [What is JSX?](#what-is-jsx)|
|4  | [What is the difference between element and component?](#What-is-the-difference-between-element-and-component)|
|5  | [How to create components in ReactJS?](#how-to-create-components-in-reactjs)|
|6  | [When to use a Class Component over a Functional Component?](#when-to-use-a-class-component-over-a-functional-component)|
|7  | [What are Pure Components?](#what-are-pure-components?)|
|8  | [What is state in ReactJS?](#what-is-state-in-reactjs?)|
|9  | [What is props in ReactJS?](#what-is-props-in-reactjs?)|
|10 | [What is the difference between state and props?](#what-is-the-difference-between-state-and-props?)|
|11 | [Why we should not update the state directly?](#why-we-should-not-update-the-state-directly)|
|12 | [What is the purpose of callback function as an argument of setState?](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate?)
|13 | [What is the difference between HTML and React event handling?](#what-is-the-difference-between-html-and-react-event-handling)|
|14 | [How to bind methods/event handlers in JSX callbacks?](#how-to-bind-methods/event-handlers-in-jsx-callbacks)|
|15 | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback?)|
|16 | [What are synthetic events in ReactJS?](#what-are-synthetic-events-in-reactjs?)|
|17 | [What is inline conditional expressions?](#what-is-inline-conditional-expressions)|
|18 | [What is key and benefit of using it in lists?](#what-is-key-and-benefit-of-using-it-in-lists)|
|19 | [What is the use of refs?](#what-is-the-use-of-refs)|
|20 | [What is virtual DOM?](#what-is-virtual-DOM)|
|21 | [What is the difference between ShadowDOM and VirtualDOM?](#what-is-the-difference-between-shadowdom-and-virtualdom?)|
|22 | [What is React Fiber?](#what-is-react-fiber)|
|23 | [What are controlled components?](#what-are-controlled-components)|
|24 | [What is the difference between createElement and cloneElement?](#what-is-the-difference-between-createelement-and-cloneelement?)|
|25 | [What is Lifting State Up in ReactJS?](#what-is-lifting-state-up-in-reactjs)|
|26 | [What are the different phases of ReactJS component’s lifecycle?](#what-are-the-different-phases-of-reactjs-component’s-lifecycle)|
|27 | [What are the lifecycle methods of ReactJS?](#what-are-the-lifecycle-methods-of-reactjs)|
|28 | [What are Higher-Order components?](#what-are-higher-order-components)|
|29 | [What is context?](#what-is-context)|
|30 | [What is children prop?](#what-is-children-prop?)|
|31 | [How to write comments in ReactJS?](#how-to-write-comments-in-reactjs)|
|32 | [What is the purpose of using super(props)?](#what-is-the-purpose-of-using-super(props)?)|
|33 | [What is reconciliation?](#what-is-reconciliation?)|
|34 | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback?)|
|35 | [What would be the common mistake of function being called every time the component renders?](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders?)|
|36 | [Why is it necessary to capitalize the components?](#why-is-it-necessary-to-capitalize-the-components?)|
|37 | [Why ReactJS uses className over class?](#why-reactjs-uses-classname-over-class?)|
|38 | [What are fragments?](#what-are-fragments?)|
|39 | [What are portals in ReactJS?](#what-are-portals-in-reactjs?)|
|40 | [What are forward refs?](#what-are-forward-refs?)|
|41 | [What are stateless components?](#what-are-stateless-components?)|
|42 | [What are stateful components?](#what-are-stateful-components?)|
|43 | [How to apply validation on Props in ReactJS?](#how-to-apply-validation-on-props-in-reactjs?)|
|44 | [What are the advantages of ReactJS?](#what-are-the-advantages-of-reactjs?)|
|45 | [What are the limitations of ReactJS?](#what-are-the-limitations-of-reactjs?)|
|46 | [What are the drawbacks of MVW pattern](#what-are-the-drawbacks-of-mvw-pattern)|
|47 | [What is flux?](#what-is-flux?)|
|48 | [What is redux?](#what-is-redux?)|
|49 | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux?)|
|50 | [What is reselect?How it works?](#what-is-reselect?how-it-works?)|
|51 | [What are Redux selectors?Why use them?](#what-are-redux-selectors?why-use-them?)|
|52 | [What is React Router?](#what-is-react-router?)|



### What is ReactJS?

ReactJS is an **open-source frontend JavaScript library** which is used for building user interfaces specifically for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. ReactJS was first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.

### What are the major features of ReactJS

The major features of ReactJS are as follows,

- It uses **VirtualDOM** instead RealDOM considering that RealDom manipulations are expensive.
- Supports **server-side rendering**
- Follows **Unidirectional** data flow or data binding
- Uses **reusable/composable** UI components to develop the view

### What is JSX?

JSX is a syntax notation for **JavaScript XML**(XML-like syntax extension to ECMAScript). It stands for JavaScript XML. It provides expressiveness of JavaScript along with HTML like template syntax. For example, the below text inside h1 tag return as javascript function to the render function,

```
   render(){
    	return(
         <div>
            <h1> Welcome to React world!!</h1>
         </div>
    	);
     }
```
### What is the difference between element and component?
An **element** is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
The object representation of React element would be as follows,
```
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```
The above createElement returns as object as below,
```
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
```
And finally it renders to the DOM using ReactDOM.render as below,
```
<div id='login-btn'>Login</div>
```
Whereas a **component** can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output. JSX transpiled as createElement at the end.
```
function Button ({ onLogin }) {
  return React.createElement(
    'div',
    {id: 'login-btn', onClick: onLogin},
    'Login'
  )
}
```

### How to create components in ReactJS?

There are two possible ways to create ReactJS Components.

1. **Functional components:** This is the simplest way to create ReactJS components. It accepts props as an Object and returns ReactJS elements. We call it as “functional” because those are pure JavaScript functions.
```
	function Greeting(props) {
   	   return <h1> Hello, {props.message}</h1> 
	}
```

2. **Class components:** You can also use Es6 class to define component. The above functional component can be written as below,
```
      class Greeting extends React.Component {
  	    render() {
    		    return <h1>Hello, {this.props.message}</h1>;
  	        }
	    }
```

### When to use a Class Component over a Functional Component?

If the component need state or lifecycle methods then use class component otherwise use functional component.

### What are Pure Components?
**PureComponent** is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

### What is state in ReactJS?
 State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

 Let's create user component with message state,

 ```
 class User extends React.Component {
    constructor(props) {
       super(props);

       this.state = {
          message: "Welcome to React world",
       }
    }
    render() {
       return (
          <div>
             <h1>{this.state.message}</h1>
          </div>
       );
    }
 }
 ```
 ![ScreenShot](images/state.jpg)

### What is props in ReactJS?

Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

1. Pass custom data to your React component.
2. Trigger "state" changes.
3. Use via this.props.reactProp inside component's render() method.

For example, let us create an element with reactProp property,
```
 <Element reactProp = "1" />
```

This "reactProp" (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

```
 props.reactProp;
```

### What is the difference between state and props?
Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. i.e, Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

### Why we should not update the state directly?

If you try to update state directly then it won’t re-render the component.

```
    //Wrong
    This.state.message =”Hello world”;
```

Instead use setState() method. It schedules an update to a component’s state object. When state changes, the component responds by re-rendering

```
    //Correct
    This.setState({message: ‘Hello World’});
```

**Note:** The only place you can assign the state is constructor.


### What is the purpose of callback function as an argument of setState?
The callback function is invoked when setState finished and the component gets rendered. Since setState is **asynchronous** the callback function is used for any post action.
**Note:** It is recommended to use lifecycle method rather this callback function.
```
setState({name: 'sudheer'}, () => console.log('The name has updated and component re-rendered'));
```
### What is the difference between HTML and React event handling?

1. In HTML, the event name should be in lowercase.
```
            <button onclick="activateLasers()">
```

Whereas in ReactJS it follows camelCase convention,

```
            <button onClick={activateLasers}>
```

2. In HTML, you can return false to prevent default behavior,

```
        <a href="#" onclick="console.log('The link was clicked.'); return false"/>
```

3. Whereas in ReactJS you must call preventDefault explicitly,

```
            function handleClick(e) {
    	        e.preventDefault();
    	        console.log('The link was clicked.');
  	        }
```

### How to bind methods/event handlers in JSX callbacks?
**(Or)**
### How to use this in JSX callbacks?

There are 3 possible ways to achieve,

1.	**Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same thing applies for ReactJS event handlers defined as class methods. Normally we bind them in constructor as follows,
```
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
             }

            handleClick() {
                // Perform some logic
            }
```

2. **Public class fields syntax:** If you don’t like to use bind approach then public class fields syntax can be used to correctly bind callbacks
```
            handleClick = () => {
                console.log('this is:', this);
            }
            <button onClick={this.handleClick}>
               Click me
            </button>
```

3. **Arrow functions in callbacks:** You can use arrow functions directly in the callbacks as below
```
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
```

**Note:** If the callback is passed as prop to lower components, those components might do an extra re-rendering.  In those cases, it is preferred to go with bind or public class fields syntax approach considering performance

### What are synthetic events in ReactJS?
SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

### What is inline conditional expressions?

You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator(&&).
```
    <h1>Hello!</h1>
      {messages.length > 0 &&
    <h2>
          You have {messages.length} unread messages.
    </h2>
```
### What is key and benefit of using it in lists?

 A **“key”** is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.

   For example, most often we use IDs from your data as keys

```
    const todoItems = todos.map((todo) =>
        <li key={todo.id}>
        {todo.text}
        </li>
     );
```
 When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

```
    const todoItems = todos.map((todo, index) =>
        <li key={index}>
            {todo.text}
        </li>
        );
```

**Note:**

1. We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state
2. If you extract list item as separate component then apply keys on list component instead li tag.

### What is the use of refs?
The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when we need direct access to DOM element or an instance of a component.
```
class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} /> // Access DOM input in handle submit
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```
We can also use it in functional components with the help of closures.

### What is virtual DOM?
The virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the “real” DOM. It’s a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

### What is the difference between ShadowDOM and VirtualDOM?
The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

### What is React Fiber?
Fiber is the new reconciliation engine or reimplementation core algorithm in React 16. Its main goal is to enable incremental rendering of the virtual DOM.The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and  assign priority to different types of updates; and new concurrency primitives.

### What are controlled components?

A ReactJS component that controls the input elements within the forms on subsequent user input is called **“Controlled component”**. i.e, every state mutation will have an associated handler function.

  For example, to write all the names in uppercase letters, we use handleChange as below,

```
            handleChange(event) {
                this.setState({value: event.target.value.toUpperCase()});
            }
```
### What is the difference between createElement and cloneElement?
JSX elements will be transpiled to createElement JS syntax to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it to new props.
### What are the different phases of ReactJS lifecycle?

There are four different phases of React component’s lifecycle:
1. **Initialization:** In this phase react component prepares setting up the initial state and default props.
2. **Mounting:** The react component is ready to mount in the browser DOM. This phase covers **componentWillMount** and **componentDidMount** lifecycle methods.
3. **Updating:** In this phase, the component get updated in two ways, sending the new props and updating the state. This phase covers **shouldComponentUpdate, componentWillUpdate and componentDidUpdate** lifecycle methods.
4. **Unmounting:** In this last phase, the component is not needed and get unmounted from the browser DOM. This phase include **componentWillUnmount** lifecycle method.
![ScreenShot](images/phases.png)


### What are the lifecycle methods of ReactJS?

-	**componentWillMount:** Executed before rendering and is used for App level configuration in your root component.
-	**componentDidMount:** Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.
-	**componentWillReceiveProps:** Executed when particular prop updates to trigger state transitions.
-	**shouldComponentUpdate:** Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.
-	**componentWillUpdate:** Executed before re-rendering the component when there are pros & state changes confirmed by shouldComponentUpdate  which returns true.
-	**componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes.
-   **componentWillUnmount:** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

### What is Lifting State Up in ReactJS?

When several components need to share the same changing data then it is recommended to lifting the shared state up to their closest common ancestor. For example, if two child components sharing the same data from its parent then move the state to parent instead of maintaining the local state inn both child components.

### What are Higher-Order components?

A higher-order component **(HOC)** is a function that takes a component and returns a new component. Basically, it’s a pattern that is derived from React’s compositional nature
We call them as **“pure’ components”**  because they can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.
```
const EnhancedComponent = higherOrderComponent(WrappedComponent);

```
###
HOC can be used for many use cases as below,

1. Code reuse, logic and bootstrap abstraction
2. Render High jacking
3. State abstraction and manipulation
4. Props manipulation
### How to make AJAX class? In which component lifecycle should I make an AJAX call?

You can use AJAX libraries such as  Axios, jQuery AJAX, and the browser built-in window.fetch. You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.
For example, the employees list fetched from API and set local state as below,
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: null,

    };
  }

  componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              employees: result.employees
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    render() {
        const { error, employees } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else {
          return (
            <ul>
              {employees.map(item => (
                <li key={employee.name}>
                  {employee.name}-{employees.experience}
                </li>
              ))}
            </ul>
          );
        }
      }

    }
```

### What is context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.
```
const {Provider, Consumer} = React.createContext(defaultValue);

```

### What is children prop?

Children is a prop(this.prop.children) that allow you to pass components as data to other components, just like any other prop you use.
There are a number of methods available in the React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.

A simple usage of children prop looks as below,
```
var MyDiv = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>;
  }
});

ReactDOM.render(
  <MyDiv>
    <span>Hello</span>
    <span>World</span>
  </MyDiv>,
  node
);
```
### What is the purpose of using super(props)?

A child class constructor cannot make use of **this** reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors.

**Passing props:**
```
class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);  // Prints { name: 'sudheer',age: 30 }
    }
}
```
**Not passing props:**
```
class MyComponent extends React.Component {
    constructor(props) {
        super();

        console.log(this.props); // Prints undefined

        // But Props parameter is still available
        console.log(props); // Prints { name: 'sudheer',age: 30 }
    }

    render() {
        // No difference outside constructor
        console.log(this.props) // Prints { name: 'sudheer',age: 30 }
    }
}
```

The above code snippets reveals that this.props behavior is different only with in the constructor. It would be same outside the constructor.

### How to write comments in ReactJS?

The comments in ReactJS/JSX is similar to javascript multiline comments which are wrapped with curly braces

**Single-line comments:**
```
<div>
  {/* Single-line comments */}
  Welcome {user}, Let's play React
</div>
```

**Multi-line comments:**
```
<div>
  {/* Multi-line comments for more than
   one line */}
  Welcome {user}, Let's play React
</div>
```

### What is reconciliation?

When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called “reconciliation”.

### How to pass a parameter to an event handler or callback?

You can use an arrow function to wrap around an event handler and pass parameters:

```
<button onClick={() => this.handleClick(id)} />
```
This is equivalent to calling .bind as below,
```
<button onClick={this.handleClick.bind(this, id)} />
```

### What would be the common mistake of function being called every time the component renders?

You need to make sure that function is not being called while passing the function as a parameter.
```
render() {
  // Wrong way: handleClick is called instead of passed as a reference!
  return <button onClick={this.handleClick()}>Click Me</button>
}
```

Instead, pass the function itself without parenthesis:

```
render() {
  // Correct way: handleClick is passed as a reference!
  return <button onClick={this.handleClick}>Click Me</button>
}
```

### Why is it necessary to capitalize the components?
It is necessary because components are not the DOM element but they are constructors. If they are not capitalized, they can cause various issues and can confuse developers with several elements.

### Why ReactJS uses className over class?
class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.

```
render() {
  return <span className="menu navigation-menu">Menu</span>
}
```

### What are fragments?

It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

There is also a shorter syntax which is not supported in many tools

```
render() {
    return (
      <>
         <ChildA />
         <ChildB />
         <ChildC />
      </>
    );
  }
```

### What are portals in ReactJS?

Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```
ReactDOM.createPortal(child, container);
```

The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

### What are forward refs?

Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

```
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>Forward Ref</ButtonElement>;
```

### What are stateless components?
If the behaviour is independent of its state then it can be a stateless component.You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for stateless functional components. There are a lot of benefits if you decide to use stateless functional components here; they are easy to write, understand, and test, and you can avoid the this keyword altogether.
### What are stateful components?
If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component.These Stateful components are always class components and have a state that gets initialized in the constructor.
```
class App extends Component {
 constructor(props) {
  super(props);
  this.state = { count: 0 };
 }

  render() {
     // omitted for brevity
   }

 }
```

### How to apply validation on Props in ReactJS?
When the application is running in development mode, React will automatically check  for all props that we set on components to make sure they must right correct and right data type. For incorrect type, it will generate warning messages in the console for development mode whereas it is disabled in production mode due performance impact. The mandatory prop is defined with isRequired.

The set of predefined prop types are below

1. React.PropTypes.string
2. React.PropTypes.number
3. React.PropTypes.func
4. React.PropTypes.node
5. React.PropTypes.bool

For example, we define propTypes for user component as below,
```
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    return (
      <h1>Welcome, {this.props.name}</h1>
      <h2>Age, {this.props.age}
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired

};
```

### What are the advantages of ReactJS?
1. Increases the application’s performance with Virtual DOM
2. JSX makes code is easy to read and write
3. It renders both on client and server side
4. Easy to integrate with other frameworks(Angular, BackboneJS) since it is only a view library
5. Easy to write UI Test cases and integration with tools such as JEST.

### What are the limitations of ReactJS?
Below are the list of limitations,

1. React is just a view library, not a full-blown framework
2. There is a learning curve for beginners who are new to web development.
3. Integrating React.js into a traditional MVC framework requires some additional configuration
4. The code complexity increases with inline templating and JSX.
5. Too many smaller components leading to over engineering or boilerplate

### What are the drawbacks of MVW pattern?
Below are some drawbacks of MVW pattern

1. The DOM manipulation is very expensive which causes applications behaves slowly and inefficient
3. Due to circular dependencies, a complicated model was created around models and views
3. Lot of data changes happens for collaborative applications(like google docs).
4. No way to do undo (travel back in time) easily without adding so much extra code

### What is flux?
Flux is an application design paradigm used as a replacement for the more traditional mvc pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook used this pattern internally when working with React
 The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows,
![ScreenShot](images/flux.png)

### What is redux?
Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with reactjs, or with any other view library. It is tiny (about 2kB) and has no dependencies.

### What are the core principles of Redux?

Redux follows three fundamental principles
1. **Single source of truth:** The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
2. **State is ready only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write pure reducers(Reducers are just pure functions that take the previous state and an action, and return the next state).

### What are Redux selectors?Why use them?
Selectors are functions that take Redux state as an argument and return some data to pass to the component.

### What is reselect?How it works?
Reselect is a selector library(for Redux) which uses memoization concept. It was originally written to compute derived data from redux-like applications state, but it cann't be tied to any architecture or library.

Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect return the cached saved output. It's memoization and cache are fully customizable.

###  What are the main features of reselect library?
Below are the major features of reselect library
1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
3. Selectors are composable. They can be used as input to other selectors.

#### Give an example of reselect usage?

### What is React Router?
React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

### What is an action in redux?
Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store.  Actions must have a type property that indicates the type of action being performed.

For example an example action which represents adding a new todo item,

```
{
  type: ADD_TODO,
  text: 'Add todo item'
}
```



