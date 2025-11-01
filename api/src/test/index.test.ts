import { eq, sql } from "drizzle-orm";
import { db } from "src/db/client";
import { movieMarks } from "src/db/schema/movieMarks";

const userId = 'salve';

const [salve] = await db.select({
  moviesWatched: sql<number>`count(CASE WHEN ${movieMarks.status} = 'WATCHED' THEN 1 END)`.mapWith(Number),
  moviesWatching: sql<number>`count(CASE WHEN ${movieMarks.status} = 'IM_WATCHING' THEN 1 END)`.mapWith(Number),
  moviesFavorited: sql<number>`count(CASE WHEN ${movieMarks.isFavorite} = true THEN 1 END)`.mapWith(Number)
}).from(movieMarks)
  .where(eq(movieMarks.userId, userId))

console.log(salve);

