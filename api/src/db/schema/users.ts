import { timestamp } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";
import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  authId: text(),
  displayName: text(),
  name: text().unique().notNull(),
  email: text().unique(),
  password: text(),
  photo: text(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().$onUpdate(() => new Date()),
  deletedAt: timestamp(),
})
