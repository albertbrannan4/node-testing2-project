const User = require("./user-model");
const db = require("../../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

describe("get users", () => {
  test("receives all the users in the table", async () => {
    const result = await User.getAll();
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      id: 1,
      username: "admin",
      password: "123",
    });
  });
  test.todo("receives user by that specific id");
});

describe("adding users", () => {
  test.todo("resolves the newly created user");
  test.todo("add the user to the users table");
});
