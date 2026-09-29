const { test, expect } = require('@playwright/test');

test('GET users with query parameter', async ({ request }) => {

  // Send GET request with page=2 as a query parameter
  const response = await request.get('/api/users', {
    params: {
      page: 2
    }
  });

  // Check that API returned 200 OK
  expect(response.status()).toBe(200);

  // Read response body as JSON
  const body = await response.json();

  // Check that the API returned page 2
  expect(body.page).toBe(2);

  // Check that data is available
  expect(body.data.length).toBeGreaterThan(0);
});

/*
CONCEPT: get-user-with-params.spec.js

WHAT ARE WE DOING:
We are sending a GET request with a query parameter and validating the response.

REQUEST:
GET /api/users?page=2

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate the status code, the page value, and that the response contains users.

SAMPLE OUTPUT:

Request:
GET /api/users?page=2

Response Status:
200

Validated Response Data:
{
  "page": 2,
  "data": "users available"
}

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('GET users with query parameter', async ({ request }) => {
   -> I create an API test and use the request fixture.

3. const response = await request.get('/api/users', {
   -> I send a GET request to the users endpoint.

4. params: { page: 2 }
   -> I pass page=2 as a query parameter.

5. expect(response.status()).toBe(200);
   -> I verify the HTTP status code.

6. const body = await response.json();
   -> I read the response as JSON.

7. expect(body.page).toBe(2);
   -> I verify that the API returned page 2.

8. expect(body.data.length).toBeGreaterThan(0);
   -> I verify that the response contains user data.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is the request fixture in Playwright?
-> It provides an API request context that I can use to send HTTP requests.

Q2. How do you validate the response status?
-> I use response.status() and an expect assertion.

Q3. How do you read the API response body?
-> I use await response.json() to get the response as a JavaScript object.

*/