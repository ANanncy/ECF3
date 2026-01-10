const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Ajout du pattern pour inclure les fichiers .spec.js
    specPattern: "cypress/e2e/**/*.{cy.js,spec.js}",
    baseUrl: "http://localhost:3000"
  },
});


