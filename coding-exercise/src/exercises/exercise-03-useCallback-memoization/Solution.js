import React, { useState, useCallback, memo } from 'react';

/**
 * CODING EXERCISE 3: useCallback and Unnecessary Re-renders - SOLUTION
 * 
 * ANSWER: B) ChildComponent re-renders every time count changes
 * 
 * EXPLANATION:
 * 
 * 1. FUNCTION REFERENCE PROBLEM:
 *    - Every time the parent re-renders, handleClick is recreated
 *    - Even though the function does the same thing, it's a NEW reference
 *    - React compares props by reference: oldFunction !== newFunction
 * 
 * 2. WHY IT RE-RENDERS:
 *    - Parent count changes → Parent re-renders
 *    - Parent re-render → handleClick recreated with new reference
 *    - New reference → Child sees "different" prop → Child re-renders
 * 
 * 3. THE SOLUTION:
 *    - Use useCallback to memoize the function
 *    - Use React.memo to prevent re-renders when props haven't changed
 *    - Combine both for optimal performance
 */

// Problem: Regular child component (re-renders on every parent render)
const RegularChild = ({ onClick, label }) => {
  console.log(`${label} rendered`);
  return (
    <div style={{ padding: '10px', backgroundColor: '#ffe6e6', marginTop: '10px', borderRadius: '5px' }}>
      <p><strong>{label}</strong></p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Solution 1: Memoized child (still re-renders because function reference changes)
const MemoizedChild = memo(({ onClick, label }) => {
  console.log(`${label} rendered`);
  return (
    <div style={{ padding: '10px', backgroundColor: '#fff3e6', marginTop: '10px', borderRadius: '5px' }}>
      <p><strong>{label}</strong></p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

// Solution 2: Optimized child (won't re-render unnecessarily)
const OptimizedChild = memo(({ onClick, label }) => {
  console.log(`${label} rendered`);
  return (
    <div style={{ padding: '10px', backgroundColor: '#e6ffe6', marginTop: '10px', borderRadius: '5px' }}>
      <p><strong>{label}</strong></p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

function Solution() {
  const [count, setCount] = useState(0);
  const [clicks1, setClicks1] = useState(0);
  const [clicks2, setClicks2] = useState(0);
  const [clicks3, setClicks3] = useState(0);

  // ❌ WRONG: Function recreated on every render
  const handleClick1 = () => {
    setClicks1(prev => prev + 1);
  };

  // ⚠️ PARTIAL: Function recreated on every render (memo doesn't help)
  const handleClick2 = () => {
    setClicks2(prev => prev + 1);
  };

  // ✅ CORRECT: Function memoized with useCallback
  const handleClick3 = useCallback(() => {
    setClicks3(prev => prev + 1);
  }, []); // Empty deps = function never changes

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 3: useCallback & Memoization Solution</h2>

      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '5px' 
      }}>
        <h3>Parent State</h3>
        <p>Parent Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Parent Count (Watch Console!)
        </button>
      </div>

      {/* Example 1: Regular child without memo */}
      <div style={{ marginBottom: '20px' }}>
        <h3>❌ Problem: Regular Child (No Optimization)</h3>
        <p>Clicks: {clicks1}</p>
        <RegularChild 
          onClick={handleClick1} 
          label="Regular Child (Always Re-renders)"
        />
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '3px', 
          fontSize: '12px',
          overflow: 'auto' 
        }}>
{`const handleClick = () => {
  setClicks(prev => prev + 1);
};

<RegularChild onClick={handleClick} />

// Problem: Function recreated every render
// Child re-renders every time`}
        </pre>
      </div>

      {/* Example 2: Memoized child but function still recreated */}
      <div style={{ marginBottom: '20px' }}>
        <h3>⚠️ Partial: Memo Child (Still Re-renders)</h3>
        <p>Clicks: {clicks2}</p>
        <MemoizedChild 
          onClick={handleClick2} 
          label="Memoized Child (Still Re-renders)"
        />
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '3px', 
          fontSize: '12px',
          overflow: 'auto' 
        }}>
{`const MemoizedChild = memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});

const handleClick = () => { /* ... */ };
<MemoizedChild onClick={handleClick} />

// Problem: memo() helps, but function still
// recreated, so props still "change"`}
        </pre>
      </div>

      {/* Example 3: Optimized with useCallback + memo */}
      <div style={{ marginBottom: '20px' }}>
        <h3>✅ Solution: useCallback + memo</h3>
        <p>Clicks: {clicks3}</p>
        <OptimizedChild 
          onClick={handleClick3} 
          label="Optimized Child (No Unnecessary Re-renders)"
        />
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          borderRadius: '3px', 
          fontSize: '12px',
          overflow: 'auto' 
        }}>
{`const OptimizedChild = memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});

const handleClick = useCallback(() => {
  setClicks(prev => prev + 1);
}, []); // Memoized - same reference

<OptimizedChild onClick={handleClick} />

// ✅ Function reference stays the same
// ✅ memo() prevents re-render
// ✅ Only re-renders when actually needed`}
        </pre>
      </div>

      {/* Key Takeaways */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        <h3>📚 Key Takeaways</h3>
        <ol>
          <li><strong>Functions are recreated:</strong> On every render, function declarations create new references</li>
          <li><strong>Reference equality:</strong> React compares props using === (reference comparison)</li>
          <li><strong>useCallback:</strong> Memoizes function references between renders</li>
          <li><strong>React.memo:</strong> Prevents re-renders when props haven't changed</li>
          <li><strong>Combine both:</strong> useCallback + memo for optimal performance</li>
          <li><strong>Dependencies matter:</strong> useCallback deps determine when function updates</li>
        </ol>
      </div>

      {/* When to Use */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#e6f3ff', 
        borderRadius: '5px' 
      }}>
        <h3>💡 When to Use useCallback</h3>
        <ul>
          <li>✅ Passing callbacks to memoized child components</li>
          <li>✅ Function is a dependency in useEffect/useMemo</li>
          <li>✅ Expensive child components that re-render often</li>
          <li>❌ Simple components without performance issues</li>
          <li>❌ Functions that change on every render anyway</li>
          <li>❌ Premature optimization (measure first!)</li>
        </ul>
      </div>

      {/* Common Mistakes */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#fff3cd', 
        borderRadius: '5px' 
      }}>
        <h3>⚠️ Common Mistakes</h3>
        <ul>
          <li>❌ Using useCallback without React.memo on child</li>
          <li>❌ Forgetting dependencies (causes stale closures)</li>
          <li>❌ Over-optimizing everything (adds complexity)</li>
          <li>❌ Using useCallback for functions that change often</li>
          <li>✅ Profile first, optimize when needed</li>
          <li>✅ Use React DevTools Profiler to find bottlenecks</li>
        </ul>
      </div>

      {/* Code Comparison */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '5px' 
      }}>
        <h3>📊 Performance Comparison</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#e9ecef' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #dee2e6' }}>Approach</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #dee2e6' }}>Re-renders</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #dee2e6' }}>Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Regular Child</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>❌ Every parent render</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Poor</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>memo() only</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>❌ Every parent render</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Poor</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>useCallback + memo</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>✅ Only when needed</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Excellent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Solution;
