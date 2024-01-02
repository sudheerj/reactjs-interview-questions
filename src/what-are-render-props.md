128. ### What are render props?

     **Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

     ```jsx harmony
     <DataProvider render={(data) => <h1>{`Hello ${data.target}`}</h1>} />
     ```

     Libraries such as React Router and DownShift are using this pattern.

## React Router

