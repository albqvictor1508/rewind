import { eq } from "drizzle-orm";
import { db } from "src/db/client";
import { movieMarks } from "src/db/schema/movieMarks";
import { movies } from "src/db/schema/movies";

export class UserService {
  public static async getUserMovies(userId: string) {
    const [userMovies] = await db.select({
      title: movies.originalTitle,
      photo: movies.photo,
      average: movies.voteAverage
    }).from(movies)
      .innerJoin(movieMarks, eq(movies.id, movieMarks.movieId))
      .where(eq(movieMarks.userId, userId))
      .orderBy(movieMarks.createdAt)

    return userMovies ?? [];
  }
}
