const aharoomsURL = 'https://staging.aharooms.net/'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I go to {string} site', (string) => {
    switch (string) {
        case ("Aharooms"):
            cy.visit(aharoomsURL)
            break;
    }
});

Then('I verify search fields appears on Home Page', () => {
    cy.xpath("//*[contains(@role,'tabpanel')]").contains("Tìm kiếm")
});