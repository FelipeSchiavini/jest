const app = require("../app");
const request = require("supertest");
const { getRandomStudent } = require("./get-random-student");
jest.mock("./get-random-student");

describe("/users", () => {
  //   beforeEach(() => {
  //     getRandomStudent.mockClear();
  //   });
  test("GET", async () => {
    const response = await request(app).get("/users");
    expect(response.text).toBe("respond with a resource");
    expect(response.headers["content-type"]).toMatch(/text/);
    expect(response.statusCode).toBe(200);
  });

  test("GET random", async () => {
    const list = ["thiago", "felipe", "gabriel"];
    const response = await request(app).get("/users/mock");
    expect(list.includes(response.text)).toBeTruthy();
  });

  test("GET random -> Felipe", async () => {
    const list = ["thiago", "felipe", "gabriel"];
    // const spy = jest.spyOn(randomStudent, "getRandomStudent");
    // getRandomStudent.mockReturnValue("felipe");
    const response = await request(app).get("/users/mock");
    expect(response.text).toBe("felipe");
  });

  describe("POST", () => {
    test("thiago", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: "thiago" });
      expect(response.body.job).toBe("full-stack-developer");
    });
    test("gabriel", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: "gabriel" });
      expect(response.body.job).toBe("front-end");
    });
    test("felipe", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: "felipe" });
      expect(response.body.job).toBe("no-job");
    });
  });
});
