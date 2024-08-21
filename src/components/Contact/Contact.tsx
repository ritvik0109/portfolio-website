"use client";

import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import content from "../../content/content.json";

export default function Contact() {
  const linkHoverColor = useColorModeValue("gray.800", "#099cff");

  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formbold.com/s/3Lbb1", {
        method: "POST",
        body: new URLSearchParams(data as any), // Convert data to URLSearchParams
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to send message.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred.",
        description: "Unable to send message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex>
      <Box
        bg="#353754"
        color="#DCE2FF"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Box p={4}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
          >
            <Box>
              <Heading pt={{ base: 4, md: 12 }}>
                {content.contact.title}
              </Heading>
              <Text mt={{ base: 3, md: 3, lg: 2 }}>
                {content.contact.description}
              </Text>
              <Box
                pt={{ base: 8, sm: 8, md: 10, lg: 12 }}
                pb={{ base: 7, sm: 7, md: 8 }}
              >
                <VStack pl={0} spacing={3} alignItems="center">
                  <Button
                    size="md"
                    height="48px"
                    width="320px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{
                      border: "2px solid #0D74FF",
                      transform: "scale(1.05)",
                    }}
                    leftIcon={<MdPhone color="#099cff" size="22px" />}
                  >
                    {content.contact.phone}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="320px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{
                      border: "2px solid #0D74FF",
                      transform: "scale(1.05)",
                    }}
                    leftIcon={<MdEmail color="#099cff" size="22px" />}
                  >
                    {content.contact.email}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="320px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{
                      border: "2px solid #0D74FF",
                      transform: "scale(1.05)",
                    }}
                    leftIcon={<MdLocationOn color="#099cff" size="22px" />}
                  >
                    {content.contact.city}, {content.contact.country}
                  </Button>
                </VStack>
              </Box>
              <HStack spacing={10} px={5} justifyContent="center">
                <Link
                  href={content.contact.github}
                  isExternal
                  aria-label="GitHub"
                >
                  <Box
                    as={FaGithub}
                    boxSize={{ base: "32px", lg: "36px" }}
                    color="#DCE2FF"
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
                    color="#DCE2FF"
                    transition="transform 0.2s"
                    _hover={{
                      transform: "scale(1.2)",
                      transition: "all 0.4s ease-in-out",
                      color: linkHoverColor,
                    }}
                  />
                </Link>
              </HStack>
            </Box>
            <Box bg="#34495E" borderRadius="lg">
              <Box m={8} color="#DCE2FF">
                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#DCE2FF">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" name="name" size="md" required />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#DCE2FF">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="email" name="email" size="md" required />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="message"
                        name="message"
                        required
                      />
                    </FormControl>
                    <FormControl id="submit" float="right">
                      <Button
                        type="submit"
                        variant="solid"
                        bg="#099cff"
                        color="#DCE2FF"
                        _hover={{
                          bg: "#0D74FF",
                          transform: "scale(1.05)",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </form>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
