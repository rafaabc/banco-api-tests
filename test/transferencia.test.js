const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { getToken } = require("../helpers/autenticacao");
const postTransferencias = require("../fixtures/postTransferencias.json");

describe("Transferências", () => {
  let token;

  beforeEach(async () => {
    token = await getToken("julio.lima", "123456");
  });

  describe("POST /transferencias", () => {
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

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(response.status).to.equal(422);
    });
  });

  describe("GET /transferencias/{id}", () => {
    it("When retrieving a transfer from id, then return 200 with the valid id", async () => {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias/8")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(8);
      expect(response.body.id).to.be.a("number");
      expect(response.body.conta_origem_id).to.equal(1);
      expect(response.body.conta_destino_id).to.equal(2);
      expect(response.body.valor).to.equal(10.0);
    });
  });

  describe("GET / transferencias", () => {
    it("When retrieving all transfers with filters, then return 200 with the valid transfers", async () => {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias?page=1&limit=10")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).to.equal(200);
      expect(response.body.page).to.equal(1);
      expect(response.body.limit).to.equal(10);
      expect(response.body.transferencias).to.have.lengthOf(10);
    });
  });
});
