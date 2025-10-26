import { relations } from "drizzle-orm";
import {
  bigint,
  integer,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { moviesGenres } from "./moviesGenres";
import { moviesProductionCompanies } from "./moviesProductionCompanies";
import { moviesProductionCountries } from "./moviesProductionCountries";

export const movies = pgTable("movies", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name").notNull(),
  overview: text("overview"),
  tagline: text("tagline"),
  photo: text("photo"),
  backdropPhoto: text("backdrop_photo"),
  imdbId: text("imdb_id").unique(),
  status: text("status"),
  originalTitle: text("original_title"),
  budget: bigint("budget", { mode: "number" }),
  revenue: bigint("revenue", { mode: "number" }),
  popularity: real("popularity"),
  runtime: integer("runtime"),
  voteAverage: real("vote_average"),
  releasedAt: timestamp("released_at"),
});

export const moviesRelations = relations(movies, ({ many }) => ({
  moviesGenres: many(moviesGenres),
  moviesProductionCompanies: many(moviesProductionCompanies),
  moviesProductionCountries: many(moviesProductionCountries),
}));
