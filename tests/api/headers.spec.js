const { test, expect } = require('@playwright/test');

test('GET request with custom headers', async ({ request }) => {

  // Send GET request with API key and a custom test header
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY,
      'X-Test-Client': 'Playwright'
    }
  });

  // Check that API returned 200 OK
  expect(response.status()).toBe(200);

  // Read response body as JSON
  const body = await response.json();

  // Check that user data is returned
  expect(body.data.id).toBe(2);
});

/*
CONCEPT: headers.spec.js

WHAT ARE WE DOING:
We are sending a GET request with custom request headers.

REQUEST:
GET /api/users/2

HEADERS:
x-api-key: process.env.REQRES_API_KEY
X-Test-Client: Playwright

EXPECTED RESPONSE:
200 OK

VALIDATION:
We validate the status code and verify the returned user id.

SAMPLE OUTPUT:

Response Status:
200

Validated Response Data:
{
  "data": {
    "id": 2
  }
}

Request Headers Sent:
x-api-key: <value>
X-Test-Client: Playwright

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. test('GET request with custom headers', async ({ request }) => {
   -> I create the API test and use the request fixture.

3. request.get('/api/users/2', {
   -> I send a GET request.

4. headers: { ... }
   -> I add custom headers to the request.

5. 'x-api-key'
   -> API key header required by the current ReqRes API.

6. 'X-Test-Client': 'Playwright'
   -> This is an additional custom header that I am sending.

7. expect(response.status()).toBe(200);
   -> I verify the status code.

8. const body = await response.json();
   -> I read the response as JSON.

9. expect(body.data.id).toBe(2);
   -> I verify the returned user id.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What are request headers?
-> They are additional key-value information sent with an HTTP request.

Q2. How do you add headers in Playwright?
-> I use the headers option.

Q3. Why are headers used?
-> They can carry information such as authentication, content type, client information, and other request metadata.
*/