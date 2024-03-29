import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0499DC",
    },
    secondary: {
      main: "#004665",
    },
    text: {
      primary: "#393939",
      secondary: "#97999B",
    },
  },
  border: {
    main: "#D7D7D7",
  },

  tertiary: "#ECECEC",
  typography: {
    fontFamily: [
      "Cabin",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
