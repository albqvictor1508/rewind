CREATE TABLE "actors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"photo" text,
	"birthdate" timestamp,
	"deathday" timestamp,
	"popularity" real,
	"tmdb_id" integer,
	CONSTRAINT "actors_tmdb_id_unique" UNIQUE("tmdb_id")
);
--> statement-breakpoint
CREATE TABLE "movies_actors" (
	"movie_id" uuid NOT NULL,
	"actor_id" uuid NOT NULL,
	CONSTRAINT "movies_actors_movie_id_actor_id_pk" PRIMARY KEY("movie_id","actor_id")
);
--> statement-breakpoint
ALTER TABLE "movie_marks" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "movies_actors" ADD CONSTRAINT "movies_actors_movie_id_movies_id_fk" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movies_actors" ADD CONSTRAINT "movies_actors_actor_id_actors_id_fk" FOREIGN KEY ("actor_id") REFERENCES "public"."actors"("id") ON DELETE no action ON UPDATE no action;