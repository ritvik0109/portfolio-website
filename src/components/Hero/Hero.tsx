"use client";

import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import content from "../../content/content.json";

export default function Hero() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10, lg: 12, xl: 16 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "flex-start", md: "space-between" }}
    >
      <Stack flex={1} mr={{ base: 0, md: 4, lg: 8 }} mb={{ base: 8, md: 0 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
          pb={4}
        >
          <Text as={"span"}>Hi! I am</Text>
          <br />
          <Text
            as={"span"}
            position={"relative"}
            color={"primary"}
            whiteSpace="nowrap"
          >
            Ritvik Malhotra
          </Text>
        </Heading>
        <Text color={"secondary"} pb={{ base: 12, md: 16, lg: 20 }}>
          {content.aboutMe.description}
          {/* (make this moving?) */}
          {/* Software Engineer, DIY enthusiast, something hobbist */}
          {/* Driven by curiosity and a passion for continuous learning in tech. */}
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Button
            rounded={"full"}
            size="lg"
            fontWeight="normal"
            px={6}
            variant="outline"
            color="#099cff"
            borderColor="#099cff"
            _hover={{
              borderColor: "#3cf",
              color: "#3cf",
              transform: "scale(1.1)",
              transition: "all 0.4s ease-in-out",
            }}
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View my work
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
        ml={{ base: 0, md: 4, lg: 8 }}
        mt={{ base: 8, md: 0 }}
      >
        {/* <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          /> */}
        <Image
          alt={"Hero Image"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          src={"/images/developer.png"}
        />
      </Flex>
    </Stack>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
