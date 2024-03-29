"use client";

import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

export default function Searchbar() {
  return (
    <InputGroup>
      <InputLeftElement h={12} pl={2} pointerEvents="none" color="brand.500">
        <SearchIcon />
      </InputLeftElement>
      <Input
        variant="outline"
        placeholder="Enter Your City"
        _placeholder={{ fontSize: "md", color: "gray.600" }}
        size="lg"
        bg="white"
        rounded="full"
        focusBorderColor="brand.300"
        _focus={{ bg: "white" }}
      />
      <InputRightElement
        h={12}
        pr={2}
        fontSize={20}
        pointerEvents="none"
        color="brand.500"
      >
        <ArrowForwardIcon />
      </InputRightElement>
    </InputGroup>
  );
}
