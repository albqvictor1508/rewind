import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { moviesProductionCompanies } from "./moviesProductionCompanies";

export const productionCompanies = pgTable("production_companies", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  logoPath: text("logo_path"),
  originCountry: text("origin_country"),
});

export const productionCompaniesRelations = relations(
  productionCompanies,
  ({ many }) => ({
    moviesProductionCompanies: many(moviesProductionCompanies),
  })
);
