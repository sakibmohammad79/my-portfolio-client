export const colors = {
  background: "oklch(10% 0.015 260)",
  backgroundSecondary: "oklch(13% 0.018 260)",
  card: "oklch(17% 0.022 260)",
  cardHover: "oklch(20% 0.025 260)",
  primary: "oklch(76.8% 0.233 130.85)",
  primaryLight: "oklch(84% 0.20 130.85)",
  primaryDark: "oklch(65% 0.20 130.85)",
  textPrimary: "oklch(97% 0.01 260)",
  textSecondary: "oklch(78% 0.015 260)",
  textMuted: "oklch(62% 0.018 260)",
  border: "oklch(28% 0.025 260)",
  borderHover: "oklch(76.8% 0.233 130.85 / 0.45)",
  primarySoft: "oklch(76.8% 0.233 130.85 / 0.1)",
  primarySofter: "oklch(76.8% 0.233 130.85 / 0.06)",
  primaryGlow: "oklch(76.8% 0.233 130.85 / 0.25)",
} as const;

export const radii = {
  sm: "8px",
  md: "12px",
  lg: "18px",
  xl: "24px",
} as const;

export const sectionScrollMargin = "100px";

export const sectionBg = `radial-gradient(circle at 85% 15%, ${colors.primarySofter} 0%, transparent 45%), radial-gradient(circle at 15% 85%, oklch(28% 0.05 290 / 0.18) 0%, transparent 50%)`;