const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000,
    blockHosts: ["*backtrace.io", "*events.backtrace.io"], // Blocks the lagging services
    retries: {
      runMode: 2, // Retries the test if the site flakes
      openMode: 0
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});