7. ### When to use a Class Component over a Function Component?

    After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components  in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too. 
    
    But even there are two reasons to use Class components over Function components.

      1. If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries. 
      2. In older versions, If the component needs _state or lifecycle methods_ then you need to use class component.


    **Note:** You can also use reusable [react error boundary](https://github.com/bvaughn/react-error-boundary) third-party component without writing any class. i.e, No need to use class components for Error boundaries.

    The usage of Error boundaries from the above library is quite straight forward.

    ```jsx
    "use client";

    import { ErrorBoundary } from "react-error-boundary";

    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ExampleApplication />
    </ErrorBoundary>
    ```

