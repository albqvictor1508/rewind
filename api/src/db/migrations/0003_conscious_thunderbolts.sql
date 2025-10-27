ALTER TABLE "movie_marks" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "movie_marks" ADD COLUMN "is_favorite" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "photo" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "deleted_at" timestamp;