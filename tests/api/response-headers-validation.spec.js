const { test, expect } = require('@playwright/test');

test('Validate response headers', async ({ request }) => {

  // Send GET request for user 2
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Get all response headers
  const headers = response.headers();

  // Validate the content type returned by the API
  expect(headers['content-type']).toContain('application/json');
});

/*
CONCEPT: response-headers-validation.spec.js

WHAT ARE WE DOING:
We are checking the headers returned by the API.

REQUEST:
GET /api/users/2
Header: x-api-key

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate that the response content type is JSON.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Validate response headers', async ({ request }) => {
   -> I create an API test using the request fixture.

3. request.get('/api/users/2', { ... })
   -> I send a GET request.

4. const headers = response.headers();
   -> I get the response headers as an object.

5. headers['content-type']
   -> I access the content-type response header.

6. expect(headers['content-type']).toContain('application/json');
   -> I verify that the API returned JSON content.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What are response headers?
-> They contain additional information about the API response.

Q2. How do you read response headers in Playwright?
-> I use response.headers().

Q3. Why do you validate content-type?
-> To confirm that the response format is the expected one, such as JSON.
*/