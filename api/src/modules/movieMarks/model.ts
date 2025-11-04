import { z } from "zod";

export namespace MovieMarksModel {
  export const MARK_MOVIE_BODY = z.object({
    movieId: z.uuid(),
    status: z.enum(["WANT_WATCH", "WATCHED", "IM_WATCHING"]).optional(),
    isFavorite: z.boolean().optional(),
  }).refine((data) => data.status !== undefined || data.isFavorite !== undefined, {
    message: "Either 'status' or 'isFavorite' must be provided.",
    path: ["status", "isFavorite"],
  });

  export type MarkMovieBody = z.infer<typeof MARK_MOVIE_BODY>;
}
