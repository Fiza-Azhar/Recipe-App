describe('MenuPage Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); 
    });
  
    it('should navigate to Add Recipe page when Add Recipe card is clicked', () => {
      cy.contains('Add Recipe').click();
      cy.url().should('include', '/addRecipe');
    });
  
    it('should navigate to View Recipes page when View Recipes card is clicked', () => {
      cy.contains('View Recipes').click();
      cy.url().should('include', '/recipeList');
    });
  
    it('should navigate to Favorite Recipes page when Favorite Recipes card is clicked', () => {
      cy.contains('Favorites').click();
      cy.url().should('include', '/favRecipe');
    });
  });
  