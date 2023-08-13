43. ### How to set state with a dynamic key name?

    If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with _computed property names_.

    ```javascript
    handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
    }
    ```

