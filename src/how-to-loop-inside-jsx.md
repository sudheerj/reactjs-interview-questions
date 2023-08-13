93. ### How to loop inside JSX?

    You can simply use `Array.prototype.map` with ES6 _arrow function_ syntax.

    For example, the `items` array of objects is mapped into an array of components:

    ```jsx harmony
    <tbody>
      {items.map((item) => (
        <SomeComponent key={item.id} name={item.name} />
      ))}
    </tbody>
    ```

    But you can't iterate using `for` loop:

    ```jsx harmony
    <tbody>
      for (let i = 0; i < items.length; i++) {
        <SomeComponent key={items[i].id} name={items[i].name} />
      }
    </tbody>
    ```

    This is because JSX tags are transpiled into _function calls_, and you can't use statements inside expressions. This may change thanks to `do` expressions which are _stage 1 proposal_.

