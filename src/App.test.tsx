// Andrew Barlow
// Universal Design Spring 2021 Final

// App.test.tsx - boilerplate testing functionality

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/importance of universal design/i);
  expect(linkElement).toBeInTheDocument();
});