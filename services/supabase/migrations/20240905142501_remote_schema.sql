alter table "public"."presale_deposit" drop constraint "presale_deposits_pkey";

drop index if exists "public"."presale_deposits_pkey";

alter table "public"."presale_deposit" drop column "id";


