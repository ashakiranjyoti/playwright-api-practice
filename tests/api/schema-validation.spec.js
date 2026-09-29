const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');

test('Schema validation - GET user', async ({ request }) => {

  // Define the expected response structure
  const schema = {
    type: 'object',
    required: ['data'],
    properties: {
      data: {
        type: 'object',
        required: ['id', 'email', 'first_name', 'last_name'],
        properties: {
          id: {
            type: 'integer'
          },
          email: {
            type: 'string'
          },
          first_name: {
            type: 'string'
          },
          last_name: {
            type: 'string'
          }
        }
      }
    }
  };

  // Send GET request
  const response = await request.get('/api/users/2', {
    headers: {
      'x-api-key': process.env.REQRES_API_KEY
    }
  });

  // Check status code
  expect(response.status()).toBe(200);

  // Read response body
  const body = await response.json();

  // Create AJV validator
  const ajv = new Ajv();

  // Compile the schema
  const validate = ajv.compile(schema);

  // Validate the actual response against the schema
  const isValid = validate(body);

  // Fail the test if schema validation fails
  expect(
    isValid,
    JSON.stringify(validate.errors, null, 2)
  ).toBe(true);
});

/*
CONCEPT: schema-validation.spec.js

WHAT ARE WE DOING:

We are validating the complete structure of the API response
against a JSON Schema.

Instead of checking only one or two fields, I verify that
required fields exist and have the expected data types.

REQUEST:
GET /api/users/2

EXPECTED RESPONSE:
200 OK

SCHEMA CHECKS:

data       -> object
id         -> integer
email      -> string
first_name -> string
last_name  -> string

SAMPLE OUTPUT:

Response Status:
200

Schema Validation:
PASSED

Validated Structure:
data.id -> integer
data.email -> string
data.first_name -> string
data.last_name -> string

Playwright Result:
1 passed

LINE-BY-LINE EXPLANATION:

1. const { test, expect } = require('@playwright/test');
   -> I import Playwright's test and expect functions.

2. const Ajv = require('ajv');
   -> I import AJV, which is used to validate JSON Schema.

3. const schema = { ... };
   -> I define the expected response structure and data types.

4. request.get('/api/users/2', { ... });
   -> I send the API request.

5. const body = await response.json();
   -> I read the API response as a JavaScript object.

6. const ajv = new Ajv();
   -> I create an AJV validator object.

7. const validate = ajv.compile(schema);
   -> I compile the schema into a validation function.

8. const isValid = validate(body);
   -> I check whether the actual response matches the schema.

9. JSON.stringify(validate.errors, null, 2)
   -> If validation fails, this gives readable validation errors.

10. expect(isValid).toBe(true);
    -> I verify that schema validation passed.

INTERVIEW FOLLOW-UP QUESTIONS:

Q1. What is schema validation?
-> It verifies that the response structure and data types match the expected contract.

Q2. Why use schema validation?
-> It helps detect missing fields, unexpected structure, or incorrect data types.

Q3. Which library are you using here?
-> I am using AJV to validate the JSON response against a JSON Schema.

FLOW:

API Response
   ↓
response.json()
   ↓
JSON Schema
   ↓
AJV Validation
   ↓
Pass / Fail
*/
