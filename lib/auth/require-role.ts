import { supabaseServer } from "@/lib/supabase/server";
export async function requireAppAdmin() {
  const supabase = supabaseServer();
  const { data, error } = await supabase.rpc("is_app_admin");
  if (error) throw error;
  if (!data) { throw new Error("UNAUTHORIZED"); }
}
