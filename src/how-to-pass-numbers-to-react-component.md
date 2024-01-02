218. ### How to pass numbers to React component?

     You should be passing the numbers via curly braces({}) where as strings in quotes

     ```jsx
     React.render(
       <User age={30} department={"IT"} />,
       document.getElementById("container")
     );
     ```

