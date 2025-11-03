import React, { useState, useEffect } from 'react';

/**
 * CODING EXERCISE 2: useEffect Dependencies and Infinite Loops
 * 
 * PROBLEM:
 * What will happen when this component renders?
 * 
 * Options:
 * A) The count increments once to 1 and stops
 * B) The count increments infinitely causing an infinite loop
 * C) The component throws an error
 * D) The count stays at 0
 * 
 * BONUS: How would you fix this to increment only once on mount?
 */

function Problem() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ value: 0 });

  useEffect(() => {
    console.log('Effect running...');
    setCount(count + 1);
    setData({ value: count });
  }, [data]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 2: useEffect Dependencies Problem</h2>
      <p>Count: {count}</p>
      <p>Data Value: {data.value}</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff3cd', border: '1px solid #ffc107' }}>
        <p><strong>⚠️ Warning:</strong> This component has a bug!</p>
        <p><strong>Question:</strong> What will happen when this component renders?</p>
        <ul>
          <li>Will it render once?</li>
          <li>Will it cause an infinite loop?</li>
          <li>Why does this behavior occur?</li>
          <li>How would you fix it?</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#856404' }}>
          <strong>Note:</strong> Check the browser console to see the effect running
        </p>
      </div>
    </div>
  );
}

export default Problem;
