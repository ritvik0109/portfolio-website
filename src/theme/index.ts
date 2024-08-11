import { extendTheme } from "@chakra-ui/react";

// TODO
const customTheme = extendTheme({
  initialColorMode: "dark", // Can remove later
  useSystemColorMode: false, // Can remove later
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    background: "#F8F8F8",
    primary: "#008080",
    secondary: "#FF6F61",
    highlight: "#C3E6CB",
    text: "#333333",
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
