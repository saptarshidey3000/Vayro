# VAYRO — System Architecture Specification

> **Tagline:** MOVE AS ONE.  
> **Product Vision:** Real-time group driving and convoy coordination Progressive Web Application for car clubs, motorcycle groups, road trips, and travelling communities.

---

## 1. High-Level Architectural Overview

VAYRO is engineered as a mobile-first, high-performance Progressive Web Application designed to deliver real-time spatial awareness, group telemetry, and ultra-low latency voice communication in dynamic vehicular environments.

The architecture emphasizes:
- **Resilience under degraded connectivity:** Vehicles moving through intermittent cellular zones require local state persistence and optimistic UI synchronisation.
- **Strict Client/Server Separation:** Server-rendered shell layouts paired with isolated, client-side real-time pipelines.
- **Resource Efficiency:** Battery and CPU conservation through throttled GPS sampling and WebRTC audio stream management.

```
┌─────────────────────────────────────────────────────────────────┐
│                       Client Device (PWA)                       │
│                                                                 │
│  ┌─────────────────┐   ┌──────────────────┐   ┌──────────────┐  │
│  │ Next.js App     │   │ Zustand Client   │   │ MapLibre GL  │  │
│  │ Presentation    │   │ State & Session  │   │ Vector Canvas│  │
│  └────────┬────────┘   └────────┬─────────┘   └───────┬──────┘  │
│           │                     │                     │         │
│           ▼                     ▼                     │         │
│  ┌────────────────────────────────────────┐           │         │
│  │   Real-Time Telemetry & Audio Engine   │           │         │
│  └───────────────┬────────────────────┬───┘           │         │
└──────────────────┼────────────────────┼───────────────┼─────────┘
                   │                    │               │
         WebSocket │          WebRTC    │     HTTP      │
                   ▼                    ▼               ▼
┌──────────────────────────┐ ┌──────────────────┐ ┌───────────────┐
│      Supabase Cloud      │ │   LiveKit Cloud  │ │ Vector Tiles  │
│  - PostgreSQL + RLS      │ │  - Audio SFU     │ │  (Map Styles) │
│  - Realtime Presence     │ │  - WebRTC PTT    │ └───────────────┘
│  - Edge Functions        │ └──────────────────┘
└──────────────────────────┘
```

---

## 2. Directory & Modular Feature Structure

The codebase employs a feature-oriented modular architecture. Cross-cutting concerns reside in dedicated foundational libraries, while business domains are self-contained.

```
src/
├── app/                  # Next.js App Router (routes, layouts, error boundaries)
│   ├── layout.tsx        # Global HTML shell, PWA viewport, font configuration
│   ├── page.tsx          # Phase 01 architectural landing checkpoint
│   ├── globals.css       # Tailwind CSS v4 directives & design system tokens
│   ├── error.tsx         # Global client-side runtime exception boundary
│   ├── not-found.tsx     # Route fallback boundary
│   └── loading.tsx       # Telemetry loading fallback
│
├── components/           # Reusable UI presentation layer
│   ├── ui/               # shadcn/ui primitives (Button, Card, inputs)
│   ├── layout/           # App shells, mobile navigation, convoy status dock
│   └── shared/           # Cross-feature widgets (battery, compass, signal indicator)
│
├── features/             # Business domain vertical slices
│   ├── authentication/   # Anonymous guest onboarding, callsigns, avatars
│   ├── rooms/            # Room creation, code generation, member role assignments
│   ├── location/         # GPS tracking, distance-to-lead calculation, heading
│   ├── communication/    # Push-to-Talk (PTT), LiveKit audio room integration
│   └── safety/           # Separation warning algorithms, SOS broadcast
│
├── hooks/                # Reusable client-side React hooks (orientation, network)
├── lib/                  # Foundational wrappers & SDK initializations
│   ├── utils/            # Styling utilities (cn)
│   ├── supabase/         # Supabase client & query builders
│   ├── livekit/          # LiveKit client & room connection manager
│   └── map/              # MapLibre GL JS configuration & camera controller
│
├── stores/               # Zustand client-side application state
├── services/             # Stateless domain services & API consumers
├── types/                # Domain types & strict TypeScript contracts
├── constants/            # Configuration constants, environment schemas
└── styles/               # Design system tokens & typography definitions

public/                   # Static assets, PWA icons, manifest
docs/                     # Architecture, standards, roadmap, and design documentation
supabase/                 # Database migrations and edge functions
```

---

## 3. Rendering Strategy & Boundaries

