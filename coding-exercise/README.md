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
State values are fixed(i.e, default value 5) in each render and setting the state only changes it for the next render. React will wait untill all the code executed with in an event handler before your state updates follwed by re-rendering the UI. Also, all the 3 setter function calls are replacing the calculated value. Hence, irrespective of how many times you call `setCounter(counter + 5)` the final value is 10(5+5).

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
  <>
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
		<div>Clicked + {ref.current} + times</div>
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