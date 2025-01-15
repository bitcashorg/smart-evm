create type "public"."chain_type" as enum ('evm', 'eos', 'solana', 'cosmos');

create type "public"."trx_type" as enum ('presale_deposit', 'usdcred_deposit', 'usdcred_withdrawal');

revoke delete on table "public"."user" from "anon";

revoke insert on table "public"."user" from "anon";

revoke references on table "public"."user" from "anon";

revoke select on table "public"."user" from "anon";

revoke trigger on table "public"."user" from "anon";

revoke truncate on table "public"."user" from "anon";

revoke update on table "public"."user" from "anon";

revoke delete on table "public"."user" from "authenticated";

revoke insert on table "public"."user" from "authenticated";

revoke references on table "public"."user" from "authenticated";

revoke select on table "public"."user" from "authenticated";

revoke trigger on table "public"."user" from "authenticated";

revoke truncate on table "public"."user" from "authenticated";

revoke update on table "public"."user" from "authenticated";

revoke delete on table "public"."user" from "service_role";

revoke insert on table "public"."user" from "service_role";

revoke references on table "public"."user" from "service_role";

revoke select on table "public"."user" from "service_role";

revoke trigger on table "public"."user" from "service_role";

revoke truncate on table "public"."user" from "service_role";

revoke update on table "public"."user" from "service_role";

alter table "public"."user" drop constraint "users_pkey";

drop index if exists "public"."users_pkey";

drop table "public"."user";

create table "public"."account" (
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "short_link" text,
    "account" text not null
);


create table "public"."presale_deposit" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "presale_id" bigint,
    "deposit_hash" text,
    "issuance_hash" text,
    "amount" bigint
);


create table "public"."transaction" (
    "hash" text not null,
    "created_at" timestamp with time zone not null default now(),
    "chain_type" chain_type,
    "chain_id" bigint,
    "trx_type" trx_type,
    "final" boolean default false
);


alter table "public"."auction" add column "project_id" bigint;

alter table "public"."presale" drop column "signature";

alter table "public"."presale" add column "end_timestamptz" timestamp with time zone;

alter table "public"."presale" add column "fundraising_goal" bigint;

alter table "public"."presale" add column "max_allocation" bigint;

alter table "public"."presale" add column "start_timestamptz" timestamp with time zone;

alter table "public"."project" disable row level security;

alter table "public"."transfer" drop column "chain_id";

alter table "public"."transfer" drop column "created_at";

alter table "public"."whitelist" add column "signed_message" text;

CREATE UNIQUE INDEX presale_deposits_pkey ON public.presale_deposit USING btree (id);

CREATE UNIQUE INDEX transactions_pkey ON public.transaction USING btree (hash);

CREATE UNIQUE INDEX user_account_key ON public.account USING btree (account);

CREATE UNIQUE INDEX user_pkey ON public.account USING btree (account);

CREATE UNIQUE INDEX "user_shortLinks_key" ON public.account USING btree (short_link);

alter table "public"."account" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."presale_deposit" add constraint "presale_deposits_pkey" PRIMARY KEY using index "presale_deposits_pkey";

alter table "public"."transaction" add constraint "transactions_pkey" PRIMARY KEY using index "transactions_pkey";

alter table "public"."account" add constraint "user_account_key" UNIQUE using index "user_account_key";

alter table "public"."account" add constraint "user_shortLinks_key" UNIQUE using index "user_shortLinks_key";

alter table "public"."auction" add constraint "auction_project_id_fkey" FOREIGN KEY (project_id) REFERENCES project(id) not valid;

alter table "public"."auction" validate constraint "auction_project_id_fkey";

alter table "public"."presale" add constraint "presale_project_id_fkey" FOREIGN KEY (project_id) REFERENCES project(id) not valid;

alter table "public"."presale" validate constraint "presale_project_id_fkey";

alter table "public"."presale_deposit" add constraint "presale_deposit_deposit_hash_fkey" FOREIGN KEY (deposit_hash) REFERENCES transaction(hash) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposit_deposit_hash_fkey";

