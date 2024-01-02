117. ### How to import and export components using React and ES6?

     You should use default for exporting the components

     ```jsx harmony
     import React from "react";
     import User from "user";

     export default class MyProfile extends React.Component {
       render() {
         return <User type="customer">//...</User>;
       }
     }
     ```

     With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.

