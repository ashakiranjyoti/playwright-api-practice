const { test: base, expect } = require('@playwright/test');

// Create a custom test fixture named apiKey
const test = base.extend({
  apiKey: async ({}, use) => {

    // Read the API key from an environment variable
    const apiKey = process.env.REQRES_API_KEY;

    // Make the API key available to the test
    await use(apiKey);
  }
});

test('Custom fixture - use API key', async ({ request, apiKey }) => {

  // Send GET request using the value provided by the custom fixture
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': apiKey
    }
  });

  // Check that the request was successful
  expect(response.status()).toBe(200);

  // Read response body
  const body = await response.json();

  // Validate user id
  expect(body.data.id).toBe(2);
});

/*
CONCEPT: custom-fixtures.spec.js

WHAT ARE WE DOING:

We are creating a simple custom Playwright fixture called apiKey.

Instead of reading process.env.REQRES_API_KEY directly inside the test,
the custom fixture prepares the value and gives it to the test.

REQUEST:
GET /api/users/2

HEADER:
x-api-key: apiKey

EXPECTED RESPONSE:
200 OK

SAMPLE OUTPUT:

Custom Fixture:
apiKey -> provided to test

Response Status:
200

Validated User ID:
2

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test: base, expect } = require('@playwright/test');
   -> I import Playwright test and rename test as base because I will extend it.

2. const test = base.extend({
   -> I create a custom Playwright test object.

3. apiKey: async ({}, use) => {
   -> I define a custom fixture named apiKey.

4. const apiKey = process.env.REQRES_API_KEY;
   -> I read the API key from the environment.

5. await use(apiKey);
   -> I provide the API key to the test.

6. test('Custom fixture - use API key', async ({ request, apiKey }) => {
   -> I can now use both the built-in request fixture and my custom apiKey fixture.

7. headers: { 'x-api-key': apiKey }
   -> I use the value supplied by the custom fixture.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is a custom fixture?
-> A custom fixture is reusable setup or data that we provide to tests through Playwright's test.extend().

Q2. Why use custom fixtures?
-> They reduce repeated setup code and make tests cleaner and easier to maintain.

Q3. How do you create a custom fixture?
-> I use test.extend() and define the fixture inside it.

FLOW:

test.extend()
   ↓
Create apiKey fixture
   ↓
Read API key
   ↓
use(apiKey)
   ↓
Test receives apiKey
   ↓
Send API request
*/
