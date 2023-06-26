import React from "react";
import { Link as ChakraLink, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="4"
      backgroundColor="blue.500"
      color="white"
    >
      <Box fontSize="2xl" fontWeight="bold">
        <ChakraLink as={Link} to="/" data-testid="home-page">
          Student Portal
        </ChakraLink>
      </Box>
      <Box>
        <ChakraLink
          as={Link}
          to="/student"
          data-testid="student-page"
          marginRight="4"
        >
          All Students
        </ChakraLink>
        <ChakraLink as={Link} to="/add" data-testid="add-page">
          Add Student
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
