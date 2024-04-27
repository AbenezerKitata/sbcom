import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

const client = new Client({
  connectionString: process.env.DRIZZLE_DATABASE_URL,
});

client
  .connect()
  .then(() => console.log("Database connection successful"))
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
  });

// { schema } is used for relational queries
export const db = drizzle(client, { schema });
