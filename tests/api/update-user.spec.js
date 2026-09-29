const { test, expect } = require('@playwright/test');

test('PUT update user', async ({ request }) => {

  // Send PUT request with the complete updated data
  const response = await request.put('/api/users/2', {
    headers: {
      // Current ReqRes API requires an API key for /api/* requests
      'x-api-key': process.env.REQRES_API_KEY
    },
    data: {
      name: 'QA Engineer Updated',
      job: 'Senior Automation Tester'
    }
  });

  // Check that API returned 200 OK
  expect(response.status()).toBe(200);

  // Read response body as JSON
  const body = await response.json();

  // Validate the updated values
  expect(body.name).toBe('QA Engineer Updated');
  expect(body.job).toBe('Senior Automation Tester');
});

/*
CONCEPT: update-user.spec.js

WHAT ARE WE DOING:
We are sending a PUT request to update a user's complete data.

REQUEST:
PUT /api/users/2

BODY:
{
  "name": "QA Engineer Updated",
  "job": "Senior Automation Tester"
}

HEADERS:
x-api-key: process.env.REQRES_API_KEY

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate the status code and the updated name and job.

SAMPLE OUTPUT:

Response Status:
200

Validated Response Data:
{
  "name": "QA Engineer Updated",
  "job": "Senior Automation Tester"
}

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('PUT update user', async ({ request }) => {
   -> I create an API test and use Playwright's request fixture.

3. request.put('/api/users/2', {
   -> I send a PUT request to update user 2.

4. headers: { 'x-api-key': process.env.REQRES_API_KEY }
   -> I send the API key required by the current ReqRes API.

5. data: { ... }
   -> I send the updated user data.

6. expect(response.status()).toBe(200);
   -> I verify the API returned 200 OK.

7. const body = await response.json();
   -> I read the response body as JSON.

8. expect(body.name) and expect(body.job)
   -> I verify that the updated values are returned.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. PUT vs PATCH?
-> PUT is generally used for a complete update, while PATCH is used for a partial update.

Q2. How do you send a request body in Playwright?
-> I use the data option.

Q3. How do you send request headers?
-> I use the headers option.
*/