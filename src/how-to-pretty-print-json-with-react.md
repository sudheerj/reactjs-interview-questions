106. ### How to pretty print JSON with React?

     We can use `<pre>` tag so that the formatting of the `JSON.stringify()` is retained:

     ```jsx harmony
     const data = { name: "John", age: 42 };

     class User extends React.Component {
       render() {
         return <pre>{JSON.stringify(data, null, 2)}</pre>;
       }
     }

     React.render(<User />, document.getElementById("container"));
     ```

