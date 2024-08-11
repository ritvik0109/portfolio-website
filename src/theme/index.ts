import { extendTheme } from "@chakra-ui/react";

// TODO
const customTheme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    primary: {
      100: "#e0f7fa",
      200: "#b2ebf2",
      300: "#80deea",
      400: "#4dd0e1",
      500: "#26c6da",
      600: "#00acc1",
      700: "#0097a7",
      800: "#00838f",
      900: "#006064",
    },
  },
});

export default customTheme;
