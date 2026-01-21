const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    modifyObstructiveCode: false, 
    chromeWebSecurity: false,     
    pageLoadTimeout: 60000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'E-commerce Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});