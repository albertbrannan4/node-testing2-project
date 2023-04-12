exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        { id: 1, username: "admin", password: "123" },
        { id: 2, username: "albert", password: "123" },
      ]);
    });
};
