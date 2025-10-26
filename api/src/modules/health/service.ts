import { sql } from "drizzle-orm";
import { readyNum } from "src/app";
import { redis } from "src/common/redis";
import { db } from "src/db/client";

export class HealthService {
  public static async check() {
    const { timestamp } = HealthService;

    const [cache, database] = await Promise.allSettled([
      timestamp(() => redis.ping()),
      timestamp(() => db.execute(sql`SELECT 'salve'`))
    ]);

    if (database.status === "rejected") {
      console.log(database.reason);
    }

    if (cache.status === "rejected") {
      console.log(cache.reason);
    }

    const readyAt = new Date(readyNum);
    return {
      readyAt: readyAt.toISOString(),
      cache:
        cache.status === "fulfilled"
          ? { ok: true, ...cache.value }
          : { ok: false },
      db:
        database.status === "fulfilled"
          ? { ok: true, ...database.value }
          : { ok: false },
      uptime: Date.now() - readyAt.getTime(),
      ok:
        cache.status === "fulfilled" &&
        database.status === "fulfilled",
    };

  }

  public static async timestamp<T>(func: () => Promise<T>) {
    const start = performance.now();

    await func()

    return {
      start,
      timestamp: performance.now() - start
    }
  }
}
