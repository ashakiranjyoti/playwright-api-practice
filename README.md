# Playwright API Practice

Beginner-friendly **Playwright API testing** practice for QA/SDET interview preparation.

Base API used in this project:

```text
https://reqres.in
```

The project uses **JavaScript + Playwright Test** with simple API tests. No classes, helpers, or design patterns are used.

## Project Structure

```text
playwright-api-practice/
│
├── playwright.config.js
├── package.json
├── README.md
│
└── tests/
    └── api/
        ├── get-user.spec.js
        ├── get-user-with-params.spec.js
        ├── create-user.spec.js
        ├── update-user.spec.js
        ├── patch-user.spec.js
        ├── delete-user.spec.js
        ├── headers.spec.js
        ├── authorization.spec.js
        ├── status-validation.spec.js
        ├── response-body-validation.spec.js
        ├── response-headers-validation.spec.js
        ├── multiple-field-validation.spec.js
        ├── positive-test.spec.js
        ├── negative-test.spec.js
        ├── api-chaining.spec.js
        ├── before-hooks.spec.js
        ├── custom-fixtures.spec.js
        ├── parameterized-test.spec.js
        ├── schema-validation.spec.js
        └── response-time-validation.spec.js
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. API key

The current ReqRes `/api/*` examples use:

```text
REQRES_API_KEY=your_api_key
```

The API chaining example also uses:

```text
REQRES_PROJECT_ID=your_project_id
```

Set these environment variables locally before running the related tests.

Do not commit real API keys or tokens to GitHub.

## How to Run Tests

Run all tests:

```bash
npx playwright test
```

Run only API tests:

```bash
npx playwright test tests/api
```

Run one file:

```bash
npx playwright test tests/api/get-user.spec.js
```

Run with HTML report:

```bash
npx playwright test --reporter=html
```

---

# API Test Files

Each section below gives a **direct link** to the actual file and the type of interview questions you can be asked.

## 1. GET API - Basic

**File:** [get-user.spec.js](./tests/api/get-user.spec.js)

**Concept:** Basic GET request

**What it does:** Sends a GET request for a user and validates the status and user ID.

**Interview questions:**

**Q1. How do you send a GET request in Playwright?**  
-> I use the request fixture with `request.get()`.

**Q2. How do you validate the status code?**  
-> I use `expect(response.status()).toBe(200)`.

**Q3. How do you read the response body?**  
-> I use `await response.json()`.

---

## 2. GET API - Query Parameters

**File:** [get-user-with-params.spec.js](./tests/api/get-user-with-params.spec.js)

**Concept:** Query parameters

**What it does:** Sends `page=2` as a query parameter and validates the response.

**Interview questions:**

**Q1. How do you pass query parameters in Playwright?**  
-> I use the `params` option.

**Q2. What is a query parameter?**  
-> It is data added to the URL after `?`, such as `?page=2`.

**Q3. Why use params instead of building the URL manually?**  
-> It keeps the request cleaner and easier to maintain.

---

## 3. POST API - Create User

**File:** [create-user.spec.js](./tests/api/create-user.spec.js)

**Concept:** POST request with JSON body

**What it does:** Sends user data in the request body and validates the created response.

**Interview questions:**

**Q1. How do you send a POST request in Playwright?**  
-> I use `request.post()`.

**Q2. How do you send request body data?**  
-> I use the `data` option.

**Q3. What status code is commonly returned for successful creation?**  
-> 201 Created.

---

## 4. PUT API

**File:** [update-user.spec.js](./tests/api/update-user.spec.js)

**Concept:** PUT update

**What it does:** Sends a PUT request with updated user data.

**Interview questions:**

**Q1. What is PUT used for?**  
-> It is commonly used for a complete update or replacement of a resource.

**Q2. How do you send headers in Playwright?**  
-> I use the `headers` option.

**Q3. PUT vs PATCH?**  
-> PUT is generally for a full update, while PATCH is for a partial update.

---

## 5. PATCH API

**File:** [patch-user.spec.js](./tests/api/patch-user.spec.js)

**Concept:** Partial update

**What it does:** Updates only the required field of a user.

**Interview questions:**

**Q1. What is PATCH used for?**  
-> It is commonly used for partial updates.

**Q2. What is the main difference between PUT and PATCH?**  
-> PUT generally represents a complete update, while PATCH changes selected fields.

**Q3. How do you send the updated value?**  
-> I pass it in the `data` option.

---

## 6. DELETE API

**File:** [delete-user.spec.js](./tests/api/delete-user.spec.js)

**Concept:** DELETE request

**What it does:** Sends a DELETE request and validates the response status.

**Interview questions:**

**Q1. How do you send DELETE in Playwright?**  
-> I use `request.delete()`.

**Q2. What status is used in this example?**  
-> 204 No Content.

**Q3. Why don't we read JSON from a 204 response?**  
-> Because a 204 response has no response body.

---

## 7. Custom Headers

**File:** [headers.spec.js](./tests/api/headers.spec.js)

**Concept:** Request headers

**What it does:** Sends an API key and a custom test header with a GET request.

**Interview questions:**

**Q1. What are request headers?**  
-> They are key-value information sent with an HTTP request.

**Q2. How do you add headers in Playwright?**  
-> I use the `headers` option.

**Q3. Why are headers used?**  
-> They can carry authentication, content type, client information, and other request metadata.

---

## 8. Bearer Authorization

**File:** [authorization.spec.js](./tests/api/authorization.spec.js)

**Concept:** Bearer token authentication

**What it does:** Sends an Authorization header in Bearer format and validates rejection of an invalid token.

**Interview questions:**

**Q1. What is a Bearer token?**  
-> It is a token sent in the Authorization header for authentication.

**Q2. What is the format?**  
-> `Authorization: Bearer <token>`.

**Q3. Why does this example expect 401?**  
-> Because it intentionally sends an invalid token.

---

## 9. Status Code Validation

**File:** [status-validation.spec.js](./tests/api/status-validation.spec.js)

**Concept:** Status validation

**What it does:** Checks that the API returns the expected HTTP status.

**Interview questions:**

**Q1. Why do you validate status codes?**  
-> To verify whether the API request succeeded or failed as expected.

**Q2. How do you get the status code?**  
-> With `response.status()`.

**Q3. What does 200 mean?**  
-> The request was successful.

---

## 10. Response Body Validation

**File:** [response-body-validation.spec.js](./tests/api/response-body-validation.spec.js)

**Concept:** Response body validation

**What it does:** Reads the JSON body and validates returned user fields.

**Interview questions:**

**Q1. How do you read JSON response data?**  
-> With `await response.json()`.

**Q2. Why validate the body after status validation?**  
-> A successful status alone does not guarantee that the returned business data is correct.

**Q3. What are you validating here?**  
-> User ID, email, and first name.

---

## 11. Response Headers Validation

**File:** [response-headers-validation.spec.js](./tests/api/response-headers-validation.spec.js)

**Concept:** Response header validation

**What it does:** Validates that the response content type is JSON.

**Interview questions:**

**Q1. How do you read response headers?**  
-> With `response.headers()`.

**Q2. Why validate Content-Type?**  
-> To confirm that the response format is what we expect.

**Q3. What content type are we checking?**  
-> `application/json`.

---

## 12. Multiple Field Validation

**File:** [multiple-field-validation.spec.js](./tests/api/multiple-field-validation.spec.js)

**Concept:** Multiple response field validation

**What it does:** Checks several fields from one response and validates one exact value.

**Interview questions:**

**Q1. How do you validate multiple fields?**  
-> I use multiple `expect` assertions.

**Q2. What does `toHaveProperty()` do?**  
-> It checks whether an object contains a particular property.

**Q3. Why validate multiple fields?**  
-> To verify both the response structure and important data.

---

## 13. Positive Test

**File:** [positive-test.spec.js](./tests/api/positive-test.spec.js)

**Concept:** Positive testing

**What it does:** Sends valid input and expects a successful response with user data.

**Interview questions:**

**Q1. What is a positive test case?**  
-> It verifies expected behavior with valid input.

**Q2. What does `response.ok()` mean?**  
-> It returns true when the response has a successful HTTP status.

**Q3. Positive vs negative testing?**  
-> Positive testing uses valid input and expects success; negative testing uses invalid or unexpected input and checks the error behavior.

---

## 14. Negative Test

**File:** [negative-test.spec.js](./tests/api/negative-test.spec.js)

**Concept:** Negative testing

**What it does:** Requests a user that does not exist and expects 404.

**Interview questions:**

**Q1. What is negative API testing?**  
-> Testing how the API behaves with invalid or unexpected input.

**Q2. Why is 404 expected here?**  
-> Because the requested user does not exist.

**Q3. Should every negative test return 4xx?**  
-> No. The expected status depends on the error condition.

---

## 15. API Chaining

**File:** [api-chaining.spec.js](./tests/api/api-chaining.spec.js)

**Concept:** API chaining

**What it does:** Creates a record, reads the generated ID, uses that ID in the next GET request, and validates the returned record.

**Flow:**

```text
POST Create
    ↓
Read response
    ↓
Get generated ID
    ↓
GET using that ID
    ↓
Validate response
```

**Interview questions:**

**Q1. What is API chaining?**  
-> Using data from one API response in a later API request.

**Q2. Why do you store the ID from the first response?**  
-> Because the second request needs that generated ID.

**Q3. Where is the chaining happening?**  
-> The ID from `createBody.id` is used in the next GET URL.


---

## 16. beforeAll / beforeEach Hooks

**File:** [before-hooks.spec.js](./tests/api/before-hooks.spec.js)

**Concept:** Playwright Hooks

**What it does:** Demonstrates one-time setup with `beforeAll` and repeated setup with `beforeEach`.

**Flow:**

```text
beforeAll -> runs once
              ↓
           Test 1

beforeEach -> runs
              ↓
           Test 1

beforeEach -> runs
              ↓
           Test 2
```

**Interview questions:**

**Q1. What is beforeAll?**  
-> It runs once before all tests in the current test file.

**Q2. What is beforeEach?**  
-> It runs before every test.

**Q3. beforeAll vs beforeEach?**  
-> beforeAll is for one-time setup, while beforeEach is for setup required before every test.

---

## 17. Custom Fixtures

**File:** [custom-fixtures.spec.js](./tests/api/custom-fixtures.spec.js)

**Concept:** Custom Playwright Fixture

**What it does:** Creates a custom `apiKey` fixture and makes it available directly inside the test.

**Flow:**

```text
test.extend()
    ↓
Create apiKey fixture
    ↓
Provide apiKey
    ↓
Test receives apiKey
    ↓
Send API request
```

**Interview questions:**

**Q1. What is a custom fixture?**  
-> A reusable setup or data provider created with Playwright's `test.extend()`.

**Q2. Why use custom fixtures?**  
-> To reduce repeated setup code and keep tests cleaner.

**Q3. How do you create a custom fixture?**  
-> I use `test.extend()` and define the fixture inside it.

---

## 18. Data-Driven / Parameterized Testing

**File:** [parameterized-test.spec.js](./tests/api/parameterized-test.spec.js)

**Concept:** Parameterized Testing

**What it does:** Runs the same API test logic with multiple sets of test data.

**Test data:**

```text
Existing user
GET /api/users/2 -> 200

Non-existing user
GET /api/users/999999 -> 404
```

**Sample output:**

```text
Test 1 -> 200 -> PASS
Test 2 -> 404 -> PASS

Playwright Result:
2 passed
```

**Interview questions:**

**Q1. What is parameterized testing?**  
-> Running the same test logic with different sets of input data.

**Q2. Why use it?**  
-> It avoids duplicating the same test code for multiple data sets.

**Q3. How is it implemented here?**  
-> I store data in an array and use a `for...of` loop to create separate tests.

---

## 19. JSON Schema Validation

**File:** [schema-validation.spec.js](./tests/api/schema-validation.spec.js)

**Concept:** Schema Validation

**What it does:** Validates that the API response structure and data types match an expected JSON Schema.

**Library:** `ajv`

**Example checks:**

```text
data       -> object
id         -> integer
email      -> string
first_name -> string
last_name  -> string
```

**Sample output:**

```text
Response Status:
200

Schema Validation:
PASSED

Playwright Result:
1 passed
```

**Interview questions:**

**Q1. What is schema validation?**  
-> It verifies that the API response structure and data types match the expected contract.

**Q2. Why use schema validation?**  
-> It helps detect missing fields, unexpected structure, and incorrect data types.

**Q3. Which library is used here?**  
-> AJV is used to validate the response against JSON Schema.

---

## 20. Response Time Validation

**File:** [response-time-validation.spec.js](./tests/api/response-time-validation.spec.js)

**Concept:** API Response Time Validation

**What it does:** Measures how long the API takes to respond and checks it against a defined threshold.

**Example threshold:** Less than 2000 ms (2 seconds).

**Sample output:**

```text
Response Status:
200

Response Time:
184 ms

Performance Validation:
184 ms < 2000 ms -> PASS

Playwright Result:
1 passed
```

**Important:** The response time value above is a sample output for learning. Actual time depends on the environment and API.

**Interview questions:**

**Q1. How do you validate API response time?**  
-> I record the start time, send the request, calculate the elapsed time, and compare it with the expected threshold.

**Q2. What does 2000 mean?**  
-> It means 2000 milliseconds, or 2 seconds.

**Q3. Is response time validation the same as functional validation?**  
-> No. Functional validation checks correctness of the response, while response time validation checks performance against a defined threshold.

---

# API Cheat Sheet

| Item | Playwright syntax | Meaning |
|---|---|---|
| GET | `request.get('/api/users/2')` | Read data |
| POST | `request.post('/api/users', { data: {...} })` | Create data |
| PUT | `request.put('/api/users/2', { data: {...} })` | Full update |
| PATCH | `request.patch('/api/users/2', { data: {...} })` | Partial update |
| DELETE | `request.delete('/api/users/2')` | Delete data |
| data | `{ data: {...} }` | Request body |
| params | `{ params: { page: 2 } }` | Query parameters |
| headers | `{ headers: {...} }` | Request headers |
| status() | `response.status()` | Gets status code |
| json() | `await response.json()` | Reads JSON response |
| headers() | `response.headers()` | Reads response headers |
| ok() | `response.ok()` | Checks whether response is successful |
| expect() | `expect(...).toBe(...)` | Validates expected result |

# Common Status Codes

| Code | Meaning |
|---:|---|
| 200 | OK / successful request |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

# Basic API Testing Flow

```text
Requirement
    ↓
API endpoint
    ↓
HTTP method
    ↓
Headers / Params / Body
    ↓
Send request
    ↓
Receive response
    ↓
Validate status
    ↓
Validate body
    ↓
Validate headers
```

# Interview Master Answer

> "I use Playwright's request fixture for API testing. I send GET, POST, PUT, PATCH and DELETE requests and validate the response using status codes, response body, and headers. I also use query parameters, request headers, positive and negative test cases, and API chaining when one API response is required for the next request."

# Quick Revision

```text
request.get()
request.post()
request.put()
request.patch()
request.delete()

data      -> request body
params    -> query parameters
headers   -> request headers

status()  -> status code
json()    -> response body
headers() -> response headers
ok()      -> successful response check
expect()  -> validation
```
