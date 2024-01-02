136. ### How to pass params to `history.push` method in React Router v4?

     While navigating you can pass props to the `history` object:

     ```javascript
     this.props.history.push({
       pathname: "/template",
       search: "?name=sudheer",
       state: { detail: response.data },
     });
     ```

     The `search` property is used to pass query params in `push()` method.

