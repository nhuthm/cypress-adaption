import HomePageLocator from '../../integration/page_ui/secondCucumberPageUI'
var printf = require('printf')
const homePageLocator = new HomePageLocator()

class HomePage {
    getSearchTabComponent() {
        return cy.xpath(homePageLocator.search_tab_component_xpath)
    }

    getLabelTextXpath(string) {
        return cy.xpath(printf(homePageLocator.label_text_xpath, string))
    }

    getPromotionLabelTextComponent() {
        return cy.xpath(homePageLocator.promotion_label_text_xpath)
    }
}
export default HomePage