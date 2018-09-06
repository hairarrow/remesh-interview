import request from "supertest";
import app from "../../backend/app";

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
