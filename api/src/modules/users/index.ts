import { Router } from "express";
import { db } from "src/db/client";
import { auth } from "src/config/auth";
import { movieMarks } from "src/db/schema/movieMarks";
import { eq } from "drizzle-orm";

export const userRoutes = Router();

userRoutes.get(
  "/users/movies",
  //@ts-expect-error
  auth.authenticate, // TODO: create this middleware
  async (request, response) => {
    // @ts-expect-error
    const { id: userId } = request.user; 

    const userMovies = await db.query.movieMarks.findMany({
      where: eq(movieMarks.userId, userId),
      with: {
        movie: true,
      },
    });

    const moviesByStatus = userMovies.reduce((acc, mark) => {
      if (!acc[mark.status]) {
        acc[mark.status] = [];
      }
      acc[mark.status].push(mark.movie);
      return acc;
    }, {} as Record<string, any[]>);

    return response.json(moviesByStatus);
  }
);