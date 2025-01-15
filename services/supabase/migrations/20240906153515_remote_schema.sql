alter type "public"."trx_type" rename to "trx_type__old_version_to_be_dropped";

create type "public"."trx_type" as enum ('presale_deposit', 'usdcred_deposit', 'usdcred_withdrawal', 'presale_token_issuance');

alter table "public"."transaction" alter column trx_type type "public"."trx_type" using trx_type::text::"public"."trx_type";

drop type "public"."trx_type__old_version_to_be_dropped";


