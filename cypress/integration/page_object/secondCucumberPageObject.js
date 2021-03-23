import HomePageLocator from '../../integration/page_ui/secondCucumberPageUI'

const homePageLocator = new HomePageLocator()

class HomePage {
    getSearchTabComponent() {
        return cy.xpath(homePageLocator.search_tab_component_xpath)
    }
}
export default HomePage