333. ### What is a wrapper component?

     A wrapper in React is a component that wraps or surrounds another component or group of components. It can be used for a variety of purposes such as adding additional functionality, styling, or layout to the wrapped components.

     For example, consider a simple component that displays a message:

     ```javascript
     const Message = ({ text }) => {
       return <p>{text}</p>;
     };
     ```

     We can create a wrapper component that will add a border to the message component:

     ```javascript
     const MessageWrapper = (props) => {
       return (
         <div style={{ border: "1px solid black" }}>
           <Message {...props} />
         </div>
       );
     };
     ```

     Now we can use the MessageWrapper component instead of the Message component and the message will be displayed with a border:

     ```javascript
     <MessageWrapper text="Hello World" />
     ```

     Wrapper component can also accept its own props and pass them down to the wrapped component, for example, we can create a wrapper component that will add a title to the message component:

     ```javascript
     const MessageWrapperWithTitle = ({title, ...props}) => {
       return (
         <div>
           <h3>{title}</h3>
           <Message {...props} />
         </div>
       );
     };
     ```

     Now we can use the MessageWrapperWithTitle component and pass title props:

     ```javascript
     <MessageWrapperWithTitle title="My Message" text="Hello World" />
     ```

     This way, the wrapper component can add additional functionality, styling, or layout to the wrapped component while keeping the wrapped component simple and reusable.

