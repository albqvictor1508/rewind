CREATE TABLE "genres" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "genres_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "movies_genres" (
	"movie_id" uuid NOT NULL,
	"genre_id" uuid NOT NULL,
	CONSTRAINT "movies_genres_movie_id_genre_id_pk" PRIMARY KEY("movie_id","genre_id")
);
--> statement-breakpoint
CREATE TABLE "movies_production_companies" (
	"movie_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	CONSTRAINT "movies_production_companies_movie_id_company_id_pk" PRIMARY KEY("movie_id","company_id")
);
--> statement-breakpoint
CREATE TABLE "movies_production_countries" (
	"movie_id" uuid NOT NULL,
	"country_id" uuid NOT NULL,
	CONSTRAINT "movies_production_countries_movie_id_country_id_pk" PRIMARY KEY("movie_id","country_id")
);
--> statement-breakpoint
CREATE TABLE "production_companies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"logo_path" text,
	"origin_country" text,
	CONSTRAINT "production_companies_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "production_countries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"iso_3166_1" text NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "production_countries_iso_3166_1_unique" UNIQUE("iso_3166_1")
);
--> statement-breakpoint
ALTER TABLE "movies" DROP CONSTRAINT "movies_name_unique";--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "overview" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "tagline" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "backdrop_photo" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "imdb_id" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "status" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "original_title" text;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "budget" bigint;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "revenue" bigint;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "popularity" real;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "runtime" integer;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "vote_average" real;--> statement-breakpoint
ALTER TABLE "movies" ADD COLUMN "released_at" timestamp;--> statement-breakpoint
ALTER TABLE "movies_genres" ADD CONSTRAINT "movies_genres_movie_id_movies_id_fk" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies_genres" ADD CONSTRAINT "movies_genres_genre_id_genres_id_fk" FOREIGN KEY ("genre_id") REFERENCES "public"."genres"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies_production_companies" ADD CONSTRAINT "movies_production_companies_movie_id_movies_id_fk" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies_production_companies" ADD CONSTRAINT "movies_production_companies_company_id_production_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."production_companies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies_production_countries" ADD CONSTRAINT "movies_production_countries_movie_id_movies_id_fk" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies_production_countries" ADD CONSTRAINT "movies_production_countries_country_id_production_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."production_countries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies" DROP COLUMN "where_to_watch";--> statement-breakpoint
ALTER TABLE "movies" DROP COLUMN "movie_data";--> statement-breakpoint
ALTER TABLE "movies" ADD CONSTRAINT "movies_imdb_id_unique" UNIQUE("imdb_id");