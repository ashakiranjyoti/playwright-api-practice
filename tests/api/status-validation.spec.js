const { test, expect } = require('@playwright/test');

test('Validate GET user status code', async ({ request }) => {

  // Send GET request for user 2
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Validate only the response status code
  expect(response.status()).toBe(200);
});

/*
CONCEPT: status-validation.spec.js

WHAT ARE WE DOING:
We are checking whether the API returns the expected HTTP status code.

REQUEST:
GET /api/users/2
Header: x-api-key

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate that the response status is 200.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Validate GET user status code', async ({ request }) => {
   -> I create an API test using Playwright's request fixture.

3. request.get('/api/users/2', { ... })
   -> I send a GET request to user 2.

4. headers: { 'x-api-key': process.env.REQRES_API_KEY }
   -> I send the ReqRes API key using a header.

5. expect(response.status()).toBe(200);
   -> I verify that the API returned status code 200.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. Why do you validate status codes?
-> To verify whether the API request succeeded or failed as expected.

Q2. How do you get the status code in Playwright?
-> I use response.status().

Q3. What does HTTP 200 mean?
-> The request was successful.
*/