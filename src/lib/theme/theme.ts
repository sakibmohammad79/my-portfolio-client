import { createTheme } from "@mui/material/styles";

// MUI's internal color utilities (hover/alpha derivation) only support
// hex/rgb/hsl, so the theme palette uses hex equivalents of the OKLCH
// Midnight Lime tokens. OKLCH is used everywhere else (globals.css, inline sx).
const limeMain = "#a3e635"; // oklch(76.8% 0.233 130.85)
const limeLight = "#bef264"; // oklch(84% 0.2 130.85)
const limeDark = "#84cc16"; // oklch(65% 0.2 130.85)

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: limeMain,
      light: limeLight,
      dark: limeDark,
      contrastText: "#0b0d14",
    },
    background: {
      default: "#0b0d14",
      paper: "#141821",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
    divider: "#3a4250",
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "12px 24px",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
    body1: {
      color: "#cbd5e1",
    },
  },
});