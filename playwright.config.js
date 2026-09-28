const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Base URL used by all API requests
  use: {
    baseURL: 'https://reqres.in'
  },

  // Maximum time allowed for each test
  timeout: 30000
});

/*
CONCEPT: playwright.config.js

WHAT ARE WE DOING:
We are setting common Playwright settings for the API tests.

REQUEST:
No API request. This file contains Playwright configuration.

EXPECTED RESPONSE:
Not applicable.

VALIDATION:
We configure the base URL and test timeout.

LINE-BY-LINE EXPLANATION:

1. const { defineConfig } = require('@playwright/test');
   -> I import Playwright's configuration function.

2. module.exports = defineConfig({
   -> I export the Playwright configuration.

3. baseURL: 'https://reqres.in'
   -> I set the common base URL for the API.

4. timeout: 30000
   -> I set the test timeout to 30 seconds.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. Why do you use baseURL?
-> It avoids repeating the full API URL in every test.

Q2. What does 30000 mean?
-> It means 30,000 milliseconds, or 30 seconds.

Q3. Where do you define common Playwright settings?
-> In playwright.config.js.

*/
