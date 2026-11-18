/**
 * VAYRO State Management Foundation
 * 
 * Zustand is utilized for client-side synchronous and transient UI states:
 * - Active guest profile
 * - Active room state
 * - Local telemetry and push-to-talk microphone state
 * - Convoy member presence maps
 * 
 * Concrete store implementations will be introduced in their respective phases:
 * - Phase 03: Guest profile store
 * - Phase 04: Room store
 * - Phase 06/07: Convoy telemetry store
 * - Phase 08: Voice/PTT audio store
 */

export const STORE_KEYS = {
  GUEST_SESSION: "vayro-guest-session",
  ACTIVE_ROOM: "vayro-active-room",
  AUDIO_SETTINGS: "vayro-audio-settings",
} as const;
