247. ### What is the purpose of displayName class property?

     The displayName string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.

     For example, To ease debugging, choose a display name that communicates that it’s the result of a withSubscription HOC.

     ```javascript
     function withSubscription(WrappedComponent) {
       class WithSubscription extends React.Component {
         /* ... */
       }
       WithSubscription.displayName = `WithSubscription(${getDisplayName(
         WrappedComponent
       )})`;
       return WithSubscription;
     }
     function getDisplayName(WrappedComponent) {
       return (
         WrappedComponent.displayName || WrappedComponent.name || "Component"
       );
     }
     ```

