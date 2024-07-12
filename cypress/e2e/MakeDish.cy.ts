describe('MakeDish Component', () => {
    beforeEach(() => {
      // Assuming you have a recipe with id 1 in your test database
      cy.visit('http://localhost:3000/makeDish/1');
    });
  
    it('should load recipe and display details', () => {
      cy.get('.title').should('contain', 'Test Recipe');
      cy.get('.description').should('contain', 'This is a test recipe description.');
      cy.get('.ingredients-container').should('contain', '100 g - Test Ingredient');
      cy.get('.steps-container').should('contain', 'Test Step 1 Description');
    });
  
    it('should toggle steps', () => {
      cy.get('.step-checkbox').first().click().should('be.checked');
      cy.get('.step-checkbox').first().click().should('not.be.checked');
    });
  
    it('should adjust servings and update ingredient quantities', () => {
      cy.get('input[type="number"]').clear().type('2');
      cy.get('.ingredients-container').should('contain', '200 g - Test Ingredient'); // Assuming the original quantity is 100 for 1 serving
    });
  
    it('should show alert if "Done" is clicked without completing all steps', () => {
      cy.contains('Done').click();
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Please complete all steps before finishing.');
      });
    });
  
    it('should increment counter and navigate back if "Done" is clicked after completing all steps', () => {
      cy.get('.step-checkbox').each(($checkbox) => {
        cy.wrap($checkbox).click();
      });
      cy.contains('Done').click();
      cy.url().should('not.include', '/makeDish/1');
      // Add additional assertions to check if the counter has incremented in the Redux store or on the previous page
    });
  });
  