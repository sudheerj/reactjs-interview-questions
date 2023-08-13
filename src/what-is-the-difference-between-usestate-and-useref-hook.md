332. ### What is the difference between useState and useRef hook?
     1. useState causes components to re-render after state updates whereas useRef doesn’t cause a component to re-render when the value or state changes.
        Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.
     2. useState allows us to update the state inside components. While useRef allows referencing DOM elements.

