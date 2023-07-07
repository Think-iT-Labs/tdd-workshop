import { expect } from "chai";
import { add } from "./stringcalculator";

describe("String calculator test", () => {
  it("should represent a test", () => {
    const sum = add("dummy test, just rewrite it");
    
    expect(sum).to.be.eql(-42);
  });
})
