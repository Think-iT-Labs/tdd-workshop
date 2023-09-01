import { expect } from "chai";
import { PasswordValidator } from "./passwordvalidation";

describe("Password validation tests", () => {
  let passwordValidatObject: PasswordValidator;

  beforeEach(() => {
    passwordValidatObject = new PasswordValidator();
  });

  it("it should be at least 8 characters", () => {
    const result = passwordValidatObject.validate("1234567_");
    expect(result.errors).to.be.empty;
    expect(result.isValid).to.be.true;
  });

  it("it should return an error when the password is less than 8 characters ", () => {
    const result = passwordValidatObject.validate("1234567");
    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain("Password must be at least 8 characters");
  });

  it("it should contain at least 2 numbers ", () => {
    const result = passwordValidatObject.validate("fdkjkhd1");
    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain(
      "The password must contain at least 2 numbers"
    );
  });

  it("should return a list of errors if validation rules are not met", () => {
    const result = passwordValidatObject.validate("some2");

    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain("Password must be at least 8 characters");
    expect(result.errors).to.contain(
      "The password must contain at least 2 numbers"
    );
  });

  it("should failed when the password doesn't have any number", () => {
    const result = passwordValidatObject.validate("some");

    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain(
      "The password must contain at least 2 numbers"
    );
  });

  it("should contain at least one special character", () => {
    const result = passwordValidatObject.validate("12345678");
    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain(
      "The password must contain at least one special character"
    );
  });

  it("should fail when the password is a common illegal password", () => {
    passwordValidatObject.setIllegalPasswords(["illegal", "illegal2"]);

    const result = passwordValidatObject.validate("illegal");
    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain("The password is illegal as too common");
  });
});
