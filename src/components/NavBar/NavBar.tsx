"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Box width="100%">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
        >
          Logo
        </Text>

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
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            ))}
          </Stack>
        </Flex>

        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}

type NavItem = {
  label: string;
  href?: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "About Me",
    href: "#",
  },
  {
    label: "Portfolio",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
