101. ### How to re-render the view when the browser is resized?

      You can use the `useState` hook to manage the width and height state variables, and the `useEffect` hook to add and remove the `resize` event listener. The `[]` dependency array passed to useEffect ensures that the effect only runs once (on mount) and not on every re-render.

      ```javascript
      import React, { useState, useEffect } from "react";
      function WindowDimensions() {
        const [dimensions, setDimensions] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        useEffect(() => {
          function handleResize() {
            setDimensions({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);

        return (
          <span>
            {dimensions.width} x {dimensions.height}
          </span>
        );
      }
      ```
      <details>
        <summary><h4>Using Class Component</h4></summary>

        You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

        ```javascript
            class WindowDimensions extends React.Component {
              constructor(props) {
                super(props);
                this.updateDimensions = this.updateDimensions.bind(this);
              }

              componentWillMount() {
                this.updateDimensions();
              }

              componentDidMount() {
                window.addEventListener("resize", this.updateDimensions);
              }

              componentWillUnmount() {
                window.removeEventListener("resize", this.updateDimensions);
              }

              updateDimensions() {
                this.setState({
                  width: window.innerWidth,
                  height: window.innerHeight,
                });
              }

              render() {
                return (
                  <span>
                    {this.state.width} x {this.state.height}
                  </span>
                );
              }
            }
            ```
</details>

