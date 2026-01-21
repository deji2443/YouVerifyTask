Cypress.Commands.add('logStep', (message) => {
  cy.log(`**STEP:** ${message}`);

});