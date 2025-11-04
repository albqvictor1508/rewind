import { Router } from "express";
import { MovieMarksModel } from "./model";
import { MovieMarkService } from "./service";

export const movieMarkRoutes = Router();

movieMarkRoutes.put(
  "/mark",
  async (request, response) => {
    //@ts-expect-error
    const { id: userId } = request.user;

    try {
      const { movieId, status, isFavorite } = await MovieMarksModel.MARK_MOVIE_BODY.parseAsync(request.body);

      const markedMovie = await MovieMarkService.markMovie(userId, { movieId, status, isFavorite });

      return response.status(200).json(markedMovie);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return response.status(400).json({ message: "Validation error", errors: error.errors });
      }
      console.error(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
);
