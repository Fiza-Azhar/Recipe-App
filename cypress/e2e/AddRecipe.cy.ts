


describe('AddRecipe Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/addRecipe'); 
  });
/*
  it('should add a recipe successfully', () => {
    cy.get('#recipeName').type('Test Recipe');
    cy.get('#recipeDescription').type('This is a test recipe.');

    // Use {force: true} for readonly input
    cy.get('#name').should('be.visible').type('Test Ingredient');
    cy.get('#name', { timeout: 10000 }).should('be.visible').type('Test Ingredient');

    cy.get('.quantity-input').first().type('5', {force: true}); // Example for quantity
    cy.get('.form-select').first().select('g'); // Example for unit

    // Use {force: true} for readonly input
    cy.get('.form-control').eq(2).type('Step 1', {force: true}); // Example for step description
    cy.get('.form-control').eq(3).type('Step 1 details', {force: true}); // Example for step details

    // Click buttons to add more steps and ingredients if needed
    cy.contains('Add Step').click();
    cy.contains('Add Ingredient').click();

    // Click Add Recipe button
    cy.contains('Add Recipe').click();
    
  });
*/
  



  it('should allow user to add multiple ingredients', () => {
    cy.get('#recipeName').type('Test Recipe');
    cy.get('#recipeDescription').type('This is a test recipe.');
    cy.get('#ing').type('Flour'); 
    cy.get('#qty').type('5'); 
    cy.get('#unit').select('KG');


    cy.get('#step').type('step 1'); 
    cy.get('#detail').type('step 1 des'); 


    cy.contains('button', 'Add Recipe').click();

    cy.contains('View Recipes').click();

  });
});
