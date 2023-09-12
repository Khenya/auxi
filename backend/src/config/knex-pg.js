require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: "dpg-cjefsubbq8nc73efhoc0-a.oregon-postgres.render.com",
      user: "brendaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      password: "UjLazJFpr8XpaNAjBGGQ7L2ytnTcQVCj",
      database: "auxiliatron",
      port: 5432,
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
