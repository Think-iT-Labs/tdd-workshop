import { expect } from "chai";
import { passwordValidator } from "./passwordvalidation";

describe("Password validation tests", () => {
  it("it should be at least 8 characters", () => {

    const result =passwordValidator("12345678")
    expect(result.isValid).to.be.true
    expect(result.errors).to.be.empty

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
 
  
});
