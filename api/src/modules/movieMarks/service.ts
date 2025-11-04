import { db } from "src/db/client";
import { movieMarks } from "src/db/schema/movieMarks";
import { MovieMarksModel } from "./model";
import { eq } from "drizzle-orm";

export class MovieMarkService {
  public static async markMovie(
    userId: string,
    { movieId, status, isFavorite }: MovieMarksModel.MarkMovieBody
  ) {
    const existingMark = await db.query.movieMarks.findFirst({
      where: (mark, { and }) => and(eq(mark.userId, userId), eq(mark.movieId, movieId)),
    });

    if (existingMark) {
      const [updatedMark] = await db
        .update(movieMarks)
        .set({
          status: status ?? existingMark.status,
          isFavorite: isFavorite ?? existingMark.isFavorite,
        })
        .where(eq(movieMarks.id, existingMark.id))
        .returning();
      return updatedMark;
    }

    const [newMark] = await db
      .insert(movieMarks)
      //@ts-expect-error
      .values({
        userId,
        movieId,
        status: status ?? '',
        isFavorite: isFavorite ?? false,
      })
      .returning();
    return newMark;
  }
}
