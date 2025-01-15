create table "public"."_prisma_migrations" (
    "id" character varying(36) not null,
    "checksum" character varying(64) not null,
    "finished_at" timestamp with time zone,
    "migration_name" character varying(255) not null,
    "logs" text,
    "rolled_back_at" timestamp with time zone,
    "started_at" timestamp with time zone not null default now(),
    "applied_steps_count" integer not null default 0
);


create table "public"."auction_details" (
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


create table "public"."esr" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "code" text,
    "trx_id" text,
    "account" text
);


create table "public"."orders" (
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


create table "public"."session" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "tx" text not null,
    "account" text not null
);


create table "public"."transfers" (
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


create table "public"."users" (
    "id" bigint not null,
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "address" text not null
);


create table "public"."whitelist" (
    "project_id" integer not null,
    "created_at" timestamp(6) with time zone not null default CURRENT_TIMESTAMP,
    "address" text not null,
    "account" text not null
);


CREATE UNIQUE INDEX _prisma_migrations_pkey ON public._prisma_migrations USING btree (id);

CREATE UNIQUE INDEX auction_details_pkey ON public.auction_details USING btree (exact_order_id, chain_id);

CREATE UNIQUE INDEX esr_pkey ON public.esr USING btree (id);

CREATE UNIQUE INDEX orders_pkey ON public.orders USING btree ("transactionHash");

CREATE UNIQUE INDEX session_pkey ON public.session USING btree (id);

CREATE UNIQUE INDEX session_tx_key ON public.session USING btree (tx);

CREATE UNIQUE INDEX transfers_pkey ON public.transfers USING btree (trx_hash);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id, created_at);

CREATE UNIQUE INDEX whitelist_pkey ON public.whitelist USING btree (address, project_id, account);

alter table "public"."_prisma_migrations" add constraint "_prisma_migrations_pkey" PRIMARY KEY using index "_prisma_migrations_pkey";

alter table "public"."auction_details" add constraint "auction_details_pkey" PRIMARY KEY using index "auction_details_pkey";

alter table "public"."esr" add constraint "esr_pkey" PRIMARY KEY using index "esr_pkey";

alter table "public"."orders" add constraint "orders_pkey" PRIMARY KEY using index "orders_pkey";

alter table "public"."session" add constraint "session_pkey" PRIMARY KEY using index "session_pkey";

alter table "public"."transfers" add constraint "transfers_pkey" PRIMARY KEY using index "transfers_pkey";

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."whitelist" add constraint "whitelist_pkey" PRIMARY KEY using index "whitelist_pkey";

grant delete on table "public"."_prisma_migrations" to "anon";

grant insert on table "public"."_prisma_migrations" to "anon";

grant references on table "public"."_prisma_migrations" to "anon";

grant select on table "public"."_prisma_migrations" to "anon";

grant trigger on table "public"."_prisma_migrations" to "anon";

grant truncate on table "public"."_prisma_migrations" to "anon";

grant update on table "public"."_prisma_migrations" to "anon";

grant delete on table "public"."_prisma_migrations" to "authenticated";

grant insert on table "public"."_prisma_migrations" to "authenticated";

grant references on table "public"."_prisma_migrations" to "authenticated";

grant select on table "public"."_prisma_migrations" to "authenticated";

grant trigger on table "public"."_prisma_migrations" to "authenticated";

grant truncate on table "public"."_prisma_migrations" to "authenticated";

grant update on table "public"."_prisma_migrations" to "authenticated";

grant delete on table "public"."_prisma_migrations" to "service_role";

grant insert on table "public"."_prisma_migrations" to "service_role";

grant references on table "public"."_prisma_migrations" to "service_role";

grant select on table "public"."_prisma_migrations" to "service_role";

grant trigger on table "public"."_prisma_migrations" to "service_role";

grant truncate on table "public"."_prisma_migrations" to "service_role";

grant update on table "public"."_prisma_migrations" to "service_role";

grant delete on table "public"."auction_details" to "anon";

grant insert on table "public"."auction_details" to "anon";

grant references on table "public"."auction_details" to "anon";

grant select on table "public"."auction_details" to "anon";

grant trigger on table "public"."auction_details" to "anon";

grant truncate on table "public"."auction_details" to "anon";

grant update on table "public"."auction_details" to "anon";

grant delete on table "public"."auction_details" to "authenticated";

grant insert on table "public"."auction_details" to "authenticated";

grant references on table "public"."auction_details" to "authenticated";

grant select on table "public"."auction_details" to "authenticated";

grant trigger on table "public"."auction_details" to "authenticated";

grant truncate on table "public"."auction_details" to "authenticated";

grant update on table "public"."auction_details" to "authenticated";

grant delete on table "public"."auction_details" to "service_role";

grant insert on table "public"."auction_details" to "service_role";

grant references on table "public"."auction_details" to "service_role";

grant select on table "public"."auction_details" to "service_role";

grant trigger on table "public"."auction_details" to "service_role";

grant truncate on table "public"."auction_details" to "service_role";

grant update on table "public"."auction_details" to "service_role";

grant delete on table "public"."esr" to "anon";

grant insert on table "public"."esr" to "anon";

grant references on table "public"."esr" to "anon";

