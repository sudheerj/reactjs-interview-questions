import React, { useState, useEffect, useRef } from 'react';

/**
 * CODING EXERCISE 2: useEffect Dependencies and Infinite Loops - SOLUTION
 * 
 * ANSWER: B) The count increments infinitely causing an infinite loop
 * 
 * EXPLANATION:
 * 
 * 1. OBJECT REFERENCE PROBLEM:
 *    - setData({ value: count }) creates a NEW object every time
 *    - React compares dependencies using Object.is() (similar to ===)
 *    - { value: 0 } !== { value: 0 } (different references)
 * 
 * 2. THE INFINITE LOOP:
 *    - Effect runs → creates new data object → triggers re-render
 *    - Re-render → data dependency changed → effect runs again
 *    - This continues infinitely!
 * 
 * 3. WHY IT HAPPENS:
 *    - Objects and arrays are compared by reference, not by value
 *    - Each render creates a new object reference
 *    - useEffect sees a "different" dependency and runs again
 */

function Solution() {
  // Example 1: Solution 1 - Remove object from dependencies
  const [solution1Count, setSolution1Count] = useState(0);
  const [solution1Data, setSolution1Data] = useState({ value: 0 });

  useEffect(() => {
    console.log('Solution 1: Effect runs once on mount');
    setSolution1Count(prev => prev + 1);
    setSolution1Data({ value: 0 });
  }, []); // Empty dependency array - runs once on mount

  // Example 2: Solution 2 - Use primitive values in dependencies
  const [solution2Count, setSolution2Count] = useState(0);
  const [solution2Data, setSolution2Data] = useState({ value: 0 });
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    console.log('Solution 2: Effect runs when trigger changes');
    setSolution2Count(prev => prev + 1);
    setSolution2Data({ value: trigger });
  }, [trigger]); // Depend on primitive value, not object

  // Example 3: Solution 3 - Use useRef for mutable object
  const [solution3Count, setSolution3Count] = useState(0);
  const solution3DataRef = useRef({ value: 0 });

  useEffect(() => {
    console.log('Solution 3: Effect runs once, uses ref for mutable data');
    setSolution3Count(prev => prev + 1);
    solution3DataRef.current = { value: solution3Count };
  }, []); // Refs don't trigger re-renders

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 2: useEffect Dependencies Solution</h2>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#ffe6e6', borderRadius: '5px' }}>
        <h3>❌ The Problem (Code Disabled)</h3>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
{`useEffect(() => {
  setCount(count + 1);
  setData({ value: count }); // Creates NEW object
}, [data]); // Object reference changes every time!

// Result: INFINITE LOOP 🔄`}
        </pre>
        <p style={{ color: '#721c24' }}>
          <strong>Why it loops:</strong> Each effect run creates a new object, 
          which triggers the effect again because the reference changed.
        </p>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e6ffe6', borderRadius: '5px' }}>
        <h3>✅ Solution 1: Empty Dependency Array</h3>
        <p>Count: {solution1Count}</p>
        <p>Data Value: {solution1Data.value}</p>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
{`useEffect(() => {
  setSolution1Count(prev => prev + 1);
  setSolution1Data({ value: 0 });
}, []); // Empty array = runs once on mount`}
        </pre>
        <p style={{ fontSize: '14px' }}>
          <strong>Use when:</strong> You only need to run the effect once on component mount
        </p>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e6f3ff', borderRadius: '5px' }}>
        <h3>✅ Solution 2: Depend on Primitive Values</h3>
        <p>Count: {solution2Count}</p>
        <p>Data Value: {solution2Data.value}</p>
        <button onClick={() => setTrigger(prev => prev + 1)}>
          Trigger Effect (Trigger: {trigger})
        </button>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
{`const [trigger, setTrigger] = useState(0);

useEffect(() => {
  setSolution2Count(prev => prev + 1);
  setSolution2Data({ value: trigger });
}, [trigger]); // Primitive value - safe to use`}
        </pre>
        <p style={{ fontSize: '14px' }}>
          <strong>Use when:</strong> You need to react to specific value changes
        </p>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3e6', borderRadius: '5px' }}>
        <h3>✅ Solution 3: Use useRef for Mutable Data</h3>
        <p>Count: {solution3Count}</p>
        <p>Data Value (from ref): {solution3DataRef.current.value}</p>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
{`const dataRef = useRef({ value: 0 });

useEffect(() => {
  setSolution3Count(prev => prev + 1);
  dataRef.current = { value: count }; // Mutate ref
}, []); // Refs don't cause re-renders`}
        </pre>
        <p style={{ fontSize: '14px' }}>
          <strong>Use when:</strong> You need to store mutable data without triggering re-renders
        </p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>📚 Key Takeaways</h3>
        <ol>
          <li><strong>Objects/Arrays are compared by reference:</strong> {`{ } !== { }`} even if contents are the same</li>
          <li><strong>Avoid objects in dependencies:</strong> They create new references on every render</li>
          <li><strong>Use primitive values:</strong> Numbers, strings, booleans are compared by value</li>
          <li><strong>Empty array []:</strong> Effect runs once on mount only</li>
          <li><strong>No array:</strong> Effect runs after every render (usually not what you want)</li>
          <li><strong>useRef for mutable data:</strong> Doesn't trigger re-renders when changed</li>
          <li><strong>ESLint plugin:</strong> Use eslint-plugin-react-hooks to catch these issues</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>❌ Putting objects/arrays directly in dependency array</li>
          <li>❌ Creating new objects/arrays inside the component body</li>
          <li>❌ Ignoring ESLint warnings about missing dependencies</li>
          <li>✅ Extract primitive values from objects for dependencies</li>
          <li>✅ Use useMemo/useCallback to stabilize object references</li>
          <li>✅ Consider if you really need the dependency</li>
        </ul>
      </div>
    </div>
  );
}

export default Solution;
