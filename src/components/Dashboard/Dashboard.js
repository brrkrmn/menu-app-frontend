import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { CategoryTable } from '../../elements/menuElements';
import Header from '../Header/Header';
import menu from "./Dashboard.constants";
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
      <Box padding="20px">
        <Heading fontFamily="'Helvetica', sans-serif" color="#5F7161">
          Menu
        </Heading>
        <Flex direction="column" flexWrap="wrap" gap="16px" alignItems="center">
          {menu.categories.map((category, index) => (
            <CategoryTable key={index} category={category} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;
