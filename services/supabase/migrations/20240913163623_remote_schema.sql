revoke delete on table "public"."alchemy_events" from "anon";

revoke insert on table "public"."alchemy_events" from "anon";

revoke references on table "public"."alchemy_events" from "anon";

revoke select on table "public"."alchemy_events" from "anon";

revoke trigger on table "public"."alchemy_events" from "anon";

revoke truncate on table "public"."alchemy_events" from "anon";

revoke update on table "public"."alchemy_events" from "anon";

revoke delete on table "public"."alchemy_events" from "authenticated";

revoke insert on table "public"."alchemy_events" from "authenticated";

revoke references on table "public"."alchemy_events" from "authenticated";

revoke select on table "public"."alchemy_events" from "authenticated";

revoke trigger on table "public"."alchemy_events" from "authenticated";

revoke truncate on table "public"."alchemy_events" from "authenticated";

revoke update on table "public"."alchemy_events" from "authenticated";

revoke delete on table "public"."alchemy_events" from "service_role";

revoke insert on table "public"."alchemy_events" from "service_role";

revoke references on table "public"."alchemy_events" from "service_role";

revoke select on table "public"."alchemy_events" from "service_role";

revoke trigger on table "public"."alchemy_events" from "service_role";

revoke truncate on table "public"."alchemy_events" from "service_role";

revoke update on table "public"."alchemy_events" from "service_role";

drop table "public"."alchemy_events";

alter table "public"."presale_deposit" alter column "state" drop default;

alter type "public"."state" rename to "state__old_version_to_be_dropped";

create type "public"."state" as enum ('created', 'processing', 'processed', 'error');

create table "public"."alchemy_hooks" (
    "network" text not null,
    "type" text not null,
    "url" text not null,
    "is_active" boolean not null,
    "time_created" timestamp with time zone not null,
    "signing_key" text not null,
    "version" text not null,
    "id" text not null
);


alter table "public"."alchemy_hooks" enable row level security;

alter table "public"."presale_deposit" alter column state type "public"."state" using state::text::"public"."state";

alter table "public"."presale_deposit" alter column "state" set default 'created'::state;

drop type "public"."state__old_version_to_be_dropped";

CREATE UNIQUE INDEX alchemy_hooks_pkey ON public.alchemy_hooks USING btree (id);

alter table "public"."alchemy_hooks" add constraint "alchemy_hooks_pkey" PRIMARY KEY using index "alchemy_hooks_pkey";

grant delete on table "public"."alchemy_hooks" to "anon";

grant insert on table "public"."alchemy_hooks" to "anon";

grant references on table "public"."alchemy_hooks" to "anon";

grant select on table "public"."alchemy_hooks" to "anon";

grant trigger on table "public"."alchemy_hooks" to "anon";

grant truncate on table "public"."alchemy_hooks" to "anon";

grant update on table "public"."alchemy_hooks" to "anon";

grant delete on table "public"."alchemy_hooks" to "authenticated";

grant insert on table "public"."alchemy_hooks" to "authenticated";

grant references on table "public"."alchemy_hooks" to "authenticated";

grant select on table "public"."alchemy_hooks" to "authenticated";

grant trigger on table "public"."alchemy_hooks" to "authenticated";

grant truncate on table "public"."alchemy_hooks" to "authenticated";

grant update on table "public"."alchemy_hooks" to "authenticated";

grant delete on table "public"."alchemy_hooks" to "service_role";

grant insert on table "public"."alchemy_hooks" to "service_role";

grant references on table "public"."alchemy_hooks" to "service_role";

grant select on table "public"."alchemy_hooks" to "service_role";

grant trigger on table "public"."alchemy_hooks" to "service_role";

grant truncate on table "public"."alchemy_hooks" to "service_role";

grant update on table "public"."alchemy_hooks" to "service_role";


