const { test, expect } = require('@playwright/test');

test('Response time validation - GET user', async ({ request }) => {

  // Record the start time before sending the request
  const startTime = Date.now();

  // Send GET request
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Calculate total response time in milliseconds
  const responseTime = Date.now() - startTime;

  // Check the response status
  expect(response.status()).toBe(200);

  // Check that response time is less than 2 seconds
  expect(responseTime).toBeLessThan(2000);
});

/*
CONCEPT: response-time-validation.spec.js

WHAT ARE WE DOING:

We are measuring how long the API request takes
and validating that it stays below an expected limit.

REQUEST:
GET /api/users/2

EXPECTED RESPONSE:
200 OK

PERFORMANCE CHECK:
Response time should be less than 2000 ms.

SAMPLE OUTPUT:

Response Status:
200

Response Time:
184 ms

Performance Validation:
184 ms < 2000 ms -> PASS

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. const startTime = Date.now();
   -> I record the time immediately before sending the request.

3. request.get('/api/users/2', { ... });
   -> I send the GET request.

4. const responseTime = Date.now() - startTime;
   -> I calculate the elapsed time in milliseconds.

5. expect(response.status()).toBe(200);
   -> I verify the API returned 200.

6. expect(responseTime).toBeLessThan(2000);
   -> I verify that the response time is below the defined threshold.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. How do you validate API response time?
-> I record the start time, send the request, calculate the elapsed time, and compare it with an expected threshold.

Q2. What does 2000 mean here?
-> It means 2000 milliseconds, or 2 seconds.

Q3. Is response time validation the same as functional validation?
-> No. Functional validation checks correctness of the response, while response time validation checks performance against a defined threshold.

IMPORTANT NOTE:

The 2000 ms threshold is an example for practice.
In a real project, I would use the agreed SLA or performance requirement.

FLOW:

Start Timer
   ↓
Send API Request
   ↓
Receive Response
   ↓
Calculate Time
   ↓
Compare With Threshold
   ↓
Pass / Fail
*/
