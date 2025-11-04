import React, { useState } from 'react';

/**
 * CODING EXERCISE X: [Exercise Title] - SOLUTION
 * 
 * ANSWER: [Correct option]
 * 
 * EXPLANATION:
 * 
 * 1. [First key point]
 *    - [Detail]
 *    - [Detail]
 * 
 * 2. [Second key point]
 *    - [Detail]
 *    - [Detail]
 * 
 * 3. [Third key point]
 *    - [Detail]
 */

function Solution() {
  // Example 1: The Problem
  const [problemState, setProblemState] = useState(0);

  // Example 2: The Solution
  const [solutionState, setSolutionState] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise X: [Exercise Title] - Solution</h2>

      {/* The Problem Section */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        backgroundColor: '#ffe6e6', 
        borderRadius: '5px' 
      }}>
        <h3>❌ The Problem</h3>
        <p>State: {problemState}</p>
        <button onClick={() => setProblemState(problemState + 1)}>
          Problematic Approach
        </button>
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '3px', 
          overflow: 'auto' 
        }}>
{`// Problematic code
const [state, setState] = useState(0);
// ... problematic implementation`}
        </pre>
        <p style={{ color: '#721c24' }}>
          <strong>Why it's wrong:</strong> [Explanation]
        </p>
      </div>

      {/* The Solution Section */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        backgroundColor: '#e6ffe6', 
        borderRadius: '5px' 
      }}>
        <h3>✅ The Solution</h3>
        <p>State: {solutionState}</p>
        <button onClick={() => setSolutionState(prev => prev + 1)}>
          Correct Approach
        </button>
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '3px', 
          overflow: 'auto' 
        }}>
{`// Correct code
const [state, setState] = useState(0);
// ... correct implementation`}
        </pre>
        <p style={{ fontSize: '14px' }}>
          <strong>Why it works:</strong> [Explanation]
        </p>
      </div>

      {/* Key Takeaways Section */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '5px' 
      }}>
        <h3>📚 Key Takeaways</h3>
        <ol>
          <li><strong>Point 1:</strong> Explanation</li>
          <li><strong>Point 2:</strong> Explanation</li>
          <li><strong>Point 3:</strong> Explanation</li>
          <li><strong>Point 4:</strong> Explanation</li>
        </ol>
      </div>

      {/* Code Comparison Section */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#e6f3ff', 
        borderRadius: '5px' 
      }}>
        <h3>💡 Code Comparison</h3>
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '3px', 
          overflow: 'auto' 
        }}>
{`// ❌ WRONG
// Wrong code example

// ✅ CORRECT
// Correct code example`}
        </pre>
      </div>

      {/* Common Mistakes Section */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#fff3cd', 
        borderRadius: '5px' 
      }}>
        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>❌ Mistake 1</li>
          <li>❌ Mistake 2</li>
          <li>✅ Best practice 1</li>
          <li>✅ Best practice 2</li>
        </ul>
      </div>
    </div>
  );
}

export default Solution;
