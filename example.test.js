const { expect, use, should } = require("chai");

use(should);

describe("Example tests in Javascript file", () => {
  it("should use JS", () => {
    expect(1).to.be.eql(1);
  });
});
