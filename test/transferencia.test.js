const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { getToken } = require("../helpers/autenticacao");
const postTransferencias = require("../fixtures/postTransferencias.json");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token;

    beforeEach(async () => {
      token = await getToken("julio.lima", "123456");
    });

    it("When sending a transfer greater or equal to R$ 10,00, then return 201", async () => {
      const bodyTransferencias = { ...postTransferencias };

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(response.status).to.equal(201);
    });

    it("When sending a transfer less than R$ 10,00, then return 422", async () => {
      const bodyTransferencias = { ...postTransferencias };
      bodyTransferencias.valor = 9.99;

      const response = await request("http://localhost:3000")
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(response.status).to.equal(422);
    });
  });
});
