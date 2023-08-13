172. ### What are the different ways to write `mapDispatchToProps()`?

     There are a few ways of binding _action creators_ to `dispatch()` in `mapDispatchToProps()`.

     Below are the possible options:

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
       action: () => dispatch(action()),
     });
     ```

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
       action: bindActionCreators(action, dispatch),
     });
     ```

     ```javascript
     const mapDispatchToProps = { action };
     ```

     The third option is just a shorthand for the first one.

