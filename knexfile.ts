import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "db-top-finances",
      port: 5432,
      user: "top-finances",
      password: "123456",
      database: "top_finances",
    },
    migrations: {
      directory: "./database/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./database/seeds",
      extension: "ts",
    },
  },
};

export default config;
