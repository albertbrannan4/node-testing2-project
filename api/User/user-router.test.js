const router = require("./user-router");
const request = require("supertest");
const server = require("../server");
const db = require("../../data/db-config");

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

describe("router getting users", () => {
  test("getting all users", async () => {
    const res = await request(server).get("/api/users");
    expect(res.body).toHaveLength(2);
    expect(res.status).toBe(200);
  });
  test("get user by its id", async () => {
    const res = await request(server).get("/api/users/1");
    expect(res.body).toMatchObject({
      id: 1,
      username: "admin",
      password: "123",
    });
    expect(res.status).toBe(200);
  });
});
describe("router creating users", () => {
  test.todo("router responds with newly created user");
  test.todo("new user is added to the users table");
});
