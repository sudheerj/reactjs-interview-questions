110. ### How can we find the version of React at runtime in the browser?

     You can use `React.version` to get the version.

     ```jsx harmony
     const REACT_VERSION = React.version;

     ReactDOM.render(
       <div>{`React version: ${REACT_VERSION}`}</div>,
       document.getElementById("app")
     );
     ```

