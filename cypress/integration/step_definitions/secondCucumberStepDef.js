const aharoomsURL = 'https://staging.aharooms.net/'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../integration/page_object/secondCucumberPageObject'

const homePage = new HomePage()

Given('I go to {string} site', (string) => {
    switch (string) {
        case ("Aharooms"):
            cy.visit(aharoomsURL)
            break;
    }
});

Then('I verify search fields appears on Home Page', () => {
    homePage.getSearchTabComponent().contains("Tìm kiếm")
});

When('I verify {string} section appears on Home Page', (string) => {
    switch (string) {
        case ("Săn hot Deal"):
            homePage.getPromotionLabelTextComponent().should('have.text', string)
            break;
        case ("Những khách sạn nổi bật"):
            homePage.getLabelTextXpath(string).should('have.text', string)
            break;
    }
});