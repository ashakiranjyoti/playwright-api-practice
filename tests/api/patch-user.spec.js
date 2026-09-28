const { test, expect } = require('@playwright/test');

test('PATCH update user', async ({ request }) => {

  // Send PATCH request with only the field that needs to change
  const response = await request.patch('/api/users/2', {
    headers: {
      // Current ReqRes API requires an API key for /api/* requests
      'x-api-key': process.env.REQRES_API_KEY
    },
    data: {
      job: 'Lead QA Engineer'
    }
  });

  // Check that API returned 200 OK
  expect(response.status()).toBe(200);

  // Read response body as JSON
  const body = await response.json();

  // Validate the updated field
  expect(body.job).toBe('Lead QA Engineer');
});

/*
CONCEPT: patch-user.spec.js

WHAT ARE WE DOING:
We are sending a PATCH request to update only one field of a user.

REQUEST:
PATCH /api/users/2

BODY:
{
  "job": "Lead QA Engineer"
}

HEADERS:
x-api-key: process.env.REQRES_API_KEY

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate the status code and the updated job value.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('PATCH update user', async ({ request }) => {
   -> I create an API test using the request fixture.

3. request.patch('/api/users/2', {
   -> I send a PATCH request to user 2.

4. headers: { 'x-api-key': process.env.REQRES_API_KEY }
   -> I send the current ReqRes API key.

5. data: { job: 'Lead QA Engineer' }
   -> I send only the field I want to update.

6. expect(response.status()).toBe(200);
   -> I verify the response status.

7. const body = await response.json();
   -> I read the response body.

8. expect(body.job).toBe('Lead QA Engineer');
   -> I verify that the job was updated.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is PATCH used for?
-> It is commonly used for a partial update.

Q2. What is the main difference between PUT and PATCH?
-> PUT generally represents a full replacement, while PATCH changes selected fields.

Q3. How do you send JSON data in Playwright?
-> I use the data option in the request.
*/