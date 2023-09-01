export const passwordValidator = (password: string) => {
  const numberRegex = /\d/g;
  const specialCharRegex = /[!@#\$%\^\&*\)\(+=._-]/g;
  const numbers = password.match(numberRegex)?.length || 0;
  const errors = [];
  const illegalPasswords = ["illegal"];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  if (numbers < 2) {
    errors.push("The password must contain at least 2 numbers");
  }

  if (!specialCharRegex.test(password)) {
    errors.push("The password must contain at least one special character");
  }

  return {
    isValid: errors.length == 0,
    errors,
  };
};

export class PasswordValidator {
  illegal = ["i"];
  constructor() {}

  validate(password: string) {
    return {
      isValid: false,
      errors: ["The password is illegal as too common"],
    };
  }

  setIllegalPasswords(dict: Array<string>) {}
}
