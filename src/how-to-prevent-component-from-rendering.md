266. ### How to prevent component from rendering?

     You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

     ```javascript
     function Greeting(props) {
       if (!props.loggedIn) {
         return null;
       }

       return <div className="greeting">welcome, {props.name}</div>;
     }
     ```

     ```javascript
     class User extends React.Component {
       constructor(props) {
         super(props);
         this.state = {loggedIn: false, name: 'John'};
       }

       render() {
        return (
            <div>
              //Prevent component render if it is not loggedIn
              <Greeting loggedIn={this.state.loggedIn} />
              <UserDetails name={this.state.name}>
            </div>
        );
       }
     ```

     In the above example, the `greeting` component skips its rendering section by applying condition and returning null value.

