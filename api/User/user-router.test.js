const router = require("./user-router");

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
