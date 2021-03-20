//Note: 
///Describe: Mô tả một 'Suite'
///It: Mô tả testcase
////==> Describe giống như là scenario và trong 1 scenario sẽ có nhiều testcase -- it -- mô tả test case đó làm trò gì

describe('First Cypress Test Adaption From Nhut', function() {
    //Testcase: navigate action
    it('Nhut try to visit the ToolsQA Demo Page to get some adaption with Cypress', function() {
        cy.visit("https://demoqa.com/")
    })

    //Testcase: click aciton
    it('Nhut do another action to check if this is for describe a testcase', function() {
        cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
        cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
    })
})