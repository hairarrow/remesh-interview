import request from "supertest";
import app from "../../backend/app";

describe("Test static server", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test("will receive process.env", () => {
    process.env.NODE_ENV = "production";
    process.env.PORT = 5000;

    const prodApp = require("../../backend/app").default;

    console.log(prodApp);
  });
});

describe("Test api paths", () => {
  describe("Test /api/users", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/api/users")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

  describe("Test /api/questions", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/api/questions")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

  describe("Test /api/votes", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/api/votes")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

  describe("Test /api/messages", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/api/messages")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
});
