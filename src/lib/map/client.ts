import { env } from "@/constants/env";

/**
 * Map Client Architectural Stub
 * 
 * Scheduled for MapLibre GL JS integration in Phase 07.
 * Map instances must be dynamically imported on the client side only.
 */
export function getMapConfig() {
  return {
    styleUrl: env.map.styleUrl || "https://demotiles.maplibre.org/style.json",
  };
}
