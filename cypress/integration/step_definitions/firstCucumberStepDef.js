const url = 'https://www.facebook.com';

Given('I open Facebook page', () => {
    cy.visit(url);
});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
});