226. ### What are hooks?

     Hooks is a special JavaScript function that allows you use state and other React features without writing a class. This pattern has been introduced as a new feature in React 16.8 and helped to isolate the stateful logic from the components.

     Let's see an example of useState hook:

     ```jsx
     import { useState } from "react";

     function Example() {
       // Declare a new state variable, which we'll call "count"
       const [count, setCount] = useState(0);

       return (
         <>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>Click me</button>
         </>
       );
     }
     ```

     **Note:** Hooks can be used inside an existing function component without rewriting the component.

