const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000,
    modifyObstructiveCode: false, // Critical for SauceDemo performance in CI
    chromeWebSecurity: false,     // Helps with cross-origin script hangs
    blockHosts: ["*backtrace.io", "*events.backtrace.io"],
    retries: {
      runMode: 2,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});