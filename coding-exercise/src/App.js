import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavigationButton from './components/NavigationButton';
import { exercises } from './exercises';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    if (currentView === 'home') {
      return <HomePage onNavigate={setCurrentView} />;
    }

    // Parse the view to get exercise ID and type (problem/solution)
    const [exerciseId, viewType] = currentView.split('-').reduce((acc, part, idx, arr) => {
      if (idx === arr.length - 1) {
        return [acc[0], part]; // Last part is the view type
      }
      return [acc[0] ? `${acc[0]}-${part}` : part, acc[1]];
    }, ['', '']);

    const exercise = exercises.find((ex) => ex.id === exerciseId);
    
    if (!exercise) {
      return <div>Exercise not found</div>;
    }

    const Component = viewType === 'solution' ? exercise.Solution : exercise.Problem;
    return <Component />;
  };

  return (
    <div className="App">
      {currentView !== 'home' && (
        <NavigationButton onClick={() => setCurrentView('home')}>
          ← Back to Home
        </NavigationButton>
      )}
      {renderView()}
    </div>
  );
}

export default App;
