alter table "public"."account" enable row level security;

alter table "public"."auction" enable row level security;

alter table "public"."auction_order" enable row level security;

alter table "public"."esr" enable row level security;

alter table "public"."indexer_meta" enable row level security;

alter table "public"."presale" enable row level security;

alter table "public"."presale_address" enable row level security;

alter table "public"."presale_deposit" enable row level security;

alter table "public"."project" enable row level security;

alter table "public"."session" enable row level security;

alter table "public"."transaction" enable row level security;

alter table "public"."whitelist" enable row level security;

create policy "Allow public access"
on "public"."account"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."alchemy_hooks"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."auction"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."auction_order"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."esr"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."indexer_meta"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."presale"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."presale_address"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."presale_deposit"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."project"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."session"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."transaction"
as permissive
for select
to public
using (true);


create policy "Allow public access"
on "public"."whitelist"
as permissive
for select
to public
using (true);



