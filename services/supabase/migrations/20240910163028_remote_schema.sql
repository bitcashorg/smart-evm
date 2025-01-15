alter table "public"."alchemy_events" drop column "isactive";

alter table "public"."alchemy_events" drop column "signingkey";

alter table "public"."alchemy_events" drop column "timecreated";

alter table "public"."alchemy_events" add column "is_active" boolean not null;

alter table "public"."alchemy_events" add column "signing_key" text not null;

alter table "public"."alchemy_events" add column "time_created" timestamp with time zone not null;

alter table "public"."project" add column "token_address" text;

CREATE UNIQUE INDEX project_token_address_key ON public.project USING btree (token_address);

alter table "public"."project" add constraint "project_token_address_key" UNIQUE using index "project_token_address_key";


