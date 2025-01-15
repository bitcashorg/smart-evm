create type "public"."state" as enum ('created', 'processing', 'processed');

alter table "public"."presale_deposit" add column "state" state not null default 'created'::state;


