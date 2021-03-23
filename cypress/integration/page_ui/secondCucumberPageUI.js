class HomePageLocator {
    constructor() {
        this.search_tab_component_xpath= "//*[contains(@role,'tabpanel')]"
        this.label_text_xpath = "//*[contains(@class,'Heading___StyledBox') and text()='%s']"
        this.promotion_label_text_xpath = "//*[contains(@class,'HotdealSectionDesktop___StyledHeading')]"
    }
}
export default HomePageLocator