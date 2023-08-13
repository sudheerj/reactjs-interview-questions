234. ### What is the difference between try catch block and error boundaries?

     Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

     For example, the try catch block used for below imperative code

     ```javascript
     try {
       showButton();
     } catch (error) {
       // ...
     }
     ```

     Whereas error boundaries wrap declarative code as below,

     ```javascript
     <ErrorBoundary>
       <MyComponent />
     </ErrorBoundary>
     ```

     So if an error occurs in a **componentDidUpdate** method caused by a **setState** somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

