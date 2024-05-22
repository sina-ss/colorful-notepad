import { createTheme } from "@mui/material";
import "@fontsource/poppins";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    }
  },
  typography: {
    // Tell Material UI what the font-size on the html element is.
    htmlFontSize: 16,
    fontFamily: "Poppins"
  },
});
