import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "src/common/env";
import { schema } from "./schema";

export const sql = postgres(env.DATABASE_URL);

export const db = drizzle(sql, {
  schema: schema,
  casing: "snake_case",
  logger: true, //posso criar um logger manualmente: https://orm.drizzle.team/docs/goodies#logging
});
