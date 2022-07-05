import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders CRA17-SB-MUI string', () => {
  render(<App />);
  const linkElement = screen.getByText(/cra17-sb-mui/i);
  expect(linkElement).toBeInTheDocument();
});
