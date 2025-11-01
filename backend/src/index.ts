import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import slotRoute from "../src/routes/index"

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pg = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.PG_CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  searchPath: ["knex", "public"],
});

app.use("/slot", slotRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

export default app;

