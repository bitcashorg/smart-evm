create table "public"."alchemy_events" (
    "network" text not null,
    "type" text not null,
    "url" text not null,
    "isactive" boolean not null,
    "timecreated" timestamp with time zone not null,
    "signingkey" text not null,
    "version" text not null,
    "id" text not null
);


grant delete on table "public"."alchemy_events" to "anon";

grant insert on table "public"."alchemy_events" to "anon";

grant references on table "public"."alchemy_events" to "anon";

grant select on table "public"."alchemy_events" to "anon";

grant trigger on table "public"."alchemy_events" to "anon";

grant truncate on table "public"."alchemy_events" to "anon";

grant update on table "public"."alchemy_events" to "anon";

grant delete on table "public"."alchemy_events" to "authenticated";

grant insert on table "public"."alchemy_events" to "authenticated";

grant references on table "public"."alchemy_events" to "authenticated";

grant select on table "public"."alchemy_events" to "authenticated";

grant trigger on table "public"."alchemy_events" to "authenticated";

grant truncate on table "public"."alchemy_events" to "authenticated";

grant update on table "public"."alchemy_events" to "authenticated";

grant delete on table "public"."alchemy_events" to "service_role";

grant insert on table "public"."alchemy_events" to "service_role";

grant references on table "public"."alchemy_events" to "service_role";

grant select on table "public"."alchemy_events" to "service_role";

grant trigger on table "public"."alchemy_events" to "service_role";

grant truncate on table "public"."alchemy_events" to "service_role";

grant update on table "public"."alchemy_events" to "service_role";


