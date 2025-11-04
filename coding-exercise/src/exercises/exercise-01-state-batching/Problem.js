import React, { useState } from 'react';

/**
 * CODING EXERCISE 1: State Batching and Event Handlers
 * 
 * PROBLEM:
 * What will be the output after clicking the "Increment" button once?
 * 
 * Options:
 * A) Counter: 3, Alert shows: 3
 * B) Counter: 3, Alert shows: 0
 * C) Counter: 1, Alert shows: 0
 * D) Counter: 1, Alert shows: 1
 * 
 * BONUS: How would you modify this to make the counter increment by 3?
 */

function Problem() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    alert(`Counter value: ${counter}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 1: State Batching Problem</h2>
      <p>Current Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <p><strong>Question:</strong> What will happen when you click the button?</p>
        <p>Think about:</p>
        <ul>
          <li>What value will the counter display?</li>
          <li>What value will the alert show?</li>
          <li>Why does this behavior occur?</li>
        </ul>
      </div>
    </div>
  );
}

export default Problem;
