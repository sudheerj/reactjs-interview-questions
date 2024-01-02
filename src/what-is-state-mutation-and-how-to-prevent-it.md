331. ### What is state mutation and how to prevent it?

     `State mutation` happens when you try to update the state of a component without actually using `setState` function. This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable. This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.

     This can cause unknown issues in the UI as the value of the state variable got updated without telling React to check what all components were being affected from this update and it can cause UI bugs.

     Ex:

     ```javascript
     class A extends React.component {
       constructor(props) {
         super(props);
         this.state = {
           loading: false
         }
      }

     componentDidMount() {
       let { loading } = this.state;
       loading = (() => true)(); // Trying to perform an operation and directly saving in a state variable
     }

     ```

     **How to prevent it:** Make sure your state variables are immutable by either enforcing immutability by using plugins like Immutable.js, always using `setState` to make updates, and returning new instances in reducers when sending updated state values.

