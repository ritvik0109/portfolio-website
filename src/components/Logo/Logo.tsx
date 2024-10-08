import { Box, HStack, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  const { colorMode } = useColorMode();

  return (
    <Link href="/" passHref>
      <HStack>
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 499"
          transform="scale(1.1, 1)"
          width={{ base: "60px", md: "75px" }}
          height={{ base: "60px", md: "75px" }}
        >
          <path
            d="M143 224v125.5l13-13 13-13v-161l31 31 31 31-25.7 25.7-25.8 25.8 37.3 37.2 37.2 37.3 9.5-9.5 9.5-9.5-27.9-27.9-27.9-27.9 25.4-25.4c14-14 25.4-25.8 25.4-26.1 0-.4-28.1-28.8-62.5-63.2L143 98.5V224zM306.5 149l-50 50 9 9c4.9 4.9 9.3 9 9.8 9 .4 0 13-12.1 28-27l27.2-26.9.3 80.4.2 80.5 12.8 12.5 12.7 12.4.3-62.4c.1-34.4.1-90.6 0-125l-.3-62.5-50 50z"
            fill={colorMode === "light" ? "#000" : "#DCE2FF"}
          />
        </Box>
        <Text>Ritvik Malhotra</Text>
      </HStack>
    </Link>
  );
}
