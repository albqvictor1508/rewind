import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { movies } from "./movies";
import { productionCompanies } from "./productionCompanies";

export const moviesProductionCompanies = pgTable(
  "movies_production_companies",
  {
    movieId: uuid("movie_id")
      .notNull()
      .references(() => movies.id),
    companyId: uuid("company_id")
      .notNull()
      .references(() => productionCompanies.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.movieId, t.companyId] }),
  })
);

export const moviesProductionCompaniesRelations = relations(
  moviesProductionCompanies,
  ({ one }) => ({
    movie: one(movies, {
      fields: [moviesProductionCompanies.movieId],
      references: [movies.id],
    }),
    productionCompany: one(productionCompanies, {
      fields: [moviesProductionCompanies.companyId],
      references: [productionCompanies.id],
    }),
  })
);
