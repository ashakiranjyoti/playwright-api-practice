const { test, expect } = require('@playwright/test');

test('Validate response body', async ({ request }) => {

  // Send GET request for user 2
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Read the response body as JSON
  const body = await response.json();

  // Validate values from the response body
  expect(body.data.id).toBe(2);
  expect(body.data.email).toBeTruthy();
  expect(body.data.first_name).toBeTruthy();
});

/*
CONCEPT: response-body-validation.spec.js

WHAT ARE WE DOING:
We are checking the values returned inside the API response body.

REQUEST:
GET /api/users/2
Header: x-api-key

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate the user id, email, and first name from the response body.

SAMPLE OUTPUT:

Response Status:
200

Validated Response Body:
{
  "data": {
    "id": 2,
    "email": "<present>",
    "first_name": "<present>"
  }
}

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Validate response body', async ({ request }) => {
   -> I create the API test and use the request fixture.

3. request.get('/api/users/2', { ... })
   -> I send a GET request for user 2.

4. const body = await response.json();
   -> I convert the response into a JavaScript object.

5. expect(body.data.id).toBe(2);
   -> I verify that the returned user id is 2.

6. expect(body.data.email).toBeTruthy();
   -> I verify that an email value is present.

7. expect(body.data.first_name).toBeTruthy();
   -> I verify that the first name value is present.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. How do you read the response body?
-> I use await response.json().

Q2. Why validate the response body?
-> To verify that the API returned the correct data, not only the correct status code.

Q3. What is the difference between status validation and body validation?
-> Status validation checks the HTTP result, while body validation checks the returned data.
*/