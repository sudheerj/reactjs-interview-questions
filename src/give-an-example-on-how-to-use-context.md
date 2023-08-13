277. ### Give an example on How to use context?

     **Context** is designed to share data that can be considered **global** for a tree of React components.

     For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

     ```javascript
     //Lets create a context with a default theme value "luna"
     const ThemeContext = React.createContext("luna");
     // Create App component where it uses provider to pass theme value in the tree
     class App extends React.Component {
       render() {
         return (
           <ThemeContext.Provider value="nova">
             <Toolbar />
           </ThemeContext.Provider>
         );
       }
     }
     // A middle component where you don't need to pass theme prop anymore
     function Toolbar(props) {
       return (
         <div>
           <ThemedButton />
         </div>
       );
     }
     // Lets read theme value in the button component to use
     class ThemedButton extends React.Component {
       static contextType = ThemeContext;
       render() {
         return <Button theme={this.context} />;
       }
     }
     ```

