import { timestamp } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";
import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  authId: text(),
  displayName: text(),
  name: text().unique().notNull(),
  email: text().unique().notNull(),
  password: text(),
  createdAt: timestamp().defaultNow(),
})
