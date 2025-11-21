const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { getToken } = require("../helpers/autenticacao");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    it("When sending a transfer greater or equal to R$ 10,00, then return 201", async () => {
      const token = await getToken("julio.lima", "123456");

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 10,
          token: "",
        });

      expect(response.status).to.equal(201);
    });

    it("When sending a transfer less than R$ 10,00, then return 422", async () => {
      const token = await getToken("julio.lima", "123456");

      const response = await request("http://localhost:3000")
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 9.99,
          token: "",
        });

      expect(response.status).to.equal(422);
    });
  });
});
