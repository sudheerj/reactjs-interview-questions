import React, { useState, useEffect } from 'react';

/**
 * CODING EXERCISE 4: Custom Hooks and Code Reusability - SOLUTION
 * 
 * ANSWER: B) Code duplication - should extract into a custom hook
 * 
 * EXPLANATION:
 * 
 * 1. THE PROBLEM:
 *    - Both components have identical data fetching logic
 *    - Duplicate state management (data, loading, error)
 *    - Hard to maintain - changes need to be made in multiple places
 * 
 * 2. THE SOLUTION:
 *    - Extract common logic into a custom hook
 *    - Custom hooks start with "use" prefix
 *    - Can use other hooks inside (useState, useEffect, etc.)
 *    - Returns values that components need
 * 
 * 3. BENEFITS:
 *    - DRY (Don't Repeat Yourself)
 *    - Easier to test
 *    - Easier to maintain
 *    - Reusable across components
 */

// ✅ SOLUTION: Custom Hook
function useFetch(fetchFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchFunction();
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      cancelled = true;
    };
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error };
}

// Simulated API functions
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', email: 'john@example.com', role: 'Developer' });
    }, 1000);
  });
};

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Understanding React Hooks', likes: 42 },
        { id: 2, title: 'Custom Hooks Best Practices', likes: 38 },
        { id: 3, title: 'Building Reusable Components', likes: 55 }
      ]);
    }, 1200);
  });
};

const fetchComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Great article!', author: 'Alice' },
        { id: 2, text: 'Very helpful, thanks!', author: 'Bob' }
      ]);
    }, 800);
  });
};

// ✅ Component 1: Using custom hook
function UserProfile() {
  const { data, loading, error } = useFetch(fetchUser, []);

  if (loading) return <div style={{ padding: '10px' }}>Loading user...</div>;
  if (error) return <div style={{ padding: '10px', color: 'red' }}>Error: {error}</div>;
  
  return (
    <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '5px', marginBottom: '10px' }}>
      <h4>👤 User Profile</h4>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
      <p><strong>Role:</strong> {data?.role}</p>
    </div>
  );
}

// ✅ Component 2: Using custom hook
function PostsList() {
  const { data, loading, error } = useFetch(fetchPosts, []);

  if (loading) return <div style={{ padding: '10px' }}>Loading posts...</div>;
  if (error) return <div style={{ padding: '10px', color: 'red' }}>Error: {error}</div>;
  
  return (
    <div style={{ padding: '15px', backgroundColor: '#e6ffe6', borderRadius: '5px', marginBottom: '10px' }}>
      <h4>📝 Posts</h4>
      {data?.map(post => (
        <div key={post.id} style={{ marginBottom: '8px' }}>
          <strong>{post.title}</strong> - {post.likes} likes
        </div>
      ))}
    </div>
  );
}

// ✅ Component 3: Using custom hook (easy to add new features!)
function CommentsList() {
  const { data, loading, error } = useFetch(fetchComments, []);

  if (loading) return <div style={{ padding: '10px' }}>Loading comments...</div>;
  if (error) return <div style={{ padding: '10px', color: 'red' }}>Error: {error}</div>;
  
  return (
    <div style={{ padding: '15px', backgroundColor: '#fff3e6', borderRadius: '5px' }}>
      <h4>💬 Comments</h4>
      {data?.map(comment => (
        <div key={comment.id} style={{ marginBottom: '8px' }}>
          <em>"{comment.text}"</em> - {comment.author}
        </div>
      ))}
    </div>
  );
}

