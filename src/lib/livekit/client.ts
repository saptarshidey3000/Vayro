import { env } from "@/constants/env";

/**
 * LiveKit Client Architectural Stub
 * 
 * Scheduled for real-time WebRTC and Push-to-Talk voice integration in Phase 08.
 * API secrets must remain strictly server-side.
 */
export function getLiveKitConfig() {
  return {
    url: env.livekit.url,
    isConfigured: Boolean(env.livekit.url),
  };
}
