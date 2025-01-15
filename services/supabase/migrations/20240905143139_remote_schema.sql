alter table "public"."transaction" alter column "chain_id" set not null;

alter table "public"."transaction" alter column "chain_type" set not null;

alter table "public"."transaction" alter column "final" set not null;

alter table "public"."transaction" alter column "trx_type" set not null;

CREATE UNIQUE INDEX presale_deposit_pkey ON public.presale_deposit USING btree (deposit_hash);

alter table "public"."presale_deposit" add constraint "presale_deposit_pkey" PRIMARY KEY using index "presale_deposit_pkey";


