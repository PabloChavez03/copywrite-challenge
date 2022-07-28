const colors = require("../utils/colors");
const mongoose = require("mongoose");
const Text = require("../models/Text");
const listener = require("../../index");
const server = require("../../app");
const request = require("supertest")(server);
const expect = require("chai").expect;

const initialTexts = [
  {
    text: "MERN3",
  },
  {
    text: "Angie se durmio",
  },
  {
    text: "Diamantito ronronea",
  },
];

before(async () => {
  await Text.deleteMany({});

  const text1 = new Text(initialTexts[0]);
  await text1.save();

  const text2 = new Text(initialTexts[1]);
  await text2.save();
});

after((done) => {
  listener.close(() => console.log(colors.green, "app close"));
  mongoose.connection.close(() => console.log(colors.green, "database close"));
  done();
});

describe("Notes API", () => {
  describe("GET /text", () => {
    it("Hay textos", async () => {
      const response = await request.get("/text");
      expect(response.status).to.eql(200);
    });
  });

  describe("POST /text", () => {
    const newText = {
      text: "testing per post method",
    };

    it("Se espera un status code 200", async () => {
      await request
        .post("/text")
        .send(newText)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    it("Se añadio correctamente el texto invertido", async () => {
      const response = await request.get("/text");
      const textFound = response.body.find(
        (data) => Array.from(data.text).reverse().join("") === newText.text
      );
      expect(textFound).to.have.property("text");
      expect(textFound.text).to.equal("dohtem tsop rep gnitset");
    });
  });
});
