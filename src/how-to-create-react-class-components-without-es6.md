285. ### How to create react class components without ES6?

     If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

     ```javascript
     var Greeting = createReactClass({
       getDefaultProps: function () {
         return {
           name: "Jhohn",
         };
       },
       getInitialState: function () {
         return { message: this.props.message };
       },
       handleClick: function () {
         console.log(this.state.message);
       },
       render: function () {
         return <h1>Hello, {this.props.name}</h1>;
       },
     });
     ```

     **Note:** If you use createReactClass then auto binding is available for all methods. i.e, You don't need to use `.bind(this)` with in constructor for event handlers.

