alter table "public"."presale" drop constraint "pre_sale_address_key";

drop index if exists "public"."pre_sale_address_key";

create table "public"."presale_address" (
    "chain_type" chain_type not null,
    "created_at" timestamp with time zone not null default now(),
    "chain_id" text not null,
    "presale_id" bigint not null,
    "deposit_address" text not null
);


alter table "public"."presale_address" enable row level security;

alter table "public"."presale" drop column "address";

CREATE UNIQUE INDEX presale_addresses_pkey ON public.presale_address USING btree (chain_type, chain_id, presale_id, deposit_address);

alter table "public"."presale_address" add constraint "presale_addresses_pkey" PRIMARY KEY using index "presale_addresses_pkey";

alter table "public"."presale_address" add constraint "presale_addresses_presale_id_fkey" FOREIGN KEY (presale_id) REFERENCES presale(id) not valid;

alter table "public"."presale_address" validate constraint "presale_addresses_presale_id_fkey";

grant delete on table "public"."presale_address" to "anon";

grant insert on table "public"."presale_address" to "anon";

grant references on table "public"."presale_address" to "anon";

grant select on table "public"."presale_address" to "anon";

grant trigger on table "public"."presale_address" to "anon";

grant truncate on table "public"."presale_address" to "anon";

grant update on table "public"."presale_address" to "anon";

grant delete on table "public"."presale_address" to "authenticated";

grant insert on table "public"."presale_address" to "authenticated";

grant references on table "public"."presale_address" to "authenticated";

grant select on table "public"."presale_address" to "authenticated";

grant trigger on table "public"."presale_address" to "authenticated";

grant truncate on table "public"."presale_address" to "authenticated";

grant update on table "public"."presale_address" to "authenticated";

grant delete on table "public"."presale_address" to "service_role";

grant insert on table "public"."presale_address" to "service_role";

grant references on table "public"."presale_address" to "service_role";

grant select on table "public"."presale_address" to "service_role";

grant trigger on table "public"."presale_address" to "service_role";

grant truncate on table "public"."presale_address" to "service_role";

grant update on table "public"."presale_address" to "service_role";


