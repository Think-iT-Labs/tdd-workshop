import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "./http-server"

chai.use(chaiHttp);

describe("password validation endpoint", () => {
  it("should respond with 200", () => {
    chai.request(app)
      .post('/password/validation')
      .send({ "password": "1234578_123" })
      .end((error, response) => {
        console.log('is passing here')
        expect(response.ok).to.be.true;
        expect(response.status).to.be.eq(200);
      });
  });
});
