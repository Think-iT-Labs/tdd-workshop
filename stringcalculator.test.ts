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

  it("should return the sum of unkownm numbers separated by a comma", () => {
    const sum = add("1,2,3,4,5");

    expect(sum).to.be.eql(15);
  });

  it("should return the sum of numbers separated by a comma or new line ", () => {
    const sum = add("1,2,3\n4,5");

    expect(sum).to.be.eql(15);
  });

  it("should return the sum of numbers by a custom delimeter", () => {
    const sum = add("//;\n1,2;3\n4;5");

    expect(sum).to.be.eql(15);
  });

  it("should throw an error when negative numbers are included", () => {
    expect(() => add("1,-2,-3\n4,5")).to.throw("negatives not allowed:-2,-3");
  });
});
