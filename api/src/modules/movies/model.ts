import z from "zod";

export namespace MoviesModel {
  export const GET_MOVIES_QUERY = z.object({
    limit: z.optional(z.coerce.number()).default(20),
    genres: z.optional(
      z.preprocess(
        (val) => (typeof val === 'string' ? val.split(',') : val),
        z.array(z.string()).optional()
      )
    )
  })

  export type MovieRequest = {
    title: string;
    photo: string;
    release_date: string;
    poster_path: string;
  }
}
