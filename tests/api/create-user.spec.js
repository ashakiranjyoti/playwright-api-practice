const { test, expect } = require('@playwright/test');

test('POST create user', async ({ request }) => {

  // Send POST request with JSON body
  const response = await request.post('/api/users', {
    data: {
      name: 'QA Engineer',
      job: 'Automation Tester'
    }
  });

  // Check that user was created successfully
  expect(response.status()).toBe(201);

  // Read response body as JSON
  const body = await response.json();

  // Validate the values sent in the request
  expect(body.name).toBe('QA Engineer');
  expect(body.job).toBe('Automation Tester');

  // Check that API generated an id
  expect(body.id).toBeTruthy();
});

/*
CONCEPT: create-user.spec.js

WHAT ARE WE DOING:
We are sending a POST request with JSON data to create a user.

REQUEST:
POST /api/users

BODY:
{
  "name": "QA Engineer",
  "job": "Automation Tester"
}

EXPECTED RESPONSE:
201 Created

VALIDATION:
We validate the status code, the name, the job, and that an id is returned.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('POST create user', async ({ request }) => {
   -> I create a POST API test using the request fixture.

3. const response = await request.post('/api/users', {
   -> I send a POST request to the users endpoint.

4. data: { name: ..., job: ... }
   -> I send the JSON request body.

5. expect(response.status()).toBe(201);
   -> I verify that the API returned 201 Created.

6. const body = await response.json();
   -> I read the response body as JSON.

7. expect(body.name).toBe(...)
   -> I verify the name sent in the request.

8. expect(body.job).toBe(...)
   -> I verify the job sent in the request.

9. expect(body.id).toBeTruthy();
   -> I verify that the API generated an id.
*/