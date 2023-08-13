327. ### How is the new JSX transform different from old transform??

     The new JSX transform doesn’t require React to be in scope. i.e, You don't need to import React package for simple scenarios.

     Let's take an example to look at the main differences between the old and the new transform,

     **Old Transform:**

     ```js
     import React from "react";

     function App() {
       return <h1>Good morning!!</h1>;
     }
     ```

     Now JSX transform convert the above code into regular JavaScript as below,

     ```js
     import React from "react";

     function App() {
       return React.createElement("h1", null, "Good morning!!");
     }
     ```

     **New Transform:**

     The new JSX transform doesn't require any React imports

     ```js
     function App() {
       return <h1>Good morning!!</h1>;
     }
     ```

     Under the hood JSX transform compiles to below code

     ```js
     import { jsx as _jsx } from "react/jsx-runtime";

     function App() {
       return _jsx("h1", { children: "Good morning!!" });
     }
     ```

     **Note:** You still need to import React to use Hooks.

