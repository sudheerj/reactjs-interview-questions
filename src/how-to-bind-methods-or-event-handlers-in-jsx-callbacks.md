15. ### How to bind methods or event handlers in JSX callbacks?

    There are 3 possible ways to achieve this in class components:

    1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same rule applies for React event handlers defined as class methods. Normally we bind them in constructor.

       ```javascript
       class User extends Component {
         constructor(props) {
           super(props);
           this.handleClick = this.handleClick.bind(this);
         }
         handleClick() {
           console.log("SingOut triggered");
         }
         render() {
           return <button onClick={this.handleClick}>SingOut</button>;
         }
       }
       ```

    2. **Public class fields syntax:** If you don't like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks. The Create React App eanables this syntax by default.

       ```jsx harmony
       handleClick = () => {
         console.log("SingOut triggered", this);
       };
       ```

       ```jsx harmony
       <button onClick={this.handleClick}>SingOut</button>
       ```

    3. **Arrow functions in callbacks:** It is possible to use _arrow functions_ directly in the callbacks.

       ```jsx harmony
       handleClick() {
           console.log('SingOut triggered');
       }
       render() {
           return <button onClick={() => this.handleClick()}>SignOut</button>;
       }
       ```

    **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or _public class fields syntax_ approach considering performance.

