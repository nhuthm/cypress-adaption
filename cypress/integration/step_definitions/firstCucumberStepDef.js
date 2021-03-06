const url = 'https://www.facebook.com';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open Facebook page', () => {
    cy.visit(url);
});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
});