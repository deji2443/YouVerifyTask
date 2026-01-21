Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // when SauceDemo throws internal JS errors.
  return false;
});

import './commands';
import 'cypress-mochawesome-reporter/register';