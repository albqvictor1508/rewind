import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { moviesProductionCountries } from "./moviesProductionCountries";

export const productionCountries = pgTable("production_countries", {
  id: uuid().defaultRandom().primaryKey(),
  iso31661: text("iso_3166_1").unique().notNull(),
  name: text("name").notNull(),
});

export const productionCountriesRelations = relations(
  productionCountries,
  ({ many }) => ({
    moviesProductionCountries: many(moviesProductionCountries),
  })
);
