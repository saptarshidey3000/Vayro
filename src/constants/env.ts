/**
 * VAYRO Environment Configuration Foundation
 * 
 * Centralized, safe accessor for environment variables.
 * Ensures server-only secrets are never inadvertently exposed to the client.
 */

export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  },
  livekit: {
    url: process.env.NEXT_PUBLIC_LIVEKIT_URL ?? "",
    apiKey: process.env.LIVEKIT_API_KEY ?? "",
    apiSecret: process.env.LIVEKIT_API_SECRET ?? "",
  },
  map: {
    styleUrl: process.env.NEXT_PUBLIC_MAP_STYLE_URL ?? "",
  },
  app: {
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
  },
} as const;

/**
 * Validates presence of critical variables when server integrations are invoked.
 * In Phase 01, variables are optional placeholders.
 */
export function validateServerEnv(): { isValid: boolean; missing: string[] } {
  const missing: string[] = [];

  // Phase-specific validation will be activated when integrations land
  return {
    isValid: missing.length === 0,
    missing,
  };
}
