const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "zec6sa",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
