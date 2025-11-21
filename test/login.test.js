const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const postLogin = require("../fixtures/postLogin.json");

describe("Login", () => {
  describe("POST /login", () => {
    it("When using valid credentials, then return 200 with a valid string token ", async () => {
      const bodyLogin = { ...postLogin };

      const response = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(bodyLogin);

      expect(response.status).to.equal(200);
      expect(response.body.token).to.be.a("string");
    });
  });
});
