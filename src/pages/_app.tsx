import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AppProps } from "next/app";
import customTheme from "../theme";
import Footer, { SmallFooter } from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column" minH="100vh">
        <NavBar />
        <Flex flex="1">
          <Component {...pageProps} />
        </Flex>
        <Footer />
        {/* <SmallFooter /> */}
      </Flex>
    </ChakraProvider>
  );
}
