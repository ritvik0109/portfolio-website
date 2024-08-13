"use client";

import {
  Box,
  Container,
  Link,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import content from "../../content/content.json";
import Logo from "../Logo/Logo";

export const SmallFooter = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo colorMode={colorMode} />
        {/* <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"#"}>
            Home
          </Box>
          <Box as="a" href={"#"}>
            About
          </Box>
          <Box as="a" href={"#"}>
            Blog
          </Box>
          <Box as="a" href={"#"}>
            Contact
          </Box>
        </Stack> */}
      </Container>
    </Box>
  );
};

export default function Footer() {
  const { colorMode } = useColorMode();
  const iconSize = useBreakpointValue({
    base: "6vw",
    sm: "4vw",
    md: "3vw",
    lg: "2vw",
  });

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo colorMode={colorMode} />
        <Box display="flex" justifyContent="center" alignItems="center" gap="6">
          <Link href={content.contact.github} isExternal aria-label="GitHub">
            <Box
              as={FaGithub}
              boxSize={iconSize}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Link>
          <Link
            href={content.contact.linkedin}
            isExternal
            aria-label="LinkedIn"
          >
            <Box
              as={FaLinkedin}
              boxSize={iconSize}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Link>
          <Link href={"mailto:" + content.contact.email} aria-label="Email">
            <Box
              as={MdEmail}
              boxSize={iconSize}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
