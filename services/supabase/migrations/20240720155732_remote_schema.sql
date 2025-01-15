revoke delete on table "public"."auctions" from "anon";

revoke insert on table "public"."auctions" from "anon";

revoke references on table "public"."auctions" from "anon";

revoke select on table "public"."auctions" from "anon";

revoke trigger on table "public"."auctions" from "anon";

revoke truncate on table "public"."auctions" from "anon";

revoke update on table "public"."auctions" from "anon";

revoke delete on table "public"."auctions" from "authenticated";

revoke insert on table "public"."auctions" from "authenticated";

revoke references on table "public"."auctions" from "authenticated";

revoke select on table "public"."auctions" from "authenticated";

revoke trigger on table "public"."auctions" from "authenticated";

revoke truncate on table "public"."auctions" from "authenticated";

revoke update on table "public"."auctions" from "authenticated";

revoke delete on table "public"."auctions" from "service_role";

revoke insert on table "public"."auctions" from "service_role";

revoke references on table "public"."auctions" from "service_role";

revoke select on table "public"."auctions" from "service_role";

revoke trigger on table "public"."auctions" from "service_role";

revoke truncate on table "public"."auctions" from "service_role";

revoke update on table "public"."auctions" from "service_role";

revoke delete on table "public"."orders" from "anon";

revoke insert on table "public"."orders" from "anon";

revoke references on table "public"."orders" from "anon";

revoke select on table "public"."orders" from "anon";

revoke trigger on table "public"."orders" from "anon";

revoke truncate on table "public"."orders" from "anon";

revoke update on table "public"."orders" from "anon";

revoke delete on table "public"."orders" from "authenticated";

revoke insert on table "public"."orders" from "authenticated";

revoke references on table "public"."orders" from "authenticated";

revoke select on table "public"."orders" from "authenticated";

revoke trigger on table "public"."orders" from "authenticated";

revoke truncate on table "public"."orders" from "authenticated";

revoke update on table "public"."orders" from "authenticated";

revoke delete on table "public"."orders" from "service_role";

revoke insert on table "public"."orders" from "service_role";

revoke references on table "public"."orders" from "service_role";

revoke select on table "public"."orders" from "service_role";

revoke trigger on table "public"."orders" from "service_role";

revoke truncate on table "public"."orders" from "service_role";

revoke update on table "public"."orders" from "service_role";

revoke delete on table "public"."transfers" from "anon";

revoke insert on table "public"."transfers" from "anon";

revoke references on table "public"."transfers" from "anon";

revoke select on table "public"."transfers" from "anon";

revoke trigger on table "public"."transfers" from "anon";

revoke truncate on table "public"."transfers" from "anon";

revoke update on table "public"."transfers" from "anon";

revoke delete on table "public"."transfers" from "authenticated";

revoke insert on table "public"."transfers" from "authenticated";

revoke references on table "public"."transfers" from "authenticated";

revoke select on table "public"."transfers" from "authenticated";

revoke trigger on table "public"."transfers" from "authenticated";

revoke truncate on table "public"."transfers" from "authenticated";

revoke update on table "public"."transfers" from "authenticated";

revoke delete on table "public"."transfers" from "service_role";

revoke insert on table "public"."transfers" from "service_role";

revoke references on table "public"."transfers" from "service_role";

revoke select on table "public"."transfers" from "service_role";

revoke trigger on table "public"."transfers" from "service_role";

revoke truncate on table "public"."transfers" from "service_role";

revoke update on table "public"."transfers" from "service_role";

revoke delete on table "public"."users" from "anon";

revoke insert on table "public"."users" from "anon";

revoke references on table "public"."users" from "anon";

revoke select on table "public"."users" from "anon";

revoke trigger on table "public"."users" from "anon";

revoke truncate on table "public"."users" from "anon";

revoke update on table "public"."users" from "anon";

revoke delete on table "public"."users" from "authenticated";

revoke insert on table "public"."users" from "authenticated";

revoke references on table "public"."users" from "authenticated";

revoke select on table "public"."users" from "authenticated";

revoke trigger on table "public"."users" from "authenticated";

revoke truncate on table "public"."users" from "authenticated";

revoke update on table "public"."users" from "authenticated";

revoke delete on table "public"."users" from "service_role";

revoke insert on table "public"."users" from "service_role";

