276. ### What is route based code splitting?

     One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won't be disturbed.

     Let us take an example of route based website using libraries like React Router with React.lazy,

     ```javascript
     import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
     import React, { Suspense, lazy } from "react";

     const Home = lazy(() => import("./routes/Home"));
     const About = lazy(() => import("./routes/About"));

     const App = () => (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/about" component={About} />
           </Switch>
         </Suspense>
       </Router>
     );
     ```

     In the above code, the code splitting will happen at each route level.

