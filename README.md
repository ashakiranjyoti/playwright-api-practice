# Playwright API Practice

Beginner-friendly Playwright API testing practice for QA/SDET interview preparation.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure ReqRes API access

The `/api/*` examples use the API key from an environment variable.

Set:

```text
REQRES_API_KEY=your_api_key
```

The API chaining example also needs:

```text
REQRES_PROJECT_ID=your_project_id
```

Do not commit real API keys to GitHub.

## Folder Structure

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
        └── api-chaining.spec.js
```

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

## API Testing Cheat Sheet

| Item | Playwright example | Meaning |
|---|---|---|
| GET | `request.get('/api/users/2')` | Read data |
| POST | `request.post('/api/users', { data: {...} })` | Create data |
| PUT | `request.put('/api/users/2', { data: {...} })` | Full update |
| PATCH | `request.patch('/api/users/2', { data: {...} })` | Partial update |
| DELETE | `request.delete('/api/users/2')` | Delete data |
| data | `{ data: { name: 'QA' } }` | Request body |
| params | `{ params: { page: 2 } }` | Query parameters |
| headers | `{ headers: { 'x-test': 'Playwright' } }` | Request headers |
| status() | `response.status()` | Gets HTTP status code |
| json() | `await response.json()` | Reads response body as JSON |
| expect() | `expect(response.status()).toBe(200)` | Validates expected result |

## Common Status Codes

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

## Basic API Testing Flow

```text
1. Identify the API endpoint
        ↓
2. Choose HTTP method
        ↓
3. Prepare params / headers / body
        ↓
4. Send request
        ↓
5. Check status code
        ↓
6. Read response body
        ↓
7. Validate required fields
        ↓
8. Validate response headers when needed
```

## Main Interview Concepts Covered

```text
GET
POST
PUT
PATCH
DELETE
Query Parameters
Request Headers
Authorization
Status Code Validation
Response Body Validation
Response Header Validation
Multiple Field Validation
Positive Testing
Negative Testing
API Chaining
```

## Simple Interview Answer

> "I use Playwright's request fixture for API testing. I send requests using methods like GET, POST, PUT, PATCH and DELETE, then validate the status code, response body and headers using Playwright expect assertions."

## Remember

```text
Request
  ↓
Response
  ↓
Status
  ↓
Body
  ↓
Headers
  ↓
Assertions
```
