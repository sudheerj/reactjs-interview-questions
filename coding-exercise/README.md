### Coding Exercise

#### 1. What is the output of below code

```javascript
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => {
        setCounter(counter + 5);
        setCounter(counter + 5);
        alert(counter);
        setCounter(counter + 5);
        setCounter(counter + 5);
      }}>Increment</button>
    </>
  )
}
```

- 1: Alert with 5, 5
- 2: Alert with 15, 25
- 3: Alert with 5,  10
- 4: Error: Cannot update the same state multiple times concurrently

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
State values are fixed(i.e, default value 5) in each render and setting the state only changes it for the next render. React will wait until all the code executed with in an event handler before your state updates followed by re-rendering the UI. Also, all the 3 setter function calls are replacing the calculated value. Hence, irrespective of how many times you call `setCounter(counter + 5)` the final value is 10(5+5).

This can be visuallized by substituting with state variable values in the particular render,
```javascript
      <button onClick={() => {
        setCounter(5 + 5);
        setCounter(5 + 5);
        alert(5);
        setCounter(5 + 5);
        setCounter(5 + 5);
      }}>Increment</button>
```
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 2. What is the output of below code

```javascript
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => {
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
        alert(counter);
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
      }}>Increment</button>
    </>
  )
}
```

- 1: Alert with 5, 25
- 2: Alert with 5, 10
- 3: Alert with 15, 25
- 4: Alert with 15, 10

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

React queues all the updater functions(e.g, counter => counter + 5) which will be processed after all the code inside event handler has been executed. During the next re-render(state update through setState), React goes through the queue and increment the counter based on the previous value in each function call. So the final value of counter becomes 25(initial value 5 + 5 + 5 + 5 + 5) whereas the alert shows default value 5 because the counter value won't be updated by that time.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 3. What is the output of span after one click?

```javascript
import { useRef } from 'react';

export default function Counter() {
  let countRef = useRef(0);

  function handleIncrement() {
    countRef.current = countRef.current + 1;
  }

  return 
  <>
    <span>Count: {countRef.current}</span>
    <button onClick={handleIncrement}>
      Click me
    </button>
  </>
}
```

- 1: Cannot read current property of undefined
- 2: Count: 1
- 3: null
- 4: Count: 0

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

In React, every update has two phases. 
1. **Render:** This is where React calls the components in order to output something on the screen
2. **Commit:** React applies changes to the DOM

Any updates to the ref will be reflected only in the commit phase. In other words, React sets **counterRef.current** during the commit phase. Hence, **countRef.current** always holds value `0` irrespective of how many times the Increment button clicked.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 4. What is the outcome of below code after button click?

```javascript
import { useRef } from 'react';

function MyCustomInput(props) {
  return <input {...props} />;
}

export default function MyCustomForm() {
  const inputRef = useRef(null);

  function handleInputFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyCustomInput ref={inputRef} />
      <button onClick={handleInputFocus}>
        Click Me
      </button>
    </>
  );
}
```

- 1: Input gets the focus
- 2: Warning: Function components cannot be given refs.
- 3: Cannot read current property of undefined
- 4: Warning: Missing ref on <input /> element

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2
By default, React does not allow a component access the DOM nodes of other components even for child components. If you still try to access the DOM nodes directly then you will receive below error:

```javascript
Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
```

This issue can be fixed by wrapping the **<MyCustomInput />** component with `forwardRef` function which accepts ref as the second argument which can be used on the **<input />** element as **ref={ref}**

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 5. What is the outcome of number of clicks after 3 button clicks?

```javascript
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
  }

  return (
    <>
      <div>Clicked {ref.current} times</div>
      <button onClick={handleClick}>
        Click me!
      </button>
    </>
  );
}
```

- 1: 3 times
- 2: 4 times
- 3: 2 times
- 4: 0 times

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
If you try to use **{ref.current}** in the render method, the number won’t be updated on click. This is because **ref.current** does not trigger a re-render unlike state. This property is mainly used to read and write the values inside event handler or outside the render method.
</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 6. What is the output in the console after mounting and unmounting the component?

```javascript
import { useEffect, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    console.log('Cleanup registered');
    return () => {
      console.log('Cleanup executed');
      clearInterval(timer);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```

- 1: "Effect ran", "Cleanup registered", "Cleanup executed" (on mount), "Cleanup executed" (on unmount)
- 2: "Effect ran", "Cleanup registered" (on mount), "Cleanup executed" (on unmount)
- 3: "Effect ran" (on mount), "Cleanup executed" (on unmount)
- 4: "Effect ran", "Cleanup registered", "Cleanup executed" (on mount and unmount)

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

When a component mounts, React runs the effect function completely, which logs both "Effect ran" and "Cleanup registered". The cleanup function (returned from useEffect) is **not** executed during mount - it's only registered at this point.

The cleanup function executes in two scenarios:
1. **Before re-running the effect** (if dependencies change)
2. **When the component unmounts**

Since the dependency array is empty `[]`, the effect only runs once on mount and never re-runs. Therefore, the cleanup function will only execute when the component unmounts, logging "Cleanup executed" and clearing the interval timer.

This pattern is crucial for preventing memory leaks when using timers, subscriptions, or event listeners in React components.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 7. What will be the output after clicking the button?

```javascript
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([1, 2, 3]);

  function handleClick() {
    items.push(4);
    setItems(items);
  }

  return (
    <>
      <div>Items: {items.join(', ')}</div>
      <button onClick={handleClick}>Add Item</button>
    </>
  );
}
```