revoke references on table "public"."users" from "service_role";

revoke select on table "public"."users" from "service_role";

revoke trigger on table "public"."users" from "service_role";

revoke truncate on table "public"."users" from "service_role";

revoke update on table "public"."users" from "service_role";

alter table "public"."auctions" drop constraint "auction_details_pkey";

alter table "public"."orders" drop constraint "orders_pkey";

alter table "public"."transfers" drop constraint "transfers_pkey";

alter table "public"."users" drop constraint "users_pkey";

drop index if exists "public"."auction_details_pkey";

drop index if exists "public"."orders_pkey";

drop index if exists "public"."transfers_pkey";

drop index if exists "public"."users_pkey";

drop table "public"."auctions";

drop table "public"."orders";

drop table "public"."transfers";

drop table "public"."users";

create table "public"."auction" (
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "exact_order_id" bigint not null,
    "symbol_auctioning_token" text,
    "symbol_bidding_token" text,
    "address_auctioning_token" text,
    "address_bidding_token" text,
    "decimals_auctioning_token" smallint,
    "decimals_bidding_token" smallint,
    "end_time_timestamp" timestamp(6) without time zone,
    "order_cancellation_end_date" timestamp(6) without time zone,
    "starting_time_stamp" timestamp(6) without time zone,
    "minimum_bidding_amount_per_order" bigint,
    "min_funding_threshold" bigint,
    "allow_list_manager" text,
    "allow_list_signer" text,
    "current_volume" integer,
    "current_clearing_order_sell_amount" bigint,
    "current_clearing_order_buy_amount" bigint,
    "current_clearing_price" integer,
    "current_bidding_amount" bigint,
    "is_atomic_closure_allowed" boolean,
    "is_private_auction" boolean,
    "interest_score" integer,
    "usd_amount_traded" integer,
    "chain_id" bigint not null
);


create table "public"."order" (
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "auction_id" bigint not null,
    "sell_amount" bigint not null,
    "buy_amount" bigint not null,
    "user_id" bigint not null,
    "price" integer,
    "volume" bigint,
    "timestamp" timestamp(6) without time zone,
    "transactionHash" text not null
);


create table "public"."project" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "name" text,
    "pitch" text
);


alter table "public"."project" enable row level security;

create table "public"."transfer" (
    "trx_hash" text not null,
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "chain_id" numeric,
    "token" text,
    "from" text,
    "to" text,
    "type" text default ''::text,
    "amount" bigint,
    "usdcred_trx" text
);


create table "public"."user" (
    "id" bigint not null,
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "address" text not null
);


CREATE UNIQUE INDEX projects_pkey ON public.project USING btree (id);

CREATE UNIQUE INDEX auction_details_pkey ON public.auction USING btree (exact_order_id, chain_id);

CREATE UNIQUE INDEX orders_pkey ON public."order" USING btree ("transactionHash");

CREATE UNIQUE INDEX transfers_pkey ON public.transfer USING btree (trx_hash);

CREATE UNIQUE INDEX users_pkey ON public."user" USING btree (id, created_at);

alter table "public"."auction" add constraint "auction_details_pkey" PRIMARY KEY using index "auction_details_pkey";

alter table "public"."order" add constraint "orders_pkey" PRIMARY KEY using index "orders_pkey";

alter table "public"."project" add constraint "projects_pkey" PRIMARY KEY using index "projects_pkey";

alter table "public"."transfer" add constraint "transfers_pkey" PRIMARY KEY using index "transfers_pkey";

alter table "public"."user" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

grant delete on table "public"."auction" to "anon";

grant insert on table "public"."auction" to "anon";

grant references on table "public"."auction" to "anon";

grant select on table "public"."auction" to "anon";

grant trigger on table "public"."auction" to "anon";

grant truncate on table "public"."auction" to "anon";

grant update on table "public"."auction" to "anon";

grant delete on table "public"."auction" to "authenticated";

grant insert on table "public"."auction" to "authenticated";

grant references on table "public"."auction" to "authenticated";

grant select on table "public"."auction" to "authenticated";

grant trigger on table "public"."auction" to "authenticated";

grant truncate on table "public"."auction" to "authenticated";

grant update on table "public"."auction" to "authenticated";

grant delete on table "public"."auction" to "service_role";

grant insert on table "public"."auction" to "service_role";

