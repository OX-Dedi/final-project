import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      backgroundColor="blue.500"
      color="white"
      padding="4"
    >
      <Box className="studentName">Dedi Rosadi</Box>
      <Box className="studentId">FE5701086</Box>
    </Box>
  );
};

export default Footer;
