import "server-only";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

/** /admin gibi sayfalarda çağır: await requireAppAdmin() */
export async function requireAppAdmin() {
  const supabase = await supabaseServer();
  // rpc("is_app_admin") boolean döner (db’de oluşturmuştuk)
  const { data, error } = await supabase.rpc("is_app_admin");

  if (error) {
    console.error("is_app_admin error:", error);
    redirect("/public");
  }
  if (!data) {
    redirect("/public");
  }
}
