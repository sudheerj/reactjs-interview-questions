import React, { useState } from 'react';

/**
 * CODING EXERCISE 1: State Batching and Event Handlers - SOLUTION
 * 
 * ANSWER: C) Counter: 1, Alert shows: 0
 * 
 * EXPLANATION:
 * 
 * 1. STATE CLOSURE:
 *    - When the event handler runs, `counter` is captured with its current value (0)
 *    - All three setCounter calls use the same captured value: counter + 1 = 0 + 1 = 1
 *    - React batches these updates and only applies the last one
 * 
 * 2. ALERT TIMING:
 *    - The alert executes synchronously before React re-renders
 *    - So it shows the old value (0), not the new value (1)
 * 
 * 3. BATCHING:
 *    - React batches multiple setState calls in event handlers for performance
 *    - Since all three calls set the state to the same value (1), the result is just 1
 * 
 * CORRECT APPROACH (Functional Updates):
 * Use the functional form of setState to access the previous state value
 */

function Solution() {
  const [counter, setCounter] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);

  // WRONG: Uses stale closure value
  const handleIncrementWrong = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    alert(`Wrong approach - Counter value in alert: ${counter}`);
  };

  // CORRECT: Uses functional updates
  const handleIncrementCorrect = () => {
    setCorrectCounter(prev => prev + 1);
    setCorrectCounter(prev => prev + 1);
    setCorrectCounter(prev => prev + 1);
    // Note: Alert still shows old value because state updates are async
    alert(`Correct approach - Counter value in alert: ${correctCounter} (old value)`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 1: State Batching Solution</h2>
      
      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#ffe6e6', borderRadius: '5px' }}>
        <h3>❌ Wrong Approach (Closure Problem)</h3>
        <p>Current Counter: {counter}</p>
        <button onClick={handleIncrementWrong}>Increment (Wrong)</button>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          This only increments by 1 because all three setState calls use the same captured value.
        </p>
      </div>

      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#e6ffe6', borderRadius: '5px' }}>
        <h3>✅ Correct Approach (Functional Updates)</h3>
        <p>Current Counter: {correctCounter}</p>
        <button onClick={handleIncrementCorrect}>Increment (Correct)</button>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          This increments by 3 because each setState receives the previous state value.
        </p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>📚 Key Takeaways</h3>
        <ol>
          <li><strong>State is a snapshot:</strong> The state value doesn't change during a render</li>
          <li><strong>Closures capture values:</strong> Event handlers capture the state value from when they were created</li>
          <li><strong>Use functional updates:</strong> When new state depends on previous state, use the function form</li>
          <li><strong>Batching:</strong> React batches multiple setState calls in event handlers</li>
          <li><strong>Async updates:</strong> State updates are asynchronous - you can't read the new value immediately</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e6f3ff', borderRadius: '5px' }}>
        <h3>💡 Code Comparison</h3>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
{`// ❌ WRONG - Uses stale closure
setCounter(counter + 1);  // 0 + 1 = 1
setCounter(counter + 1);  // 0 + 1 = 1
setCounter(counter + 1);  // 0 + 1 = 1
// Result: counter = 1

// ✅ CORRECT - Uses previous state
setCounter(prev => prev + 1);  // 0 + 1 = 1
setCounter(prev => prev + 1);  // 1 + 1 = 2
setCounter(prev => prev + 1);  // 2 + 1 = 3
// Result: counter = 3`}
        </pre>
      </div>
    </div>
  );
}

export default Solution;
