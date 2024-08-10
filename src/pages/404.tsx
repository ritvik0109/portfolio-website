import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <Box textAlign="center" py={20}>
      <Heading as="h1" size="2xl" mb={4}>
        404 - Page Not Found
      </Heading>
      <Text fontSize="lg" mb={6}>
        Oops! The page you’re looking for doesn’t exist.
      </Text>
      <Link href="/" passHref>
        <Button colorScheme="teal">Go Back Home</Button>
      </Link>
    </Box>
  );
}
