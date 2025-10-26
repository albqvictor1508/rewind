import Redis from "ioredis";
import { env } from "./env";

export const FIVE_MINUTES_IN_MS = '300'

const { REDIS_HOST, REDIS_PORT } = env;
export const redis = new Redis({ port: REDIS_PORT, host: REDIS_HOST });

