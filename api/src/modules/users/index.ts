import { Router } from "express";
import { auth } from "src/config/auth";
import { UserService } from "./service";
import { db } from "src/db/client";
import { users } from "src/db/schema/users";
import { eq } from "drizzle-orm";
import { Minio } from "src/common/minio";

export const userRoutes = Router();

userRoutes.get(
  "/movies",
  auth.authenticate, // TODO: create this middleware
  async (request, response) => {
    // @ts-expect-error
    const { id: userId } = request.user;

    const movies = UserService.getUserMovies(userId);
    return response.json(movies);
  }
);

userRoutes.get("/@me",
  auth.authenticate,
  async (request, response) => {
    //@ts-expect-error
    const { id: userId } = request.user;

    const [user] = await db.select({
      name: users.name,
      photo: users.photo,
      email: users.email,
    })
      .from(users)
      .where(eq(users.id, userId));
    if (!user) return response.status(400).json("Unknown User");

    return response.json(user);

  }
)

userRoutes.get("/photo",
  auth.authenticate,
  async (request, response) => {
    //@ts-expect-error
    const { id: userId } = request.user;

    const { route } = await Minio.genPresignedUrl(`${userId}`) //WARN: eu envio esse hash junto?

    return response.json({ route });
  }
)
userRoutes.delete("/photo",
  auth.authenticate,
  async (request, response) => {
    //@ts-expect-error
    const { id: userId } = request.user;

    const ok = await Minio.remove(`${userId}`) //WARN: eu envio esse hash junto?

    return response.json({ ok });
  }
)


