import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { type Database } from "./database.types";

export function createSupabaseClient(
  supabaseUrl: string,
  supabaseKey: string
): SupabaseClient<Database> {
  return createClient<Database>(supabaseUrl, supabaseKey);
}
