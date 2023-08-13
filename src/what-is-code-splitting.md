250. ### What is code-splitting?

     Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.

     For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.
     **moduleA.js**

     ```javascript
     const moduleA = "Hello";

     export { moduleA };
     ```

     **App.js**

     ```javascript
     import React, { Component } from "react";

     class App extends Component {
       handleClick = () => {
         import("./moduleA")
           .then(({ moduleA }) => {
             // Use moduleA
           })
           .catch((err) => {
             // Handle failure
           });
       };

       render() {
         return (
           <div>
             <button onClick={this.handleClick}>Load</button>
           </div>
         );
       }
     }

     export default App;
     ```

