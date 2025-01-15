alter table "public"."account" disable row level security;

alter table "public"."esr" disable row level security;

alter table "public"."presale" disable row level security;

alter table "public"."presale_address" disable row level security;

alter table "public"."presale_deposit" disable row level security;

alter table "public"."project" disable row level security;

alter table "public"."session" disable row level security;

alter table "public"."transaction" alter column "chain_id" set data type text using "chain_id"::text;

alter table "public"."transaction" disable row level security;

alter table "public"."whitelist" disable row level security;


