import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "./http-server";

chai.use(chaiHttp);

const mocked_returns = {
  successfull_response: {
    valid: true,
    messages: [],
  },
  error_response: {
    valid: false,
    messages: ["Password length has to be 8 characters"],
  },
};

describe("password validation endpoint", () => {
  it("should respond with 200", () => {
    chai
      .request(app)
      .post("/password/validation")
      .send({ password: "1234578_123" })
      .end((error, response) => {
        console.log("is passing here");
        expect(response.ok).to.be.true;
        expect(response.status).to.be.eq(200);
        expect(response.body).to.be.deep.equal(
          mocked_returns.successfull_response
        );
      });
  });

  it("should respond with 200", () => {
    chai
      .request(app)
      .post("/password/validation")
      .send({ password: "12547" })
      .end((error, response) => {
        expect(response.ok).to.be.true;
        expect(response.statusCode).to.be.equal(200);
        expect(response.body.valid).to.be.deep.equal(mocked_returns.error_response.valid);
      });
  });
});


describe("illegal passwords endpoint", () => {
  it("should respond with 200", () => {
    chai.request(app)
    .put('/password/illegal')
    .send({passwords: []}).end((error, response) => {
      expect(response.ok).to.be.true;
      expect(response.statusCode).to.be.equal(204);
    })
  })
})