### 3.1 Server Components (RSC) by Default
- All pages, layouts, and informational structures are rendered as Server Components.
- RSC renders static markup with zero client-side JavaScript overhead, ensuring fast initial page loads even on constrained mobile hardware.

### 3.2 Client Components (`"use client"`) Only When Required
Client boundaries are placed strictly where browser APIs and interaction are required:
- **Geolocation API:** Continuous GPS watchPosition listeners.
- **WebRTC / MediaStream:** Microphone capture, audio track playback.
- **Interactive Map:** WebGL context management via MapLibre GL JS.
- **Push-to-Talk Controls:** Touch events (`touchstart`, `touchend`, pointer events).
- **Zustand & Realtime Subscriptions:** Transient client state synchronization.

---

## 4. Planned Backend Architecture (Supabase)

*Target: Phase 05*

- **PostgreSQL Database:**
  - `rooms`: Convoy rooms, 6-character access codes, host identity, configuration.
  - `members`: Active room participants, callsign, vehicle type, role (`lead`, `tail`, `member`), last active timestamp.
  - `telemetry_logs`: Historical coordinate points (optional / session-scoped).
- **Row Level Security (RLS):**
  - Room visibility and member mutations restricted to members currently possessing the valid room code / guest token.
  - Server-side administrative operations gated using `SUPABASE_SERVICE_ROLE_KEY` exclusively within server routes / Edge Functions.
- **Supabase Realtime (Presence & Broadcast):**
  - **Presence:** High-frequency, ephemeral member presence tracking (online/offline status, battery level).
  - **Broadcast Channels:** Low-latency pub/sub for location updates (1–3 second intervals) bypassing disk persistence to minimize database write load and latency.

---

## 5. Realtime & Telemetry Architecture

*Target: Phase 06 & 07*

1. **GPS Sampling Engine:**
   - Samples client Geolocation with `enableHighAccuracy: true`.
   - Filters out inaccurate coordinate spikes (`accuracy > 30m`).
   - Calculates speed, bearing (heading), and distance delta from convoy lead.
2. **Throttled Broadcast:**
   - Coordinates are broadcast over Supabase Realtime Channels at a configurable interval (default: 2500ms).
   - If velocity is stationary (< 3 km/h), transmission frequency decreases to conserve mobile battery.

---

## 6. Map Architecture (MapLibre GL JS)

*Target: Phase 07*

- **Technology:** MapLibre GL JS (open-source, WebGL-accelerated vector mapping).
- **Client Dynamic Import:** MapLibre relies on `window` and WebGL; it must be imported dynamically (`next/dynamic` with `ssr: false`).
- **Custom Automotive Styling:** Dark-mode vector tiles emphasizing road hierarchy and vehicular routes while subduing extraneous landmarks.
- **Convoy Rendering Layer:**
  - Pulsing point markers for convoy members with unique assigned callsign colors.
  - Dynamic route bounding box that smoothly auto-zooms to encompass all active convoy members.
  - Leader marker distinguished by an animated directional chevron.

---

## 7. Voice Communication Architecture (LiveKit / WebRTC)

*Target: Phase 08*

- **Technology:** LiveKit WebRTC SFU (Selective Forwarding Unit).
- **Topology:** Audio-only SFU room per convoy code.
- **Push-to-Talk (PTT):**
  - Half-duplex communication feel with full-duplex underlying WebRTC connectivity.
  - Microphone tracks are unmuted only while the primary PTT button is held down.
  - Visual and audio cues (squelch tone / chime) on transmit start and release.
  - Active speaker indicators broadcast via data channels to highlight talking members on the map and presence list.

---

## 8. Implementation Status Summary

| Architectural Component | Status | Target Phase |
| :--- | :--- | :--- |
| Next.js App Router Shell & Types | **Implemented** | Phase 01 |
| Design Tokens & CSS Variables | **Implemented** | Phase 01 |
| shadcn/ui Foundation & Button/Card | **Implemented** | Phase 01 |
| Modular Folder Structure & Types | **Implemented** | Phase 01 |
| Environment Variable Schema | **Implemented** | Phase 01 |
| Design System & UI Components | Planned | Phase 02 |
| Anonymous Guest Onboarding | Planned | Phase 03 |
| Room Creation & Joining | Planned | Phase 04 |
| Supabase Backend & RLS | Planned | Phase 05 |
| Realtime Group Synchronization | Planned | Phase 06 |
| MapLibre GL JS Convoy Map | Planned | Phase 07 |
| LiveKit Push-to-Talk Voice | Planned | Phase 08 |
| Service Worker PWA Installation | Planned | Phase 09 |
