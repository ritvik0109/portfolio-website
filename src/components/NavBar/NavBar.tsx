"use client";

import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Link,
  Divider,
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
  const linkHoverColor = useColorModeValue("gray.800", "#099cff");

  return (
    <Box width="100%" px={{ base: 4, md: 8, lg: 12 }}>
      <Flex
        bg={useColorModeValue("white", "background")}
        color={useColorModeValue("gray.600", "#DCE2FF")}
        minH={"60px"}
        py={{ base: 2 }}
        borderBottom={1}
        align={"center"}
      >
        <Logo />

        <Flex
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
        >
          <Flex flex={{ base: 1 }} justify="center">
            <Stack direction={"row"} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <Box
                  key={navItem.label}
                  as="a"
                  p={3}
                  href={navItem.href ?? "#"}
                  fontWeight={500}
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

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="6"
          >
            <Link href={content.contact.github} isExternal aria-label="GitHub">
              <Box
                as={FaGithub}
                boxSize={{ base: "32px", lg: "36px" }}
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.4s ease-in-out",
                  color: linkHoverColor,
                }}
              />
            </Link>
            <Link
              href={content.contact.linkedin}
              isExternal
              aria-label="LinkedIn"
            >
              <Box
                as={FaLinkedin}
                boxSize={{ base: "32px", lg: "36px" }}
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.4s ease-in-out",
                  color: linkHoverColor,
                }}
              />
            </Link>
            <Link href={"mailto:" + content.contact.email} aria-label="Email">
              <Box
                as={MdEmail}
                boxSize={{ base: "32px", lg: "36px" }}
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.4s ease-in-out",
                  color: linkHoverColor,
                }}
              />
            </Link>
            {/* TODO: Uncomment toggle for Light mode once colour scheme ready  */}
            {/* <Divider
              orientation="vertical"
              h={"28px"}
              borderWidth={"1px"}
              color={useColorModeValue("black", "white")}
              colorScheme={useColorModeValue("black", "white")}
            />
            <Box
              as={colorMode === "light" ? MoonIcon : SunIcon}
              boxSize={{ base: "32px", lg: "36px" }}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
            /> */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
