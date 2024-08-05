import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import customTheme from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
