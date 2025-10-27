import * as e from "envalid";

export const env = e.cleanEnv(process.env, {
  PORT: e.port(),

  DATABASE_URL: e.url(),
  REDIS_HOST: e.str(),
  REDIS_PORT: e.port(),

  MINIO_ACCESS_KEY: e.str(),
  MINIO_SECRET_KEY: e.str(),
  MINIO_ENDPOINT: e.str(),
  MINIO_BUCKET: e.str(),

  SECRET: e.str(),

  AUTH0_DOMAIN: e.str(),
  AUTH0_CLIENT_ID: e.str(),
  AUTH0_CLIENT_SECRET: e.str(),
  AUTH0_CALLBACK_URL: e.str(),


  SMTP_HOST: e.str(),
  SMTP_PORT: e.port(),
  SMTP_USER: e.email(),
  SMTP_PASS: e.str(),

  MOVIE_API_READ_TOKEN: e.str(),
  MOVIE_API_KEY: e.str(),
  MOVIE_API_ENDPOINT: e.url(),
  MOVIE_API_IMAGE_BASE_URL: e.url()
});
