import { env } from "@/constants/env";

/**
 * Supabase Client Architectural Stub
 * 
 * Scheduled for full client and RLS integration in Phase 05.
 * Never instantiate Supabase on the server with client credentials where service-role is required.
 */
export function getSupabaseConfig() {
  return {
    url: env.supabase.url,
    isConfigured: Boolean(env.supabase.url && env.supabase.anonKey),
  };
}