alter table "public"."presale_deposit" add constraint "presale_deposit_issuance_hash_fkey" FOREIGN KEY (issuance_hash) REFERENCES transaction(hash) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposit_issuance_hash_fkey";

alter table "public"."presale_deposit" add constraint "presale_deposit_presale_id_fkey" FOREIGN KEY (presale_id) REFERENCES presale(id) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposit_presale_id_fkey";

alter table "public"."presale_deposit" add constraint "presale_deposits_presale_id_fkey" FOREIGN KEY (presale_id) REFERENCES presale(id) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposits_presale_id_fkey";

alter table "public"."whitelist" add constraint "whitelist_project_id_fkey" FOREIGN KEY (project_id) REFERENCES project(id) not valid;

alter table "public"."whitelist" validate constraint "whitelist_project_id_fkey";

grant delete on table "public"."account" to "anon";

grant insert on table "public"."account" to "anon";

grant references on table "public"."account" to "anon";

grant select on table "public"."account" to "anon";

grant trigger on table "public"."account" to "anon";

grant truncate on table "public"."account" to "anon";

grant update on table "public"."account" to "anon";

grant delete on table "public"."account" to "authenticated";

grant insert on table "public"."account" to "authenticated";

grant references on table "public"."account" to "authenticated";

grant select on table "public"."account" to "authenticated";

grant trigger on table "public"."account" to "authenticated";

grant truncate on table "public"."account" to "authenticated";

grant update on table "public"."account" to "authenticated";

grant delete on table "public"."account" to "service_role";

grant insert on table "public"."account" to "service_role";

grant references on table "public"."account" to "service_role";

grant select on table "public"."account" to "service_role";

grant trigger on table "public"."account" to "service_role";

grant truncate on table "public"."account" to "service_role";

grant update on table "public"."account" to "service_role";

grant delete on table "public"."presale_deposit" to "anon";

grant insert on table "public"."presale_deposit" to "anon";

grant references on table "public"."presale_deposit" to "anon";

grant select on table "public"."presale_deposit" to "anon";

grant trigger on table "public"."presale_deposit" to "anon";

grant truncate on table "public"."presale_deposit" to "anon";

grant update on table "public"."presale_deposit" to "anon";

grant delete on table "public"."presale_deposit" to "authenticated";

grant insert on table "public"."presale_deposit" to "authenticated";

grant references on table "public"."presale_deposit" to "authenticated";

grant select on table "public"."presale_deposit" to "authenticated";

grant trigger on table "public"."presale_deposit" to "authenticated";

grant truncate on table "public"."presale_deposit" to "authenticated";

grant update on table "public"."presale_deposit" to "authenticated";

grant delete on table "public"."presale_deposit" to "service_role";

grant insert on table "public"."presale_deposit" to "service_role";

grant references on table "public"."presale_deposit" to "service_role";

grant select on table "public"."presale_deposit" to "service_role";

grant trigger on table "public"."presale_deposit" to "service_role";

grant truncate on table "public"."presale_deposit" to "service_role";

grant update on table "public"."presale_deposit" to "service_role";

grant delete on table "public"."transaction" to "anon";

grant insert on table "public"."transaction" to "anon";

grant references on table "public"."transaction" to "anon";

grant select on table "public"."transaction" to "anon";

grant trigger on table "public"."transaction" to "anon";

grant truncate on table "public"."transaction" to "anon";

grant update on table "public"."transaction" to "anon";

grant delete on table "public"."transaction" to "authenticated";

grant insert on table "public"."transaction" to "authenticated";

grant references on table "public"."transaction" to "authenticated";

grant select on table "public"."transaction" to "authenticated";

grant trigger on table "public"."transaction" to "authenticated";

grant truncate on table "public"."transaction" to "authenticated";

grant update on table "public"."transaction" to "authenticated";

grant delete on table "public"."transaction" to "service_role";

grant insert on table "public"."transaction" to "service_role";

grant references on table "public"."transaction" to "service_role";

grant select on table "public"."transaction" to "service_role";

grant trigger on table "public"."transaction" to "service_role";

grant truncate on table "public"."transaction" to "service_role";

grant update on table "public"."transaction" to "service_role";


