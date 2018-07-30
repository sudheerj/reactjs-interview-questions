<hr/>
To encourage us and if you like the project then click star(💫) and also any PR contributions are appreciated
<hr/>

Below is a list of ReactJS interview questions and answers.
-------------------------------------------------------------------
| No. | Questions |
|---- | ---------
|1  | [What is ReactJS?](#what-is-reactjs) |
|2  | [What are the major features of ReactJS?](#what-are-the-major-features-of-reactjs)|
|3  | [What is JSX?](#what-is-jsx)|
|4  | [What is the difference between element and component?](#what-is-the-difference-between-element-and-component)|
|5  | [How to create components in ReactJS?](#how-to-create-components-in-reactjs)|
|6  | [When to use a Class Component over a Functional Component?](#when-to-use-a-class-component-over-a-functional-component)|
|7  | [What are Pure Components?](#what-are-pure-components)|
|8  | [What is state in ReactJS?](#what-is-state-in-reactjs)|
|9  | [What is props in ReactJS?](#what-is-props-in-reactjs)|
|10 | [What is the difference between state and props?](#what-is-the-difference-between-state-and-props)|
|11 | [Why we should not update the state directly?](#why-we-should-not-update-the-state-directly)|
|12 | [What is the purpose of callback function as an argument of setState?](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)
|13 | [What is the difference between HTML and React event handling?](#what-is-the-difference-between-html-and-react-event-handling)|
|14 | [How to bind methods/event handlers in JSX callbacks?](#how-to-bind-methods/event-handlers-in-jsx-callbacks)|
|15 | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback)|
|16 | [What are synthetic events in ReactJS?](#what-are-synthetic-events-in-reactjs)|
|17 | [What is inline conditional expressions?](#what-is-inline-conditional-expressions)|
|18 | [What is key and benefit of using it in lists?](#what-is-key-and-benefit-of-using-it-in-lists)|
|19 | [What is the use of refs?](#what-is-the-use-of-refs)|
|20 | [What is virtual DOM?](#what-is-virtual-DOM)|
|21 | [What is the difference between ShadowDOM and VirtualDOM?](#what-is-the-difference-between-shadowdom-and-virtualdom)|
|22 | [What is React Fiber?](#what-is-react-fiber)|
|23 | [What are controlled components?](#what-are-controlled-components)|
|24 | [What is the difference between createElement and cloneElement?](#what-is-the-difference-between-createelement-and-cloneelement)|
|25 | [What is Lifting State Up in ReactJS?](#what-is-lifting-state-up-in-reactjs)|
|26 | [What are the different phases of ReactJS component’s lifecycle?](#what-are-the-different-phases-of-reactjs-component’s-lifecycle)|
|27 | [What are the lifecycle methods of ReactJS?](#what-are-the-lifecycle-methods-of-reactjs)|
|28 | [What are Higher-Order components?](#what-are-higher-order-components)|
|29 | [What is context?](#what-is-context)|
|30 | [What is children prop?](#what-is-children-prop)|
|31 | [How to write comments in ReactJS?](#how-to-write-comments-in-reactjs)|
|32 | [What is the purpose of using super(props)?](#what-is-the-purpose-of-using-super(props))|
|33 | [What is reconciliation?](#what-is-reconciliation)|
|34 | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback)|
|35 | [What would be the common mistake of function being called every time the component renders?](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders)|
|36 | [Why is it necessary to capitalize the components?](#why-is-it-necessary-to-capitalize-the-components)|
|37 | [Why ReactJS uses className over class?](#why-reactjs-uses-classname-over-class)|
|38 | [What are fragments?](#what-are-fragments)|
|39 | [What are portals in ReactJS?](#what-are-portals-in-reactjs)|
|40 | [What are forward refs?](#what-are-forward-refs)|
|41 | [What are stateless components?](#what-are-stateless-components)|
|42 | [What are stateful components?](#what-are-stateful-components)|
|43 | [How to apply validation on Props in ReactJS?](#how-to-apply-validation-on-props-in-reactjs)|
|44 | [What are the advantages of ReactJS?](#what-are-the-advantages-of-reactjs)|
|45 | [What are the limitations of ReactJS?](#what-are-the-limitations-of-reactjs)|
|46 | [What are error boundaries in ReactJS16](#what-are-error-boundaries-in-reactjs16)|
|47 | [How error boundaries handled in React15?](#how-error-boundaries-handled-in-react15)|
|48 | [What are the recommended ways for static type checking?](#what-are-the-recommended-ways-for-static-type-checking)|
|49 | [What is the use react-dom package?](#what-is-the-use-react-dom-package)|
|50 | [What is the purpose of render() method of react-dom?](#what-is-the-purpose-of-render()-method-of-react-dom)|
|51 | [What is ReactDOMServer?](#what-is-reactdomserver)|
|52 | [How to use InnerHtml in ReactJS?](#how-to-use-innerhtml-in-reactjs)|
|53 | [How to use styles in ReactJS?](#how-to-use-styles-in-reactjs)|
|54 | [What is Shallow Renderer in ReactJS testing?](#what-is-shallow-renderer-in-reactjs-testing)|
|55 | [What is TestRenderer package in ReactJS?](#what-is-testrenderer-package-in-reactjs)|
|56 | [How events are different in ReactJS?](#how-events-are-different-in-reactjs)|
|57 | [What will happen if you use setState in constructor?](#what-will-happen-if-you-use-setstate-in-constructor)|
|58 | [What is the impact of indexes as keys?](#what-is-the-impact-of-indexes-as-keys)|
|59 | [Is it good to use setState() in componentWillMount()?](#is-it-good-to-use-setstate()-in-componentwillmount())|
|60 | [What will happen if you use Props in Initial State?](#what-will-happen-if-you-use-props-in-initial-state)|
|61 | [How do you conditionally render components?](#how-do-you-conditionally-render-components)
|62 | [Why we need to be careful when spreading props on DOM elements??](#why-we-need-to-be-careful-when-spreading-props-on-dom-elements)|
|63 | [How you use decorators in ReactJS?](#how-you-use-decorators-in-reactjs)|
|64 | [How do you memoize react components?](#how-do-you-memoize-react-components)|
|65 | [How you implement Server-Side Rendering(SSR)?](#how-you-implement-server-side-rendering(ssr))|
|66 | [How to enable production mode in React?](#how-to-enable-production-mode-in-react)|
|67 | [What are the two ways of formatting in React-Intl?](#what-are-the-two-ways-of-formatting-in-react-intl)|
|68 | [What is CRA and benefits of it?](#what-is-cra-and-benefits-of-it)|
|69 | [What is the lifecycle methods order in mounting?](#what-is-the-lifecycle-methods-order-in-mounting)|
|70 | [What are the lifecycle methods going to be deprecated in React16?](#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react16)|
|71 | [What is the use of getDerivedStateFromProps lifecycle method?](#what-is-the-use-of-getderivedstatefromprops-lifecycle-method)|
|72 | [What is the use of getSnapshotBeforeUpdate lifecycle method?](#what-is-the-use-of-getsnapshotbeforeupdate-lifecycle-method)|
|73 | [What is the difference between createElement and cloneElement?](#what-is-the-difference-between-createelement-and-cloneelement)|
|74 | [What is the recommended way for naming components?](#what-is-the-recommended-way-for-naming-components)|
|75 | [What is the recommended ordering of ReactJS component class?](#what-is-the-recommended-ordering-of-reactjs-component-class)|
|76 | [Which is preferred option with in callback refs and findDOMNode()?](#which-is-preferred-option-with-in-callback-refs-and-finddomnode())|
|77 | [Why String Refs are legacy?](#why-string-refs-are-legacy)|
|78 | [What is a switching component?](#what-is-a-switching-component)|
|79 | [Why we need to pass a function to setState?](#why-we-need-to-pass-a-function-to-setstate)|
|80 | [What is strict mode in React?](#what-is-strict-mode-in-react)|
|81 | [What is uncontrolled component?](#what-is-uncontrolled-component)|
|82 | [What are React Mixins?](#what-are-react-mixins)|
|83 | [Why isMounted is an Anti-pattern and what is the proper solution?](#why-ismounted-is-an-anti-pattern-and-what-is-the-proper-solution)|
|84 | [What are the pointer events supported in ReactJS?](#what-are-the-pointer-events-supported-in-reactjs)|
|85 | [Why component names should start with capital letter?](#why-component-names-should-start-with-capital-letter)|
|86 | [Is it custom DOM attributes supported in React16?](#is-it-custom-dom-attributes-supported-in-react16)|
|87 | [What is the difference between constructor and getInitialState?](#what-is-the-difference-between-constructor-and-getinitialstate)|
|88 | [Can you force a React component to re-render without calling setState?](#can-you-force-a-react-component-to-re-render-without-calling-setstate)|
|89 | [What is the difference between React Native and React?](#what-is-the-difference-between-react-native-and-react)|
|90 | [What is the difference between “super()” and “super(props)” in React using es6 classes?](#what-is-the-difference-between-“super()”-and-“super(props)”-in-react-using-es6-classes)|
|91 | [What is the difference between mapStateToProps and mapDispatchToProps?](#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops)|
|92 | [Can I dispatch an action in reducer?](#can-i-dispatch-an-action-in-reducer)|
|93 | [How to access redux store outside a react component?](#how-to-access-redux-store-outside-a-react-component)|
|94 | [What are the drawbacks of MVW pattern](#what-are-the-drawbacks-of-mvw-pattern)|
|95 | [What is flux?](#what-is-flux)|
|96 | [What is redux?](#what-is-redux)|
|97 | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux)|
|98 | [What is reselect?How it works?](#what-is-reselect?how-it-works)|
|99 | [What are Redux selectors?Why use them?](#what-are-redux-selectors?why-use-them)|
|100| [What is React Router?](#what-is-react-router)|



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

### How to create refs?
Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property with in constructor.
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```
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


### What are error boundaries in ReactJS16?
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info)
```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

After that use it as a regular component

```
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

### How error boundaries handled in React15?
React15 provided very basic support for error boundaries using the method name "unstable_handleError". Later this has been renamed as "componentDidCatch" starting from React16 beta release.

### What are the recommended ways for static type checking?
Normally we use PropTypes library(React.PropTypes moved to a different package since React15.5) for TypeChecking in the ReactJS applications. For large code bases, it is recommended to use static type checkers such as Flow or TypeScript to find out problems before run the code and provides auto-completion feature.

### What are render props?
**Render Props** is a simple technique for sharing code between React components using a prop whose value is a function. The below component uses render prop which returns a React element
```
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

The libraries such as React Router and DownShift uses this render props

### What is the use react-dom package?
The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are,
1. render()
2. hydrate()
3. unmountComponentAtNode()
4. findDOMNode()
5. createPortal()

### What is the purpose of render() method of react-dom?
This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element.
The syntax would be as follows
```
ReactDOM.render(element, container[, callback])
```
If the optional callback is provided, it will be executed after the component is rendered or updated.

### What is ReactDOMServer?
The ReactDOMServer object enables you to render components to static markup(typically used on node server). This object is mainly used for server-side rendering(SSR).The following methods can be used in both the server and browser environments:
1. renderToString()
2. renderToStaticMarkup()
For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call renderToString to render your root component to a string, which you then write to a response
```
// using Express
import { renderToString } from "react-dom/server"
import MyPage from "./MyPage"
app.get("/", (req, res) => {
  res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
  res.write("<div id='content'>");
  res.write(renderToString(<MyPage/>));
  res.write("</div></body></html>");
  res.end();
});
```

### How to use InnerHtml in ReactJS?
The attribute named "dangerouslySetInnerHTML" is React’s replacement for using innerHTML in the browser DOM. Just like InnerHtml, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass object __html as key and html text as the value.
For example, MyComponent uses this attribute for setting html markup using the code as below,
```
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

### How to use styles in ReactJS?
The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example,
```
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```
Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS (e.g. node.style.backgroundImage). The styles are not autoprefixed for vendor specific browsers. To support vendor specific browsers, you need to supply corresponding style properties,
```
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};
```

### What is Shallow Renderer in ReactJS testing?
Shallow Rendering is useful for writing unit test cases in ReactJS. It makes you render a component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.
For example, if you have the following component:
```
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
      <span className="description">Description</span>
    </div>
  );
}
```
Then you can assert as follows
```
import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
  <span className="description">Description</span>
]);
```
### What is TestRenderer package in ReactJS?
This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or jsdom.

```
import TestRenderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(testRenderer.toJSON());
// { type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ] }
```
### How events are different in ReactJS?
Handling events with React elements has some syntactic differences:
1. React event handlers are named using camelCase, rather than lowercase.
2. With JSX you pass a function as the event handler, rather than a string.

### What will happen if you use setState in constructor?
When you use setState(), then apart from assigning to the object state react also re-renders the component and all it's children. You would get error like this:Can only update a mounted or mounting component. So we need to use this.state to initialize variables inside constructor.

### What is the impact of indexes as keys?
Keys should be stable, predictable, and unique so that React can keep track of elements.

In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.

```
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}
```
If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much
```
{todos.map((todo) =>
  <Todo {...todo}
    key={todo.id} />
)}
```

### Is it good to use setState() in componentWillMount()?
It is recommended to avoid async initialization in componentWillMount lifecycle method. componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in componentDidMount instead of componentWillMount.
```
componentDidMount() {
  axios.get(`api/todos`)
    .then((result) => {
      this.setState({
        messages: [...result.data]
      })
    })
}
```
### What will happen if you use Props in Initial State?
If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function (or getInitialState) will never update the current state of the component. The initialization of state from props only runs when the component is first created.
For example, the below component won't display the updated input value,

```
class MyComponent extends React.Component {
  // constructor function (or getInitialState)
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      inputVal: props.inputValue
    };
  }

  render() {
    return <div>
            this.state.inputVal
           </div>
  }
}
```
Where as using props inside render method will give the updated value,

```
class MyComponent extends React.Component {
  // constructor function (or getInitialState)
  constructor(props) {
    super(props);
    this.state = {
      record: [],
    };
  }

  render() {
    return <div>
            this.props.inputVal
           </div>
  }
}
```

### How do you conditionally render components?
In some cases you want to render different components depending on some state. JSX does not render false or undefined, so you can use conditional short circuting to render a given part of your component only if a certain condition is true,
```
const MyComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address &&
      <p>{address}</p>
    }
  </div>
);
```
If you are in a if-else block condition then use ternary operator as below,
```
const MyComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address ?
      <p>{address}</p>
      : <p>Address is not available</p>
    }
  </div>
);
```

### Why we need to be careful when spreading props on DOM elements?
When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with **...rest** operator So it will add only required props. For example,
```
const ComponentA = () => (<ComponentB isDisplay={true} className="componentStyle"/>);
const ComponentB = ({ isDisplay, ...domProps }) => (<div {...domProps}>ComponentB</div>);
```
### How you use decorators in ReactJS?
You can decorate your class components, which is the same as passing the component into a function. Decorators are flexible and readable way of modifying component functionality.
For example,
```
@setTitle('Profile')
class Profile extends React.Component {
    ....
}
/*
  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above
*/
const setTitle = (title) => (WrappedComponent) => {
   return class extends React.Component {
      componentDidMount() {
          document.title = title
      }
      render() {
         return <WrappedComponent {...this.props} />
      }
   }
}
```
**Note:** Decorators are a feature that didn’t make it in ES7, but are currently a stage 2 proposal.

### How do you memoize react components?
There are memoize libraries available which can be used for functional react components. For example, moize library can memoize the component in another component as follow,
```
import moize from 'moize';
// this component will export a non-memoized version
import Foo from './components/Foo';
const MemoizedFoo = moize.react(Foo);
const Consumer = () => {
  <div>
    I will memoize the following entry:
    <MemoizedFoo/>
  </div>
};
```

### How you implement Server-Side Rendering(SSR)?
React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.
```
import ReactDOMServer from 'react-dom/server';
import App from './App';
ReactDOMServer.renderToString(<App />);
```
This method will output the regular HTML as a string, which can then be placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.

### How to enable production mode in React?
We should use Webpack’s DefinePlugin method to set NODE_ENV to production, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code,for example, Uglify's dead-code elimination to strip out development only code and comments, which will drastically reduce the size of your bundle.

### What is React-Intl?
The React Intl library makes internalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization.React Intl is part of FormatJS which provides bindings to React via its components and API.

### What are the main features of React-Intl?
Below are the main features of React-Intl
1. Display numbers with separators.
2. Display dates and times correctly.
3. Display dates relative to "now".
4. Pluralize labels in strings.
5. Support for 150+ languages.
6. Runs in the browser and Node.js.
7. Built on standards.

### What are the two ways of formatting in React-Intl?
The library provides two ways to format strings, numbers, and dates: React components or an API.
```
<FormattedMessage
  id=”account”
  defaultMessage=“The amount is less than minimum balance.”
/>
```
```
const messages = defineMessages({
  accountMessage: {
    id: "account",
    defaultMessage: “The amount is less than minimum balance.”,
  },
});

formatMessage(messages.accountMessage);
```

### What is CRA and benefits of it?
The 'create-react-app' CLI tool recently released by Facebook's engineering team that allows you to quickly create & run React applications with no configuration.

For example, lets create todo app using tool
```
Installation
npm install -g create-react-app

Create new project
create-react-app todo-app
cd todo-app

Build,test and run
npm run build
npm run test
npm start
```
### What is the lifecycle methods order in mounting?
The below methods are called  in the following order when an instance of a component is being created and inserted into the DOM
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

### What are the lifecycle methods going to be deprecated in React16?
The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.
1. componentWillMount
2. componentWillReceiveProps
3. componentWillUpdate

There is an “UNSAFE_” prefix to these lifecycles in an upcoming release.

### What is the use of **getDerivedStateFromProps** lifecycle method?
The new static **getDerivedStateFromProps** lifecycle is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or null to indicate that the new props do not require any state updates
```
class MyComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    // ...
  }
}
```
This lifecycle method along with **componentDidUpdate** covers all the use cases of **componentWillReceiveProps**.
### What is the use of getSnapshotBeforeUpdate lifecycle method?
The new **getSnapshotBeforeUpdate** lifecycle is called right before DOM updates. The return value for this lifecycle will be passed as the third parameter to **componentDidUpdate**
```
class MyComponent extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }
}
```
This lifecycle method along with **componentDidUpdate** covers all the use cases of **componentWillUpdate**.
### What is the difference between **createElement** and **cloneElement**?
In JSX the React element is transpiled to **createElement** which represents an UI element. Whereas **cloneElement** is used in order to clone an element and pass it new props.

### What is the recommended way for naming components?
It is recommended to name the component by reference instead of using displayName.
Using displayName for naming component as follow,
```
export default React.createClass({
  displayName: 'TodoApp',
  // stuff goes here
});
```

The recommended approach as below,
```
export default class TodoApp extends React.Component {
}
```
### What is the recommended ordering of ReactJS component class?
Below is the recommended ordering of methods from mounting to render stage
1. optional static methods
2. constructor
3. getChildContext
4. componentWillMount
5. componentDidMount
6. componentWillReceiveProps
7. shouldComponentUpdate
8. componentWillUpdate
9. componentDidUpdate
10. componentWillUnmount
11. clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
12. getter methods for render like getSelectReason() or getFooterContent()
13. optional render methods like renderNavigation() or renderProfilePicture()
14. render

### Which is preferred option with in callback refs and findDOMNode()?
It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

The legacy approach of using findDOMNode
```
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />
  }
}
```
The recommended approach is
```
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={node => this.node = node} />
  }
}
```
### Why String Refs are legacy?
If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have below issues, are considered legacy, and are likely to be removed in one of the future releases.
1. It requires that React keeps track of currently rendering component (since it can't guess this). This makes React a bit slower.
2. It is not composable, i.e. if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.

### What is a switching component?

A **switching component** is a component that renders one of many components. We need to use object to map prop values to components. For example, a switching component to display different pages based on page as below,
```
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';


const PAGES = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  contact: ContactPage
};

const Page = (props) => {
  const Handler = PAGES[props.page] || ContactPage;

  return <Handler {...props} />
};

// The keys of the PAGES object can be used in the prop types to catch dev-time errors.
Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired
};
```

### Why we need to pass a function to setState?

The reason behind for this suggestion is because setState an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after setState is called. That means you should not rely on the current state when calling setState since you can’t be sure what that state will be. The solution is to pass a function to setState, with the previous state as an argument. By doing this it avoids issues with the user getting the old state value on access due to the asynchrony of behavior of setState

For example, lets say the initial count value is zero. After increment operations, the value is going to be the same
```
// assuming this.state.count === 0
this.setState({count: this.state.count + 1});
this.setState({count: this.state.count + 1});
this.setState({count: this.state.count + 1});
// this.state.count === 1, not 3
```
If we pass a function to increment the count gives the proper result as below
```
this.setState((prevState, props) => ({
  count: prevState.count + props.increment
}));
// this.state.counnt === 3 as expected
```
### What is strict mode in React?
**StrictMode** is a tool for highlighting potential problems in an application. Just like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. These checks applies for development mode only.
Let's see an example of how we apply strict mode
```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
```
In the above example, the strict mode checks applies for ComponentOne and ComponentTwo only. StrictMode currently helps with:
1. Identifying components with unsafe lifecycles
2. Warning about legacy string ref API usage
3. Detecting unexpected side effects
4. Detecting legacy context API

### What is uncontrolled component?
An **Uncontrolled Component** is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML
For example, in the below UserProfile component, the name input accessed using ref as below,
```
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
In most cases, it is recommend using controlled components to implement forms.

### What are React Mixins?
Mixins are a way to totally separate components to have a common functionality.These Mixins are not recommended to used and can be replaced with high order components or decorators
One of the most commonly used mixins is PureRenderMixin. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:
```
var PureRenderMixin = require('react-addons-pure-render-mixin');

var Button = React.createClass({
  mixins: [PureRenderMixin],

  // ...

});
```
### Why isMounted is an Anti-pattern and what is the proper solution?
The primary use case for isMounted() is to avoid calling setState() after a component has unmounted, because calling setState() after a component has unmounted will emit a warning. To avoid this warning normally developers will do,
```
if (this.isMounted()) { // This is bad.
  this.setState({...});
}
```
This way it avoids the warning when it is necessary and also isMounted() is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted. The solution is is to track the mounted status yourself. Just set a _isMounted property to true in componentDidMount and set it to false in componentWillUnmount, and use this variable to check your component’s status.

### What are the pointer events supported in ReactJS?
Pointer events provide a unified way of handling all input events. In the olden days we have a mouse and respective event listeners to handle them but nowadays we have many devices which don’t correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the Pointer Events specification
The following event types are now available in React DOM:
1. onPointerDown
2. onPointerMove
3. onPointerUp
4. onPointerCancel
5. onGotPointerCapture
6. onLostPointerCapture
7. onPointerEnter
8. onPointerLeave
9. onPointerOver
10. onPointerOut

### Why component names should start with capital letter?
If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase.
You can define component class with lowercase but while import it should use capital letter
```
// Here lowercase is fine.
class myComponent extends Component {
  render() {
    return <div />;
  }
}
export default myComponent;

// While importing in another file it should be capital letter.
import MyComponent from 'primaryButton';
<MyComponent />
```
### Is it custom DOM attributes supported in React16?
Yes, instead of ignoring unrecognized HTML and SVG attributes, React will now pass them through to the DOM. Also, React doesn’t have to include the whole attribute whitelist in the production version.
```
// Your code:
<div mycustomattribute="something" />
// React 15 output:
<div />
// React 16 output:
<div mycustomattribute="something" />
```
It solved the below two problems
1. You could not pass a custom attribute. This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.
2. The attribute list kept growing over time, but most React canonical attribute names are already valid in the DOM. Removing most of the whitelist helped us reduce the bundle size a little bit.

### What is the difference between constructor and getInitialState?
You should initialize state in the constructor when using ES6 classes, whereas use getInitialState method when using React.createClass
Using ES6 classes
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }
}
```
Using React.createClass
```
var MyComponent = React.createClass({
  getInitialState() {
    return { /* initial state */ };
  },
});
```
### Can you force a React component to re-render without calling setState?
By default, when your component’s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().
```
component.forceUpdate(callback)
```
It is recommended to avoid all uses of forceUpdate() and only read from this.props and this.state in render()

### What is the difference between React Native and React?
**ReactJS** is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.
**React Native** is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use ReactJS to build your components, and implements ReactJS under the hood.
### What is the difference between “super()” and “super(props)” in React using es6 classes?
When you want to access this.props in constructor then you should pass props to super method.
using super(props)
```
class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props); //{ name: 'sudheer', … }
    }
}
```
using super()
```
class MyComponent extends React.Component {
    constructor(props) {
        super()
        console.log(this.props); // undefined
    }
}
```
Outside constructor both will display same value for **this.props**
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

### What is an action in redux?
Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store.  Actions must have a type property that indicates the type of action being performed.

For example an example action which represents adding a new todo item,

```
{
  type: ADD_TODO,
  text: 'Add todo item'
}
```

### What is the difference between mapStateToProps and mapDispatchToProps?
**mapStateToProps()** is a utility which helps your component get updated state(which is updated by some other components),
```
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
```
**mapDispatchToProps()** is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)
```
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}
```
### Can I dispatch an action in reducer?
Dispatching an action within a reducer is an anti-pattern. Your reducer should be without side effects, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects
### How to access redux store outside a react component?
Yes.You just need to export the store from the module where it created with createStore. Also, it shouldn't pollute the global window object
```
store = createStore(myReducer);
export default store;
```

### What is React Router?
React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.