export * from "./env";

export const APP_CONFIG = {
  name: "VAYRO",
  tagline: "MOVE AS ONE.",
  version: "0.1.0",
  roomCodeLength: 6,
  defaultTelemetryIntervalMs: 2500,
  maxConvoyMembers: 24,
} as const;
