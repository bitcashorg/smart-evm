alter table "public"."esr" alter column "account" set not null;

alter table "public"."esr" alter column "code" set not null;

alter table "public"."esr" alter column "trx_id" set not null;

alter table "public"."presale" alter column "account" set not null;

alter table "public"."presale" alter column "address" set not null;

alter table "public"."presale" alter column "end_timestamptz" set not null;

alter table "public"."presale" alter column "fundraising_goal" set not null;

alter table "public"."presale" alter column "max_allocation" set not null;

alter table "public"."presale" alter column "project_id" set not null;

alter table "public"."presale" alter column "start_timestamptz" set not null;

alter table "public"."presale_deposit" alter column "amount" set not null;

alter table "public"."presale_deposit" alter column "deposit_hash" set not null;

alter table "public"."presale_deposit" alter column "presale_id" set not null;

alter table "public"."project" alter column "name" set not null;

alter table "public"."project" alter column "pitch" set not null;

alter table "public"."whitelist" alter column "signed_message" set not null;


