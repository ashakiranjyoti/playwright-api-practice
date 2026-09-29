const { test, expect } = require('@playwright/test');

test('Simple schema validation - GET user', async ({ request }) => {

  // Send GET request for user 2
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Check that API returned 200 OK
  expect(response.status()).toBe(200);

  // Read response body as JSON
  const body = await response.json();

  // Check that the main data object exists
  expect(body).toHaveProperty('data');

  // Check that required fields exist
  expect(body.data).toHaveProperty('id');
  expect(body.data).toHaveProperty('email');
  expect(body.data).toHaveProperty('first_name');
  expect(body.data).toHaveProperty('last_name');

  // Check the data types of important fields
  expect(typeof body.data.id).toBe('number');
  expect(typeof body.data.email).toBe('string');
  expect(typeof body.data.first_name).toBe('string');
  expect(typeof body.data.last_name).toBe('string');
});

/*
CONCEPT: schema-validation.spec.js

WHAT ARE WE DOING:

We are doing simple schema validation without any external library.

Instead of using AJV, I manually verify that:

1. Required fields are present.
2. Important fields have the expected data types.

REQUEST:
GET /api/users/2

EXPECTED RESPONSE:
200 OK

SCHEMA CHECKS:

data       -> exists
id         -> number
email      -> string
first_name -> string
last_name  -> string

SAMPLE OUTPUT:

Response Status:
200

Schema Validation:
PASSED

Validated Structure:
data -> exists
id -> number
email -> string
first_name -> string
last_name -> string

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('Simple schema validation - GET user', async ({ request }) => {
   -> I create an API test and use the request fixture.

3. request.get('/api/users/2', { ... });
   -> I send a GET request for user 2.

4. expect(response.status()).toBe(200);
   -> I verify the response status is 200.

5. const body = await response.json();
   -> I read the response body as a JavaScript object.

6. expect(body).toHaveProperty('data');
   -> I verify that the data field exists.

7. expect(body.data).toHaveProperty('id');
   -> I verify that the id field exists.

8. expect(body.data).toHaveProperty('email');
   -> I verify that the email field exists.

9. expect(body.data).toHaveProperty('first_name');
   -> I verify that the first_name field exists.

10. expect(body.data).toHaveProperty('last_name');
    -> I verify that the last_name field exists.

11. expect(typeof body.data.id).toBe('number');
    -> I verify that id is a number.

12. expect(typeof body.data.email).toBe('string');
    -> I verify that email is a string.

13. expect(typeof body.data.first_name).toBe('string');
    -> I verify that first_name is a string.

14. expect(typeof body.data.last_name).toBe('string');
    -> I verify that last_name is a string.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is schema validation?
-> It checks whether the response has the expected structure and data types.

Q2. Can you do schema validation without AJV?
-> Yes. For simple checks, I can validate required fields and data types using Playwright assertions.

Q3. Why do you use toHaveProperty()?
-> It verifies that a required property exists in the response.

FLOW:

API Response
   ↓
response.json()
   ↓
Check required fields
   ↓
Check data types
   ↓
Pass / Fail
*/
