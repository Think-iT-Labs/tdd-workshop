import { expect } from "chai";
import { passwordValidator } from "./passwordvalidation";

describe("Password validation tests", () => {
  it("it should be at least 8 characters", () => {

    const result =passwordValidator("1234567_")
    expect(result.errors).to.be.empty
    expect(result.isValid).to.be.true

  });

  it("it should return an error when the password is less than 8 characters ", () => {
    const result = passwordValidator('1234567');
    expect(result.isValid).to.be.false;
    expect(result.errors).to.contain('Password must be at least 8 characters')
 
  })

  it("it should contain at least 2 numbers ",()=> { 

    const result = passwordValidator("fdkjkhd1")
    expect(result.isValid).to.be.false
    expect(result.errors).to.contain("The password must contain at least 2 numbers")
  })

  it("should return a list of errors if validation rules are not met", () => {
    const result = passwordValidator("some2")

    expect(result.isValid).to.be.false
    expect(result.errors).to.contain("Password must be at least 8 characters")
    expect(result.errors).to.contain("The password must contain at least 2 numbers")
  })

  it("should failed when the password doesn't have any number", () => {
    const result = passwordValidator("some")

    expect(result.isValid).to.be.false
    expect(result.errors).to.contain("The password must contain at least 2 numbers")
  })

  it("should contain at least one special character", ()=> {
    const result =passwordValidator("12345678")
    expect(result.isValid).to.be.false
    expect(result.errors).to.contain("The password must contain at least one special character")

  })
 
  
});
