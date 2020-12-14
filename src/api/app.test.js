import app from './app'
import request from "supertest"

describe("Test the /contacts path", () => {
  test("It should 400 the GET method with no query term", done => {
    request(app)
      .get("/contacts/")
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBeTruthy();
        done();
      });
  });
  test("It should 400 the GET method with a 2 char query term", done => {
    request(app)
      .get("/contacts/?term=al")
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBeTruthy();
        done();
      });
  });
  test("It should 200 the GET method with a 3 char query term", done => {
    request(app)
      .get("/contacts/?term=ald")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBeUndefined();
        done();
      });
  });
});

describe("Test the /contact path", () => {
  test("It should 404 the GET method with no id param", done => {
    request(app)
      .get("/contact/")
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
  test("It should 404 the GET method with an id that matches no contacts", done => {
    request(app)
      .get("/contact/abc_1001")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBeTruthy();
        done();
      });
  });
  test("It should 200 the GET method with a an id param", done => {
    request(app)
      .get("/contact/con_0")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBeUndefined();
        done();
      });
  });
});
