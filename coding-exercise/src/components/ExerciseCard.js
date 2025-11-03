import React from 'react';

const difficultyColors = {
  Easy: '#28a745',
  Medium: '#ffc107',
  Hard: '#dc3545',
};

function ExerciseCard({ exercise, onViewProblem, onViewSolution }) {
  return (
    <div
      style={{
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ marginTop: 0, marginBottom: '10px' }}>{exercise.title}</h2>
          <p style={{ color: '#666', marginBottom: '15px' }}>{exercise.description}</p>
          
          <div style={{ marginBottom: '15px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                backgroundColor: difficultyColors[exercise.difficulty] || '#6c757d',
                color: exercise.difficulty === 'Medium' ? '#000' : '#fff',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                marginRight: '10px',
              }}
            >
              {exercise.difficulty}
            </span>
            {exercise.topics.map((topic) => (
              <span
                key={topic}
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: '#e9ecef',
                  color: '#495057',
                  borderRadius: '12px',
                  fontSize: '13px',
                  marginRight: '8px',
                  marginBottom: '5px',
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={onViewProblem}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffc107',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          View Problem
        </button>
        <button
          onClick={onViewSolution}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          View Solution
        </button>
      </div>
    </div>
  );
}

export default ExerciseCard;
