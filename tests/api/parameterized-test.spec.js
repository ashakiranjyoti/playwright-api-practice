const { test, expect } = require('@playwright/test');

// Test data for multiple API scenarios
const testData = [
  {
    name: 'Existing user',
    endpoint: '/api/users/2',
    expectedStatus: 200
  },
  {
    name: 'Non-existing user',
    endpoint: '/api/users/999999',
    expectedStatus: 404
  }
];

// Create one test for each data object
for (const data of testData) {

  test(`GET API - ${data.name}`, async ({ request }) => {

    // Send GET request using the current test data
    const response = await request.get(data.endpoint, {
      headers: {
        'x-api-key': process.env.REQRES_API_KEY
      }
    });

    // Validate the expected status for this data set
    expect(response.status()).toBe(data.expectedStatus);
  });
}

/*
CONCEPT: parameterized-test.spec.js

WHAT ARE WE DOING:

We are using data-driven / parameterized testing.

I keep the test data in an array and use the same test logic
for multiple API scenarios.

TEST DATA:

1. Existing user
   Endpoint: /api/users/2
   Expected Status: 200

2. Non-existing user
   Endpoint: /api/users/999999
   Expected Status: 404

SAMPLE OUTPUT:

Test 1:
GET /api/users/2
Expected: 200
Actual: 200
PASS

Test 2:
GET /api/users/999999
Expected: 404
Actual: 404
PASS

Playwright Result:
2 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. const testData = [ ... ];
   -> I store multiple test scenarios in an array of objects.

3. for (const data of testData) {
   -> I loop through each test data object.

4. test(`GET API - ${data.name}`, async ({ request }) => {
   -> Playwright creates a separate test for each data object.

5. request.get(data.endpoint, { ... });
   -> I use the endpoint from the current test data.

6. expect(response.status()).toBe(data.expectedStatus);
   -> I compare the actual status with the expected status from the data.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is parameterized testing?
-> It is running the same test logic with different sets of input data.

Q2. Why use parameterized testing?
-> It avoids duplicating the same test code for multiple data sets.

Q3. How do you implement it here?
-> I store data in an array and use a for...of loop to create tests.

FLOW:

Test Data
   ↓
for...of
   ↓
Test 1 -> Existing user -> 200
Test 2 -> Non-existing user -> 404
*/
