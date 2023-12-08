# Password validation

I took inspiration from our previous [Password validation exercise](https://github.com/Think-iT-Labs/tdd-workshop/tree/password-validation)

## Password input field validation

The idea here is to run password validaiton on a form that takes email and password and show errors each time the user presses the submit button.

The requiremenst/rules shown below and are the same as what we had in the previous exerceise.

### Requirements

### Part 1

1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

3. The validation function should handle multiple validation errors.

For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers”

4. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”
