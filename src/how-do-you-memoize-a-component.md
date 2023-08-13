71. ### How do you memoize a component?

    There are memoize libraries available which can be used on function components.

    For example `moize` library can memoize the component in another component.

    ```jsx harmony
    import moize from "moize";
    import Component from "./components/Component"; // this module exports a non-memoized component

    const MemoizedFoo = moize.react(Component);

    const Consumer = () => {
      <div>
        {"I will memoize the following entry:"}
        <MemoizedFoo />
      </div>;
    };
    ```

    **Update:** Since React v16.6.0, we have a `React.memo`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

    ```js
    const MemoComponent = React.memo(function MemoComponent(props) {
      /* render using props */
    });
    OR;
    export default React.memo(MyFunctionComponent);
    ```

