# Password validation

I took inspiration from here: https://tddmanifesto.com/exercises/

## Kata 3 – Password input field validation
Create a function that can be used as a validator for the password field of a user registration form. The validation function takes a string as an input and returns a validation result. The validation result should contain a boolean indicating if the password is valid or not, and also a field with the possible validation errors.

### Requirements

### Part 1

1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

3. The validation function should handle multiple validation errors.

For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers”

4. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”


### Part 2

1. create a web server that expose a `POST /password/validation` endpoint, the body should be in the form of:
```json
{
  "password": "<input password>"
}
```
it should return 200 with the response:
```json
{
  "valid": true/false,
  "messages": [
    "eventual messages", ...
  ]
}
```

2. add an endopoint to specify illegal passwords: `PUT /password/illegal`, that could be taken from a common passwords dictionary. The body should be in the form of:
```json
{
  "passwords": ["illegal1", "illegal2", ...]
}
```

3. introduce a persistent store for illegal passwords.

4. Add the possibility to specify, instead of a list of illegal passwords, an url pointing to a file containing a list of well-known passwords (e.g. https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/cirt-default-passwords.txt). The body of the `PUT /password/illegal` call will be:
```json
{
  "url": "https://example.com/passwords.txt"
}
```
