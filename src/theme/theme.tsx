// src/theme/websiteTheme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0EA5A4", // Aqua Green (water brand feel 💧)
      light: "#5EEAD4",
      dark: "#0F766E",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2563EB", // Deep Blue
      light: "#60A5FA",
      dark: "#1E40AF",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F8FAFC", // softer than grey
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },
    divider: "#E2E8F0",
    error: {
      main: "#EF4444",
    },
  },

  shape: {
    borderRadius: 14,
  },

  spacing: 8,

  typography: {
    fontFamily: `"Geist", "Inter", "Segoe UI", sans-serif`,

    h1: { fontSize: "2.8rem", fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontSize: "2.2rem", fontWeight: 600 },
    h3: { fontSize: "1.6rem", fontWeight: 600 },

    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", color: "#afafaf" },

    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 22px",
          fontWeight: 600,
          transition: "all 0.25s ease",
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          },

          "&:active": {
            transform: "scale(0.96)",
          },
        },

        contained: {
          "&.MuiButton-containedPrimary": {
            background: "linear-gradient(135deg, #0EA5A4, #0284C7)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          padding: "4px",
          background: "#ffffff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundImage: "none",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
          color: "#0F172A",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#F1F5F9",
          padding: "4px 10px",
          transition: "all 0.2s ease",

          "&:hover": {
            backgroundColor: "#E2E8F0",
          },

          "&.Mui-focused": {
            backgroundColor: "#ffffff",
            boxShadow: "0 0 0 2px rgba(14,165,164,0.2)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          padding: "10px",
          animation: "fadeScale 0.3s ease",

          "@keyframes fadeScale": {
            from: { opacity: 0, transform: "scale(0.95)" },
            to: { opacity: 1, transform: "scale(1)" },
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "0.75rem",
          borderRadius: 6,
          backgroundColor: "#0F172A",
        },
      },
    },
  },
});

export default theme;
