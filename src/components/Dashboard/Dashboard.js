import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    navigate("/login");
  }

  return (
    <Flex direction="column" gap="12px" paddingBottom="20px">
      <Header />
      <Divider />
      <Menu />
    </Flex>
  );
};

export default Dashboard;
