/// <reference types="cypress" />


 describe('', () => {
     let matchingOptions = {
        "imageConfig": {
          "createDiffImage": true,
          "threshold": 0.001,
          "thresholdType": "percent",
        },
      }

      beforeEach("",() => {
        cy.visit('http://localhost:4200');
      })
     it("Testing landing image", () => {
         cy.wait(5000);
         cy.get('canvas').toMatchImageSnapshot(matchingOptions);
     })
 })
 