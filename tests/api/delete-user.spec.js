const { test, expect } = require('@playwright/test');

test('DELETE user', async ({ request }) => {

  // Send DELETE request for user 2
  const response = await request.delete('/api/users/2', {
    headers: {
      // Current ReqRes API requires an API key for /api/* requests
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Check that API returned 204 No Content
  expect(response.status()).toBe(204);
});

/*
CONCEPT: delete-user.spec.js

WHAT ARE WE DOING:
We are sending a DELETE request to remove user 2.

REQUEST:
DELETE /api/users/2

HEADERS:
x-api-key: process.env.REQRES_API_KEY

EXPECTED RESPONSE:
204 No Content

VALIDATION:
We validate the response status code.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('DELETE user', async ({ request }) => {
   -> I create an API test using the request fixture.

3. request.delete('/api/users/2', {
   -> I send a DELETE request for user 2.

4. headers: { 'x-api-key': process.env.REQRES_API_KEY }
   -> I send the API key required by current ReqRes.

5. expect(response.status()).toBe(204);
   -> I verify that the API returned 204 No Content.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is the expected status for a successful DELETE in this example?
-> 204 No Content.

Q2. Why don't we call response.json() here?
-> A 204 response has no response body.

Q3. Which Playwright method is used for DELETE?
-> request.delete().
*/