grant references on table "public"."auction" to "service_role";

grant select on table "public"."auction" to "service_role";

grant trigger on table "public"."auction" to "service_role";

grant truncate on table "public"."auction" to "service_role";

grant update on table "public"."auction" to "service_role";

grant delete on table "public"."order" to "anon";

grant insert on table "public"."order" to "anon";

grant references on table "public"."order" to "anon";

grant select on table "public"."order" to "anon";

grant trigger on table "public"."order" to "anon";

grant truncate on table "public"."order" to "anon";

grant update on table "public"."order" to "anon";

grant delete on table "public"."order" to "authenticated";

grant insert on table "public"."order" to "authenticated";

grant references on table "public"."order" to "authenticated";

grant select on table "public"."order" to "authenticated";

grant trigger on table "public"."order" to "authenticated";

grant truncate on table "public"."order" to "authenticated";

grant update on table "public"."order" to "authenticated";

grant delete on table "public"."order" to "service_role";

grant insert on table "public"."order" to "service_role";

grant references on table "public"."order" to "service_role";

grant select on table "public"."order" to "service_role";

grant trigger on table "public"."order" to "service_role";

grant truncate on table "public"."order" to "service_role";

grant update on table "public"."order" to "service_role";

grant delete on table "public"."project" to "anon";

grant insert on table "public"."project" to "anon";

grant references on table "public"."project" to "anon";

grant select on table "public"."project" to "anon";

grant trigger on table "public"."project" to "anon";

grant truncate on table "public"."project" to "anon";

grant update on table "public"."project" to "anon";

grant delete on table "public"."project" to "authenticated";

grant insert on table "public"."project" to "authenticated";

grant references on table "public"."project" to "authenticated";

grant select on table "public"."project" to "authenticated";

grant trigger on table "public"."project" to "authenticated";

grant truncate on table "public"."project" to "authenticated";

grant update on table "public"."project" to "authenticated";

grant delete on table "public"."project" to "service_role";

grant insert on table "public"."project" to "service_role";

grant references on table "public"."project" to "service_role";

grant select on table "public"."project" to "service_role";

grant trigger on table "public"."project" to "service_role";

grant truncate on table "public"."project" to "service_role";

grant update on table "public"."project" to "service_role";

grant delete on table "public"."transfer" to "anon";

grant insert on table "public"."transfer" to "anon";

grant references on table "public"."transfer" to "anon";

grant select on table "public"."transfer" to "anon";

grant trigger on table "public"."transfer" to "anon";

grant truncate on table "public"."transfer" to "anon";

grant update on table "public"."transfer" to "anon";

grant delete on table "public"."transfer" to "authenticated";

grant insert on table "public"."transfer" to "authenticated";

grant references on table "public"."transfer" to "authenticated";

grant select on table "public"."transfer" to "authenticated";

grant trigger on table "public"."transfer" to "authenticated";

grant truncate on table "public"."transfer" to "authenticated";

grant update on table "public"."transfer" to "authenticated";

grant delete on table "public"."transfer" to "service_role";

grant insert on table "public"."transfer" to "service_role";

grant references on table "public"."transfer" to "service_role";

grant select on table "public"."transfer" to "service_role";

grant trigger on table "public"."transfer" to "service_role";

grant truncate on table "public"."transfer" to "service_role";

grant update on table "public"."transfer" to "service_role";

grant delete on table "public"."user" to "anon";

grant insert on table "public"."user" to "anon";

grant references on table "public"."user" to "anon";

grant select on table "public"."user" to "anon";

grant trigger on table "public"."user" to "anon";

grant truncate on table "public"."user" to "anon";

grant update on table "public"."user" to "anon";

grant delete on table "public"."user" to "authenticated";

grant insert on table "public"."user" to "authenticated";

grant references on table "public"."user" to "authenticated";

grant select on table "public"."user" to "authenticated";

grant trigger on table "public"."user" to "authenticated";

grant truncate on table "public"."user" to "authenticated";

grant update on table "public"."user" to "authenticated";

grant delete on table "public"."user" to "service_role";

grant insert on table "public"."user" to "service_role";

grant references on table "public"."user" to "service_role";

grant select on table "public"."user" to "service_role";

grant trigger on table "public"."user" to "service_role";

grant truncate on table "public"."user" to "service_role";

grant update on table "public"."user" to "service_role";


