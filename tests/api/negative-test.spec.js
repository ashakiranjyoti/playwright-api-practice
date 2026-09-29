const { test, expect } = require('@playwright/test');

test('Negative test - user not found', async ({ request }) => {

  // Send GET request with a user id that does not exist
  const response = await request.get('/api/users/999999', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Check that the API returns 404 Not Found
  expect(response.status()).toBe(404);
});

/*
CONCEPT: negative-test.spec.js

WHAT ARE WE DOING:
We are sending invalid input and checking that the API returns an expected error.

REQUEST:
GET /api/users/999999
Header: x-api-key

EXPECTED RESPONSE:
404 Not Found

VALIDATION:
We validate that a non-existing user returns status code 404.

SAMPLE OUTPUT:

Response Status:
404

Meaning:
Not Found - the requested user does not exist.

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Negative test - user not found', async ({ request }) => {
   -> I create a negative API test using the request fixture.

3. request.get('/api/users/999999', { ... })
   -> I send a GET request for a user id that does not exist.

4. headers: { 'x-api-key': process.env.REQRES_API_KEY }
   -> I send the ReqRes API key in the request header.

5. expect(response.status()).toBe(404);
   -> I verify that the API returns 404 Not Found.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is a negative test case?
-> It checks how the API behaves when invalid or unexpected input is provided.

Q2. Why is 404 expected here?
-> The requested user does not exist.

Q3. Should a negative test always expect a 4xx status?
-> Not always. The expected status depends on the error condition being tested.
*/