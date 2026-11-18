# VAYRO — Design System Specification

> **Brand Direction:** Premium automotive technology. Minimal. Dark. Confident. Modern. Technology-driven.  
> **Tagline:** MOVE AS ONE.

---

## 1. Official Color Palette

The VAYRO visual hierarchy is crafted specifically for high-stress, glanceable automotive environments. High contrast and restrained saturation ensure instant readability without distracting drivers at night.

| Token | Hex Value | CSS Variable | Semantic Usage |
| :--- | :--- | :--- | :--- |
| **Main Background** | `#0B1219` | `--background` | Root canvas, primary dark viewport background. |
| **Secondary Background** | `#111C27` | `--background-secondary` | Elevated headers, navigation bars, bottom telemetry docks. |
| **Card Background** | `#1B2936` | `--card` | Surface cards, modals, member list tiles, popovers. |
| **Border** | `#293B4B` | `--border` | Subtle component framing, dividers, tactile edges. |
| **Primary Text** | `#E5EDF4` | `--foreground` | Headings, critical telemetry readings, active callsigns. |
| **Secondary Text** | `#91A2B2` | `--muted-foreground` | Subheadings, timestamps, secondary metrics, inactive labels. |
| **Primary Accent** | `#36C995` | `--primary` | Convoy pulse, primary actions, lead vehicle indicator, PTT active state. |
| **Warning** | `#F0B65B` | `--warning` | Convoy gap separation alert, moderate distance warnings. |
| **Danger** | `#EF6868` | `--destructive` | Critical separation, emergency beacon, disconnect indicator. |
| **Information** | `#70A9E8` | `--info` | System telemetry notifications, Bluetooth/GPS satellite locks. |

---

## 2. Typography

- **Primary Font Family:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
- **Monospace Family (Telemetry):** `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, monospace

### Type Scale

| Role | Size | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | 36px / 2.25rem | 1.15 | 800 (ExtraBold) | -0.025em |
| **Heading 1** | 30px / 1.875rem| 1.2 | 700 (Bold) | -0.02em |
| **Heading 2** | 24px / 1.5rem | 1.25 | 700 (Bold) | -0.015em |
| **Heading 3** | 18px / 1.125rem| 1.3 | 600 (SemiBold) | -0.01em |
| **Body (Default)**| 14px / 0.875rem| 1.5 | 400 (Regular) | Normal |
| **Body (Medium)** | 14px / 0.875rem| 1.5 | 500 (Medium) | Normal |
| **Telemetry / Data**| 13px / 0.8125rem| 1.4 | 600 (SemiBold) | 0.05em (Monospace) |
| **Caption / Badge**| 12px / 0.75rem | 1.4 | 500 (Medium) | 0.02em |

---

## 3. Radii & Geometry Tokens

To convey premium modern engineering, corners are smoothed using generous, tactile curves:

- **Radius Small (`--radius-sm`):** `12px` (0.75rem) — Badges, small inputs, micro-buttons.
- **Radius Default (`--radius`):** `14px` (0.875rem) — Standard action buttons, input fields.
- **Radius Medium (`--radius-md`):** `16px` (1.0rem) — Cards, surface containers, dialogs.
- **Radius Large (`--radius-lg`):** `20px` (1.25rem) — Bottom sheets, primary floating PTT trigger, map viewports.

---

## 4. Visual & Interaction Rules

1. **Dark Interface First:**
   - Dark mode is not an alternate theme; it is the default core experience. Night driving requires low luminescence to preserve driver night vision.
2. **Subtle Borders over Heavy Fills:**
   - Visual hierarchy is defined using delicate `#293B4B` borders and surface elevation rather than stark contrasting backgrounds.
3. **Restrained Shadows:**
   - Subtle dark drop shadows (`rgba(0, 0, 0, 0.4)`) provide depth without excessive glow.
4. **Targeted Accent Glow:**
   - The primary accent `#36C995` is used selectively to highlight the pulse of active convoy transmission and convoy lead status.
5. **Automotive Touch Targets:**
   - Touch targets must never fall below `44px` in height.
   - Core driving triggers (such as the Push-to-Talk button and emergency quick-actions) feature large `48px`–`64px` tap surfaces.
6. **Smooth, Restrained Motion:**
   - Micro-interactions use snappy `150ms`–`200ms` cubic-bezier easing (`ease-out`). Avoid long, distracting animations while vehicles are moving.
