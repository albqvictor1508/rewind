import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { moviesActors } from "./moviesActors";

export const actors = pgTable("actors", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name").notNull(),
  photo: text("photo"),
  birthdate: timestamp("birthdate"),
  deathday: timestamp("deathday"),
  popularity: real("popularity"),
  tmdbId: integer("tmdb_id").unique(),
});

export const actorsRelations = relations(actors, ({ many }) => ({
  moviesActors: many(moviesActors),
}));