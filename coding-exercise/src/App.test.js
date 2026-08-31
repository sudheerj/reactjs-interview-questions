import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the coding exercises home page', () => {
  const { getByText } = render(<App />);
  expect(getByText('React Coding Exercises')).toBeInTheDocument();
});
