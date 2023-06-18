import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import menu from "./Menu.constants";
import CategoryTable from "./components/CategoryTable";

const Menu = () => {
  return (
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
  );
};

export default Menu;
