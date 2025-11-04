import React, { useState } from 'react';

/**
 * CODING EXERCISE X: [Exercise Title]
 * 
 * PROBLEM:
 * [Describe the problem here]
 * 
 * Options:
 * A) [Option A]
 * B) [Option B]
 * C) [Option C]
 * D) [Option D]
 * 
 * BONUS: [Optional bonus question]
 */

function Problem() {
  // Add your state and logic here
  const [state, setState] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise X: [Exercise Title]</h2>
      
      {/* Your interactive component here */}
      <p>State: {state}</p>
      <button onClick={() => setState(state + 1)}>Click Me</button>
      
      {/* Problem description */}
      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#fff3cd', 
        border: '1px solid #ffc107',
        borderRadius: '5px'
      }}>
        <p><strong>⚠️ Question:</strong> What will happen when you interact with this component?</p>
        <p>Think about:</p>
        <ul>
          <li>Question 1?</li>
          <li>Question 2?</li>
          <li>Question 3?</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#856404' }}>
          <strong>Tip:</strong> Open the browser console to see logs
        </p>
      </div>
    </div>
  );
}

export default Problem;
