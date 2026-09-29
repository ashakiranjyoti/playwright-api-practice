const { test, expect } = require('@playwright/test');

const apiHeaders = {
  'x-api-key': process.env.REQRES_API_KEY
};

let allUsers;
let userResponse;

// beforeAll runs once before all tests in this file
test.beforeAll(async ({ request }) => {

  // Common setup used by all tests
  const response = await request.get('/api/users', {
    params: {
      page: 2
    },
    headers: apiHeaders
  });

  expect(response.status()).toBe(200);

  allUsers = await response.json();
});

// beforeEach runs before every individual test
test.beforeEach(async ({ request }) => {

  // Prepare the same user response before each test
  userResponse = await request.get('/api/users/2', {
    headers: apiHeaders
  });
});

test('beforeAll - users data is available', async () => {

  // Data was prepared once in beforeAll
  expect(allUsers.data.length).toBeGreaterThan(0);
});

test('beforeEach - user status is 200', async () => {

  // Response was prepared in beforeEach
  expect(userResponse.status()).toBe(200);
});

test('beforeEach - user id is 2', async () => {

  // beforeEach runs again before this test
  const body = await userResponse.json();

  expect(body.data.id).toBe(2);
});

/*
CONCEPT: before-hooks.spec.js

WHAT ARE WE DOING:

We are learning two Playwright hooks:

1. beforeAll
   -> Runs once before all tests in this file.

2. beforeEach
   -> Runs before every individual test.

Here, beforeAll gets the user list once.
beforeEach prepares the user response before every test.

REQUESTS:

beforeAll:
GET /api/users?page=2

beforeEach:
GET /api/users/2

EXPECTED RESPONSE:

beforeAll -> 200 OK
beforeEach -> 200 OK

SAMPLE OUTPUT:

beforeAll:
Request sent once
Response Status: 200
Users found: <greater than 0>

beforeEach:
Runs before Test 1
Response Status: 200

Runs before Test 2
Response Status: 200

Playwright Result:
3 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. const apiHeaders = { ... };
   -> I keep the common API header in one variable.

3. let allUsers;
   -> This variable stores the response prepared in beforeAll.

4. let userResponse;
   -> This variable stores the response prepared in beforeEach.

5. test.beforeAll(async ({ request }) => { ... });
   -> This hook runs only once before all tests in this file.

6. request.get('/api/users', { ... });
   -> I send the first API request.

7. allUsers = await response.json();
   -> I store the response body for later tests.

8. test.beforeEach(async ({ request }) => { ... });
   -> This hook runs before every test.

9. userResponse = await request.get('/api/users/2', ...);
   -> I prepare the user response before each test.

10. test(...);
    -> These are the actual test cases that use the prepared data.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is beforeAll?
-> It runs once before all tests in the current test file.

Q2. What is beforeEach?
-> It runs before every test in the current test file.

Q3. beforeAll vs beforeEach?
-> beforeAll is used for one-time setup, while beforeEach is used when setup is needed before every test.

FLOW:

beforeAll
   ↓
Runs once
   ↓
Prepare common data

beforeEach
   ↓
Runs before Test 1
   ↓
Test 1

beforeEach
   ↓
Runs before Test 2
   ↓
Test 2
*/
