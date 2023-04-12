import { expect } from "chai";
import { findCentury } from "./findCentury";

/*

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.


*/

describe("Find Century tests", () => {
  it("should return 1 when 100 is passed", () => {
    const century = findCentury(100);
    expect(century).to.be.eql(1);
  });

  it("should return 2 when 200 is passed", () => {
    const century = findCentury(200);
    expect(century).to.be.eql(2);
  });

  it("should return 3 when 202 is passed", () => {
    const century = findCentury(202);
    expect(century).to.be.eql(3);
  });

  it("should return 6 when 520 is passed", () => {
    const century = findCentury(520);
    expect(century).to.be.eql(6);
  });

  it("should return 16 when 1520 is passed", () => {
    const century = findCentury(1520);
    expect(century).to.be.eql(16);
  });
});
