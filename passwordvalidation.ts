export class PasswordValidator {
  illegal = ["i"];
  constructor() {}

  validate = (password: string) => {
  const numberRegex = /\d/g;
  const specialCharRegex = /[!@#\$%\^\&*\)\(+=._-]/g;
  const numbers = password.match(numberRegex)?.length || 0;
  const errors = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  if (numbers < 2) {
    errors.push("The password must contain at least 2 numbers");
  }

  if (!specialCharRegex.test(password)) {
    errors.push("The password must contain at least one special character");
  }

  if(this.illegal.includes(password)){
    errors.push("The password is illegal as too common");
  }

  return {
    isValid: errors.length == 0,
    errors,
  };
};

  setIllegalPasswords(dict: Array<string>) {
    this.illegal = dict;
  }
}
