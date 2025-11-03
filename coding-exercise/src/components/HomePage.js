import React from 'react';
import ExerciseCard from './ExerciseCard';
import { exercises } from '../exercises';

function HomePage({ onNavigate }) {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#61dafb' }}>React Coding Exercises</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Interactive coding exercises to test your React knowledge
      </p>

      <div style={{ marginTop: '40px' }}>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onViewProblem={() => onNavigate(`${exercise.id}-problem`)}
            onViewSolution={() => onNavigate(`${exercise.id}-solution`)}
          />
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e7f3ff', borderRadius: '8px' }}>
        <h3>💡 Tips for Success</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>Try to solve the problem before viewing the solution</li>
          <li>Open the browser console to see effect logs</li>
          <li>Experiment with the code to deepen your understanding</li>
          <li>Read the explanations carefully to understand the "why"</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>📝 Contributing</h3>
        <p>To add a new exercise:</p>
        <ol style={{ textAlign: 'left' }}>
          <li>Create a folder: <code>exercises/exercise-XX-name/</code></li>
          <li>Add <code>Problem.js</code> and <code>Solution.js</code></li>
          <li>Create <code>index.js</code> to export both components</li>
          <li>Register in <code>exercises/index.js</code></li>
        </ol>
      </div>
    </div>
  );
}

export default HomePage;
