alter table "public"."presale_deposit" add column "account" text not null;

alter table "public"."presale_deposit" add column "address" text not null;

alter table "public"."presale_deposit" add column "project_id" bigint not null;

alter table "public"."presale_deposit" add constraint "presale_deposit_account_fkey" FOREIGN KEY (account) REFERENCES account(account) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposit_account_fkey";

alter table "public"."presale_deposit" add constraint "presale_deposit_address_project_id_account_fkey" FOREIGN KEY (address, project_id, account) REFERENCES whitelist(address, project_id, account) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposit_address_project_id_account_fkey";

alter table "public"."presale_deposit" add constraint "presale_deposit_project_id_fkey" FOREIGN KEY (project_id) REFERENCES project(id) not valid;

alter table "public"."presale_deposit" validate constraint "presale_deposit_project_id_fkey";


