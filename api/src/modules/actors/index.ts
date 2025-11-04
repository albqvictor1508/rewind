import { Router } from "express";
import { FIVE_MINUTES_IN_MS, redis } from "src/common/redis";
import { db } from "src/db/client";
import { actors } from "src/db/schema/actors";
import z from "zod";

export const actorsRoutes = Router()

const GET_ACTORS_SCHEMA = z.object({
  limit: z.optional(z.coerce.number()).default(20),
})

actorsRoutes.get(
  "/",
  async (request, response) => {
    const { limit } = GET_ACTORS_SCHEMA.parse(request.query);

    const REDIS_KEY = 'actors';
    if (await redis.exists(REDIS_KEY)) return response.send(JSON.parse(await redis.get(REDIS_KEY) as string));

    const actorList = await db
      .select()
      .from(actors)
      .limit(limit);

    await redis.setex(REDIS_KEY, FIVE_MINUTES_IN_MS, JSON.stringify(actorList))

    return response.status(200).json(actorList);
  }
)
