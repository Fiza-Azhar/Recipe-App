
// cypress/integration/recipeList.spec.js (or recipeList.spec.ts for TypeScript)

describe('RecipeList Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/recipeList'); // Adjust URL as per your setup
    });
  
    it('should display all added recipes', () => {
      // Visit the recipe list page
      cy.visit('/recipeList');
    
      // Wait for the .recipe-item elements to be visible
      cy.get('.recipe-item').should('have.length.gt', 0);
    });
    it('should allow user to add a recipe to favorites', () => {
      // Visit the recipe list page
      cy.visit('/recipeList');
    
      // Click on the favorite button of the first recipe item
      cy.get('.favorite-btn').first().click();
    
      // Check if the favorite button changes its icon to filled heart (❤️)
      cy.get('.favorite-btn').first().should('contain.text', '❤️');
    });
  
    it('should allow user to search for a recipe', () => {
      const searchQuery = 'Test'; // Replace with a known recipe name in your test data
  
      // Type the search query into the search input
      cy.get('.search-input').type(searchQuery);
  
      // Wait for the recipes to update based on the search query
      cy.get('.recipe-item').should('have.length.gt', 0);
  
      // Check if the recipe name contains the search query
      cy.get('.recipe-item h3').each(($el) => {
        cy.wrap($el).should('contain.text', searchQuery);
      });
    });
  });
  