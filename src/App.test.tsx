/*import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/
export {};

// Your test code here
describe('App Component', () => {
  it('renders learn react link', () => {
    cy.visit('/'); // Adjust the URL if necessary
    cy.contains('learn react').should('be.visible');
  });
});
