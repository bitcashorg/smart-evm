alter table "public"."session" add column "esr_code" text;

CREATE UNIQUE INDEX session_esr_code_key ON public.session USING btree (esr_code);

alter table "public"."session" add constraint "session_esr_code_key" UNIQUE using index "session_esr_code_key";


