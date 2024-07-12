it('should render with the correct title', () => {
  // Remove cy.contains('Grocery').click(); since it's a component test, not E2E
   // Visit the main page where the GroceryPage component is rendered
  cy.get('h2').should('contain.text', 'Grocery List');
});

it('should list all recipes', () => {
  //cy.visit('http://localhost:3000'); // Visit the main page where the GroceryPage component is rendered
  cy.get('.recipe-item').should('have.length', 2); // Adjust based on your mocked data
  cy.contains('Recipe 1').should('be.visible');
  cy.contains('Recipe 2').should('be.visible');
});
