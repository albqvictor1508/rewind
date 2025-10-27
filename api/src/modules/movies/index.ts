import { Router } from "express";
import { auth } from "src/config/auth";
import { MovieService } from "./service";
import { z } from "zod";
import { db } from "src/db/client";
import { movies } from "src/db/schema/movies";
import { eq } from "drizzle-orm";

export const movieRoutes = Router();

movieRoutes.get("/", async (_, response) => {
  const movies = await MovieService.getMoviesGroupedByGenre();
  return response.send(movies);
});

movieRoutes.get("/user", auth.authenticate, async (request, response) => {
  // @ts-ignore
  const { id: userId } = request.user;

  const movies = await MovieService.getUserMovies(userId);
  return response.send(movies);
});

movieRoutes.get("/:movieId", async (request, response) => {
  const { movieId } = z.object({
    movieId: z.uuid()
  }).parse(request.params);

  const movieById = await db.query.movies.findFirst({
    where: eq(movies.id, movieId)
  });
  if (!movieById) return response.status(400).json("Invalid movie.");

  const movie = await MovieService.getMovie(movieId);
  return response.send(movie);
});
