/**
 * VAYRO Core Domain Types & Interfaces
 * 
 * Strict TypeScript models for future convoy coordination phases.
 */

/**
 * Convoy Member Role
 */
export type ConvoyRole = "lead" | "tail" | "member";

/**
 * Guest Profile
 */
export interface GuestProfile {
  id: string;
  callsign: string;
  avatarColor: string;
  vehicleType?: "car" | "motorcycle" | "other";
  joinedAt: number;
}

/**
 * Room / Convoy Session
 */
export interface ConvoyRoom {
  id: string;
  code: string;
  name: string;
  createdAt: number;
  hostId: string;
  isActive: boolean;
  memberCount: number;
}

/**
 * Real-Time Coordinate & Heading
 */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number | null;
  speed?: number | null;
  heading?: number | null;
  timestamp: number;
}

/**
 * Member Presence & Telemetry
 */
export interface ConvoyMemberTelemetry {
  memberId: string;
  callsign: string;
  role: ConvoyRole;
  coordinates?: GeoCoordinates;
  distanceFromLeadMeters?: number;
  isOnline: boolean;
  isSpeaking: boolean;
  batteryLevel?: number;
}
