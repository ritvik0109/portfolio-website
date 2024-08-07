import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import customTheme from "../theme";
import Footer, { SmallFooter } from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      {/* <SmallFooter /> */}
    </ChakraProvider>
  );
}
