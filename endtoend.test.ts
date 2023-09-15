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
        expect(response.body.valid).to.be.deep.equal(
          mocked_returns.error_response.valid
        );
      });
  });
});

describe("illegal passwords endpoint", () => {
  it("should respond with 204", () => {
    chai
      .request(app)
      .put("/password/illegal")
      .send({ passwords: [] })
      .end((error, response) => {
        expect(response.ok).to.be.true;
        expect(response.statusCode).to.be.equal(204);
      });
  });

  it("should set a list of illegal passwords and respond with 204", async () => {
    const response = await chai
      .request(app)
      .put("/password/illegal")
      .send({ passwords: ["illegal_23", "illegal_0912"] });

    expect(response.ok).to.be.true;
    expect(response.statusCode).to.be.equal(204);

    const response2 = await chai
      .request(app)
      .post("/password/validation")
      .send({ password: "illegal_23" });
    expect(response2.ok).to.be.true;
    expect(response2.body.valid).to.be.false;
    expect(response2.body.messages).to.deep.equal([
      "The password is illegal as too common",
    ]);

    const response3 = await chai
      .request(app)
      .post("/password/validation")
      .send({ password: "illegal_0912" });
    expect(response3.ok).to.be.true;
    expect(response3.body.valid).to.be.false;
    expect(response3.body.messages).to.deep.equal([
      "The password is illegal as too common",
    ]);
  });
});
