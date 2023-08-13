215. ### Why are inline ref callbacks or functions not recommended?

     If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

     ```jsx
     class UserForm extends Component {
       handleSubmit = () => {
         console.log("Input Value is: ", this.input.value);
       };

       render() {
         return (
           <form onSubmit={this.handleSubmit}>
             <input type="text" ref={(input) => (this.input = input)} /> //
             Access DOM input in handle submit
             <button type="submit">Submit</button>
           </form>
         );
       }
     }
     ```

     But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

     ```jsx
     class UserForm extends Component {
       handleSubmit = () => {
         console.log("Input Value is: ", this.input.value);
       };

       setSearchInput = (input) => {
         this.input = input;
       };

       render() {
         return (
           <form onSubmit={this.handleSubmit}>
             <input type="text" ref={this.setSearchInput} /> // Access DOM input
             in handle submit
             <button type="submit">Submit</button>
           </form>
         );
       }
     }
     ```

     **Note:** In React v16.3,
