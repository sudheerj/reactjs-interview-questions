280. ### What is a consumer?

     A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

     Lets take a simple example,

     ```javascript
     <MyContext.Consumer>
       {value => /* render something based on the context value */}
     </MyContext.Consumer>
     ```

