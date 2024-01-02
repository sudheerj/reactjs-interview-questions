282. ### What is the purpose of forward ref in HOCs?

     Refs will not get passed through because ref is not a prop. It is handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

     The below HOC logs all props,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         componentDidUpdate(prevProps) {
           console.log("old props:", prevProps);
           console.log("new props:", this.props);
         }

         render() {
           const { forwardedRef, ...rest } = this.props;

           // Assign the custom prop "forwardedRef" as a ref
           return <Component ref={forwardedRef} {...rest} />;
         }
       }

       return React.forwardRef((props, ref) => {
         return <LogProps {...props} forwardedRef={ref} />;
       });
     }
     ```

     Let's use this HOC to log all props that get passed to our “fancy button” component,

     ```javascript
     class FancyButton extends React.Component {
       focus() {
         // ...
       }

       // ...
     }
     export default logProps(FancyButton);
     ```

     Now let's create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

     ```javascript
     import FancyButton from "./FancyButton";

     const ref = React.createRef();
     ref.current.focus();
     <FancyButton label="Click Me" handleClick={handleClick} ref={ref} />;
     ```

