335. ### What are the differences between Functional and Class Components?
 
      There are two different ways to create components in ReactJS. The main differences are listed down as below,

      ## 1.  Syntax:

      The classs components uses ES6 classes to create the components. It uses `render` function to display the HTML content in the webpage.
      
      The syntax for class component looks like as below.
        ```js
        class App extends Reacts.Component {
          render(){
            return <h1>This is a class component</h1>}
          }

        ```

      **Note:** The **Pascal Case** is the recommended approach to provide naming to a component.

      Functional component has been improved over the years with some added features like Hooks. Here is a syntax for functional component.

      ```js
      function App(){
        return <div className="App">
          <h1>Hello, I'm a function component</h1>
          </div>
      }

      ```

      ## 2. State:

      State contains information or data about a component which may change over time. 
      
      In class component, you can update the state when a user interacts with it or server updates the data using the `setState()` method. The initial state is going to be assigned in the `Constructor( ) `method using the the ` this.state` object and it is possible to different data types in the `this.state` object such as string, boolean, numbers, etc.
      **A simple example showing how we use the setState() and constructor()**

      ```js
      class App extends Component {
        constructor() {
          super();
          this.state = {
            message: "This is a class component",
          };
        }
        updateMessage() {
          this.setState({t
            message: "Updating the class component",
          });
        }
        render() {
          return (
            <>
              <h1>{this.state.message}</h1>
              <button
                onClick={() => {
                  this.updateMessage();
                }}>
                Click!!
              </button>
            </>
          );
        }
      }

      ```

      You not use state in functional components because it was only supported in class components. But over the years hooks have been implemented in functional component which enable to use state in functional component too.
      
      The `useState()` hook can used to implement state in funcitonal component. It returns an array with two items: the first item is current state and the next one is a function (setState) that updates the value of the current state. 
      
      Let's see an example to demonstrate the state in functional components,

      ```js
      function App() {
        const [message, setMessage] = useState("This is a functional component");
        const updateMessage = () => {
          setCountry("Updating the functional component");
        };
        return (
          <div className="App">
            <h1>{message} </h1>
            <button onClick={updateMessage}>Click me!!</button>
          </div>
        );
      }
      ```

      ## 4. Props:
      Props are referred to as "properties". The props are passed into react component just like arguments passed to a function. In otherwords, they are similar to HTML attributes. 

      The props are accessible in child class component using `this.props` as shown in below example,
      ```js
      class Child extends React.Component {
        render() {
          return <h1> This is a functional component and component name is {this.props.name} </h1>;
        }
      }

      class Parent extends React.Component {
        render() {
               return (
                  <div className="Parent">
                  <Child name="First child component" />
                  <Child name="Second child component" />
                  </div>
                );
         }
      }
      ```

      Props in functional components are similar to that of the class components but the difference is the absence of 'this' keyword. 

      ```js
      function Child(props) {
        return <h1>This is a child component and the component name is{props.name}</h1>;
      }

      function Parent() {
        return (
          <div className="Parent">
                <Child name="First child component" />
                <Child name="Second child component" />
          </div>
        );
      }
      ```

