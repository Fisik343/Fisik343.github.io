import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

// A custom theme for this app
const initialTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1450,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#c8a5ff",
    },
    secondary: {
      main: "#677ddf",
    },
    error: {
      main: red.A400,
    },
  },
});

const theme = createTheme(initialTheme, {
  typography: {
    body1: {
      fontSize: "1.125rem",
    },
    body2: {
      fontSize: "0.9375rem",
    },
    h5: {
      fontSize: "28px",
    },
  },
});

export default theme;
