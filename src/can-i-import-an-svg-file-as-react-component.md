214. ### Can I import an SVG file as react component?

     You can import SVG directly as component instead of loading it as a file. This feature is available with `react-scripts@2.0.0` and higher.

     ```jsx harmony
     import { ReactComponent as Logo } from "./logo.svg";

     const App = () => (
       <div>
         {/* Logo is an actual react component */}
         <Logo />
       </div>
     );
     ```

     **Note**: Don't forget about the curly braces in the import.

