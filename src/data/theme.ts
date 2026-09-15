import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#FAF6EC",
    surface1: "#FFFFFF",
    surface2: "#F3ECDA",
    surface3: "#E8DEC4",
    surfaceInverse: "#1F2A23",
    textPrimary: "#1A1F1B",
    textMuted: "#4D5D52",
    textInverse: "#F4EFE4",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#2C7A4D",
    focusRing: "#7BB35E",
    line: "#E2DAC4",
    lineStrong: "#C9BFA3",
    accentPrimary: "#2C7A4D",
    accentSecondary: "#D9A441",
    accentBright: "#84C76A",
    statusConfirmed: "#2E8B57",
    statusCaution: "#C97B2D",
    statusUnknown: "#6F7B86",
  },
  typography: {
    headingFamily:
      "Nunito, 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    bodyFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "12px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(31,42,35,0.06), 0 6px 16px rgba(31,42,35,0.08)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.06, position: "center top" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "dots", intensity: "low" },
} satisfies ThemeConfig;
