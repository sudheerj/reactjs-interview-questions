import * as Exercise01 from './exercise-01-state-batching';
import * as Exercise02 from './exercise-02-useeffect-dependencies';
import * as Exercise03 from './exercise-03-useCallback-memoization';
import * as Exercise04 from './exercise-04-custom-hooks';

/**
 * Exercise Registry
 * 
 * To add a new exercise:
 * 1. Create a new folder: exercises/exercise-XX-name/
 * 2. Add Problem.js and Solution.js files
 * 3. Create index.js to export both components
 * 4. Import and add to the exercises array below
 */

export const exercises = [
  {
    id: 'exercise-01',
    title: 'State Batching & Closures',
    description: 'Learn about React state updates, closures, and functional updates',
    difficulty: 'Medium',
    topics: ['useState', 'Closures', 'State Batching', 'Event Handlers'],
    Problem: Exercise01.Problem,
    Solution: Exercise01.Solution,
  },
  {
    id: 'exercise-02',
    title: 'useEffect Dependencies',
    description: 'Understand useEffect dependencies and avoid infinite loops',
    difficulty: 'Medium',
    topics: ['useEffect', 'Dependencies', 'Infinite Loops', 'useRef'],
    Problem: Exercise02.Problem,
    Solution: Exercise02.Solution,
  },
  {
    id: 'exercise-03',
    title: 'useCallback & Memoization',
    description: 'Prevent unnecessary re-renders with useCallback and React.memo',
    difficulty: 'Medium',
    topics: ['useCallback', 'React.memo', 'Performance', 'Re-renders'],
    Problem: Exercise03.Problem,
    Solution: Exercise03.Solution,
  },
  {
    id: 'exercise-04',
    title: 'Custom Hooks',
    description: 'Extract reusable logic with custom hooks for cleaner code',
    difficulty: 'Medium',
    topics: ['Custom Hooks', 'Code Reusability', 'DRY', 'Best Practices'],
    Problem: Exercise04.Problem,
    Solution: Exercise04.Solution,
  },
  // Add more exercises here...
];

export default exercises;
