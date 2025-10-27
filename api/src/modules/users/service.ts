import { eq } from "drizzle-orm";
import { db } from "src/db/client";
import { movieMarks } from "src/db/schema/movieMarks";
import { movies } from "src/db/schema/movies";
import { users } from "src/db/schema/users";

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

  public static async softDeleteUser(userId: string) {
    const [result] = await db.update(users).set({
      deletedAt: new Date(),
    }).where(eq(users.id, userId)).returning({ id: users.id });

    if (!result) return { ok: false };

    return { ok: true }

    //WARN: com isso era só criar um worker que a cada 30 dias +/- checasse se
    //essa glr continua com o deletedAt
  }
}
