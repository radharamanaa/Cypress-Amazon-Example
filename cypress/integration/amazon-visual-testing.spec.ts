/// <reference types="cypress" />

describe("Amazon component testing", () => {
    let matchingOptions = {
        "imageConfig": {
          "createDiffImage": true,
          "threshold": 0.001,
          "thresholdType": "percent",
        },
      }
    it("Test header on Load", () => {
        cy.visit("http://amazon.in")
        
        cy.get('#glow-ingress-line2')
        .then(item => {
            item.attr('class','')
        })
        cy.get('#navbar')
        .toMatchImageSnapshot(matchingOptions);
    })
})