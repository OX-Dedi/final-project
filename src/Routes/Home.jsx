import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Box, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      padding="4"
    >
      <Box>
        <Heading as="h1" size="xl" textAlign="center" marginBottom="8" color="blue.500">
          Welcome to the Home Page
        </Heading>
        <Button
          as={Link}
          to="/student"
          colorScheme="blue"
          size="lg"
          marginBottom="4"
        >
          View All Students
        </Button>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Home;