grant select on table "public"."esr" to "anon";

grant trigger on table "public"."esr" to "anon";

grant truncate on table "public"."esr" to "anon";

grant update on table "public"."esr" to "anon";

grant delete on table "public"."esr" to "authenticated";

grant insert on table "public"."esr" to "authenticated";

grant references on table "public"."esr" to "authenticated";

grant select on table "public"."esr" to "authenticated";

grant trigger on table "public"."esr" to "authenticated";

grant truncate on table "public"."esr" to "authenticated";

grant update on table "public"."esr" to "authenticated";

grant delete on table "public"."esr" to "service_role";

grant insert on table "public"."esr" to "service_role";

grant references on table "public"."esr" to "service_role";

grant select on table "public"."esr" to "service_role";

grant trigger on table "public"."esr" to "service_role";

grant truncate on table "public"."esr" to "service_role";

grant update on table "public"."esr" to "service_role";

grant delete on table "public"."orders" to "anon";

grant insert on table "public"."orders" to "anon";

grant references on table "public"."orders" to "anon";

grant select on table "public"."orders" to "anon";

grant trigger on table "public"."orders" to "anon";

grant truncate on table "public"."orders" to "anon";

grant update on table "public"."orders" to "anon";

grant delete on table "public"."orders" to "authenticated";

grant insert on table "public"."orders" to "authenticated";

grant references on table "public"."orders" to "authenticated";

grant select on table "public"."orders" to "authenticated";

grant trigger on table "public"."orders" to "authenticated";

grant truncate on table "public"."orders" to "authenticated";

grant update on table "public"."orders" to "authenticated";

grant delete on table "public"."orders" to "service_role";

grant insert on table "public"."orders" to "service_role";

grant references on table "public"."orders" to "service_role";

grant select on table "public"."orders" to "service_role";

grant trigger on table "public"."orders" to "service_role";

grant truncate on table "public"."orders" to "service_role";

grant update on table "public"."orders" to "service_role";

grant delete on table "public"."session" to "anon";

grant insert on table "public"."session" to "anon";

grant references on table "public"."session" to "anon";

grant select on table "public"."session" to "anon";

grant trigger on table "public"."session" to "anon";

grant truncate on table "public"."session" to "anon";

grant update on table "public"."session" to "anon";

grant delete on table "public"."session" to "authenticated";

grant insert on table "public"."session" to "authenticated";

grant references on table "public"."session" to "authenticated";

grant select on table "public"."session" to "authenticated";

grant trigger on table "public"."session" to "authenticated";

grant truncate on table "public"."session" to "authenticated";

grant update on table "public"."session" to "authenticated";

grant delete on table "public"."session" to "service_role";

grant insert on table "public"."session" to "service_role";

grant references on table "public"."session" to "service_role";

grant select on table "public"."session" to "service_role";

grant trigger on table "public"."session" to "service_role";

grant truncate on table "public"."session" to "service_role";

grant update on table "public"."session" to "service_role";

grant delete on table "public"."transfers" to "anon";

grant insert on table "public"."transfers" to "anon";

grant references on table "public"."transfers" to "anon";

grant select on table "public"."transfers" to "anon";

grant trigger on table "public"."transfers" to "anon";

grant truncate on table "public"."transfers" to "anon";

grant update on table "public"."transfers" to "anon";

grant delete on table "public"."transfers" to "authenticated";

grant insert on table "public"."transfers" to "authenticated";

grant references on table "public"."transfers" to "authenticated";

grant select on table "public"."transfers" to "authenticated";

grant trigger on table "public"."transfers" to "authenticated";

grant truncate on table "public"."transfers" to "authenticated";

grant update on table "public"."transfers" to "authenticated";

grant delete on table "public"."transfers" to "service_role";

grant insert on table "public"."transfers" to "service_role";

grant references on table "public"."transfers" to "service_role";

grant select on table "public"."transfers" to "service_role";

grant trigger on table "public"."transfers" to "service_role";

grant truncate on table "public"."transfers" to "service_role";

grant update on table "public"."transfers" to "service_role";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";

grant delete on table "public"."whitelist" to "anon";

grant insert on table "public"."whitelist" to "anon";

grant references on table "public"."whitelist" to "anon";

grant select on table "public"."whitelist" to "anon";

grant trigger on table "public"."whitelist" to "anon";

grant truncate on table "public"."whitelist" to "anon";

grant update on table "public"."whitelist" to "anon";

grant delete on table "public"."whitelist" to "authenticated";

grant insert on table "public"."whitelist" to "authenticated";

grant references on table "public"."whitelist" to "authenticated";

grant select on table "public"."whitelist" to "authenticated";

grant trigger on table "public"."whitelist" to "authenticated";

grant truncate on table "public"."whitelist" to "authenticated";

grant update on table "public"."whitelist" to "authenticated";

grant delete on table "public"."whitelist" to "service_role";

grant insert on table "public"."whitelist" to "service_role";

grant references on table "public"."whitelist" to "service_role";

grant select on table "public"."whitelist" to "service_role";

grant trigger on table "public"."whitelist" to "service_role";

grant truncate on table "public"."whitelist" to "service_role";

grant update on table "public"."whitelist" to "service_role";


