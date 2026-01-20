Cypress.Commands.add('logStep', (message) => {
  cy.log(`**STEP:** ${message}`);
  // This shows up clearly in the Mochawesome report
});