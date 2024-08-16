import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
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

export default theme;
