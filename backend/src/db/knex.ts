import knex from "knex";
import config from "../knexfile";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const knexInstance = knex(config[env]);

export default knexInstance;
