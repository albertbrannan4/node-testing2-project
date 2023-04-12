// Update with your config settings.
const common = {
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
  client: "sqlite3",
  migrations: {
    tableName: "knex_migrations",
  },
};
module.exports = {
  development: {
    ...common,
    connection: {
      filename: "./data/user.db3",
    },
  },

  testing: {
    ...common,
    connection: {
      filename: "./data/test.db3",
    },
  },

  production: {},
};
