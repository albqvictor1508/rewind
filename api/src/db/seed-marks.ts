import { db } from "./client";
import { movieMarks } from "./schema/movieMarks";
import { movies } from "./schema/movies";
import { users } from "./schema/users";

async function main() {
  const [user] = await db.select().from(users).limit(1);

  if (!user) {
    console.error("No users found in the database.");
    return;
  }

  const userId = user.id;

  const [movie] = await db.select().from(movies).limit(1);

  if (!movie) {
    console.error("No movies found in the database.");
    return;
  }

  const movieId = movie.id;

  const marks = [
    {
      userId,
      movieId,
      status: "WANT_WATCH",
    },
    {
      userId,
      movieId,
      status: "WATCHED",
    },
    {
      userId,
      movieId,
      status: "IM_WATCHING",
    },
  ];

  //@ts-expect-error
  await db.insert(movieMarks).values(marks);

  console.log("Successfully created movie marks.");
}

main();