function Solution() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 4: Custom Hooks Solution</h2>

      {/* The Solution */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        backgroundColor: '#e6ffe6', 
        borderRadius: '5px' 
      }}>
        <h3>✅ Solution: useFetch Custom Hook</h3>
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '15px', 
          borderRadius: '5px', 
          overflow: 'auto',
          fontSize: '13px'
        }}>
{`function useFetch(fetchFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchFunction();
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => { cancelled = true; };
  }, dependencies);

  return { data, loading, error };
}`}
        </pre>
      </div>

      {/* Live Examples */}
      <div style={{ marginBottom: '20px' }}>
        <h3>🎯 Live Examples Using Custom Hook</h3>
        <UserProfile />
        <PostsList />
        <CommentsList />
      </div>

      {/* Usage Example */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        backgroundColor: '#e6f3ff', 
        borderRadius: '5px' 
      }}>
        <h3>💡 How to Use</h3>
        <pre style={{ 
          backgroundColor: '#fff', 
          padding: '15px', 
          borderRadius: '5px', 
          overflow: 'auto',
          fontSize: '13px'
        }}>
{`// Define your fetch function
const fetchUser = () => {
  return fetch('/api/user').then(res => res.json());
};

// Use the custom hook in your component
function UserProfile() {
  const { data, loading, error } = useFetch(fetchUser, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{data.name}</div>;
}`}
        </pre>
      </div>

      {/* Key Takeaways */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <h3>📚 Key Takeaways</h3>
        <ol>
          <li><strong>Custom hooks extract reusable logic:</strong> Share stateful logic between components</li>
          <li><strong>Naming convention:</strong> Always start with "use" prefix (e.g., useFetch, useForm)</li>
          <li><strong>Can use other hooks:</strong> useState, useEffect, useContext, etc.</li>
          <li><strong>Return what components need:</strong> Usually an object or array of values</li>
          <li><strong>Cleanup is important:</strong> Prevent memory leaks with cleanup functions</li>
          <li><strong>Dependencies matter:</strong> Pass dependencies to control when hook re-runs</li>
          <li><strong>Testable:</strong> Custom hooks can be tested independently</li>
        </ol>
      </div>

      {/* Before vs After */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#fff3cd', 
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <h3>📊 Before vs After Comparison</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#ffc107' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Aspect</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Before (Duplicated)</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>After (Custom Hook)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Code Lines</strong></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>~30 lines per component</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>~5 lines per component</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Maintainability</strong></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>❌ Update in multiple places</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>✅ Update in one place</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Testability</strong></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>❌ Test each component</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>✅ Test hook once</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Reusability</strong></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>❌ Copy-paste code</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>✅ Import and use</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Bug Fixes</strong></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>❌ Fix in all places</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>✅ Fix once</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Common Custom Hooks */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <h3>🔧 Common Custom Hook Patterns</h3>
        <ul>
          <li><strong>useFetch:</strong> Data fetching with loading/error states</li>
          <li><strong>useForm:</strong> Form state management and validation</li>
          <li><strong>useLocalStorage:</strong> Sync state with localStorage</li>
          <li><strong>useDebounce:</strong> Debounce values (e.g., search input)</li>
          <li><strong>useWindowSize:</strong> Track window dimensions</li>
          <li><strong>useOnClickOutside:</strong> Detect clicks outside element</li>
          <li><strong>usePrevious:</strong> Store previous value of a prop/state</li>
          <li><strong>useToggle:</strong> Boolean state with toggle function</li>
        </ul>
      </div>

      {/* Best Practices */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#e7f3ff', 
        borderRadius: '5px'
      }}>
        <h3>✨ Custom Hook Best Practices</h3>
        <ul>
          <li>✅ <strong>Start with "use":</strong> Required for React to recognize it as a hook</li>
          <li>✅ <strong>Keep it focused:</strong> One responsibility per hook</li>
          <li>✅ <strong>Return objects for flexibility:</strong> Easy to add new values later</li>
          <li>✅ <strong>Add cleanup:</strong> Always clean up side effects</li>
          <li>✅ <strong>Document parameters:</strong> Make it clear what the hook expects</li>
          <li>✅ <strong>Handle edge cases:</strong> Loading, errors, empty states</li>
          <li>❌ <strong>Don't call conditionally:</strong> Hooks must be called in the same order</li>
          <li>❌ <strong>Don't call in loops:</strong> Violates Rules of Hooks</li>
        </ul>
      </div>
    </div>
  );
}

export default Solution;
