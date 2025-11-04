import { pgTable, uuid, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

const statusEnum = [
  "WANT_WATCH",
  "WATCHED",
  "IM_WATCHING"
] as const;

export const movieMarks = pgTable("movie_marks", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid().notNull().references(
    () => users.id
  ),
  movieId: uuid().notNull().references(
    () => movies.id
  ),
  status: text({ enum: statusEnum }),
  createdAt: timestamp().defaultNow(),
  isFavorite: boolean().default(false),
})
