import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { movies } from "./movies";
import { productionCountries } from "./productionCountries";

export const moviesProductionCountries = pgTable(
  "movies_production_countries",
  {
    movieId: uuid("movie_id")
      .notNull()
      .references(() => movies.id),
    countryId: uuid("country_id")
      .notNull()
      .references(() => productionCountries.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.movieId, t.countryId] }),
  })
);

export const moviesProductionCountriesRelations = relations(
  moviesProductionCountries,
  ({ one }) => ({
    movie: one(movies, {
      fields: [moviesProductionCountries.movieId],
      references: [movies.id],
    }),
    country: one(productionCountries, {
      fields: [moviesProductionCountries.countryId],
      references: [productionCountries.id],
    }),
  })
);
