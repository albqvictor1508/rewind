import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { movies } from "./movies";
import { actors } from "./actors";

export const moviesActors = pgTable(
  "movies_actors",
  {
    movieId: uuid("movie_id")
      .notNull()
      .references(() => movies.id),
    actorId: uuid("actor_id")
      .notNull()
      .references(() => actors.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.movieId, t.actorId] }),
  })
);

export const moviesActorsRelations = relations(moviesActors, ({ one }) => ({
  movie: one(movies, {
    fields: [moviesActors.movieId],
    references: [movies.id],
  }),
  actor: one(actors, {
    fields: [moviesActors.actorId],
    references: [actors.id],
  }),
}));
