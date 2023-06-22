import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Button as={Link} to="/student" data-testid="student-btn">
        All Student
      </Button>
      <Footer />
    </>
  );
};

export default Home;
