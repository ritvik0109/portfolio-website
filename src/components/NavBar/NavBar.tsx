"use client";

import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../Logo/Logo";
import content from "../../content/content.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type NavItem = {
  label: string;
  href?: string;
};

const NAV_ITEMS: NavItem[] = [
  // {
  //   label: "About Me",
  //   href: "#",
  // },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#contactme",
  },
];

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "#099cff");
  const iconSize = useBreakpointValue({
    base: "6vw",
    sm: "4vw",
    md: "3vw",
    lg: "2vw",
  });

  return (
    <Box width="100%">
      <Flex
        bg={useColorModeValue("white", "background")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
      >
        <Logo colorMode={colorMode} />

        <Flex flex={{ base: 1 }} justify="center">
          <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
              <Box
                key={navItem.label}
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  color: linkHoverColor,
                  transform: "scale(1.1)",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                {navItem.label}
              </Box>
            ))}
          </Stack>
        </Flex>

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
          {/* TODO: Uncomment toggle for Light mode once colour scheme ready  */}
          {/* <Box
            as={colorMode === "light" ? MoonIcon : SunIcon}
            boxSize={iconSize}
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
          /> */}
        </Box>
      </Flex>
    </Box>
  );
}
