292. ### How do you create HOC using render props?

     You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a <Mouse> component, you could easily create one using a regular <Mouse> with a render prop.

     ```javascript
     function withMouse(Component) {
       return class extends React.Component {
         render() {
           return (
             <Mouse
               render={(mouse) => <Component {...this.props} mouse={mouse} />}
             />
           );
         }
       };
     }
     ```

     This way render props gives the flexibility of using either pattern.

