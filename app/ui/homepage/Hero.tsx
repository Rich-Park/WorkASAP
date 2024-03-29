"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Searchbar from "./Searchbar";

export default function Hero() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 28 }}
      py={{ base: 10, md: 14 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={500}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text as={"span"}>Work Anywhere</Text> <br />
          <Text as={"span"} color={"brand.500"}>
            ASAP
          </Text>
        </Heading>
        <Text color={"black"}>
          Looking for work? Discover your next opportunity with instant access
          to flexible gigs and part-time jobs that fit your schedule, skills,
          and needs.
        </Text>
        <Searchbar />
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Box
          position={"relative"}
          // height={"300px"
          width={"full"}
          overflow={"hidden"}
        >
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            src="images/homepage.svg"
          />
        </Box>
      </Flex>
    </Stack>
  );
}
