# VAYRO — Development Roadmap

> **Product:** VAYRO  
> **Tagline:** MOVE AS ONE.  
> **Description:** Real-time group driving and convoy coordination Progressive Web Application.

---

## Roadmap Overview

| Phase | Title | Status | Primary Focus |
| :--- | :--- | :--- | :--- |
| **Phase 01** | **Project Foundation** | **Completed** | Architecture, dependencies, engineering standards, design tokens, verification. |
| **Phase 02** | **Design System & UI Foundation** | Pending | Design tokens implementation, typography, core UI kit, mobile automotive inputs. |
| **Phase 03** | **Welcome Screen & Guest Onboarding** | Pending | Frictionless entry, callsign selection, avatar colors, guest profile store. |
| **Phase 04** | **Room Creation & Joining** | Pending | 6-character room codes, shareable invites, room lobbies, member role management. |
| **Phase 05** | **Supabase Integration** | Pending | PostgreSQL schema, Row Level Security policies, database migrations, Edge Functions. |
| **Phase 06** | **Live Group Synchronization** | Pending | Realtime presence, member connection states, transient telemetry broadcasts. |
| **Phase 07** | **Live Location Tracking & Maps** | Pending | Geolocation API sampling, MapLibre GL JS vector maps, convoy pins, separation distances. |
| **Phase 08** | **Push-to-Talk Communication** | Pending | LiveKit WebRTC audio rooms, PTT hold-to-talk controls, speaker audio squelch. |
| **Phase 09** | **PWA Implementation** | Pending | Web App Manifest, Service Worker caching, offline shell, home screen installation. |
| **Phase 10** | **Integration & Optimization** | Pending | Battery conservation, low-bandwidth resilience, orientation-aware automotive UI. |
| **Phase 11** | **Security & Testing** | Pending | RLS security audit, end-to-end integration tests, mobile browser QA matrix. |
| **Phase 12** | **Deployment** | Pending | Production Vercel pipeline, custom domain, CDN caching, performance benchmarks. |

---

## Detailed Phase Breakdown

### Phase 01: Project Foundation (Completed)
- [x] Workspace inspection and Next.js App Router initialization.
- [x] Strict TypeScript configuration with `@/*` root mapping.
- [x] Tailwind CSS v4 and CSS variables design system integration.
- [x] Reusable shadcn/ui foundation (`cn` utility, `Button`, `Card`).
- [x] Core state libraries (`zustand`, `@tanstack/react-query`, `lucide-react`).
- [x] Feature-oriented directory structure (`src/features`, `src/lib`, `src/types`, `docs`).
- [x] Environment variable architecture (`.env.example`, `env.ts`).
- [x] Global error boundary, 404 handler, and loading telemetry states.
- [x] Comprehensive architectural and engineering standards documentation.
- [x] Clean TypeScript, ESLint, and Next.js production build verification.

### Phase 02: Design System and UI Foundation
- Expansion of the dark automotive component library.
- Tactile, high-contrast buttons and touch surfaces.
- Mobile viewport orientation handling (portrait & landscape mounts).
- Telemetry indicators: battery status, cellular signal strength, GPS lock status.

### Phase 03: Welcome Screen and Guest Onboarding
- Zero-friction guest access (no forced password registration).
- Driver callsign creation with automated sanitization.
- Vehicle type selection (Sport Car, SUV, Cruiser, Sportbike, etc.).
- Avatar accent color allocation.
- Local storage profile persistence via Zustand.

### Phase 04: Room Creation and Joining
- Cryptographically sound, collision-resistant 6-character convoy code generation.
- One-tap room joining via URL parameters and QR code generation.
- Convoy lobby screen: roster of joined drivers, readiness toggles.
- Convoy leader controls (kick member, lock room, transfer lead).

### Phase 05: Supabase Integration
- PostgreSQL database schemas for rooms, participants, and session telemetry.
- Row Level Security (RLS) policies enforcing room membership access controls.
- Supabase client and server-side authentication with anonymous credentials.
- Database migrations pipeline.

### Phase 06: Live Group Synchronization
- Supabase Realtime channel integration for presence tracking.
- Driver heartbeat monitoring (detecting dropped connections / tunnels).
- Transient pub/sub broadcast for low-latency state changes.

### Phase 07: Live Location Tracking and Maps
- Geolocation API streaming with adaptive throttling.
- MapLibre GL JS integration with custom dark automotive vector style.
- Convoy spatial view: dynamic bounding box tracking all members.
- Distance-to-lead and separation gap indicators.

### Phase 08: Push-to-Talk Communication
- LiveKit audio room integration over WebRTC SFU.
- Large, tactile PTT button with active state haptic/audio feedback.
- Half-duplex simulated communication with low-latency delivery.
- Active speaker visual highlighting on the map and crew list.

### Phase 09: PWA Implementation
- Web App Manifest configuration with standalone display mode.
- Service worker registration for asset caching and offline fallback.
- Apple touch icons and mobile launch splash screens.
- In-app install banner with instructions for iOS and Android.

### Phase 10: Integration and Optimization
- Automotive landscape mode optimization (car dashboard mount layout).
- GPS and battery drain mitigation (distance-based adaptive updates).
- Network reconnect strategies for intermittent highway coverage.

### Phase 11: Security and Testing
- Security audit of API keys, RLS policies, and environment boundaries.
- Unit testing for spatial math and distance calculations.
- Cross-device QA testing on iOS Safari and Android Chrome.

### Phase 12: Deployment
- Production deployment on Vercel with preview environments.
- Edge caching and vector tile CDN configuration.
- Final performance, accessibility, and Lighthouse auditing.
