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
  auth.authenticate,
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

    const { route, hash } = await Minio.genPresignedUrl(`${userId}`) //WARN: eu envio esse hash junto?

    await db.update(users).set({
      photo: hash
    }).where(eq(users.id, userId));

    return response.json({ route });
  }
)

userRoutes.delete("/photo",
  auth.authenticate,
  async (request, response) => {
    //@ts-expect-error
    const { id: userId } = request.user;

    const ok = await Minio.remove(`${userId}`)

    if (ok) await db.update(users)
      .set({ photo: '' })
      .where(eq(users.id, userId))

    return response.json({ ok });
  }
)

userRoutes.put("/",
  auth.authenticate,
  async (request, response) => {

  });

userRoutes.delete("/",
  auth.authenticate,
  async (request, response) => {
    //@ts-expect-error
    const { id: userId } = request.user;

    const { ok } = await UserService.softDeleteUser(userId);

    return response.json({ ok });
  }
)

