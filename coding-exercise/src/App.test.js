import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the exercise list heading on the home page', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/React Coding Exercises/i);
  expect(heading).toBeInTheDocument();
});
