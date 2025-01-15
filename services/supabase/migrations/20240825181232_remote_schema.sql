alter table "public"."presale" add column "close_timestampz" timestamp with time zone;

alter table "public"."presale" add column "total_raised" bigint not null default '0'::bigint;


