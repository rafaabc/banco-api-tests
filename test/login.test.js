const request = require("supertest");
const { expect } = require("chai");

describe("Login", () => {
  describe("POST /login", () => {
    it("When using valid credentials, then return 200 with a valid string token ", async () => {
      const response = await request("http://localhost:3000")
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "julio.lima",
          senha: "123456",
        });

      expect(response.status).to.equal(200);
      expect(response.body.token).to.be.a("string");
    });
  });
});
