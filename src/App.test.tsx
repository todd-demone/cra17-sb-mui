import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders alphabook string', () => {
  render(<App />);
  const linkElement = screen.getByText(/alphabook/i);
  expect(linkElement).toBeInTheDocument();
});
