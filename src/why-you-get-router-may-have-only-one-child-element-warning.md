135. ### Why you get "Router may have only one child element" warning?

     You have to wrap your Route's in a `<Switch>` block because `<Switch>` is unique in that it renders a route exclusively.

     At first you need to add `Switch` to your imports:

     ```javascript
     import { Switch, Router, Route } from "react-router";
     ```

     Then define the routes within `<Switch>` block:

     ```jsx harmony
     <Router>
       <Switch>
         <Route {/* ... */} />
         <Route {/* ... */} />
       </Switch>
     </Router>
     ```

