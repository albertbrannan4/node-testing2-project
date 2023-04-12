const db = require("../../data/db-config");

async function getAll() {
  const result = await db("users");
  return result;
}

async function getById(id) {
  const result = await db("users").where("id", id).first();
  return result;
}

module.exports = {
  getAll,
  getById,
};
