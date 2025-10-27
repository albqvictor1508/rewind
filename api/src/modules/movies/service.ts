import { eq, sql } from "drizzle-orm";
import { db } from "src/db/client";
import { movieMarks } from "src/db/schema/movieMarks";
import { movies } from "src/db/schema/movies";


export class MovieService {
  public static async getMoviesGroupedByGenre() {
    const query = sql`
      SELECT
        g.name,
        json_agg(m.*) as movies
      FROM genres g
      LEFT JOIN movies_genres mg ON g.id = mg.genre_id
      LEFT JOIN movies m ON mg.movie_id = m.id
      GROUP BY g.name;
    `;

    const moviesByGenre = await db.execute(query);

    return moviesByGenre;
  }

  public static async getUserMovies(userId: string) {
    const userMovies = await db
      .select({
        id: movies.id,
        name: movies.name,
        overview: movies.overview,
        tagline: movies.tagline,
        photo: movies.photo,
        backdropPhoto: movies.backdropPhoto,
        imdbId: movies.imdbId,
        status: movies.status,
        originalTitle: movies.originalTitle,
        budget: movies.budget,
        revenue: movies.revenue,
        popularity: movies.popularity,
        runtime: movies.runtime,
        voteAverage: movies.voteAverage,
        releasedAt: movies.releasedAt,
        mark: movieMarks.status,
        isFavorite: movieMarks.isFavorite
      })
      .from(movieMarks)
      .where(eq(movieMarks.userId, userId))
      .leftJoin(movies, eq(movieMarks.movieId, movies.id));

    return userMovies;
  }

  public static async getMovie(movieId: string) {
    const query = sql`
      SELECT
        m.*,
        json_agg(pc.*) as production_companies,
        json_agg(poc.*) as production_countries
      FROM movies m
      LEFT JOIN movies_production_companies mpc ON m.id = mpc.movie_id
      LEFT JOIN production_companies pc ON mpc.company_id = pc.id
      LEFT JOIN movies_production_countries mpoc ON m.id = mpoc.movie_id
      LEFT JOIN production_countries poc ON mpoc.country_id = poc.id
      WHERE m.id = ${movieId}
      GROUP BY m.id;
    `;

    const [movie] = await db.execute(query);

    return movie;
  }
}
