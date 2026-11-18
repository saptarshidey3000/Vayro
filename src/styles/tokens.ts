/**
 * VAYRO Design System Tokens
 * 
 * Official Brand Direction:
 * Premium automotive technology. Minimal. Dark. Confident. Modern. Technology-driven.
 */

export const tokens = {
  colors: {
    background: {
      main: "#0B1219",
      secondary: "#111C27",
      card: "#1B2936",
    },
    border: "#293B4B",
    text: {
      primary: "#E5EDF4",
      secondary: "#91A2B2",
    },
    accent: {
      primary: "#36C995", // Vayro Green / Convoy Pulse
    },
    status: {
      warning: "#F0B65B",
      danger: "#EF6868",
      info: "#70A9E8",
    },
  },
  radius: {
    sm: "12px",
    default: "14px",
    md: "16px",
    lg: "20px",
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  shadows: {
    subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",
    card: "0 4px 12px 0 rgba(0, 0, 0, 0.5)",
    glow: "0 0 16px rgba(54, 201, 149, 0.15)",
  },
} as const;

export type DesignTokens = typeof tokens;
