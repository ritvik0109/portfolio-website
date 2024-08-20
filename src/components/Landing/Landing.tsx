import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import ProjectsGrid from "../Projects/ProjectsGrid";
import content from "../../content/content.json";

export default function Landing() {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Hero />

      {/* <Box textAlign="center" mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">Brief introduction about yourself.</Text>
      </Box> */}

      <Box
        id="portfolio"
        textAlign="center"
        mt={{ base: 20, md: 32 }}
        mb={{ base: 20, md: 40 }}
      >
        <Heading as="h2" size="xl" mb={4}>
          {content.projectsSection.title}
        </Heading>
        <Text fontSize="lg">{content.projectsSection.subtitle}</Text>
        <ProjectsGrid />
      </Box>

      <Box id="contactme" textAlign="center" mb={10}>
        <Contact />
      </Box>
    </Flex>
  );
}
