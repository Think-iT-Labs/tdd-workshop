import { expect } from "chai";
import { add } from "./stringcalculator";

describe("String calculator test", () => {
  it("should return 0 when empty input", () => {
    const sum = add("");

    expect(sum).to.be.eql(0);
  });

  it("should return the integer representation of the input when it contains a single number", () => {
    const sum = add("5");

    expect(sum).to.be.eql(5);
  });

  it("should return the sum of two numbers separated by a comma", () => {
    const sum = add("1,2");

    expect(sum).to.be.eql(3);
  });
})
