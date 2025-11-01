import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const sslConfig = {
  rejectUnauthorized: false,
};
const getConnection = () => {
  const connString = process.env.PG_CONNECTION_STRING || "";
  if (connString.includes("sslmode")) {
    return connString;
  }
  return {
    connectionString: connString,
    ssl: sslConfig,
  };
};

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: getConnection(),
    migrations: {
      directory: "./migrations",
      extension: "ts",
    },
  },
  staging: {
    client: "pg",
    connection: getConnection(),
    pool: { min: 2, max: 10 },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
      extension: "ts",
    },
  },
  production: {
    client: "pg",
    connection: getConnection(),
    pool: { min: 2, max: 10 },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
      extension: "ts",
    },
  },
};

export default config;
