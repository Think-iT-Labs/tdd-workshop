import chai, { expect } from "chai";
import { exampleFn } from "./example";

chai.use(chai.should);

describe("Example tests in Typescript file", () => {
  it("should fail", () => {
    expect(1).to.be.eql(1);
  });

  it("should succeed", () => {
    const actual = exampleFn();
    expect(actual).to.be.eql(1);
  });
});
