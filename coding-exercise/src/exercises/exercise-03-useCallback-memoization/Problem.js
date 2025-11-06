import React, { useState, useCallback } from 'react';

/**
 * CODING EXERCISE 3: useCallback and Unnecessary Re-renders
 * 
 * PROBLEM:
 * In the code below, the ChildComponent re-renders every time the parent's count changes,
 * even though the child only depends on the handleClick function.
 * 
 * Options:
 * A) ChildComponent re-renders only when button is clicked
 * B) ChildComponent re-renders every time count changes
 * C) ChildComponent never re-renders
 * D) React throws an error about missing dependencies
 * 
 * BONUS: How would you prevent unnecessary re-renders of ChildComponent?
 */

// Child component that should only re-render when its props change
const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent rendered');
  return (
    <div style={{ padding: '10px', backgroundColor: '#e3f2fd', marginTop: '10px', borderRadius: '5px' }}>
      <p>I'm a child component</p>
      <button onClick={onClick}>Click me from child</button>
    </div>
  );
};

function Problem() {
  const [count, setCount] = useState(0);
  const [childClicks, setChildClicks] = useState(0);

  // This function is recreated on every render
  const handleClick = () => {
    setChildClicks(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 3: useCallback & Memoization Problem</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Parent Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Parent Count</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Child Clicks: {childClicks}</p>
      </div>

      <ChildComponent onClick={handleClick} />

      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#fff3cd', 
        border: '1px solid #ffc107',
        borderRadius: '5px'
      }}>
        <p><strong>⚠️ Question:</strong> What happens when you click "Increment Parent Count"?</p>
        <p>Think about:</p>
        <ul>
          <li>Does the ChildComponent re-render?</li>
          <li>Why does it re-render (or not)?</li>
          <li>How can you prevent unnecessary re-renders?</li>
          <li>Check the console to see render logs</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#856404' }}>
          <strong>Tip:</strong> Open the browser console and click the parent button multiple times
        </p>
      </div>
    </div>
  );
}

export default Problem;
