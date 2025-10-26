import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { moviesGenres } from "./moviesGenres";

export const genres = pgTable("genres", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name").unique().notNull(),
});

export const genresRelations = relations(genres, ({ many }) => ({
  moviesGenres: many(moviesGenres),
}));