- 1: Items: 1, 2, 3, 4
- 2: Items: 1, 2, 3
- 3: Error: Cannot mutate state directly
- 4: Items: 1, 2, 3, 4, 4 (duplicates on each click)

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

React uses `Object.is()` comparison to detect state changes. When you mutate the array directly using `items.push(4)` and then pass the same array reference to `setItems(items)`, React sees it as the same object (same reference) and doesn't trigger a re-render.

To properly update an array in state, you should create a new array:
```javascript
setItems([...items, 4]); // or
setItems(items.concat(4));
```

This is a common mistake that leads to bugs where the UI doesn't update even though the underlying data has changed. Always treat state as immutable in React.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 8. What is the output after the component mounts?

```javascript
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  });

  useEffect(() => {
    setCount(2);
  }, []);

  console.log('Rendered with count:', count);

  return <div>Count: {count}</div>;
}
```

- 1: "Rendered with count: 0", "Rendered with count: 2"
- 2: "Rendered with count: 0", "Rendered with count: 1", "Rendered with count: 2"
- 3: Infinite loop / Maximum update depth exceeded error
- 4: "Rendered with count: 0", "Rendered with count: 2", "Rendered with count: 1"

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

This code creates an **infinite loop** because the first `useEffect` has no dependency array, which means it runs after **every render**. Here's what happens:

1. Initial render with `count: 0`
2. After render, both effects run (first sets count to 1, second sets count to 2)
3. State update triggers re-render with `count: 2`
4. After render, the first effect runs again (no dependencies), setting count to 1
5. This triggers another re-render, and the cycle continues infinitely

React will detect this and throw an error: **"Maximum update depth exceeded"**.

The fix is to add a dependency array to the first useEffect:
```javascript
useEffect(() => {
  setCount(1);
}, []); // Add empty dependency array
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 9. What will be displayed on the screen?

```javascript
import { useMemo } from 'react';

export default function App() {
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return 100 + 200;
  });

  return <div>Result: {expensiveCalculation}</div>;
}
```

- 1: Result: 300
- 2: Result: function() { ... }
- 3: Result: undefined
- 4: Error: useMemo requires a dependency array

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The `useMemo` hook **requires** a dependency array as the second argument. Without it, React will throw an error during development:

```
Error: useMemo requires a dependency array as the second argument
```

The correct usage is:
```javascript
const expensiveCalculation = useMemo(() => {
  console.log('Calculating...');
  return 100 + 200;
}, []); // Dependency array is required
```

With an empty dependency array `[]`, the calculation runs once during the initial render and the memoized value (300) is reused on subsequent renders. If you include dependencies, the calculation re-runs whenever those dependencies change.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 10. What is the output after clicking the button twice?

```javascript
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'John',
    age: 30
  });

  function handleClick() {
    person.age = person.age + 1;
    setPerson(person);
  }

  return (
    <>
      <div>Age: {person.age}</div>
      <button onClick={handleClick}>Increment Age</button>
    </>
  );
}
```

- 1: Age: 32
- 2: Age: 31
- 3: Age: 30
- 4: Error: Cannot mutate state

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Similar to the array mutation issue, directly mutating an object's property and then passing the same object reference to the state setter doesn't trigger a re-render. React uses `Object.is()` to compare the old and new state values. Since `person` is still the same object reference, React doesn't detect any change.

Even though `person.age` is being incremented internally, the UI shows the initial value (30) because React never re-renders the component.

The correct approach is to create a new object:
```javascript
function handleClick() {
  setPerson({
    ...person,
    age: person.age + 1
  });
}
```

This creates a new object with a new reference, which React recognizes as a state change and triggers a re-render. This is a fundamental principle in React: **always treat state as immutable**.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 11. What will be logged to the console?

```javascript
import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect A');
    return () => console.log('Cleanup A');
  }, [count]);

  useEffect(() => {
    console.log('Effect B');
    return () => console.log('Cleanup B');
  }, []);

  console.log('Render');

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**On initial mount:**
- 1: "Render", "Effect A", "Effect B"
- 2: "Effect A", "Effect B", "Render"
- 3: "Render", "Effect B", "Effect A"
- 4: "Effect A", "Cleanup A", "Effect B", "Render"

**After first button click:**
- 1: "Render", "Cleanup A", "Effect A"
- 2: "Cleanup A", "Render", "Effect A"
- 3: "Render", "Effect A", "Cleanup A"
- 4: "Render", "Cleanup B", "Effect B", "Cleanup A", "Effect A"

<details><summary><b>Answer</b></summary>
<p>

##### Answer for initial mount: 1, Answer for first click: 1

**On initial mount:**
1. Component renders first: "Render"
2. After render, effects run in the order they're defined: "Effect A", "Effect B"
3. Cleanup functions are registered but not executed

**After first button click:**
1. State changes, component re-renders: "Render"
2. Before running Effect A again (because `count` dependency changed), its cleanup runs: "Cleanup A"
3. Effect A runs again: "Effect A"
4. Effect B doesn't run because its dependency array `[]` is empty (no changes)
5. Cleanup B is not called because Effect B doesn't re-run

**Key takeaways:**
- Render happens first, then effects run
- Effects run in the order they're defined
- Cleanup runs before re-running an effect (when dependencies change)
- Effects with empty dependency arrays only run once on mount

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**
