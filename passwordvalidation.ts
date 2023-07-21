export const passwordValidator = (password: string) => {
  const numberRegex = /\d/g;
  const numbers = password.match(numberRegex)?.length || 0;
  const errors = [];

  if (password.length < 8)
    errors.push("Password must be at least 8 characters");

  if (numbers < 2)
    errors.push("The password must contain at least 2 numbers");

  
  return {
    isValid: errors.length == 0,
    errors,
  };
};
