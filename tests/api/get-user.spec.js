const { test, expect } = require('@playwright/test');

test('GET user', async ({ request }) => {

  // Send GET request to get user with id 2
  const response = await request.get('/api/users/2');

  // Check that API returned 200 OK
  expect(response.status()).toBe(200);

  // Read response body as JSON
  const body = await response.json();

  // Check that user id is 2
  expect(body.data.id).toBe(2);
});

/*
CONCEPT: get-user.spec.js

WHAT ARE WE DOING:
We are sending a basic GET request and checking the response.

REQUEST:
GET /api/users/2

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate the status code and verify that the returned user id is 2.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('GET user', async ({ request }) => {
   -> I create one API test and use Playwright's request fixture.

3. const response = await request.get('/api/users/2');
   -> I send a GET request to the user endpoint.

4. expect(response.status()).toBe(200);
   -> I verify that the API returned HTTP 200.

5. const body = await response.json();
   -> I convert the response into a JavaScript object.

6. expect(body.data.id).toBe(2);
   -> I verify the user id in the response.
*/