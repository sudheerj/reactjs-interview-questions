225. ### How to use class field declarations syntax in React classes?

     React Class Components can be made much more concise using the class field declarations. You can initialize the local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them.

     Let's take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,

     ```jsx
     class Counter extends Component {
       state = { value: 0 };

       handleIncrement = () => {
         this.setState((prevState) => ({
           value: prevState.value + 1,
         }));
       };

       handleDecrement = () => {
         this.setState((prevState) => ({
           value: prevState.value - 1,
         }));
       };

       render() {
         return (
           <div>
             {this.state.value}

             <button onClick={this.handleIncrement}>+</button>
             <button onClick={this.handleDecrement}>-</button>
           </div>
         );
       }
     }
     ```

