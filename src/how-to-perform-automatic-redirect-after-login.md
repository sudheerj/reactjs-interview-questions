139. ### How to perform automatic redirect after login?

     The `react-router` package provides `<Redirect>` component in React Router. Rendering a `<Redirect>` will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

     ```javascript
     import React, { Component } from "react";
     import { Redirect } from "react-router";

     export default class LoginComponent extends Component {
       render() {
         if (this.state.isLoggedIn === true) {
           return <Redirect to="/your/redirect/page" />;
         } else {
           return <div>{"Login Please"}</div>;
         }
       }
     }
     ```

## React Internationalization

