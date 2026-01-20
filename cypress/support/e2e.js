import 'cypress-mochawesome-reporter/register';
// This prevents Cypress from failing the test when E-commerce
// throws an internal "document of null" error.
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

import './commands';
import 'cypress-mochawesome-reporter/register';