Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import './commands';
import 'cypress-mochawesome-reporter/register';
import '@shelex/cypress-allure-plugin';
