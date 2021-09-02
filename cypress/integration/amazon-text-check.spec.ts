/// <reference types="cypress" />

describe('Amazon Test cases', () => {
    it("Test Sign In pop up", () => {
        cy.visit("http://amazon.in")
        .get('#nav-link-accountList-nav-line-1')
        .should('have.text','Hello, Sign in')
        .trigger('mouseover');
        cy.get('#nav-flyout-accountList').should('be.visible');
    })
})
