// cypress/integration/groceryPage.spec.js
describe('Grocery Page', () => {
    beforeEach(() => {
      // Add mock Redux store data before each test
      cy.intercept('GET', '**/api/recipes', {
        body: [
          { id: 1, name: 'Recipe 1' },
          { id: 2, name: 'Recipe 2' },
        ],
      }).as('getRecipes');
  
      cy.visit('http://localhost:3000/grocery');
    });
  
    it('should render the grocery page with the correct title', () => {
      cy.contains('Grocery List').should('be.visible');
    });
  
    it('should list all recipes', () => {
      cy.get('.recipe-item').should('have.length', 2);
      cy.contains('Recipe 1').should('be.visible');
      cy.contains('Recipe 2').should('be.visible');
    });
  
    it('should check and uncheck a recipe', () => {
      cy.get('input[type="checkbox"]').first().check().should('be.checked');
      cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked');
    });
  
    it('should open the modal when "Get Grocery" is clicked', () => {
      cy.contains('Get Grocery').click();
      cy.contains('Enter Number of Servings').should('be.visible');
    });
  
    it('should close the modal when "Cancel" is clicked', () => {
      cy.contains('Get Grocery').click();
      cy.contains('Cancel').click();
      cy.contains('Enter Number of Servings').should('not.exist');
    });
  
    it('should navigate to GroceryList page with selected recipes and servings when "Done" is clicked', () => {
      cy.contains('Get Grocery').click();
      cy.get('input[type="number"]').clear().type('3');
      cy.contains('Done').click();
      cy.url().should('include', '/groceryList');
    });
  });
  