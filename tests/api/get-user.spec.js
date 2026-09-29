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

SAMPLE OUTPUT:

Response Status:
200

Validated Response Data:
{
  "data": {
    "id": 2
  }
}

Playwright Result:
1 passed

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

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is the request fixture in Playwright?
-> It provides an API request context that I can use to send HTTP requests.

Q2. How do you validate the response status?
-> I use response.status() and an expect assertion.

Q3. How do you read the API response body?
-> I use await response.json() to get the response as a JavaScript object.

*/