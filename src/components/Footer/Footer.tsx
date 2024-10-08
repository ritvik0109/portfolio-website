"use client";

import {
  Box,
  Container,
  Link,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import content from "../../content/content.json";
import Logo from "../Logo/Logo";

export const SmallFooter = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width="100%"
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
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
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <Container
        as={Stack}
        maxW={"10xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
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
