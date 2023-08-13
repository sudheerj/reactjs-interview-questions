281. ### How do you solve performance corner cases while using context?

     The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders.

     For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

     ```javascript
     class App extends React.Component {
       render() {
         return (
           <Provider value={{ something: "something" }}>
             <Toolbar />
           </Provider>
         );
       }
     }
     ```

     This can be solved by lifting up the value to parent state,

     ```javascript
     class App extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: { something: "something" },
         };
       }

       render() {
         return (
           <Provider value={this.state.value}>
             <Toolbar />
           </Provider>
         );
       }
     }
     ```

