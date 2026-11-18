# VAYRO — Engineering Standards & Coding Guidelines

> **Product:** VAYRO  
> **Tagline:** MOVE AS ONE.  
> **Target:** Senior Engineering Practice for Real-Time Mobile PWA

---

## 1. Next.js App Router Architecture

1. **Server Components by Default:**
   - Every component is a Server Component unless interactive browser APIs, React state, or lifecycle hooks (`useState`, `useEffect`, `useRef`) are explicitly required.
   - Informational layouts, static badges, and container shells must remain RSC.

2. **Isolated Client Components (`"use client"`):**
   - Push client boundaries down as deep into the component tree as possible.
   - Example: Instead of declaring the entire convoy dashboard as `"use client"`, wrap only the interactive PTT button or map canvas in client components.

3. **No Browser APIs in Server Code:**
   - Never reference `window`, `document`, `navigator.geolocation`, or `localStorage` in server-rendered modules.
   - Guard browser APIs inside `useEffect` or client-only hooks.

4. **Dynamic Imports for Heavy Browser Libraries:**
   - Libraries that require WebGL or WebRTC (e.g., `maplibre-gl`, `livekit-client`) must be dynamically imported using `next/dynamic` with `{ ssr: false }`.

---

## 2. TypeScript Standards

1. **Strict Type Safety:**
   - `strict: true` is enabled in `tsconfig.json` and must never be disabled.
   - Prohibition of `any`. Explicitly model all domain data or use `unknown` with type narrowing.
   - Prefer `interface` for extensible object contracts and `type` for unions, primitives, and tuples.

2. **Centralized Types:**
   - Reusable cross-feature domain models reside in `src/types/`.
   - Feature-specific UI props reside adjacent to their component file.

3. **Explicit Return Types:**
   - All exported functions, service handlers, and store actions must include explicit return types.

---

## 3. Component Conventions & Naming

1. **File and Folder Naming:**
   - **Components:** PascalCase for component files (e.g., `ConvoyMap.tsx`, `PttButton.tsx`).
   - **Utilities & Hooks:** camelCase (e.g., `useGeolocation.ts`, `formatDistance.ts`).
   - **Folders:** kebab-case for feature directories (e.g., `features/authentication`, `components/shared`).

2. **Component Structure:**
   - Standard order:
     1. Direct imports (React, external packages, internal utilities, components, types).
     2. Prop interface definition.
     3. Component declaration.
     4. Sub-components or helpers.
     5. Export statements.

3. **Single Responsibility:**
   - Avoid giant multi-hundred line components.
   - Separate state orchestration from presentation.

---

## 4. Error Handling & Resilience

1. **Next.js Error Boundaries:**
   - Route-level errors are intercepted using `app/error.tsx`.
   - All error components must provide graceful recovery options (`reset()`).

2. **Degraded Network Handling:**
   - In vehicular scenarios, cellular connections drop frequently.
   - Real-time features must implement exponential backoff reconnect logic.
   - State mutations must use optimistic updates where appropriate, with clear visual offline status indicators.

3. **Safe Parsing:**
   - External payloads, WebSocket messages, and query parameters must be validated at runtime before consumption.

---

## 5. Security Principles

1. **Zero Secret Leakage:**
   - Service-role keys (`SUPABASE_SERVICE_ROLE_KEY`) and API secrets (`LIVEKIT_API_SECRET`) must **NEVER** be prefixed with `NEXT_PUBLIC_`.
   - Client code must only have access to anonymous public keys.
   - All environment variables are validated through `src/constants/env.ts`.

2. **Database Row Level Security (RLS):**
   - Every Supabase table must have RLS enabled by default.
   - No direct database writes bypass RLS policies.

3. **Input Sanitization:**
   - Guest callsigns and room names must be strictly sanitized against script injection and profanity.

---

## 6. Performance Principles

1. **Mobile Battery & CPU Preservation:**
   - Continuous high-accuracy GPS consumes heavy power. Throttle Geolocation samples when stationary.
   - Audio streams must be closed or muted immediately when transmission ceases.

2. **Bundle Size Discipline:**
   - Import icons specifically from `lucide-react`.
   - Avoid bloated single-purpose libraries.

3. **Touch-First Accessibility:**
   - Minimum touch target for automotive and mobile usage is 44×44px (recommended 48px).
   - Use clear contrast ratios meeting WCAG AA standards.
