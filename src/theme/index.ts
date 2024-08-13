import { extendTheme } from "@chakra-ui/react";

// TODO Light color scheme
const customTheme = extendTheme({
  initialColorMode: "dark", // Can remove later
  useSystemColorMode: false, // Can remove later
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    background: "#252746",
    primary: "#099cff",
    secondary: "#7C7FA0",
    tertiary: "#353754",
    highlight: "#0D74FF",
    text: "#DCE2FF",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
    },
  },
});

export default customTheme;
