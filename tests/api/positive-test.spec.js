const { test, expect } = require('@playwright/test');

test('Positive GET user test', async ({ request }) => {

  // Send a valid GET request for user 2
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Check that the request was successful
  expect(response.ok()).toBeTruthy();

  // Read the response body
  const body = await response.json();

  // Validate that user data is returned
  expect(body.data).toBeTruthy();
  expect(body.data.id).toBe(2);
});

/*
CONCEPT: positive-test.spec.js

WHAT ARE WE DOING:
We are testing a valid API request and verifying that it succeeds.

REQUEST:
GET /api/users/2
Header: x-api-key

EXPECTED RESPONSE:
200 OK

VALIDATION:
We verify that the request is successful and user data is returned.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Positive GET user test', async ({ request }) => {
   -> I create a positive API test using the request fixture.

3. request.get('/api/users/2', { ... })
   -> I send a valid GET request.

4. expect(response.ok()).toBeTruthy();
   -> I verify that the response is in the successful HTTP range.

5. const body = await response.json();
   -> I read the response body as JSON.

6. expect(body.data).toBeTruthy();
   -> I verify that user data is returned.

7. expect(body.data.id).toBe(2);
   -> I verify that the correct user id is returned.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is a positive test case?
-> It verifies that the API works correctly with valid input.

Q2. What does response.ok() tell you?
-> It returns true when the HTTP response is successful.

Q3. Positive vs negative testing?
-> Positive testing uses valid input and expects success; negative testing uses invalid input and expects an error.
*/