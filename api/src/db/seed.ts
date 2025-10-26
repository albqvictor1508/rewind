import axios from "axios";
import { db } from "./client";
import { env } from "../common/env";
import { schema } from "./schema";
import { movies } from "./schema/movies";
import { genres } from "./schema/genres";
import { productionCompanies } from "./schema/productionCompanies";
import { productionCountries } from "./schema/productionCountries";
import { moviesGenres } from "./schema/moviesGenres";
import { moviesProductionCompanies } from "./schema/moviesProductionCompanies";
import { moviesProductionCountries } from "./schema/moviesProductionCountries";
import { reset } from "drizzle-seed";

await reset(db, schema);

const { MOVIE_API_IMAGE_BASE_URL, MOVIE_API_ENDPOINT, MOVIE_API_READ_TOKEN } = env;

const tmdbApi = axios.create({
  baseURL: MOVIE_API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${MOVIE_API_READ_TOKEN}`,
  },
  params: {
    language: "pt-BR",
  },
});

const TOTAL_PAGES_TO_FETCH = 15;
async function seed() {

  for (let page = 1; page <= TOTAL_PAGES_TO_FETCH; page++) {
    const discoverResponse = await tmdbApi.get("/discover/movie", {
      params: {
        include_adult: false,
        page: page,
        sort_by: "popularity.desc",
      },
    });

    const moviesFromApi = discoverResponse.data.results;

    if (moviesFromApi.length === 0) break;

    for (const movieStub of moviesFromApi) {
      try {
        console.log(`- Buscando detalhes para o filme: ${movieStub.title}`);

        const detailResponse = await tmdbApi.get(`/movie/${movieStub.id}`);
        const movie = detailResponse.data;

        if (!movie.imdb_id) continue;

        const [insertedMovie] = await db
          .insert(movies)
          .values({
            name: movie.title,
            overview: movie.overview,
            tagline: movie.tagline,
            photo: movie.poster_path ? `${MOVIE_API_IMAGE_BASE_URL}${movie.poster_path}` : null,
            backdropPhoto: movie.backdrop_path ? `${MOVIE_API_IMAGE_BASE_URL}${movie.backdrop_path}` : null,
            imdbId: movie.imdb_id,
            status: movie.status,
            originalTitle: movie.original_title,
            budget: movie.budget,
            revenue: movie.revenue,
            popularity: movie.popularity,
            runtime: movie.runtime,
            voteAverage: movie.vote_average,
            releasedAt: movie.release_date ? new Date(movie.release_date) : null,
          })
          .onConflictDoUpdate({ target: movies.imdbId, set: { name: movie.title } })
          .returning();

        if (!insertedMovie) {
          console.log("[ERROR] Error to insert movie");
          continue;
        }

        if (movie.genres && movie.genres.length > 0) {
          await db
            .insert(genres)
            .values(movie.genres.map((g: any) => ({ name: g.name })))
            .onConflictDoNothing()

          const allGenres = await db.query.genres.findMany({
            where: (g, { inArray }) => inArray(g.name, movie.genres.map((genre: any) => genre.name))
          })

          await db.insert(moviesGenres).values(
            allGenres.map((g) => ({
              movieId: insertedMovie.id,
              genreId: g.id,
            }))
          ).onConflictDoNothing();
        }

        if (movie.production_companies && movie.production_companies.length > 0) {
          await db
            .insert(productionCompanies)
            .values(
              movie.production_companies.map((c: any) => ({
                name: c.name,
                logoPath: c.logo_path ? `${MOVIE_API_IMAGE_BASE_URL}${c.logo_path}` : null,
                originCountry: c.origin_country,
              }))
            )
            .onConflictDoNothing();

          const allCompanies = await db.query.productionCompanies.findMany({
            where: (c, { inArray }) => inArray(c.name, movie.production_companies.map((company: any) => company.name))
          })

          await db.insert(moviesProductionCompanies).values(
            allCompanies.map((c) => ({
              movieId: insertedMovie.id,
              companyId: c.id,
            }))
          ).onConflictDoNothing();
        }

        if (movie.production_countries && movie.production_countries.length > 0) {
          await db
            .insert(productionCountries)
            .values(
              movie.production_countries.map((p: any) => ({
                name: p.name,
                iso31661: p.iso_3166_1,
              }))
            )
            .onConflictDoNothing();

          const allCountries = await db.query.productionCountries.findMany({
            where: (c, { inArray }) => inArray(c.iso31661, movie.production_countries.map((country: any) => country.iso_3166_1))
          })

          await db.insert(moviesProductionCountries).values(
            allCountries.map((p) => ({
              movieId: insertedMovie.id,
              countryId: p.id,
            }))
          ).onConflictDoNothing();
        }

      } catch (error: any) {
        console.error(`  -> Erro ao processar o filme ${movieStub.title}:`, error.message);
      }
    }
  }

  console.log("✅ Processo de seeding concluído!");
}

await seed();
