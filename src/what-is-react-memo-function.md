221. ### What is React memo function?

     Class components can be restricted from re-rendering when their input props are the same using **PureComponent or shouldComponentUpdate**. Now you can do the same with function components by wrapping them in **React.memo**.

     ```jsx
     const MyComponent = React.memo(function MyComponent(props) {
       /* only rerenders if props change */
     });
     ```

