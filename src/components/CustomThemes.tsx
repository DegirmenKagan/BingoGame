import { createTheme, responsiveFontSizes } from "@mui/material";

export const bingoTheme = createTheme({
  palette: {
    primary: {
      main: "#B31312",
    },
    secondary: {
      main: "#2B2A4C",
    },
  },
});

export let typographyTheme = createTheme();
typographyTheme = responsiveFontSizes(typographyTheme);
