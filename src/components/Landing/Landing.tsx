import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

export default function Landing() {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <Box textAlign="center" mb={10}>
        <Hero />
      </Box>

      <Box textAlign="center" mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">Brief introduction about yourself.</Text>
      </Box>

      <Box textAlign="center" mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        <Text fontSize="lg">Some of your key projects.</Text>
      </Box>

      <Box textAlign="center" mb={10}>
        <Contact />
      </Box>
    </Flex>
  );
}
