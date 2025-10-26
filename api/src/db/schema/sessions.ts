import { uuid, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

//TODO: talvez eu use
export const sessions = pgTable("sessions", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid().notNull().references(() => users.id),
  ip: text().notNull(),
  lastAccessAt: timestamp(),
  createdAt: timestamp().defaultNow()
})
