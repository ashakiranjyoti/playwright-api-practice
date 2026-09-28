const { test, expect } = require('@playwright/test');

test('Validate multiple response fields', async ({ request }) => {

  // Send GET request for user 2
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Read the response body as JSON
  const body = await response.json();

  // Validate multiple fields from the same response
  expect(body.data).toHaveProperty('id');
  expect(body.data).toHaveProperty('email');
  expect(body.data).toHaveProperty('first_name');
  expect(body.data).toHaveProperty('last_name');

  // Validate one exact value as well
  expect(body.data.id).toBe(2);
});

/*
CONCEPT: multiple-field-validation.spec.js

WHAT ARE WE DOING:
We are validating several required fields from the same API response.

REQUEST:
GET /api/users/2
Header: x-api-key

EXPECTED RESPONSE:
200 OK

VALIDATION:
We check that id, email, first_name, and last_name are present and verify id is 2.

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Validate multiple response fields', async ({ request }) => {
   -> I create the API test.

3. request.get('/api/users/2', { ... })
   -> I send the GET request.

4. const body = await response.json();
   -> I read the response as a JavaScript object.

5. expect(body.data).toHaveProperty('id');
   -> I verify that the id field exists.

6. expect(body.data).toHaveProperty('email');
   -> I verify that the email field exists.

7. expect(body.data).toHaveProperty('first_name');
   -> I verify that the first_name field exists.

8. expect(body.data).toHaveProperty('last_name');
   -> I verify that the last_name field exists.

9. expect(body.data.id).toBe(2);
   -> I verify the actual id value.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. How do you validate multiple fields?
-> I use multiple expect assertions for the required fields.

Q2. What does toHaveProperty() do?
-> It checks whether an object contains a particular property.

Q3. Why validate multiple fields?
-> To verify the response structure and important business data together.
*/