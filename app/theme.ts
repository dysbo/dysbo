import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "var(--color-navy-950)",
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", system-ui, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
  },
});

export default theme;
