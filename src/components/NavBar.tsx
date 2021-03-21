import { Box, Flex, Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  if (fetching) {
    // Is loading
  } else if (!data?.me) {
    // Not logged in
  } else {
    // Logged in
  }

  return (
    <Flex bg="tomato" p={4}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
