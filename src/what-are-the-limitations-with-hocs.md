254. ### What are the limitations with HOCs?

     Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order,

     1. **Don’t use HOCs inside the render method:**
        It is not recommended to apply a HOC to a component within the render method of a component.

        ```javascript
        render() {
          // A new version of EnhancedComponent is created on every render
          // EnhancedComponent1 !== EnhancedComponent2
          const EnhancedComponent = enhance(MyComponent);
          // That causes the entire subtree to unmount/remount each time!
          return <EnhancedComponent />;
        }
        ```

        The above code impacts on performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once.

     2. **Static methods must be copied over:**
        When you apply a HOC to a component the new component does not have any of the static methods of the original component

        ```javascript
        // Define a static method
        WrappedComponent.staticMethod = function () {
          /*...*/
        };
        // Now apply a HOC
        const EnhancedComponent = enhance(WrappedComponent);

        // The enhanced component has no static method
        typeof EnhancedComponent.staticMethod === "undefined"; // true
        ```

        You can overcome this by copying the methods onto the container before returning it,

        ```javascript
        function enhance(WrappedComponent) {
          class Enhance extends React.Component {
            /*...*/
          }
          // Must know exactly which method(s) to copy :(
          Enhance.staticMethod = WrappedComponent.staticMethod;
          return Enhance;
        }
        ```

     3. **Refs aren’t passed through:**
        For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API

