alter table "public"."presale" drop column "close_timestampz";

alter table "public"."presale" add column "close_timestamptz" timestamp with time zone;


