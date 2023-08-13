17. ### What are synthetic events in React?

    `SyntheticEvent` is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers. The native events can be accessed directly from synthetic events using `nativeEvent` attribute.

    Let's take an example of BookStore title search component with the ability to get all native event properties

    ```js
    function BookStore() {
      handleTitleChange(e) {
        console.log('The new title is:', e.target.value);
        // 'e' represents synthetic event
        const nativeEvent = e.nativeEvent;
        console.log(nativeEvent);
        e.stopPropogation();
        e.preventDefault();
      }

      return <input name="title" onChange={handleTitleChange} />
    }
    ```

