"use client";

import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  HStack,
  Wrap,
} from "@chakra-ui/react";

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  projectUrl?: string;
  //   FIXME
  image?: string;
  techStack: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  githubLink,
  projectUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "#353754")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={"/images/developer.png"} fill alt="Example" />
        </Box>
        <Stack flexGrow={1} justify="space-between">
          <Wrap justify="center" spacing="3">
            {techStack.map((item, index) => (
              <Text
                key={index}
                color={"#099cff"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {item}
              </Text>
            ))}
          </Wrap>
          <Heading fontSize={"2xl"} fontFamily={"body"} mt={1} mb={2}>
            {title}
          </Heading>
          <Text>{description}</Text>
          {/* Github and live links? Be lazy and just make the button go to the github? and the readme on github should contain the live links lolololololol*/}
        </Stack>
      </Box>
    </Center>
  );
}
