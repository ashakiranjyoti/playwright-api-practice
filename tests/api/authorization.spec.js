const { test, expect } = require('@playwright/test');

test('API request with Bearer token', async ({ request }) => {

  // Send an app request with an invalid Bearer token
  const response = await request.get(
    '/app/collections/products/records',
    {
      headers: {
        Authorization: 'Bearer invalid-token'
      }
    }
  );

  // Invalid or missing app-user authentication should return 401
  expect(response.status()).toBe(401);
});

/*
CONCEPT: authorization.spec.js

WHAT ARE WE DOING:
We are sending an Authorization header using the Bearer token format.

REQUEST:
GET /app/collections/products/records

HEADERS:
Authorization: Bearer invalid-token

EXPECTED RESPONSE:
401 Unauthorized

VALIDATION:
We validate that the API rejects the invalid Bearer token.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('API request with Bearer token', async ({ request }) => {
   -> I create an API authorization test.

3. request.get('/app/collections/products/records', {
   -> I send a GET request to an app-user endpoint.

4. Authorization: 'Bearer invalid-token'
   -> I send the token in the standard Bearer token format.

5. expect(response.status()).toBe(401);
   -> I verify that the invalid token is rejected.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is a Bearer token?
-> It is an authentication token sent in the Authorization header.

Q2. What is the header format?
-> Authorization: Bearer <token>

Q3. Why are we expecting 401 here?
-> We are intentionally sending an invalid token to verify the authentication failure response.
*/
