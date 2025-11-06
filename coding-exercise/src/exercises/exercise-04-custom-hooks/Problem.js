import React, { useState, useEffect } from 'react';

/**
 * CODING EXERCISE 4: Custom Hooks and Code Reusability
 * 
 * PROBLEM:
 * You have two components that fetch data from different APIs.
 * Both components have similar logic for loading, error handling, and data fetching.
 * 
 * Question: What's wrong with this code?
 * 
 * Options:
 * A) Nothing is wrong, this is the correct way
 * B) Code duplication - should extract into a custom hook
 * C) Missing cleanup in useEffect
 * D) Should use fetch instead of hardcoded data
 * 
 * BONUS: How would you create a reusable custom hook for this pattern?
 */

// Component 1: Fetches user data
function UserProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      try {
        setData({ name: 'John Doe', email: 'john@example.com' });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div style={{ padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '5px', marginBottom: '10px' }}>
      <h4>User Profile</h4>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
}

// Component 2: Fetches posts data (DUPLICATE LOGIC!)
function PostsList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      try {
        setData([
          { id: 1, title: 'First Post' },
          { id: 2, title: 'Second Post' }
        ]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div style={{ padding: '10px', backgroundColor: '#fff3e6', borderRadius: '5px' }}>
      <h4>Posts</h4>
      {data?.map(post => (
        <p key={post.id}>• {post.title}</p>
      ))}
    </div>
  );
}

function Problem() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Exercise 4: Custom Hooks Problem</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <UserProfile />
        <PostsList />
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#fff3cd', 
        border: '1px solid #ffc107',
        borderRadius: '5px'
      }}>
        <p><strong>⚠️ Question:</strong> What's the problem with this code?</p>
        <p>Think about:</p>
        <ul>
          <li>Is there code duplication?</li>
          <li>How would you make this reusable?</li>
          <li>What would a custom hook look like?</li>
          <li>What are the benefits of extracting this logic?</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#856404' }}>
          <strong>Hint:</strong> Look at the similar patterns in both components
        </p>
      </div>

      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        backgroundColor: '#ffe6e6', 
        borderRadius: '5px' 
      }}>
        <h4>❌ Code Smell Detected</h4>
        <ul style={{ fontSize: '14px' }}>
          <li>Both components have identical state management (data, loading, error)</li>
          <li>Both have the same useEffect pattern</li>
          <li>Both have the same conditional rendering logic</li>
          <li>If we need to add a feature (e.g., retry), we'd have to update both!</li>
        </ul>
      </div>
    </div>
  );
}

export default Problem;
