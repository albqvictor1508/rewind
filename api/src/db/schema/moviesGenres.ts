import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { movies } from "./movies";
import { genres } from "./genres";

export const moviesGenres = pgTable(
  "movies_genres",
  {
    movieId: uuid("movie_id")
      .notNull()
      .references(() => movies.id),
    genreId: uuid("genre_id")
      .notNull()
      .references(() => genres.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.movieId, t.genreId] }),
  })
);

export const moviesGenresRelations = relations(moviesGenres, ({ one }) => ({
  movie: one(movies, {
    fields: [moviesGenres.movieId],
    references: [movies.id],
  }),
  genre: one(genres, {
    fields: [moviesGenres.genreId],
    references: [genres.id],
  }),
}));