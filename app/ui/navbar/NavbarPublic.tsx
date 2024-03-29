"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
      >
        {/* On mobile, show hamburger menu */}
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* On Mobile and Desktop, show Logo */}
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          fontWeight={600}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            cursor="pointer"
            fontSize="xl"
          >
            Work
            <Text as="span" color="brand.500">
              ASAP
            </Text>
          </Text>

          {/* On Desktop, show navigation links */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            // display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            rounded="full"
            bg={"brand.500"}
            href={"#"}
            _hover={{
              bg: "brand.400",
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>

      {/*  */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Text
            as="a"
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={600}
          >
            {navItem.label}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Find Work",
    href: "/home",
  },
  {
    label: "Post a Job",
    href: "#",
  },
];
