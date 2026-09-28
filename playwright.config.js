const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Base URL used by all API requests
  use: {
    baseURL: 'https://reqres.in'
  },

  // Maximum time allowed for each test
  timeout: 30000
});
