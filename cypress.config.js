const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 600,
    viewportWidth: 1000,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"https://login.qa.studio" // https://pokemonbattle.ru
  },
});

// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
