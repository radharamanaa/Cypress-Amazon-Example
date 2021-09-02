/// <reference types="cypress" />


describe('Amazon Test Sidebar Opening', () => {
    it('Test sidebar opening', () => {
        cy.visit('http://amazon.in')
        cy.get('#nav-main div.nav-left')
        .click()
        cy.get('#hmenu-container')
        .should('be.visible');

    })
})
