const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000, // Increase to 2 minutes for slow CI
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2, // Automatically retry 2 times on failure in CI
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Block the tracking service that was showing 401 errors
    blockHosts: ["*backtrace.io"], 
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'SauceDemo Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});