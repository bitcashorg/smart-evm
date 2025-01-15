alter table "public"."transfer" add column "bl_presale_trx" text;

CREATE UNIQUE INDEX transfer_bl_presale_trx_key ON public.transfer USING btree (bl_presale_trx);

alter table "public"."transfer" add constraint "transfer_bl_presale_trx_key" UNIQUE using index "transfer_bl_presale_trx_key";


