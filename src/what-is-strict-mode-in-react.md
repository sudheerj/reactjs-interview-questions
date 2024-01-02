84. ### What is strict mode in React?

    `React.StrictMode` is a useful component for highlighting potential problems in an application. Just like `<Fragment>`, `<StrictMode>` does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for _development mode_ only.

    ```jsx harmony
    import React from "react";

    function ExampleApplication() {
      return (
        <div>
          <Header />
          <React.StrictMode>
            <div>
              <ComponentOne />
              <ComponentTwo />
            </div>
          </React.StrictMode>
          <Header />
        </div>
      );
    }
    ```

    In the example above, the _strict mode_ checks apply to `<ComponentOne>` and `<ComponentTwo>` components only.

    React.StrictMode currently helps you with:

    1. Identifying components with unsafe lifecycles
    2. Warning about legacy string ref API usage
    3. Warning about deprecated `findDOMNode` usage
    4. Detecting unexpected side effects
    5. Detecting legacy context API

