CREATE UNIQUE INDEX pre_sale_address_key ON public.pre_sale USING btree (address);

alter table "public"."pre_sale" add constraint "pre_sale_address_key" UNIQUE using index "pre_sale_address_key";


