const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'E-commerce Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    modifyObstructiveCode: false, 
    chromeWebSecurity: false,     
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {

      allureWriter(on, config);
      
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    env: {
      allure: true,
      allureResultsPath: "allure-results"
    }
  },
});